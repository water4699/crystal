"use client";

import { useState, useEffect } from "react";

interface DonationData {
  date: string;
  amount: number;
}

interface DonationChartProps {
  donations: DonationData[];
}

export const DonationChart = ({ donations }: DonationChartProps) => {
  const [chartData, setChartData] = useState<DonationData[]>([]);

  useEffect(() => {
    // Process donations data for chart display
    const processedData = donations.slice(-10); // Show last 10 donations
    setChartData(processedData);
  }, [donations]);

  const maxAmount = Math.max(...chartData.map(d => d.amount), 1);

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Donation Trends</h3>
      {chartData.length === 0 ? (
        <div className="text-center text-gray-500 py-8">
          <div className="text-4xl mb-2">📊</div>
          <p>No donation data available</p>
          <p className="text-sm">Make some donations to see trends</p>
        </div>
      ) : (
        <div className="space-y-3">
          {chartData.map((donation, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-16 text-xs text-gray-600 truncate">
                {new Date(donation.date).toLocaleDateString()}
              </div>
              <div className="flex-1">
                <div className="bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${(donation.amount / maxAmount) * 100}%`
                    }}
                  />
                </div>
              </div>
              <div className="w-16 text-right text-sm font-medium text-gray-700">
                {donation.amount}
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="mt-4 text-xs text-gray-500 text-center">
        Showing last {Math.min(chartData.length, 10)} donations
      </div>
    </div>
  );
};
