'use client';

import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

// SDK CDN URL
const SDK_CDN_URL = 'https://cdn.zama.ai/relayer-sdk-js/0.2.0/relayer-sdk-js.umd.cjs';

// Local network chain ID
const LOCAL_CHAIN_ID = 31337;
const LOCAL_RPC_URL = 'http://localhost:8545';

// Type definitions for window.relayerSDK
declare global {
  interface Window {
    relayerSDK?: {
      initSDK: (options?: any) => Promise<boolean>;
      createInstance: (config: any) => Promise<any>;
      SepoliaConfig: any;
      __initialized__?: boolean;
    };
  }
}

function isSDKLoaded(): boolean {
  if (typeof window === 'undefined') return false;
  return typeof window.relayerSDK !== 'undefined' && 
         typeof window.relayerSDK?.initSDK === 'function' &&
         typeof window.relayerSDK?.createInstance === 'function' &&
         window.relayerSDK?.SepoliaConfig !== undefined;
}

function loadSDKFromCDN(): Promise<void> {
  return new Promise((resolve, reject) => {
    // Check if already loaded
    if (isSDKLoaded()) {
      resolve();
      return;
    }

    // Check if script already exists
    const existingScript = document.querySelector(`script[src="${SDK_CDN_URL}"]`);
    if (existingScript) {
      // Wait a bit for script to load
      const checkInterval = setInterval(() => {
        if (isSDKLoaded()) {
          clearInterval(checkInterval);
          resolve();
        }
      }, 100);

      // Timeout after 10 seconds
      setTimeout(() => {
        clearInterval(checkInterval);
        if (!isSDKLoaded()) {
          reject(new Error('SDK script loaded but window.relayerSDK is not available'));
        }
      }, 10000);
      return;
    }

    // Create and load script
    const script = document.createElement('script');
    script.src = SDK_CDN_URL;
    script.type = 'text/javascript';
    script.async = true;

    script.onload = () => {
      if (!isSDKLoaded()) {
        reject(new Error(`SDK script loaded from ${SDK_CDN_URL}, but window.relayerSDK is invalid`));
        return;
      }
      resolve();
    };

    script.onerror = () => {
      reject(new Error(`Failed to load SDK from ${SDK_CDN_URL}`));
    };

    document.head.appendChild(script);
  });
}

// Fetch relayer metadata from Hardhat node using RPC call
async function fetchHardhatNodeRelayerMetadata(rpcUrl: string): Promise<{
  ACLAddress: `0x${string}`;
  InputVerifierAddress: `0x${string}`;
  KMSVerifierAddress: `0x${string}`;
} | null> {
  try {
    const provider = new ethers.JsonRpcProvider(rpcUrl);
    // Use fhevm_relayer_metadata RPC method
    const metadata = await provider.send('fhevm_relayer_metadata', []);
    
    if (metadata && 
        typeof metadata.ACLAddress === 'string' && metadata.ACLAddress.startsWith('0x') &&
        typeof metadata.InputVerifierAddress === 'string' && metadata.InputVerifierAddress.startsWith('0x') &&
        typeof metadata.KMSVerifierAddress === 'string' && metadata.KMSVerifierAddress.startsWith('0x')) {
      return {
        ACLAddress: metadata.ACLAddress as `0x${string}`,
        InputVerifierAddress: metadata.InputVerifierAddress as `0x${string}`,
        KMSVerifierAddress: metadata.KMSVerifierAddress as `0x${string}`,
      };
    }
  } catch (err) {
    console.warn('[useZamaInstance] Failed to fetch Hardhat node metadata:', err);
  }
  return null;
}

// Create mock instance for local network
async function createMockInstance(chainId: number, rpcUrl: string): Promise<any> {
  console.log('[useZamaInstance] Creating mock instance for local network...');
  
  // Fetch metadata from Hardhat node
  const metadata = await fetchHardhatNodeRelayerMetadata(rpcUrl);
  if (!metadata) {
    throw new Error('Failed to fetch relayer metadata from Hardhat node. Make sure Hardhat node is running with FHEVM plugin.');
  }

  // Dynamically import mock utils to avoid including in production bundle
  const { MockFhevmInstance } = await import('@fhevm/mock-utils');
  const provider = new ethers.JsonRpcProvider(rpcUrl);
  
  const instance = await MockFhevmInstance.create(provider, provider, {
    aclContractAddress: metadata.ACLAddress,
    chainId: chainId,
    gatewayChainId: 55815,
    inputVerifierContractAddress: metadata.InputVerifierAddress,
    kmsContractAddress: metadata.KMSVerifierAddress,
    verifyingContractAddressDecryption: '0x5ffdaAB0373E62E2ea2944776209aEf29E631A64',
    verifyingContractAddressInputVerification: '0x812b06e1CDCE800494b79fFE4f925A504a9A9810',
  });

  console.log('[useZamaInstance] Mock instance created');
  return instance;
}

