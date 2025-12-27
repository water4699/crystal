"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, usePublicClient, useChainId, useSwitchChain } from 'wagmi';
import { ethers } from "ethers";
import { readContract } from '@wagmi/core';
import { useEthersSigner } from "@/hooks/useEthersSigner";
import { useZamaInstance } from "@/hooks/useZamaInstance";
import { EncryptedDonationLogAddresses } from "@/abi/EncryptedDonationLogAddresses";
import { EncryptedDonationLogABI } from "@/abi/EncryptedDonationLogABI";
import { config as wagmiConfig } from "@/config/wagmi";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { PageTransition, StaggeredItem } from "@/components/PageTransition";

interface DonationRecord {
  recordId: number;
  amount: string;
  timestamp: string;
  blockNumber: string;
}

export const DonationLogDemo = () => {
  const { address, isConnected } = useAccount();
  const chainId = useChainId(); // Use useChainId hook for more reliable chain detection
  const { switchChain, isPending: isSwitchingChain } = useSwitchChain();
  const publicClient = usePublicClient();
  const ethersSignerPromise = useEthersSigner({ chainId });
  
  // Get provider - use window.ethereum directly for EIP-1193 compatibility
  const provider = typeof window !== 'undefined' ? (window as any).ethereum : undefined;
  const { instance: zama, isLoading: zamaLoading, error: zamaError } = useZamaInstance(chainId, provider);
  const [mounted, setMounted] = useState(false);

  const [donationAmount, setDonationAmount] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [donationRecords, setDonationRecords] = useState<DonationRecord[]>([]);
  const [isLoadingRecords, setIsLoadingRecords] = useState(false);
  const [message, setMessage] = useState<string>("");
  const [decryptingRecordId, setDecryptingRecordId] = useState<number | null>(null);
  const [filterText, setFilterText] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [isExporting, setIsExporting] = useState(false);

  // Memoized filtered and sorted records - must be at component top level
  const filteredAndSortedRecords = useMemo(() => {
    return donationRecords
      .filter(record => record.recordId.toString().includes(filterText))
      .sort((a, b) => sortOrder === 'desc'
        ? Number(b.recordId) - Number(a.recordId)
        : Number(a.recordId) - Number(b.recordId)
      );
  }, [donationRecords, filterText, sortOrder]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Debug: Log chainId changes
  useEffect(() => {
    if (mounted) {
      console.log('[DonationLogDemo] Current chainId:', chainId);
      console.log('[DonationLogDemo] Wallet provider chainId:', provider ? (provider as any).chainId : 'N/A');
      console.log('[DonationLogDemo] Available chainIds:', Object.keys(EncryptedDonationLogAddresses));
      console.log('[DonationLogDemo] Contract address for chainId:', chainId ? EncryptedDonationLogAddresses[chainId.toString()]?.address : 'N/A');
      if (chainId && EncryptedDonationLogAddresses[chainId.toString()]) {
        console.log('[DonationLogDemo] Contract config:', EncryptedDonationLogAddresses[chainId.toString()]);
      }
    }
  }, [chainId, mounted, provider]);

  const contractAddress = chainId ? EncryptedDonationLogAddresses[chainId.toString()]?.address : undefined;
  const isDeployed = contractAddress && contractAddress !== ethers.ZeroAddress;

  const loadDonationRecords = useCallback(async () => {
    if (!isConnected || !address || !contractAddress || !publicClient) return;

    setIsLoadingRecords(true);
    try {
      // Use viem readContract for view functions
      let count: bigint = 0n;
      try {
        const countResult = await readContract(wagmiConfig, {
          address: contractAddress as `0x${string}`,
          abi: EncryptedDonationLogABI.abi,
          functionName: 'getUserDonationCount',
          args: [address as `0x${string}`],
        });
        count = typeof countResult === 'bigint' ? countResult : BigInt(countResult || 0);
        console.log('[loadDonationRecords] getUserDonationCount result:', count);
      } catch (err: any) {
        // If call fails, user might have no records
        console.log('[loadDonationRecords] getUserDonationCount failed, assuming 0:', err.message);
        count = 0n;
      }

      const countNumber = Number(count);
      const records: DonationRecord[] = [];

      for (let i = 0; i < countNumber; i++) {
        try {
          const recordId = await readContract(wagmiConfig, {
            address: contractAddress as `0x${string}`,
            abi: EncryptedDonationLogABI.abi,
            functionName: 'getUserDonationIdAt',
            args: [address as `0x${string}`, BigInt(i)],
          });
          
          const metadata = await readContract(wagmiConfig, {
            address: contractAddress as `0x${string}`,
            abi: EncryptedDonationLogABI.abi,
            functionName: 'getRecordMetadata',
            args: [typeof recordId === 'bigint' ? recordId : BigInt(recordId)],
          });
          
          const recordIdNumber = typeof recordId === 'bigint' ? Number(recordId) : Number(recordId);
          
          // Type guard for metadata object
          // readContract returns a tuple [address, bigint] for getRecordMetadata
          let blockNumber: string;
          const metadataAny = metadata as unknown;
          
          if (Array.isArray(metadataAny) && metadataAny.length >= 2) {
            // Handle tuple return type [address, blockNumber]
            const blockNum = metadataAny[1];
            blockNumber = typeof blockNum === 'bigint' ? blockNum.toString() : String(blockNum || '0');
          } else if (typeof metadataAny === 'object' && metadataAny !== null && 'blockNumber' in metadataAny) {
            // Handle object return type { submitter, blockNumber }
            const meta = metadataAny as { blockNumber?: bigint | number | string };
            if (typeof meta.blockNumber === 'bigint') {
              blockNumber = meta.blockNumber.toString();
            } else if (meta.blockNumber !== undefined) {
              blockNumber = meta.blockNumber.toString();
            } else {
              blockNumber = '0';
            }
          } else {
            // Fallback for other types
            blockNumber = String(metadataAny || '0');
          }
          
          records.push({
            recordId: recordIdNumber,
            amount: "Encrypted",
            timestamp: "Encrypted",
            blockNumber: blockNumber,
          });
        } catch (err) {
          console.error(`[loadDonationRecords] Error loading record ${i}:`, err);
        }
      }

      setDonationRecords(records);
    } catch (error: any) {
      console.error("[loadDonationRecords] Error loading records:", error);
      setMessage(`Failed to load donation records: ${error.message || 'Unknown error'}`);
    } finally {
      setIsLoadingRecords(false);
    }
  }, [isConnected, address, contractAddress, publicClient]);

  useEffect(() => {
    if (isConnected && contractAddress) {
      loadDonationRecords();
    }
  }, [isConnected, contractAddress, loadDonationRecords]);

  const handleSubmitDonation = async () => {
    if (!isConnected || !ethersSignerPromise || !zama || !contractAddress || !donationAmount) {
      setMessage("Please connect wallet and enter donation amount");
      return;
    }

    setIsSubmitting(true);
    setMessage("Submitting donation...");

    try {
      const signer = await ethersSignerPromise;
      const amount = parseInt(donationAmount);
      const timestamp = Math.floor(Date.now() / 1000);

      if (isNaN(amount) || amount <= 0) {
        setMessage("Please enter a valid donation amount");
        setIsSubmitting(false);
        return;
      }

      // Validate donation amount range
      if (amount < 1 || amount > 10000) {
        setMessage("Donation amount must be between 1 and 10,000 units");
        setIsSubmitting(false);
        return;
      }

      // Encrypt amount and timestamp
      const encryptedInput = await zama.createEncryptedInput(contractAddress, address!)
        .add32(amount)
        .add32(timestamp)
        .encrypt();

      const contract = new ethers.Contract(
        contractAddress,
        EncryptedDonationLogABI.abi,
        signer
      );

      const tx = await contract.submitDonation(
        encryptedInput.handles[0],
        encryptedInput.handles[1],
        encryptedInput.inputProof
      );

      setMessage(`Transaction submitted: ${tx.hash}. Waiting for confirmation...`);
      await tx.wait();
      setMessage("Donation submitted successfully!");
      setDonationAmount("");
      await loadDonationRecords();
    } catch (error: any) {
      console.error("Error submitting donation:", error);
      let errorMessage = "Failed to submit donation";

      if (error.message?.includes("user rejected")) {
        errorMessage = "Transaction was cancelled by user";
      } else if (error.message?.includes("insufficient funds")) {
        errorMessage = "Insufficient funds for transaction";
      } else if (error.message?.includes("network")) {
        errorMessage = "Network error. Please check your connection and try again";
      } else if (error.message) {
        errorMessage = `Error: ${error.message}`;
      }

      setMessage(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleExportRecords = async () => {
    if (!donationRecords.length) {
      setMessage("No records to export");
      return;
    }

    setIsExporting(true);
    try {
      const exportData = donationRecords.map(record => ({
        recordId: record.recordId,
        amount: record.amount,
        timestamp: record.timestamp,
        blockNumber: record.blockNumber,
        exportedAt: new Date().toISOString()
      }));

      const dataStr = JSON.stringify(exportData, null, 2);
      const dataBlob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(dataBlob);

      const link = document.createElement('a');
      link.href = url;
      link.download = `donation-records-${Date.now()}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setMessage("Records exported successfully!");
    } catch (error: any) {
      console.error("Error exporting records:", error);
      setMessage("Failed to export records");
    } finally {
      setIsExporting(false);
    }
  };

  const handleDecryptRecord = async (recordId: number) => {
    if (!isConnected || !ethersSignerPromise || !zama || !contractAddress || !address) {
      setMessage("Please connect wallet");
      return;
    }

    setDecryptingRecordId(recordId);
    setMessage(`Decrypting record ${recordId}...`);

    try {
      const signer = await ethersSignerPromise;
      const contract = new ethers.Contract(
        contractAddress,
        EncryptedDonationLogABI.abi,
        signer
      );

      const encryptedAmount = await contract.getEncryptedAmount(recordId);
      const encryptedTimestamp = await contract.getEncryptedTimestamp(recordId);

      // Check if handles are zero (uninitialized)
      if (encryptedAmount === ethers.ZeroHash || encryptedTimestamp === ethers.ZeroHash) {
        setMessage("Record is not initialized");
        return;
      }

      // Generate keypair for decryption
      const keypair = zama.generateKeypair();

      // Decrypt amount
      const amountHandlePairs = [{
        handle: encryptedAmount,
        contractAddress: contractAddress,
      }];

      const startTimeStamp = Math.floor(Date.now() / 1000).toString();
      const durationDays = "10";
      const contractAddresses = [contractAddress];

      const eip712 = zama.createEIP712(
        keypair.publicKey,
        contractAddresses,
        startTimeStamp,
        durationDays
      );

      // Sign typed data
      const signature = await signer.signTypedData(
        eip712.domain,
        {
          UserDecryptRequestVerification: eip712.types.UserDecryptRequestVerification,
        },
        eip712.message
      );

      const amountResult = await zama.userDecrypt(
        amountHandlePairs,
        keypair.privateKey,
        keypair.publicKey,
        signature.replace("0x", ""),
        contractAddresses,
        address,
        startTimeStamp,
        durationDays,
      );

      const decryptedAmount = amountResult[encryptedAmount];

      // Decrypt timestamp (generate new keypair for second decryption)
      const timestampKeypair = zama.generateKeypair();
      const timestampHandlePairs = [{
        handle: encryptedTimestamp,
        contractAddress: contractAddress,
      }];

      const timestampEip712 = zama.createEIP712(
        timestampKeypair.publicKey,
        contractAddresses,
        startTimeStamp,
        durationDays
      );

      const timestampSignature = await signer.signTypedData(
        timestampEip712.domain,
        {
          UserDecryptRequestVerification: timestampEip712.types.UserDecryptRequestVerification,
        },
        timestampEip712.message
      );

      const timestampResult = await zama.userDecrypt(
        timestampHandlePairs,
        timestampKeypair.privateKey,
        timestampKeypair.publicKey,
        timestampSignature.replace("0x", ""),
        contractAddresses,
        address,
        startTimeStamp,
        durationDays,
      );

      const decryptedTimestamp = timestampResult[encryptedTimestamp];

      // Update the record in the list
      setDonationRecords(prev => prev.map(record => 
        record.recordId === recordId 
          ? {
              ...record,
              amount: decryptedAmount.toString(),
              timestamp: new Date(Number(decryptedTimestamp) * 1000).toLocaleString(),
            }
          : record
      ));

      setMessage(`Record ${recordId} decrypted successfully!`);
    } catch (error: any) {
      console.error("Error decrypting record:", error);
      setMessage(`Error: ${error.message || "Failed to decrypt record"}`);
    } finally {
      setDecryptingRecordId(null);
    }
  };


  if (!mounted) {
    return (
      <PageTransition>
        <div className="mx-auto mt-10 w-full">
          <div className="glass-card rounded-2xl p-8 animate-pulse-glow">
            <div className="flex flex-col items-center gap-4">
              <LoadingSpinner size="lg" />
              <h2 className="text-2xl font-bold text-center gradient-text">Initializing...</h2>
              <p className="text-gray-500 text-center">Setting up secure connection</p>
            </div>
          </div>
        </div>
      </PageTransition>
    );
  }

  if (!isConnected) {
    return (
      <PageTransition>
        <div className="mx-auto mt-10 w-full">
          <div className="glass-card rounded-2xl p-10 card-hover border-gradient">
            <div className="text-center">
              {/* Animated icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mb-6 animate-bounce-subtle">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              
              <h2 className="text-3xl font-bold mb-3 gradient-text">Connect Your Wallet</h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Connect your wallet to start using the privacy-preserving Encrypted Donation Log
              </p>
              
              <div className="flex justify-center mb-6">
                <ConnectButton />
              </div>
              
              {/* Decorative features */}
              <div className="flex justify-center gap-6 mt-8 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  Secure
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  Private
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  Encrypted
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    );
  }

  if (!isDeployed) {
    const chainName = chainId === 31337 ? 'Hardhat Local (31337)' : chainId === 11155111 ? 'Sepolia (11155111)' : `Chain ${chainId || 'unknown'}`;
    const isProduction = typeof window !== 'undefined' && 
      (window.location.hostname.includes('vercel.app') || window.location.hostname.includes('vercel.com'));
    
    return (
      <PageTransition>
        <div className="mx-auto mt-10 w-full">
          <div className="glass-card rounded-2xl p-8 card-hover">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center animate-pulse">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-red-600">Contract Not Deployed</h2>
            </div>
            <p className="text-gray-600 mb-4">
              The EncryptedDonationLog contract is not deployed on {chainName}. Please deploy it first.
            </p>
          {chainId === 31337 && isProduction && (
            <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4 mt-4 mb-4">
              <p className="text-sm text-yellow-800 font-semibold mb-2">
                ⚠️ Hardhat Local Network Detected in Production
              </p>
              <p className="text-sm text-yellow-700 mb-2">
                You are connected to Hardhat Local (31337), but this is a production deployment. 
                Hardhat Local is only available in local development.
              </p>
              <p className="text-sm text-yellow-700">
                <strong>Please switch to Sepolia testnet in your MetaMask wallet:</strong>
              </p>
              <ol className="list-decimal list-inside text-sm text-yellow-700 mt-2 space-y-1 mb-3">
                <li>Click the MetaMask extension</li>
                <li>Click the network dropdown (currently showing "Hardhat Local" or "Localhost 8545")</li>
                <li>Select "Sepolia" from the list</li>
                <li>If Sepolia is not in the list, add it manually (Chain ID: 11155111)</li>
              </ol>
              <button
                onClick={() => {
                  try {
                    switchChain({ chainId: 11155111 });
                  } catch (error: any) {
                    console.error('Failed to switch to Sepolia:', error);
                    alert('Failed to switch network. Please switch manually in MetaMask.');
                  }
                }}
                disabled={isSwitchingChain || !isConnected}
                className="w-full mt-3 px-4 py-2 bg-yellow-600 text-white rounded-lg font-semibold hover:bg-yellow-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSwitchingChain ? 'Switching...' : 'Switch to Sepolia Testnet'}
              </button>
            </div>
          )}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-4 mb-4">
            <p className="text-sm text-gray-700 mb-2">
              <strong>Debug Info:</strong>
            </p>
            <p className="text-xs text-gray-600 font-mono">
              Detected Chain ID: {chainId || 'undefined'}<br />
              Contract Address: {contractAddress || 'Not found'}<br />
              Wallet Connected: {isConnected ? 'Yes' : 'No'}<br />
              {provider && (provider as any).chainId && (
                <>Provider Chain ID: {(provider as any).chainId}<br /></>
              )}
            </p>
          </div>
          {chainId === 31337 && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
              <p className="text-sm text-blue-800">
                <strong>For Local Network:</strong> Make sure Hardhat node is running and run:<br />
                <code className="bg-blue-100 px-2 py-1 rounded">npx hardhat deploy --network localhost</code>
              </p>
            </div>
          )}
          {chainId === 11155111 && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
              <p className="text-sm text-yellow-800">
                <strong>Note:</strong> You are connected to Sepolia testnet. Switch to Hardhat Local (31337) to use the local contract, or deploy the contract to Sepolia.
              </p>
            </div>
          )}
        </div>
      </div>
    </PageTransition>
    );
  }

  // Show relayer error message if on Sepolia
  const showRelayerError = chainId === 11155111 && zamaError && 
    (zamaError.includes('relayer') || zamaError.includes('Relayer') || zamaError.includes('network issue'));

  return (
    <PageTransition className="w-full">
      <div className="grid w-full gap-6">
        <div className="flex justify-end items-center gap-3 animate-fade-in-right">
          <ThemeToggle />
          <ConnectButton />
        </div>


      {showRelayerError && (
        <StaggeredItem index={0}>
          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-4 shadow-lg card-hover">
            <div className="flex items-start gap-3">
              <div className="text-yellow-600 text-xl animate-bounce-subtle">⚠️</div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                  Zama Relayer Service Unavailable
                </h3>
                <p className="text-yellow-700 mb-3">
                  The Zama relayer service for Sepolia testnet is currently unavailable. This may be due to:
                </p>
                <ul className="list-disc list-inside text-yellow-700 mb-3 space-y-1 text-sm">
                  <li>Network connectivity issues</li>
                  <li>Temporary service outage</li>
                  <li>Firewall or proxy restrictions</li>
                </ul>
                <div className="bg-white rounded-lg p-3 mt-3">
                  <p className="text-sm font-semibold text-gray-800 mb-2">💡 Recommended Solution:</p>
                  <p className="text-sm text-gray-700">
                    Switch to <strong>Hardhat Local (31337)</strong> network to use mock mode for testing. 
                    Mock mode doesn&apos;t require the relayer service and works offline.
                  </p>
                  <p className="text-xs text-gray-600 mt-2">
                    To switch: Click the wallet button above → Select &quot;Hardhat Local&quot; network
                  </p>
                </div>
              </div>
            </div>
          </div>
        </StaggeredItem>
      )}

      <StaggeredItem index={1}>
        <div className="glass-card rounded-2xl p-6 card-hover">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold gradient-text">Submit New Donation</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Donation Amount
              </label>
              <input
                type="number"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
                placeholder="Enter amount (1-10,000)"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-300"
                disabled={isSubmitting || zamaLoading}
              />
            </div>
            <button
              onClick={handleSubmitDonation}
              disabled={isSubmitting || zamaLoading || !donationAmount}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 btn-glow ripple"
            >
              {isSubmitting || zamaLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <LoadingSpinner size="sm" />
                  {isSubmitting ? "Submitting..." : "Loading..."}
                </div>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Submit Encrypted Donation
                </span>
              )}
            </button>
          </div>
        </div>
      </StaggeredItem>

      <StaggeredItem index={2}>
        <div className="glass-card rounded-2xl p-6 card-hover">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold gradient-text">My Donation Records</h2>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleExportRecords}
                disabled={isExporting || donationRecords.length === 0}
                className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl hover:from-green-600 hover:to-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition-all duration-300 btn-glow"
              >
                {isExporting ? (
                  <>
                    <LoadingSpinner size="sm" />
                    Exporting...
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Export
                  </>
                )}
              </button>
              <button
                onClick={loadDonationRecords}
                disabled={isLoadingRecords}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 disabled:opacity-50 flex items-center gap-2 transition-all duration-300"
              >
                {isLoadingRecords ? (
                  <>
                    <LoadingSpinner size="sm" />
                    Loading...
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Refresh
                  </>
                )}
              </button>
            </div>
          </div>

        {donationRecords.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <p className="text-gray-500 text-lg">No donation records found</p>
            <p className="text-gray-400 text-sm mt-1">Submit your first encrypted donation above</p>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Filter and Sort Controls */}
            <div className="flex gap-4 items-center">
              <div className="relative flex-1">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Filter by record ID..."
                  value={filterText}
                  onChange={(e) => setFilterText(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
                className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white"
              >
                <option value="desc">Newest First</option>
                <option value="asc">Oldest First</option>
              </select>
            </div>

            {/* Filtered and Sorted Records */}
            {filteredAndSortedRecords.map((record, index) => (
                <StaggeredItem key={record.recordId} index={index} className="w-full">
                  <div className="border border-gray-100 rounded-xl p-5 hover:border-purple-200 hover:shadow-md transition-all duration-300 bg-gradient-to-r from-white to-gray-50">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                            #{record.recordId}
                          </span>
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            Block {record.blockNumber}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-3">
                          <div>
                            <p className="text-xs text-gray-400 uppercase tracking-wide">Amount</p>
                            <p className={`text-lg font-semibold ${record.amount === "Encrypted" ? "text-purple-600" : "text-gray-800"}`}>
                              {record.amount === "Encrypted" ? (
                                <span className="flex items-center gap-1">
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                  </svg>
                                  Encrypted
                                </span>
                              ) : record.amount}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-400 uppercase tracking-wide">Timestamp</p>
                            <p className={`text-sm ${record.timestamp === "Encrypted" ? "text-purple-600" : "text-gray-600"}`}>
                              {record.timestamp === "Encrypted" ? (
                                <span className="flex items-center gap-1">
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                  </svg>
                                  Encrypted
                                </span>
                              ) : record.timestamp}
                            </p>
                          </div>
                        </div>
                      </div>
                      {record.amount === "Encrypted" && (
                        <button
                          onClick={() => handleDecryptRecord(record.recordId)}
                          disabled={decryptingRecordId === record.recordId || zamaLoading}
                          className="ml-4 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 btn-glow flex items-center gap-2"
                        >
                          {decryptingRecordId === record.recordId ? (
                            <>
                              <LoadingSpinner size="sm" />
                              Decrypting...
                            </>
                          ) : (
                            <>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                              </svg>
                              Decrypt
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </StaggeredItem>
              ))}
          </div>
        )}
      </div>
    </StaggeredItem>

      {message && (
        <StaggeredItem index={3}>
          <div className="glass-card rounded-xl p-4 border-l-4 border-blue-500 animate-fade-in-up">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-blue-800">{message}</p>
            </div>
          </div>
        </StaggeredItem>
      )}

      {zamaError && (
        <StaggeredItem index={4}>
          <div className="glass-card rounded-xl p-4 border-l-4 border-red-500 animate-fade-in-up">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-red-800">Zama Error: {zamaError}</p>
            </div>
          </div>
        </StaggeredItem>
      )}
    </div>
  </PageTransition>
  );
};

