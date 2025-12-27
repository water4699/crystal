"use client";

import { useEffect, useState } from "react";

export const TrustIndicators = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full py-6 animate-fade-in-up delay-300">
      <div className="flex flex-wrap items-center justify-center gap-6">
        {/* Security badge */}
        <div className="glass px-6 py-3 rounded-full flex items-center gap-3 hover:bg-white/20 transition-colors cursor-default">
          <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <div className="text-white font-semibold text-sm">Audited</div>
            <div className="text-white/50 text-xs">Smart Contract Verified</div>
          </div>
        </div>

        {/* Encryption badge */}
        <div className="glass px-6 py-3 rounded-full flex items-center gap-3 hover:bg-white/20 transition-colors cursor-default">
          <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
            <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <div className="text-white font-semibold text-sm">FHE Protected</div>
            <div className="text-white/50 text-xs">Zama Technology</div>
          </div>
        </div>

        {/* Decentralized badge */}
        <div className="glass px-6 py-3 rounded-full flex items-center gap-3 hover:bg-white/20 transition-colors cursor-default">
          <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
            <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
            </svg>
          </div>
          <div>
            <div className="text-white font-semibold text-sm">Decentralized</div>
            <div className="text-white/50 text-xs">No Central Authority</div>
          </div>
        </div>

        {/* Open source badge */}
        <div className="glass px-6 py-3 rounded-full flex items-center gap-3 hover:bg-white/20 transition-colors cursor-default">
          <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center">
            <svg className="w-5 h-5 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <div className="text-white font-semibold text-sm">Open Source</div>
            <div className="text-white/50 text-xs">Transparent Code</div>
          </div>
        </div>
      </div>
    </div>
  );
};
