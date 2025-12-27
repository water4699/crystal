"use client";

import { useChainId, useSwitchChain, useChains, useAccount } from 'wagmi';
import { useState, useEffect } from 'react';

export function NetworkSwitcher() {
  const { isConnected } = useAccount();
  const chainId = useChainId();
  const { switchChain, isPending } = useSwitchChain();
  const chains = useChains();
  const [isOpen, setIsOpen] = useState(false);

  const currentChain = chains.find((chain) => chain.id === chainId);

  const handleSwitchChain = async (targetChainId: number) => {
    if (!isConnected) {
      alert('Please connect your wallet first');
      return;
    }
    
    console.log('[NetworkSwitcher] Switching to chain:', targetChainId);
    
    const targetChain = chains.find((chain) => chain.id === targetChainId);
    if (!targetChain) {
      alert(`Chain ${targetChainId} not found in configuration`);
      return;
    }

    if (typeof window === 'undefined' || !(window as any).ethereum) {
      alert('Wallet not available');
      return;
    }

    try {
      // First, try to switch using wagmi
      await switchChain({ chainId: targetChainId });
      console.log('[NetworkSwitcher] Successfully switched to chain:', targetChainId);
      setIsOpen(false);
      // Don't reload immediately - let React state update naturally
      // Only reload if chain doesn't update after a delay
      setTimeout(() => {
        // Check if chain actually changed
        const currentChainId = (window as any).ethereum?.chainId 
          ? parseInt((window as any).ethereum.chainId, 16)
          : null;
        if (currentChainId !== targetChainId) {
          console.log('[NetworkSwitcher] Chain not updated, reloading page...');
          window.location.reload();
        }
      }, 2000);
    } catch (error: any) {
      console.error('[NetworkSwitcher] Failed to switch chain:', error);
      
      // If chain is not added to wallet (error code 4902), try to add it
      if (error?.code === 4902 || error?.code === -32603) {
        try {
          console.log('[NetworkSwitcher] Chain not found in wallet, adding:', targetChain.name);
          
          // Prepare network parameters with explicit native currency
          const networkParams = {
            chainId: `0x${targetChainId.toString(16)}`,
            chainName: targetChain.name,
            nativeCurrency: {
              name: targetChain.nativeCurrency.name,
              symbol: targetChain.nativeCurrency.symbol,
              decimals: targetChain.nativeCurrency.decimals,
            },
            rpcUrls: targetChain.rpcUrls.default.http,
            blockExplorerUrls: targetChain.blockExplorers?.default?.url 
              ? [targetChain.blockExplorers.default.url] 
              : [],
          };

          console.log('[NetworkSwitcher] Network params:', networkParams);

          await (window as any).ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [networkParams],
          });
          
          console.log('[NetworkSwitcher] Chain added, switching...');
          
          // After adding, try switching again
          setTimeout(async () => {
            try {
              await switchChain({ chainId: targetChainId });
              setIsOpen(false);
              // Wait a bit to see if chain updates
              setTimeout(() => {
                const currentChainId = (window as any).ethereum?.chainId 
                  ? parseInt((window as any).ethereum.chainId, 16)
                  : null;
                if (currentChainId !== targetChainId) {
                  console.log('[NetworkSwitcher] Chain not updated after adding, reloading...');
                  window.location.reload();
                }
              }, 2000);
            } catch (retryError) {
              console.error('[NetworkSwitcher] Failed to switch after adding chain:', retryError);
              alert(`Network added but failed to switch. Please switch manually in your wallet.`);
            }
          }, 500);
        } catch (addError: any) {
          console.error('[NetworkSwitcher] Failed to add chain:', addError);
          
          // If adding fails because network already exists with different config,
          // provide instructions to user
          if (addError?.code === -32602 || addError?.message?.includes('already exists')) {
            alert(
              `Network "${targetChain.name}" already exists in your wallet with different settings.\n\n` +
              `Please edit the network in your wallet:\n` +
              `- Chain ID: ${targetChainId} (0x${targetChainId.toString(16)})\n` +
              `- RPC URL: ${targetChain.rpcUrls.default.http[0]}\n` +
              `- Currency Symbol: ${targetChain.nativeCurrency.symbol}\n` +
              `- Currency Name: ${targetChain.nativeCurrency.name}\n` +
              `- Decimals: ${targetChain.nativeCurrency.decimals}\n\n` +
              `Or delete the existing network and try again.`
            );
          } else {
            alert(`Failed to add ${targetChain.name} network: ${addError?.message || 'Unknown error'}\n\nPlease add it manually in your wallet.`);
          }
        }
      } else {
        // Other errors (like user rejection)
        if (error?.code !== 4001) { // 4001 is user rejection, don't show alert
          alert(`Failed to switch network: ${error?.message || 'Unknown error'}`);
        }
      }
    }
  };

  // Debug: Log current chain info
  useEffect(() => {
    console.log('[NetworkSwitcher] Current chainId:', chainId);
    console.log('[NetworkSwitcher] Current chain:', currentChain);
    console.log('[NetworkSwitcher] Available chains:', chains.map(c => ({ id: c.id, name: c.name })));
  }, [chainId, currentChain, chains]);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white/90 hover:bg-white text-gray-800 rounded-lg font-semibold shadow-md transition-colors disabled:opacity-50"
        disabled={isPending}
        title={isConnected ? `Current: ${currentChain?.name || chainId}. Click to switch network` : 'Connect wallet to switch network'}
      >
        <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500' : 'bg-gray-400'}`}></div>
        <span>{currentChain?.name || `Chain ${chainId}`}</span>
        {isPending && <span className="text-xs">(Switching...)</span>}
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-20 border border-gray-200">
            <div className="py-2">
              {chains.map((chain) => (
                <button
                  key={chain.id}
                  onClick={() => handleSwitchChain(chain.id)}
                  className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors flex items-center justify-between ${
                    chain.id === chainId ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                  }`}
                  disabled={isPending || chain.id === chainId}
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${chain.id === chainId ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                    <span className="font-medium">{chain.name}</span>
                  </div>
                  {chain.id === chainId && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

