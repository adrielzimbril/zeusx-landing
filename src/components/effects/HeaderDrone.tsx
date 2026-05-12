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
    const ambientLight = new THREE.AmbientLight(0xffffff, 4.0);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x22d3ee, 15);
    pointLight.position.set(2, 2, 2);
    scene.add(pointLight);

    const rimLight = new THREE.PointLight(0xffffff, 12);
    rimLight.position.set(-2, 2, -2);
    scene.add(rimLight);

    const topLight = new THREE.DirectionalLight(0xffffff, 5);
    topLight.position.set(0, 10, 0);
    scene.add(topLight);

    // Drone Group
    const drone = new THREE.Group();
    scene.add(drone);

    const bodyMat = new THREE.MeshPhysicalMaterial({
      color: 0x52525b, // Zinc 500
      metalness: 0.9,
      roughness: 0.1,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      emissive: 0x22d3ee,
      emissiveIntensity: 0.2
    });

    const accentMat = new THREE.MeshStandardMaterial({ 
      color: 0x22d3ee,
      emissive: 0x22d3ee,
      emissiveIntensity: 4
    });

    // Central Body (Modern geometry)
    const bodyGeo = new THREE.OctahedronGeometry(0.6, 0);
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.scale.y = 0.4;
    drone.add(body);

    // Arms
    const armGeo = new THREE.BoxGeometry(1.8, 0.05, 0.05);
    const arm1 = new THREE.Mesh(armGeo, bodyMat);
    arm1.rotation.y = Math.PI / 4;
    drone.add(arm1);

    const arm2 = new THREE.Mesh(armGeo, bodyMat);
    arm2.rotation.y = -Math.PI / 4;
    drone.add(arm2);

    // Motors & Rotors
    const motorGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.2, 8);
    const rotorGeo = new THREE.BoxGeometry(0.8, 0.01, 0.06);
    
    const rotors: THREE.Group[] = [];
    const rotorPositions = [
      { x: 0.6, z: 0.6 },
      { x: -0.6, z: 0.6 },
      { x: 0.6, z: -0.6 },
      { x: -0.6, z: -0.6 },
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
    const ledGeo = new THREE.SphereGeometry(0.1, 8, 8);
    const led = new THREE.Mesh(ledGeo, accentMat);
    led.position.y = 0.12;
    drone.add(led);

    // Animation
    let rafId: number;
    const animate = () => {
      const time = Date.now() * 0.001;

      // Floating
      drone.position.y = Math.sin(time * 2) * 0.05;
      
      // Idle Sway
      drone.rotation.z = Math.sin(time * 1.5) * 0.05;
      drone.rotation.x = Math.cos(time * 1.2) * 0.05;

      // Mouse Reaction
      const targetRX = mouseRef.current.y * 1.0;
      const targetRY = mouseRef.current.x * 1.0;
      drone.rotation.x += (targetRX - drone.rotation.x) * 0.1;
      drone.rotation.y += (targetRY - drone.rotation.y) * 0.05;
      
      // Spin rotors
      rotors.forEach((rotor, i) => {
        rotor.rotation.y += 1.2 * (i % 2 === 0 ? 1 : -1);
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
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
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

  return <div ref={containerRef} className="w-24 h-24 pointer-events-none" />;

};

export default HeaderDrone;
