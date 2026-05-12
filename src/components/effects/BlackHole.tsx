"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const BLACK_HOLE_VERTEX = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const BLACK_HOLE_FRAGMENT = `
  uniform float uTime;
  uniform float uScroll;
  varying vec2 vUv;

  float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f*f*(3.0-2.0*f);
    return mix(mix(hash(i + vec2(0.0,0.0)), hash(i + vec2(1.0,0.0)), u.x),
               mix(hash(i + vec2(0.0,1.0)), hash(i + vec2(1.0,1.0)), u.x), u.y);
  }
  
  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
    for (int i = 0; i < 6; i++) {
      v += a * noise(p);
      p = rot * p * 2.0;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = vUv * 2.0 - 1.0;
    float r = length(uv);

    // Absolute Event Horizon
    float coreRadius = 0.18;
    float core = smoothstep(coreRadius + 0.02, coreRadius, r);

    // Extreme Gravitational Lensing
    float warpFactor = 0.12 / (r + 0.01);
    vec2 warpedUv = uv + normalize(uv) * warpFactor;
    float warpedR = length(warpedUv);
    float warpedAngle = atan(warpedUv.y, warpedUv.x);

    float swirlSpeed = uTime * 0.08;
    float swirl = warpedAngle - warpedR * 2.5 + swirlSpeed;

    // High-Definition Accretion Disk
    vec2 noiseCoords = vec2(cos(swirl), sin(swirl)) * 1.8 - vec2(uTime * 0.02);
    float n1 = fbm(noiseCoords * 2.5);
    float n2 = fbm(noiseCoords * 5.0 + uTime * 0.04);

    float diskMask = smoothstep(0.9, coreRadius, r);
    float innerGlowMask = smoothstep(coreRadius + 0.3, coreRadius, r);

    float intensity = (n1 * 0.5 + 0.5) * diskMask;
    float highlight = (n2 * 0.5 + 0.5) * innerGlowMask * 2.0;

    // Cinematic Deep Indigo & Violet Palette
    vec3 deepSpace = vec3(0.01, 0.01, 0.02);
    vec3 darkViolet = vec3(0.12, 0.04, 0.25);
    vec3 plasmaBlue = vec3(0.2, 0.5, 0.9);
    vec3 coreWhite = vec3(0.9, 0.95, 1.0);

    vec3 color = mix(deepSpace, darkViolet, intensity * 1.5);
    color = mix(color, plasmaBlue, highlight * 0.9);
    color += coreWhite * pow(innerGlowMask, 4.0) * (0.3 + 0.7 * sin(swirlSpeed * 3.0 + warpedR * 15.0));

    // Pitch black core override
    color = mix(color, vec3(0.0), core);

    float alpha = (intensity + highlight) * diskMask;
    alpha = max(alpha, core);
    alpha *= smoothstep(1.0, 0.5, r); // Smoother fade at edges

    // Glow amplifies as we scroll closer
    float scrollGlow = 1.0 + uScroll * 0.4;
    float pulse = 0.95 + 0.05 * sin(uTime * 0.5);

    gl_FragColor = vec4(color * scrollGlow * pulse, alpha);
  }
`;

const BlackHole: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050507, 0.015);

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000,
    );
    camera.position.set(0, 8, 20);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Black Hole Mesh
    const uniforms = {
      uTime: { value: 0 },
      uScroll: { value: 0 },
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: BLACK_HOLE_VERTEX,
      fragmentShader: BLACK_HOLE_FRAGMENT,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending,
    });

    const geometry = new THREE.PlaneGeometry(120, 120);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, 10, -40);
    scene.add(mesh);

    // Particle Field (Stars/Debris)
    const pGeo = new THREE.BufferGeometry();
    const pts = [];
    const vels = [];
    for (let i = 0; i < 400; i++) {
      pts.push(
        (Math.random() - 0.5) * 150,
        (Math.random() - 0.5) * 80 + 5,
        (Math.random() - 0.5) * 100 - 15,
      );
      vels.push(Math.random() * 0.015 + 0.005);
    }
    pGeo.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3));
    pGeo.setAttribute("aSpeed", new THREE.Float32BufferAttribute(vels, 1));

    const pMat = new THREE.PointsMaterial({
      color: 0xc7d2fe,
      size: 0.05,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const stars = new THREE.Points(pGeo, pMat);
    scene.add(stars);

    // Animation Loop
    const clock = new THREE.Clock();
    let rafId: number;

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      uniforms.uTime.value = elapsedTime;

      // Update Scroll (normalized 0-1 based on window scroll)
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      uniforms.uScroll.value = Math.min(1, scrollY / (windowHeight * 2));

      // Drift stars
      const positions = pGeo.attributes.position.array as Float32Array;
      const speeds = pGeo.attributes.aSpeed.array as Float32Array;
      for (let i = 0; i < 400; i++) {
        positions[i * 3 + 2] += speeds[i]; // move on Z
        if (positions[i * 3 + 2] > 20) {
          positions[i * 3 + 2] = -80;
        }
      }
      pGeo.attributes.position.needsUpdate = true;

      // Parallax camera movement based on mouse
      // (Could add mouse listener here or use a global one)

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(rafId);
      container.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      pGeo.dispose();
      pMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 -z-10 pointer-events-none"
    />
  );
};

export default BlackHole;