export function useZamaInstance(chainId?: number, provider?: ethers.Eip1193Provider | string) {
  const [instance, setInstance] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') {
      return;
    }

    let mounted = true;

    const initZama = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Check if this is local network - use mock mode
        // Only use localhost in development (not in production/Vercel)
        const isProduction = typeof window !== 'undefined' && 
          (window.location.hostname.includes('vercel.app') || 
           window.location.hostname.includes('vercel.com') ||
           process.env.NODE_ENV === 'production');
        
        if (chainId === LOCAL_CHAIN_ID) {
          if (isProduction) {
            console.warn('[useZamaInstance] Hardhat Local detected in production. Please switch to Sepolia testnet.');
            if (mounted) {
              setError('Hardhat Local network is not available in production. Please switch to Sepolia testnet in your wallet.');
            }
            return;
          }
          console.log('[useZamaInstance] Using mock mode for local network');
          const mockInstance = await createMockInstance(LOCAL_CHAIN_ID, LOCAL_RPC_URL);
          if (mounted) {
            setInstance(mockInstance);
          }
          return;
        }

        // For other networks (like Sepolia), use real relayer
        if (!chainId || chainId !== 11155111) {
          console.warn('[useZamaInstance] Unsupported network:', chainId);
          if (mounted) {
            setError(`Unsupported network: ${chainId}. Only Hardhat Local (31337) and Sepolia (11155111) are supported.`);
          }
          return;
        }

        console.log('[useZamaInstance] Loading SDK from CDN for Sepolia network');
        await loadSDKFromCDN();
        console.log('[useZamaInstance] SDK loaded from CDN');

        if (!window.relayerSDK) {
          throw new Error('window.relayerSDK is not available after loading');
        }

        // Initialize SDK
        console.log('[useZamaInstance] Initializing SDK...');
        if (!window.relayerSDK.__initialized__) {
          const initResult = await window.relayerSDK.initSDK();
          window.relayerSDK.__initialized__ = initResult;
          if (!initResult) {
            throw new Error('SDK initialization failed');
          }
        }
        console.log('[useZamaInstance] SDK initialized');

        // Get provider - validate it's a valid EIP-1193 provider
        const networkProvider = provider || (typeof window !== 'undefined' && (window as any).ethereum) || undefined;
        if (!networkProvider) {
          throw new Error('No provider available. Please connect your wallet.');
        }

        // Validate provider has required EIP-1193 methods
        if (typeof networkProvider.request !== 'function') {
          throw new Error('Invalid EIP-1193 provider: missing request method');
        }

        // Get ACL address from SepoliaConfig
        const aclAddress = window.relayerSDK.SepoliaConfig?.aclContractAddress;
        if (!aclAddress) {
          throw new Error('ACL address not found in SepoliaConfig');
        }

        // Create config with network provider
        // The SDK expects the provider to be a valid EIP-1193 provider
        const config = {
          ...window.relayerSDK.SepoliaConfig,
          network: networkProvider,
        };

        console.log('[useZamaInstance] Creating instance with config:', {
          aclContractAddress: config.aclContractAddress,
          chainId: config.chainId,
          hasNetwork: !!config.network,
          providerType: typeof networkProvider,
          hasRequest: typeof networkProvider.request === 'function',
        });

        // Create instance with retry logic for relayer connection issues
        let zamaInstance;
        const maxRetries = 3;
        let lastError: any = null;
        
        for (let attempt = 1; attempt <= maxRetries; attempt++) {
          try {
            console.log(`[useZamaInstance] Attempting to create instance (attempt ${attempt}/${maxRetries})...`);
            zamaInstance = await window.relayerSDK.createInstance(config);
            console.log('[useZamaInstance] Instance created successfully');
            break;
          } catch (err: any) {
            lastError = err;
            const isRelayerError = err?.message?.includes('Relayer') || 
                                  err?.message?.includes('Bad JSON') ||
                                  err?.message?.includes('connection');
            
            if (isRelayerError && attempt < maxRetries) {
              const delay = attempt * 2000; // Exponential backoff: 2s, 4s, 6s
              console.warn(`[useZamaInstance] Relayer connection failed, retrying in ${delay}ms... (attempt ${attempt}/${maxRetries})`);
              await new Promise(resolve => setTimeout(resolve, delay));
              continue;
            }
            throw err;
          }
        }
        
        if (!zamaInstance) {
          throw lastError || new Error('Failed to create Zama instance after retries');
        }

        if (mounted) {
          setInstance(zamaInstance);
        }
      } catch (err: any) {
        console.error('[useZamaInstance] Failed to initialize Zama instance:', err);
        console.error('[useZamaInstance] Error details:', {
          message: err?.message,
          stack: err?.stack,
          name: err?.name
        });
        
        // Provide user-friendly error messages
        let errorMessage = err?.message || 'Failed to initialize encryption service';
        if (err?.message?.includes('Relayer') || err?.message?.includes('Bad JSON')) {
          errorMessage = 'Unable to connect to Zama relayer service. This may be a temporary network issue. Please try again in a few moments or switch to local network for testing.';
        } else if (err?.message?.includes('connection') || err?.message?.includes('ERR_CONNECTION')) {
          errorMessage = 'Network connection error. Please check your internet connection and try again.';
        }
        
        if (mounted) {
          setError(errorMessage);
        }
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    // Small delay to ensure window is ready
    const timer = setTimeout(() => {
      initZama();
    }, 100);

    return () => {
      mounted = false;
      clearTimeout(timer);
    };
  }, [chainId, provider]);

  return { instance, isLoading, error };
}

