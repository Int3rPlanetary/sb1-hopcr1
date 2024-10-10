import React, { useState } from 'react';
import { ArrowDownUp } from 'lucide-react';

const Dex: React.FC = () => {
  const [fromToken, setFromToken] = useState('ETH');
  const [toToken, setToToken] = useState('USDC');
  const [amount, setAmount] = useState('');

  const handleSwap = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would integrate with a DEX protocol here
    console.log(`Swapping ${amount} ${fromToken} to ${toToken}`);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Decentralized Exchange</h1>
      <div className="bg-gray-800 rounded-lg p-6 max-w-md mx-auto">
        <form onSubmit={handleSwap}>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2">From</label>
            <div className="flex">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.0"
                className="flex-grow bg-gray-700 rounded-l-lg p-2 text-white"
              />
              <select
                value={fromToken}
                onChange={(e) => setFromToken(e.target.value)}
                className="bg-gray-700 rounded-r-lg p-2 text-white"
              >
                <option value="ETH">ETH</option>
                <option value="USDC">USDC</option>
                <option value="DAI">DAI</option>
              </select>
            </div>
          </div>
          <div className="flex justify-center my-4">
            <button type="button" onClick={() => { setFromToken(toToken); setToToken(fromToken); }} className="bg-gray-700 rounded-full p-2">
              <ArrowDownUp size={24} />
            </button>
          </div>
          <div className="mb-6">
            <label className="block text-gray-400 mb-2">To</label>
            <div className="flex">
              <input
                type="number"
                placeholder="0.0"
                className="flex-grow bg-gray-700 rounded-l-lg p-2 text-white"
                readOnly
              />
              <select
                value={toToken}
                onChange={(e) => setToToken(e.target.value)}
                className="bg-gray-700 rounded-r-lg p-2 text-white"
              >
                <option value="ETH">ETH</option>
                <option value="USDC">USDC</option>
                <option value="DAI">DAI</option>
              </select>
            </div>
          </div>
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Swap
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dex;