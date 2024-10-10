import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Users, Newspaper, BarChart2 } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to Web3 Marketplace</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Link to="/marketplace" className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition">
          <ShoppingBag size={48} className="mx-auto mb-4" />
          <h2 className="text-xl font-semibold">Marketplace</h2>
          <p className="mt-2">Buy, sell, and trade digital assets</p>
        </Link>
        <Link to="/social" className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition">
          <Users size={48} className="mx-auto mb-4" />
          <h2 className="text-xl font-semibold">Social</h2>
          <p className="mt-2">Connect with other users and share content</p>
        </Link>
        <Link to="/news" className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition">
          <Newspaper size={48} className="mx-auto mb-4" />
          <h2 className="text-xl font-semibold">News</h2>
          <p className="mt-2">Stay updated with the latest crypto news</p>
        </Link>
        <Link to="/dex" className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition">
          <BarChart2 size={48} className="mx-auto mb-4" />
          <h2 className="text-xl font-semibold">DEX</h2>
          <p className="mt-2">Trade tokens on our decentralized exchange</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;