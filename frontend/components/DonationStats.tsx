"use client";

import { useState, useEffect } from "react";
import { useAccount, useChainId } from 'wagmi';
import { readContract } from '@wagmi/core';
import { EncryptedDonationLogAddresses } from "@/abi/EncryptedDonationLogAddresses";
import { EncryptedDonationLogABI } from "@/abi/EncryptedDonationLogABI";
import { config as wagmiConfig } from "@/config/wagmi";

interface DonationStatsProps {
  totalRecords: number;
  userRecords: number;
}

const getLevelInfo = (level: number) => {
  const levels = {
    0: { name: "Visitor", color: "text-gray-600", bgColor: "bg-gray-100" },
    1: { name: "Bronze", color: "text-amber-600", bgColor: "bg-amber-100" },
    2: { name: "Silver", color: "text-gray-500", bgColor: "bg-gray-200" },
    3: { name: "Gold", color: "text-yellow-600", bgColor: "bg-yellow-100" },
    4: { name: "Platinum", color: "text-blue-600", bgColor: "bg-blue-100" },
    5: { name: "Diamond", color: "text-purple-600", bgColor: "bg-purple-100" }
  };
  return levels[level as keyof typeof levels] || levels[0];
};

export const DonationStats = ({ totalRecords, userRecords }: DonationStatsProps) => {
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const [stats, setStats] = useState({
    totalDonations: 0,
    userDonations: 0,
    userLevel: 0,
    isLoading: false
  });

  const contractAddress = chainId ? EncryptedDonationLogAddresses[chainId.toString()]?.address : undefined;

  useEffect(() => {
    const loadStats = async () => {
      if (!contractAddress || !isConnected) return;

      setStats(prev => ({ ...prev, isLoading: true }));

      try {
        // Get total records by reading nextRecordId
        const nextIdResult = await readContract(wagmiConfig, {
          address: contractAddress as `0x${string}`,
          abi: EncryptedDonationLogABI.abi,
          functionName: 'nextRecordId',
        });

        const totalDonations = typeof nextIdResult === 'bigint' ? Number(nextIdResult) : Number(nextIdResult || 0);

        // Get user donation count and level
        let userDonations = 0;
        let userLevel = 0;
        if (address) {
          const userCountResult = await readContract(wagmiConfig, {
            address: contractAddress as `0x${string}`,
            abi: EncryptedDonationLogABI.abi,
            functionName: 'getUserDonationCount',
            args: [address as `0x${string}`],
          });
          userDonations = typeof userCountResult === 'bigint' ? Number(userCountResult) : Number(userCountResult || 0);

          const userLevelResult = await readContract(wagmiConfig, {
            address: contractAddress as `0x${string}`,
            abi: EncryptedDonationLogABI.abi,
            functionName: 'getUserDonationLevel',
            args: [address as `0x${string}`],
          });
          userLevel = typeof userLevelResult === 'bigint' ? Number(userLevelResult) : Number(userLevelResult || 0);
        }

        setStats({
          totalDonations,
          userDonations,
          userLevel,
          isLoading: false
        });
      } catch (error) {
        console.error("Error loading donation stats:", error);
        setStats(prev => ({ ...prev, isLoading: false }));
      }
    };

    loadStats();
  }, [contractAddress, isConnected, address]);

  const levelInfo = getLevelInfo(stats.userLevel);

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 shadow-lg">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Donation Statistics</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="text-2xl font-bold text-blue-600">{stats.totalDonations}</div>
          <div className="text-sm text-gray-600">Total Donations</div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="text-2xl font-bold text-purple-600">{stats.userDonations}</div>
          <div className="text-sm text-gray-600">Your Donations</div>
        </div>
        <div className={`rounded-lg p-4 shadow-sm ${levelInfo.bgColor}`}>
          <div className={`text-2xl font-bold ${levelInfo.color}`}>{levelInfo.name}</div>
          <div className="text-sm text-gray-600">Donor Level</div>
        </div>
      </div>
      {stats.userLevel > 0 && (
        <div className="text-center text-sm text-gray-600">
          {stats.userLevel < 5 ?
            `Make ${stats.userLevel === 1 ? 5 : stats.userLevel === 2 ? 10 : stats.userLevel === 3 ? 25 : 50} more donations to reach the next level!` :
            "🏆 You've reached the highest donor level!"
          }
        </div>
      )}
      {stats.isLoading && (
        <div className="text-center text-gray-500 text-sm mt-2">Loading stats...</div>
      )}
    </div>
  );
};
