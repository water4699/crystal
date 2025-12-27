"use client";

import { useEffect, useState, ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

export const PageTransition = ({ children, className = "" }: PageTransitionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
};

interface StaggeredItemProps {
  children: ReactNode;
  index: number;
  className?: string;
}

export const StaggeredItem = ({ children, index, className = "" }: StaggeredItemProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100 + index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`transition-all duration-500 ease-out ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"
      } ${className}`}
    >
      {children}
    </div>
  );
};

interface LoadingOverlayProps {
  isLoading: boolean;
}

export const LoadingOverlay = ({ isLoading }: LoadingOverlayProps) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-600/90 to-pink-500/90 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-6">
        {/* Animated logo/spinner */}
        <div className="relative">
          <div className="w-20 h-20 border-4 border-white/30 rounded-full animate-spin" style={{ borderTopColor: 'white' }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-white/20 rounded-full animate-pulse" />
          </div>
        </div>
        
        {/* Loading text with shimmer */}
        <div className="text-white text-xl font-semibold">
          <span className="inline-block animate-bounce-subtle">L</span>
          <span className="inline-block animate-bounce-subtle delay-100">o</span>
          <span className="inline-block animate-bounce-subtle delay-200">a</span>
          <span className="inline-block animate-bounce-subtle delay-300">d</span>
          <span className="inline-block animate-bounce-subtle delay-400">i</span>
          <span className="inline-block animate-bounce-subtle delay-500">n</span>
          <span className="inline-block animate-bounce-subtle delay-600">g</span>
          <span className="inline-block animate-bounce-subtle delay-700">.</span>
          <span className="inline-block animate-bounce-subtle delay-800">.</span>
          <span className="inline-block animate-bounce-subtle" style={{ animationDelay: '0.9s' }}>.</span>
        </div>
        
        {/* Progress bar */}
        <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full bg-white rounded-full animate-shimmer" style={{ width: '60%' }} />
        </div>
      </div>
    </div>
  );
};

interface CardTransitionProps {
  children: ReactNode;
  isActive: boolean;
  className?: string;
}

export const CardTransition = ({ children, isActive, className = "" }: CardTransitionProps) => {
  return (
    <div
      className={`transition-all duration-500 ease-out ${
        isActive 
          ? "opacity-100 scale-100 translate-y-0" 
          : "opacity-0 scale-95 translate-y-4 pointer-events-none"
      } ${className}`}
    >
      {children}
    </div>
  );
};
