import React, { useState, useEffect } from 'react';
import { useContract, useNFTs } from "@thirdweb-dev/react";
import { AlertCircle, Loader2 } from 'lucide-react';

interface MarketplaceProps {
  contractAddress: string;
}

const Marketplace: React.FC<MarketplaceProps> = ({ contractAddress }) => {
  const { contract } = useContract(contractAddress);
  const { data: nfts, isLoading: nftsLoading, error: nftsError } = useNFTs(contract);
  const [listings, setListings] = useState([]);
  const [listingsLoading, setListingsLoading] = useState(true);
  const [listingsError, setListingsError] = useState<string | null>(null);

  useEffect(() => {
    if (contract) {
      const fetchListings = async () => {
        try {
          setListingsLoading(true);
          const activeListings = await contract.getActiveListings();
          setListings(activeListings);
          setListingsLoading(false);
        } catch (error) {
          console.error("Error fetching listings:", error);
          setListingsError("Failed to fetch listings. Please check the contract address and try again.");
          setListingsLoading(false);
        }
      };
      fetchListings();
    }
  }, [contract]);

  if (nftsLoading || listingsLoading) return <div className="text-center mt-8"><Loader2 className="animate-spin mx-auto" size={32} /></div>;
  
  if (nftsError) {
    console.error("NFTs Error:", nftsError);
    return (
      <div className="text-center mt-8 text-red-500 flex items-center justify-center">
        <AlertCircle className="mr-2" /> Error loading NFTs: {nftsError.message || "Unknown error"}
      </div>
    );
  }
  
  if (listingsError) {
    return (
      <div className="text-center mt-8 text-red-500 flex items-center justify-center">
        <AlertCircle className="mr-2" /> Error: {listingsError}
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Marketplace</h1>
      {listings.length === 0 ? (
        <p className="text-center">No active listings found. Check back later!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing: any) => (
            <div key={listing.id} className="bg-gray-800 rounded-lg p-4">
              <img src={listing.asset?.image || 'placeholder-image-url'} alt={listing.asset?.name || 'NFT'} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h2 className="text-xl font-semibold mb-2">{listing.asset?.name || 'Unnamed NFT'}</h2>
              <p className="mb-2">{listing.asset?.description || 'No description available'}</p>
              <p className="font-bold">Price: {listing.buyoutCurrencyValuePerToken?.displayValue || 'N/A'} {listing.buyoutCurrencyValuePerToken?.symbol || ''}</p>
              <button className="mt-4 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded w-full">Buy Now</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Marketplace;