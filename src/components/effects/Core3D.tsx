"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function Core3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for the whole core
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Central Energy Sphere
    const sphereGeo = new THREE.IcosahedronGeometry(1.5, 2);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      wireframe: true,
      transparent: true,
      opacity: 0.8,
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    coreGroup.add(sphere);

    // Rotating Rings
    const ringCount = 3;
    const rings: THREE.Mesh[] = [];
    for (let i = 0; i < ringCount; i++) {
      const ringGeo = new THREE.TorusGeometry(3 + i * 0.8, 0.02, 16, 100);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x22d3ee,
        transparent: true,
        opacity: 0.3 - i * 0.05,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.random() * Math.PI;
      ring.rotation.y = Math.random() * Math.PI;
      coreGroup.add(ring);
      rings.push(ring);
    }

    // Outer Wireframe Shell
    const shellGeo = new THREE.IcosahedronGeometry(4.5, 1);
    const shellMat = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      wireframe: true,
      transparent: true,
      opacity: 0.1,
    });
    const shell = new THREE.Mesh(shellGeo, shellMat);
    coreGroup.add(shell);

    // Particle field inside
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const posArr = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      posArr[i] = (Math.random() - 0.5) * 8;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(posArr, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x22d3ee,
      size: 0.05,
      transparent: true,
      opacity: 0.4,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    coreGroup.add(particles);

    // Animation
    let rafId: number;
    const animate = () => {
      const time = Date.now() * 0.001;

      sphere.rotation.y += 0.01;
      sphere.scale.setScalar(1 + Math.sin(time * 2) * 0.05);

      rings.forEach((ring, i) => {
        ring.rotation.x += 0.005 * (i + 1);
        ring.rotation.y += 0.003 * (i + 1);
      });

      shell.rotation.y -= 0.002;
      particles.rotation.y += 0.001;

      // Mouse interaction
      const targetRX = mouseRef.current.y * 0.5;
      const targetRY = mouseRef.current.x * 0.5;
      coreGroup.rotation.x += (targetRX - coreGroup.rotation.x) * 0.05;
      coreGroup.rotation.y += (targetRY - coreGroup.rotation.y) * 0.05;

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
        y: -((e.clientY - rect.top) / rect.height) * 2 + 1,
      };
    };

    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    container.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(rafId);
      renderer.dispose();
      sphereGeo.dispose();
      sphereMat.dispose();
      ringCount; rings.forEach(r => { (r.geometry as THREE.BufferGeometry).dispose(); (r.material as THREE.Material).dispose(); });
      shellGeo.dispose();
      shellMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full cursor-crosshair" />;
}
