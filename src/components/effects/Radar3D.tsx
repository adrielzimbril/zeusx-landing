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
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // Grid Helper
    const grid = new THREE.GridHelper(20, 20, 0x22d3ee, 0x18181b);
    (grid.material as THREE.Material).transparent = true;
    (grid.material as THREE.Material).opacity = 0.2;
    group.add(grid);

    // Radar Rings
    const ringGeo = new THREE.RingGeometry(2, 2.1, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.3,
    });

    for (let i = 1; i <= 3; i++) {
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.scale.set(i * 1.5, i * 1.5, 1);
      ring.rotation.x = -Math.PI / 2;
      group.add(ring);
    }

    // Radar Sweep
    const sweepGeo = new THREE.PlaneGeometry(10, 10);
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
          float angle = atan(vUv.y - 0.5, vUv.x - 0.5);
          float sweep = mod(angle - uTime * 2.0, 6.283185) / 6.283185;
          sweep = pow(sweep, 4.0);
          float dist = distance(vUv, vec2(0.5));
          if (dist > 0.5) discard;
          gl_FragColor = vec4(uColor, sweep * 0.5);
        }
      `,
    });
    const sweep = new THREE.Mesh(sweepGeo, sweepMat);
    sweep.rotation.x = -Math.PI / 2;
    sweep.position.y = 0.1;
    group.add(sweep);

    // Targets (Random Points)
    const targetGeo = new THREE.SphereGeometry(0.15, 8, 8);
    const targetMat = new THREE.MeshBasicMaterial({ color: 0x22d3ee });
    const targets: THREE.Mesh[] = [];

    for (let i = 0; i < 8; i++) {
      const target = new THREE.Mesh(targetGeo, targetMat);
      const angle = Math.random() * Math.PI * 2;
      const radius = 3 + Math.random() * 6;
      target.position.set(
        Math.cos(angle) * radius,
        0,
        Math.sin(angle) * radius,
      );
      group.add(target);
      targets.push(target);
    }

    let rafId: number;
    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const time = Date.now() * 0.001;
      sweepMat.uniforms.uTime.value = time;

      targets.forEach((target, i) => {
        target.scale.setScalar(0.8 + Math.sin(time * 5 + i) * 0.2);
        const glow = Math.sin(time * 2 + i) * 0.5 + 0.5;
        (target.material as THREE.MeshBasicMaterial).opacity = 0.5 + glow * 0.5;
      });

      group.rotation.y += 0.001;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(rafId);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
};

export default Radar3D;
