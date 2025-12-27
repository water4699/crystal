import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Exclude SDK from server components bundling
  serverExternalPackages: ['@zama-fhe/relayer-sdk'],
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

