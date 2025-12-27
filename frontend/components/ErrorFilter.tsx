"use client";

import { useEffect } from 'react';

/**
 * ErrorFilter component to suppress known non-critical errors
 * that occur due to COEP policy blocking third-party analytics.
 * These errors don't affect functionality but clutter the console.
 */
export function ErrorFilter() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Store original console methods
    const originalError = console.error;
    const originalWarn = console.warn;

    // Filter function to check if error should be suppressed
    const shouldSuppress = (args: any[]): boolean => {
      const message = args.join(' ');
      
      // Suppress Coinbase analytics errors
      if (
        message.includes('cca-lite.coinbase.com') ||
        message.includes('Analytics SDK') ||
        message.includes('ERR_BLOCKED_BY_RESPONSE.NotSameOriginAfterDefaultedToSameOriginByCoep') ||
        (message.includes('Failed to fetch') && message.includes('coinbase')) ||
        message.includes('AnalyticsSDKApiError')
      ) {
        return true;
      }

      // Suppress specific fetch errors from analytics
      if (
        typeof args[0] === 'string' &&
        args[0].includes('Failed to fetch') &&
        args.length > 1 &&
        typeof args[1] === 'object' &&
        (args[1]?.context === 'AnalyticsSDKApiError' || 
         args[1]?.message?.includes('coinbase') ||
         args[1]?.message?.includes('Analytics'))
      ) {
        return true;
      }

      // Check if error object contains analytics-related info
      if (args.length > 0 && typeof args[0] === 'object' && args[0] !== null) {
        const errorObj = args[0] as any;
        if (
          errorObj.message?.includes('coinbase') ||
          errorObj.message?.includes('Analytics') ||
          errorObj.stack?.includes('cca-lite.coinbase.com')
        ) {
          return true;
        }
      }

      return false;
    };

    // Override console.error
    console.error = (...args: any[]) => {
      if (!shouldSuppress(args)) {
        originalError.apply(console, args);
      }
    };

    // Override console.warn for network errors
    console.warn = (...args: any[]) => {
      if (!shouldSuppress(args)) {
        originalWarn.apply(console, args);
      }
    };

    // Suppress unhandled promise rejections from analytics
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason;
      const reasonStr = typeof reason === 'string' 
        ? reason 
        : (reason?.message || String(reason));
      
      if (
        reasonStr.includes('coinbase') ||
        reasonStr.includes('Analytics') ||
        reasonStr.includes('cca-lite.coinbase.com') ||
        reasonStr.includes('ERR_BLOCKED_BY_RESPONSE')
      ) {
        event.preventDefault();
        // Suppress the error
        return;
      }
    };

    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    // Cleanup on unmount
    return () => {
      console.error = originalError;
      console.warn = originalWarn;
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  return null;
}

