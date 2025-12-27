"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <nav
      className={`sticky top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "py-4 glass shadow-lg"
          : "py-10 bg-transparent"
      }`}
    >
      <div className="max-w-screen-lg mx-auto px-3 md:px-0">
        <div className="flex items-center justify-between">
          {/* Logo and title */}
          <div className="flex items-center gap-4 animate-fade-in-left">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
              <Image
                src="/logo.svg"
                alt="Donation Log Logo"
                width={scrolled ? 80 : 120}
                height={scrolled ? 80 : 120}
                className="rounded-full relative transition-all duration-300 group-hover:scale-105"
                priority
              />
            </div>
            <div className="flex flex-col">
              <h1 className={`font-bold text-white transition-all duration-300 ${
                scrolled ? "text-xl" : "text-3xl"
              }`}>
                Encrypted Donation Log
              </h1>
              <p className={`text-white/70 transition-all duration-300 ${
                scrolled ? "text-xs opacity-0 h-0" : "text-sm opacity-100"
              }`}>
                Privacy-preserving anonymous donation tracking
              </p>
            </div>
          </div>

          {/* Decorative badges */}
          <div className="hidden md:flex items-center gap-3 animate-fade-in-right">
            <div className="glass px-4 py-2 rounded-full flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/80 text-sm">Secure</span>
            </div>
            <div className="glass px-4 py-2 rounded-full flex items-center gap-2">
              <svg className="w-4 h-4 text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span className="text-white/80 text-sm">Encrypted</span>
            </div>
            <div className="glass px-4 py-2 rounded-full flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-white/80 text-sm">Verified</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
