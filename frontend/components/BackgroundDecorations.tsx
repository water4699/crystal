"use client";

import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export const BackgroundDecorations = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const newParticles: Particle[] = [];
    for (let i = 0; i < 20; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 6 + 2,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }
    setParticles(newParticles);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-5]">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 shape-blob animate-float" />
      <div className="absolute top-40 right-20 w-24 h-24 bg-purple-300/10 shape-blob-2 animate-float-reverse delay-200" />
      <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-pink-300/10 shape-blob animate-float delay-400" />
      <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-indigo-300/10 rounded-full animate-float-reverse delay-300" />
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-white/5 shape-blob-2 animate-float delay-500" />
      
      {/* Rotating rings */}
      <div className="absolute top-1/4 left-1/3 w-64 h-64 border border-white/10 rounded-full animate-rotate" />
      <div className="absolute bottom-1/4 right-1/3 w-48 h-48 border border-purple-300/10 rounded-full animate-rotate" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />
      
      {/* Gradient orbs */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-gradient-to-tr from-pink-500/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-10 w-64 h-64 bg-gradient-to-r from-indigo-500/15 to-transparent rounded-full blur-2xl" />
      
      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-white animate-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
      
      {/* Sparkle effects */}
      <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-white rounded-full animate-sparkle" />
      <div className="absolute top-2/3 left-1/4 w-2 h-2 bg-white rounded-full animate-sparkle delay-300" />
      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-white rounded-full animate-sparkle delay-600" />
      <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-white rounded-full animate-sparkle delay-200" />
      <div className="absolute top-3/4 left-2/3 w-2 h-2 bg-white rounded-full animate-sparkle delay-500" />
    </div>
  );
};
