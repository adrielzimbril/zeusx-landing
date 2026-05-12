"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function MissionFlow3D() {
  const containerRef = useRef<HTMLDivElement>(null);

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
    camera.position.set(0, 5, 15);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Nodes
    const nodeCount = 5;
    const nodes: THREE.Mesh[] = [];
    const nodeGeometry = new THREE.IcosahedronGeometry(0.4, 0);
    const nodeMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x22d3ee, 
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });

    for (let i = 0; i < nodeCount; i++) {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      node.position.x = (i - (nodeCount - 1) / 2) * 5;
      node.position.y = Math.sin(i * 0.5) * 1.5;
      scene.add(node);
      nodes.push(node);
    }

    // Connections (Lines)
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: 0x22d3ee, 
      transparent: true, 
      opacity: 0.15 
    });

    for (let i = 0; i < nodeCount - 1; i++) {
      const points = [nodes[i].position, nodes[i + 1].position];
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geometry, lineMaterial);
      scene.add(line);
    }

    // Data Packets (moving particles)
    const packetCount = 20;
    const packets: { mesh: THREE.Mesh; startNode: number; progress: number; speed: number }[] = [];
    const packetGeo = new THREE.SphereGeometry(0.08, 8, 8);
    const packetMat = new THREE.MeshBasicMaterial({ color: 0x22d3ee });

    for (let i = 0; i < packetCount; i++) {
      const mesh = new THREE.Mesh(packetGeo, packetMat);
      const startNode = Math.floor(Math.random() * (nodeCount - 1));
      packets.push({
        mesh,
        startNode,
        progress: Math.random(),
        speed: 0.002 + Math.random() * 0.005
      });
      scene.add(mesh);
    }

    // Animation
    let rafId: number;
    const animate = () => {
      const time = Date.now() * 0.001;

      // Rotate nodes
      nodes.forEach((node, i) => {
        node.rotation.y += 0.01;
        node.position.y = Math.sin(time + i) * 1.5;
      });

      // Move packets
      packets.forEach((p) => {
        p.progress += p.speed;
        if (p.progress >= 1) {
          p.progress = 0;
          p.startNode = Math.floor(Math.random() * (nodeCount - 1));
        }

        const start = nodes[p.startNode].position;
        const end = nodes[p.startNode + 1].position;
        p.mesh.position.lerpVectors(start, end, p.progress);
        
        // Add some jitter/noise
        p.mesh.position.y += Math.sin(time * 5 + p.progress * 10) * 0.1;
      });

      // Subtle scene rotation
      scene.rotation.y = Math.sin(time * 0.2) * 0.1;

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
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
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      lineMaterial.dispose();
      packetGeo.dispose();
      packetMat.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 opacity-40 pointer-events-none" />;
}
