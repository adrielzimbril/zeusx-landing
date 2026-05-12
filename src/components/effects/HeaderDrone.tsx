"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const HeaderDrone: React.FC = () => {
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
      100,
    );
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x22d3ee, 2);
    pointLight.position.set(2, 2, 2);
    scene.add(pointLight);

    // Drone Group
    const drone = new THREE.Group();
    scene.add(drone);

    const bodyMat = new THREE.MeshPhongMaterial({
      color: 0x18181b,
      shininess: 100,
      flatShading: true
    });

    const accentMat = new THREE.MeshBasicMaterial({ 
      color: 0x22d3ee,
      transparent: true,
      opacity: 0.8
    });

    // Central Body (Modern geometry)
    const bodyGeo = new THREE.OctahedronGeometry(0.5, 0);
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.scale.y = 0.4;
    drone.add(body);

    // Arms
    const armGeo = new THREE.BoxGeometry(1.6, 0.04, 0.04);
    const arm1 = new THREE.Mesh(armGeo, bodyMat);
    arm1.rotation.y = Math.PI / 4;
    drone.add(arm1);

    const arm2 = new THREE.Mesh(armGeo, bodyMat);
    arm2.rotation.y = -Math.PI / 4;
    drone.add(arm2);

    // Motors & Rotors
    const motorGeo = new THREE.CylinderGeometry(0.1, 0.1, 0.15, 8);
    const rotorGeo = new THREE.BoxGeometry(0.7, 0.01, 0.05);
    
    const rotors: THREE.Group[] = [];
    const rotorPositions = [
      { x: 0.5, z: 0.5 },
      { x: -0.5, z: 0.5 },
      { x: 0.5, z: -0.5 },
      { x: -0.5, z: -0.5 },
    ];

    rotorPositions.forEach((pos) => {
      const motor = new THREE.Mesh(motorGeo, bodyMat);
      motor.position.set(pos.x, 0.05, pos.z);
      drone.add(motor);

      const rotorGroup = new THREE.Group();
      rotorGroup.position.set(pos.x, 0.15, pos.z);
      
      const blade1 = new THREE.Mesh(rotorGeo, bodyMat);
      const blade2 = new THREE.Mesh(rotorGeo, bodyMat);
      blade2.rotation.y = Math.PI / 2;
      
      rotorGroup.add(blade1, blade2);
      drone.add(rotorGroup);
      rotors.push(rotorGroup);
    });

    // Core LED
    const ledGeo = new THREE.SphereGeometry(0.08, 8, 8);
    const led = new THREE.Mesh(ledGeo, accentMat);
    led.position.y = 0.1;
    drone.add(led);

    // Animation
    let rafId: number;
    const animate = () => {
      const time = Date.now() * 0.001;

      // Floating
      drone.position.y = Math.sin(time * 2) * 0.05;
      
      // Idle Sway
      drone.rotation.z = Math.sin(time * 1.5) * 0.02;
      drone.rotation.x = Math.cos(time * 1.2) * 0.02;

      // Mouse Reaction
      const targetRX = mouseRef.current.y * 0.8;
      const targetRY = mouseRef.current.x * 0.8;
      drone.rotation.x += (targetRX - drone.rotation.x) * 0.1;
      drone.rotation.y += (targetRY - drone.rotation.y) * 0.05;
      
      // Spin rotors
      rotors.forEach((rotor, i) => {
        rotor.rotation.y += 0.8 * (i % 2 === 0 ? 1 : -1);
      });

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(rafId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      bodyGeo.dispose();
      bodyMat.dispose();
      armGeo.dispose();
      motorGeo.dispose();
      rotorGeo.dispose();
      ledGeo.dispose();
      accentMat.dispose();
    };
  }, []);

  return <div ref={containerRef} className="w-16 h-16 pointer-events-none" />;
};

export default HeaderDrone;
