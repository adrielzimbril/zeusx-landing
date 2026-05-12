"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface Drone3DProps {
  className?: string;
  color?: string;
  accentColor?: string;
}

const Drone3D: React.FC<Drone3DProps> = ({
  className = "w-full h-full",
  color = "#27272a",
  accentColor = "#22d3ee",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const frameId = useRef<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 3.5);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x000000, 3.0);
    scene.add(hemiLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 6.0);
    mainLight.position.set(5, 10, 5);
    scene.add(mainLight);

    const fillLight = new THREE.DirectionalLight(accentColor, 4.0);
    fillLight.position.set(-5, -5, 5);
    scene.add(fillLight);

    const backLight = new THREE.PointLight(0xffffff, 15);
    backLight.position.set(-5, 5, -5);
    scene.add(backLight);

    const rimLight = new THREE.PointLight(accentColor, 20);
    rimLight.position.set(0, 5, -5);
    scene.add(rimLight);

    const topLight = new THREE.PointLight(0xffffff, 10);
    topLight.position.set(0, 10, 0);
    scene.add(topLight);

    // Drone Group
    const drone = new THREE.Group();
    scene.add(drone);

    const bodyMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x52525b, // Zinc 500
      metalness: 0.95,
      roughness: 0.05,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      emissive: 0x18181b,
      emissiveIntensity: 0.2,
    });

    const accentMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(accentColor),
      emissive: new THREE.Color(accentColor),
      emissiveIntensity: 5.0,
    });

    // Central Chassis
    const chassisGeo = new THREE.OctahedronGeometry(1.2, 0);
    const chassis = new THREE.Mesh(chassisGeo, bodyMaterial);
    chassis.scale.y = 0.4;
    drone.add(chassis);

    // Upper Shell
    const shellGeo = new THREE.SphereGeometry(
      1,
      16,
      16,
      0,
      Math.PI * 2,
      0,
      Math.PI / 2,
    );
    const shell = new THREE.Mesh(shellGeo, bodyMaterial);
    shell.position.y = 0.2;
    drone.add(shell);

    // Arms (X configuration)
    const armGeo = new THREE.BoxGeometry(4.5, 0.1, 0.2);
    const arm1 = new THREE.Mesh(armGeo, bodyMaterial);
    arm1.rotation.y = Math.PI / 4;
    drone.add(arm1);

    const arm2 = new THREE.Mesh(armGeo, bodyMaterial);
    arm2.rotation.y = -Math.PI / 4;
    drone.add(arm2);

    // Motors & Rotors
    const motorGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.4, 16);
    const rotorGeo = new THREE.BoxGeometry(1.8, 0.02, 0.15);
    const rotors: THREE.Group[] = [];

    const positions = [
      { x: 1.6, z: 1.6 },
      { x: -1.6, z: 1.6 },
      { x: 1.6, z: -1.6 },
      { x: -1.6, z: -1.6 },
    ];

    positions.forEach((pos, i) => {
      const motor = new THREE.Mesh(motorGeo, bodyMaterial);
      motor.position.set(pos.x, 0.2, pos.z);
      drone.add(motor);

      const rotorGroup = new THREE.Group();
      rotorGroup.position.set(pos.x, 0.45, pos.z);

      const blade1 = new THREE.Mesh(rotorGeo, bodyMaterial);
      const blade2 = new THREE.Mesh(rotorGeo, bodyMaterial);
      blade2.rotation.y = Math.PI / 2;

      rotorGroup.add(blade1, blade2);
      drone.add(rotorGroup);
      rotors.push(rotorGroup);

      // Rotor Guard
      const guardGeo = new THREE.TorusGeometry(1.1, 0.02, 8, 32);
      const guard = new THREE.Mesh(guardGeo, bodyMaterial);
      guard.rotation.x = Math.PI / 2;
      guard.position.set(pos.x, 0.3, pos.z);
      drone.add(guard);
    });

    // Sensors / Camera
    const cameraBodyGeo = new THREE.SphereGeometry(0.3, 16, 16);
    const cameraBody = new THREE.Mesh(cameraBodyGeo, bodyMaterial);
    cameraBody.position.y = -0.4;
    cameraBody.position.z = 0.8;
    drone.add(cameraBody);

    const lensGeo = new THREE.CircleGeometry(0.15, 16);
    const lens = new THREE.Mesh(lensGeo, accentMaterial);
    lens.position.y = -0.4;
    lens.position.z = 1.09;
    drone.add(lens);

    // Laser Beam Effect
    const laserGeo = new THREE.CylinderGeometry(0.01, 0.2, 12, 16, 1, true);
    const laserMat = new THREE.MeshBasicMaterial({
      color: accentColor,
      transparent: true,
      opacity: 0.3,
      side: THREE.DoubleSide,
    });
    const laser = new THREE.Mesh(laserGeo, laserMat);
    laser.position.y = -6.4;
    laser.position.z = 0.8;
    laser.rotation.x = 0;
    laser.visible = true;
    drone.add(laser);

    // Landing Gear
    const gearGeo = new THREE.CylinderGeometry(0.05, 0.05, 0.8);
    const footGeo = new THREE.BoxGeometry(0.4, 0.05, 0.8);

    [
      [-0.6, -0.6],
      [0.6, -0.6],
    ].forEach((pos) => {
      const leg = new THREE.Mesh(gearGeo, bodyMaterial);
      leg.position.set(pos[0], -0.6, 0);
      leg.rotation.z = pos[0] > 0 ? -0.2 : 0.2;
      drone.add(leg);

      const foot = new THREE.Mesh(footGeo, bodyMaterial);
      foot.position.set(pos[0] * 1.2, -1, 0);
      drone.add(foot);
    });

    // Animation Loop
    const animate = () => {
      frameId.current = requestAnimationFrame(animate);

      // Idle float
      const time = Date.now() * 0.001;
      drone.position.y = Math.sin(time * 0.5) * 0.2;
      drone.rotation.y += 0.005;

      // Mouse Tilt
      const targetRX = mouseRef.current.y * 0.3;
      const targetRZ = -mouseRef.current.x * 0.3;
      drone.rotation.x += (targetRX - drone.rotation.x) * 0.05;
      drone.rotation.z += (targetRZ - drone.rotation.z) * 0.05;

      // Spin Rotors
      rotors.forEach((rotor, i) => {
        rotor.rotation.y += 0.4 * (i % 2 === 0 ? 1 : -1);
      });

      // Laser Flicker
      if (laser) {
        laser.visible = Math.random() > 0.05;
        laser.material.opacity = 0.2 + Math.random() * 0.2;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      mouseRef.current = { x, y };
    };

    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    container.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId.current);
      container.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      scene.clear();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [color, accentColor]);

  return (
    <div
      ref={containerRef}
      className={`${className} cursor-grab active:cursor-grabbing`}
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.1),transparent_70%)]" />
    </div>
  );
};

export default Drone3D;
