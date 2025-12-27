"use client";

import { useEffect, useState } from "react";

export const Footer = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <footer className="mt-20 pb-10 animate-fade-in-up delay-500">
      <div className="max-w-screen-lg mx-auto px-3 md:px-0">
        {/* Decorative divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-100" />
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse delay-200" />
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </div>

        {/* Footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand section */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-bold text-lg mb-3">Encrypted Donation Log</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              A privacy-first donation tracking system powered by fully homomorphic encryption technology.
            </p>
          </div>

          {/* Features section */}
          <div className="text-center">
            <h4 className="text-white/80 font-semibold mb-3">Key Features</h4>
            <ul className="space-y-2 text-white/50 text-sm">
              <li className="flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                End-to-end Encryption
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 bg-pink-400 rounded-full" />
                Anonymous Donations
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                Blockchain Verified
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                Decentralized Storage
              </li>
            </ul>
          </div>

          {/* Tech stack section */}
          <div className="text-center md:text-right">
            <h4 className="text-white/80 font-semibold mb-3">Powered By</h4>
            <div className="flex flex-wrap justify-center md:justify-end gap-2">
              <span className="glass px-3 py-1 rounded-full text-white/70 text-xs">Zama FHE</span>
              <span className="glass px-3 py-1 rounded-full text-white/70 text-xs">Ethereum</span>
              <span className="glass px-3 py-1 rounded-full text-white/70 text-xs">Next.js</span>
              <span className="glass px-3 py-1 rounded-full text-white/70 text-xs">Hardhat</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
          <p className="text-white/40 text-sm">
            © 2024 Encrypted Donation Log. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-white/40 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Network Status: Online
            </div>
          </div>
        </div>

        {/* Decorative bottom element */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-1 bg-white/20 rounded-full animate-bounce-subtle"
                style={{
                  height: `${12 + Math.sin(i * 0.8) * 8}px`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
