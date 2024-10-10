import React from 'react';
import { Link } from 'react-router-dom';
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
import { Wallet, LogOut } from 'lucide-react';

const Header: React.FC = () => {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Web3 Marketplace</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/marketplace" className="hover:text-gray-300">Marketplace</Link></li>
            <li><Link to="/social" className="hover:text-gray-300">Social</Link></li>
            <li><Link to="/news" className="hover:text-gray-300">News</Link></li>
            <li><Link to="/dex" className="hover:text-gray-300">DEX</Link></li>
            {address && <li><Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link></li>}
          </ul>
        </nav>
        <div>
          {address ? (
            <div className="flex items-center space-x-2">
              <Link to="/profile" className="hover:text-gray-300">{address.slice(0, 6)}...{address.slice(-4)}</Link>
              <button onClick={disconnectWallet} className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded">
                <LogOut size={20} />
              </button>
            </div>
          ) : (
            <button onClick={connectWithMetamask} className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded flex items-center">
              <Wallet size={20} className="mr-2" /> Connect Wallet
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;