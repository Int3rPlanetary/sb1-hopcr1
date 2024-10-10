import React, { useState, useEffect } from 'react';
import { useAddress, useContract, useTokenBalance, useOwnedNFTs } from "@thirdweb-dev/react";
import { useParams } from 'react-router-dom';
import { CreditCard, ShoppingBag, Coins, User } from 'lucide-react';

interface ProfileProps {
  contractAddress: string;
}

const Profile: React.FC<ProfileProps> = ({ contractAddress }) => {
  const { handle } = useParams<{ handle: string }>();
  const address = useAddress();
  const { contract } = useContract(contractAddress);
  const { data: tokenBalance } = useTokenBalance(contract, address);
  const { data: ownedNFTs, isLoading } = useOwnedNFTs(contract, address);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    const fetchPoints = async () => {
      setPoints(Math.floor(Math.random() * 1000));
    };
    fetchPoints();
  }, []);

  if (!address) return <div>Please connect your wallet to view your profile.</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Your Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center"><User size={24} className="mr-2" /> Profile Info</h2>
          <p className="mb-2">Address: {address.slice(0, 6)}...{address.slice(-4)}</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center"><CreditCard size={24} className="mr-2" /> Wallet</h2>
          <p>Balance: {tokenBalance?.displayValue} {tokenBalance?.symbol}</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center"><ShoppingBag size={24} className="mr-2" /> Your NFTs</h2>
          {isLoading ? (
            <p>Loading your NFTs...</p>
          ) : (
            <p>{ownedNFTs?.length || 0} NFTs owned</p>
          )}
        </div>
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center"><Coins size={24} className="mr-2" /> Points</h2>
          <p>{points} points</p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Listings</h2>
        <p>No active listings found.</p>
      </div>
    </div>
  );
};

export default Profile;