import React, { useState, useEffect } from 'react';
import { useAddress, useBalance, useContract, useTokenBalance } from "@thirdweb-dev/react";
import { Wallet, CreditCard, Coins, BarChart2 } from 'lucide-react';

const Dashboard: React.FC = () => {
  const address = useAddress();
  const { data: ethBalance } = useBalance();
  const [points, setPoints] = useState(0);
  const [fiatBalance, setFiatBalance] = useState(0);
  const [treasuryBalance, setTreasuryBalance] = useState(0);

  const { contract } = useContract(process.env.VITE_TOKEN_CONTRACT_ADDRESS);
  const { data: tokenBalance } = useTokenBalance(contract, address);

  useEffect(() => {
    // Fetch points balance
    const fetchPoints = async () => {
      // Replace this with actual API call to fetch points
      setPoints(Math.floor(Math.random() * 10000));
    };

    // Fetch fiat balance
    const fetchFiatBalance = async () => {
      // Replace this with actual API call to fetch fiat balance
      setFiatBalance(Math.random() * 10000);
    };

    // Fetch treasury balance
    const fetchTreasuryBalance = async () => {
      // Replace this with actual API call to fetch treasury balance
      setTreasuryBalance(Math.random() * 1000000);
    };

    fetchPoints();
    fetchFiatBalance();
    fetchTreasuryBalance();
  }, []);

  if (!address) {
    return <div>Please connect your wallet to view the dashboard.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Wallet className="mr-2" /> Crypto Wallet
          </h2>
          <p>ETH Balance: {ethBalance?.displayValue} {ethBalance?.symbol}</p>
          <p>Token Balance: {tokenBalance?.displayValue} {tokenBalance?.symbol}</p>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Coins className="mr-2" /> Points Balance
          </h2>
          <p>{points} points</p>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <CreditCard className="mr-2" /> Fiat Balance
          </h2>
          <p>${fiatBalance.toFixed(2)} USD</p>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <BarChart2 className="mr-2" /> Treasury Balance
          </h2>
          <p>${treasuryBalance.toFixed(2)} USD</p>
        </div>
      </div>
      
      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
        <p>Transaction history will be displayed here.</p>
      </div>
    </div>
  );
};

export default Dashboard;