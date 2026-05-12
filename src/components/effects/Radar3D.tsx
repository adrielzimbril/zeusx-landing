"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const Radar3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000,
    );
    camera.position.set(10, 10, 10);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth || 500, container.clientHeight || 500);
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // Grid Helper - Improved with stronger colors
    const grid = new THREE.GridHelper(25, 25, 0x22d3ee, 0x1e293b);
    (grid.material as THREE.Material).transparent = true;
    (grid.material as THREE.Material).opacity = 0.4;
    group.add(grid);

    // Radar Rings - More rings for detail
    const ringGeo = new THREE.RingGeometry(2, 2.05, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.5,
    });

    for (let i = 1; i <= 5; i++) {
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.scale.set(i * 1.2, i * 1.2, 1);
      ring.rotation.x = -Math.PI / 2;
      group.add(ring);
    }

    // Radar Sweep - Enhanced shader
    const sweepGeo = new THREE.PlaneGeometry(12, 12);
    const sweepMat = new THREE.ShaderMaterial({
      transparent: true,
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color(0x22d3ee) },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        uniform float uTime;
        uniform vec3 uColor;
        void main() {
          vec2 uv = vUv - 0.5;
          float angle = atan(uv.y, uv.x);
          float sweep = mod(angle - uTime * 2.5, 6.283185) / 6.283185;
          sweep = pow(sweep, 3.0);
          float dist = length(uv);
          if (dist > 0.5) discard;
          
          // Add pulse at the edge of the sweep
          float edge = smoothstep(0.48, 0.5, dist);
          gl_FragColor = vec4(uColor, sweep * 0.6 + edge * 0.2);
        }
      `,
    });
    const sweep = new THREE.Mesh(sweepGeo, sweepMat);
    sweep.rotation.x = -Math.PI / 2;
    sweep.position.y = 0.05;
    group.add(sweep);

    // Targets (Random Points) - Differentiated colors
    const targetGeo = new THREE.SphereGeometry(0.18, 12, 12);
    const targets: { mesh: THREE.Mesh; mat: THREE.MeshBasicMaterial }[] = [];

    for (let i = 0; i < 12; i++) {
      const isHostile = Math.random() > 0.7;
      const targetMat = new THREE.MeshBasicMaterial({ 
        color: isHostile ? 0xf87171 : 0x22d3ee,
        transparent: true,
        opacity: 0.8
      });
      const target = new THREE.Mesh(targetGeo, targetMat);
      const angle = Math.random() * Math.PI * 2;
      const radius = 2 + Math.random() * 8;
      target.position.set(
        Math.cos(angle) * radius,
        0,
        Math.sin(angle) * radius,
      );
      group.add(target);
      targets.push({ mesh: target, mat: targetMat });
    }

    let rafId: number;
    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const time = Date.now() * 0.001;
      sweepMat.uniforms.uTime.value = time;

      targets.forEach((t, i) => {
        t.mesh.scale.setScalar(0.8 + Math.sin(time * 6 + i) * 0.3);
        const glow = Math.sin(time * 3 + i) * 0.5 + 0.5;
        t.mat.opacity = 0.6 + glow * 0.4;
      });

      group.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(rafId);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      grid.geometry.dispose();
      (grid.material as THREE.Material).dispose();
      ringGeo.dispose();
      ringMat.dispose();
      sweepGeo.dispose();
      sweepMat.dispose();
      targetGeo.dispose();
      targets.forEach(t => t.mat.dispose());
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
};

export default Radar3D;
