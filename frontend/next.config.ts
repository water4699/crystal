import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Exclude SDK from server components bundling
  serverExternalPackages: ['@zama-fhe/relayer-sdk'],
  // Disable ESLint during builds to prevent blocking deployments
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
        stream: false,
        url: false,
        zlib: false,
        http: false,
        https: false,
        assert: false,
        os: false,
        path: false,
        // Fix: Module not found: Can't resolve '@react-native-async-storage/async-storage'
        // This is a React Native package, not needed in Web environment
        '@react-native-async-storage/async-storage': false,
      };
    }
    return config;
  },
  headers() {
    // Required by FHEVM - but need to be careful with Base Account SDK
    return Promise.resolve([
      {
        source: '/',
        headers: [
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp',
          },
          // Note: COOP header is set conditionally to avoid conflicts
          // Some wallets require it to be unset
        ],
      },
    ]);
  }
};

export default nextConfig;

