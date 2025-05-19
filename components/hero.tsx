'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

export default function Hero() {
  // Используем переводы
  const t = useTranslations('hero');
  const locale = useLocale();
  const pathname = usePathname();
  const pathnameWithoutLocale = pathname.replace(`/${locale}`, '');

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000,
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight,
    );
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(posArray, 3),
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: new THREE.Color(0x3b82f6),
      transparent: true,
      opacity: 0.8,
    });

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial,
    );
    scene.add(particlesMesh);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect =
        containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight,
      );
    };

    window.addEventListener('resize', handleResize);

    // Mouse movement effect
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;

      particlesMesh.rotation.x += y * 0.001;
      particlesMesh.rotation.y += x * 0.001;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.y += 0.001;
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, []);

  return (
    <section
      id='hero'
      className='relative min-h-screen flex items-center justify-center overflow-hidden'
    >
      <div ref={containerRef} className='absolute inset-0 -z-10'>
        <canvas ref={canvasRef} className='w-full h-full' />
      </div>

      <div className='container mx-auto px-4 z-10'>
        <div className='max-w-3xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className='text-4xl md:text-5xl font-bold mb-6'>
              <span className='text-blue-600 dark:text-blue-400'>
                {'<'}
                {t('title1')}
              </span>
              <span className='text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white'>
                {t('title2')} {'/>'}{' '}
              </span>
            </h1>
            <h1 className='text-3xl md:text-4xl font-bold mb-6'>
              <span className='text-blue-600 dark:text-blue-400 opacity-80'>
                {t('designer')}
              </span>{' '}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* <p className='text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8'>
              {t('subtitle')}
            </p> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='flex flex-col sm:flex-row gap-4 justify-center'
          >
            <Button
              size='lg'
              className='glassmorphism-button bg-blue-600/90 hover:bg-blue-600 text-white backdrop-blur-md'
            >
              {t('viewProjects')}
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='glassmorphism-button border-blue-400/30 text-blue-600 hover:bg-blue-400/20 dark:border-blue-400/30 dark:text-blue-400 dark:hover:bg-blue-400/20 backdrop-blur-md'
              onClick={() =>
                window.open('https://linktr.ee/pixelShino', '_blank')
              }
            >
              {t('contactMe')}
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: 'reverse',
          repeatDelay: 0.2,
        }}
      >
        <Button variant='ghost' size='icon' className='rounded-full'>
          <ArrowDown className='h-6 w-6 text-blue-600 dark:text-blue-400' />
        </Button>
      </motion.div>
    </section>
  );
}
