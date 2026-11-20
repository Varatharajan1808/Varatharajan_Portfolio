import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Background3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;

    // Scene & Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x080c14, 0.025);

    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 3, 22);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 1. 3D Perspective Ground Grid (CAD Horizon Plane)
    const gridHelper = new THREE.GridHelper(80, 50, 0x06b6d4, 0x1e293b);
    gridHelper.position.y = -6;
    scene.add(gridHelper);

    // 2. Interactive 3D Floating Particle Constellation
    const particleCount = 280;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const cyanColor = new THREE.Color(0x38bdf8);
    const purpleColor = new THREE.Color(0x818cf8);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 60;
      positions[i + 1] = (Math.random() - 0.5) * 45;
      positions[i + 2] = (Math.random() - 0.5) * 40;

      const mixed = Math.random() > 0.4 ? cyanColor : purpleColor;
      colors[i] = mixed.r;
      colors[i + 1] = mixed.g;
      colors[i + 2] = mixed.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.18,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 3. Floating 3D Geometric Wireframe Shapes in Space
    const floatingGroup = new THREE.Group();
    scene.add(floatingGroup);

    // Floating Wireframe Octahedron
    const octGeo = new THREE.OctahedronGeometry(2.5, 0);
    const octMat = new THREE.MeshBasicMaterial({
      color: 0x0ea5e9,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const octMesh = new THREE.Mesh(octGeo, octMat);
    octMesh.position.set(-18, 8, -12);
    floatingGroup.add(octMesh);

    // Floating Wireframe Tetrahedron
    const tetGeo = new THREE.TetrahedronGeometry(2.2, 0);
    const tetMat = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const tetMesh = new THREE.Mesh(tetGeo, tetMat);
    tetMesh.position.set(19, -3, -10);
    floatingGroup.add(tetMesh);

    // Mouse movement parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Window Resize
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onResize);

    // Scroll Position Tracking
    let scrollY = window.scrollY;
    const onScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // Render Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;

      // Particle subtle flow & parallax
      particles.rotation.y = elapsedTime * 0.02 + targetX * 0.2;
      particles.rotation.x = targetY * 0.15;
      particles.position.y = -scrollY * 0.006;

      // Grid perspective movement
      gridHelper.position.z = ((elapsedTime * 1.5) % 3) - 2;
      gridHelper.rotation.y = targetX * 0.05;

      // Floating geometric shapes rotation & bobbing
      octMesh.rotation.x = elapsedTime * 0.3;
      octMesh.rotation.y = elapsedTime * 0.2;
      octMesh.position.y = 8 + Math.sin(elapsedTime * 0.8) * 0.8;

      tetMesh.rotation.y = elapsedTime * 0.25;
      tetMesh.rotation.z = elapsedTime * 0.2;
      tetMesh.position.y = -3 + Math.cos(elapsedTime * 0.7) * 0.7;

      // Camera parallax
      camera.position.x = targetX * 2.2;
      camera.position.y = 3 - targetY * 1.8 - (scrollY * 0.003);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      gridHelper.dispose();
      octGeo.dispose();
      octMat.dispose();
      tetGeo.dispose();
      tetMat.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};
