import React, { useEffect, useState } from 'react';
import VibeChart from './VibeChart';
import { DEXSCREENER_API, HELIUS_RPC_URL, CA } from '../constants';
import { Loader2, Coins, TrendingUp, Users } from 'lucide-react';

const Tokenomics: React.FC = () => {
  const [marketCap, setMarketCap] = useState<string | null>(null);
  const [price, setPrice] = useState<string | null>(null);
  const [supply, setSupply] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch DexScreener Data
        const dsResponse = await fetch(DEXSCREENER_API);
        const dsData = await dsResponse.json();
        const pair = dsData.pairs && dsData.pairs[0];
        
        if (pair) {
          setMarketCap(pair.fdv ? `$${pair.fdv.toLocaleString()}` : 'N/A');
          setPrice(pair.priceUsd ? `$${pair.priceUsd}` : 'N/A');
        }

        // Fetch Supply via Helius RPC
        const heliusResponse = await fetch(HELIUS_RPC_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                jsonrpc: '2.0',
                id: 'daycare-supply',
                method: 'getTokenSupply',
                params: [CA]
            })
        });
        const heliusData = await heliusResponse.json();
        if (heliusData.result && heliusData.result.value) {
            // Format supply (e.g., 1,000,000,000)
            const supplyNum = heliusData.result.value.uiAmount;
            setSupply(Math.round(supplyNum).toLocaleString());
        } else {
            setSupply("1,000,000,000"); // Fallback
        }

      } catch (error) {
        console.error("Failed to fetch live data", error);
        setSupply("1,000,000,000"); // Fallback
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // Refresh every 30 seconds
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="tokenomics" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-meme text-center mb-12">
          THE ECONOMICS <span className="text-sm font-mono text-green-500 animate-pulse">(LIVE DATA)</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
            
          {/* Stats List - Chill Style */}
          <div className="flex flex-col gap-4 font-comic">
            
            {/* Market Cap */}
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-chill-sweater border-2 border-black rounded-full flex items-center justify-center text-xl font-bold">
                    <TrendingUp size={24} className="text-black"/>
                </div>
                <div className="bg-white px-6 py-4 border-2 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-full">
                    <span className="font-bold block text-lg uppercase">Market Cap</span> 
                    {loading ? <Loader2 className="animate-spin mt-1" /> : <span className="text-2xl font-news font-bold text-green-600">{marketCap || "Calculating..."}</span>}
                </div>
            </div>

            {/* Supply */}
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-chill-pants text-white border-2 border-black rounded-full flex items-center justify-center text-xl font-bold">
                    <Coins size={24} />
                </div>
                <div className="bg-white px-6 py-4 border-2 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-full">
                    <span className="font-bold block text-lg uppercase">Total Supply</span> 
                    {loading ? <Loader2 className="animate-spin mt-1" /> : <span className="text-xl font-mono">{supply || "1,000,000,000"}</span>}
                </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-chill-shoes text-white border-2 border-black rounded-full flex items-center justify-center text-xl font-bold">
                    $
                </div>
                <div className="bg-white px-6 py-4 border-2 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-full">
                    <span className="font-bold block text-lg uppercase">Current Price</span> 
                    {loading ? <Loader2 className="animate-spin mt-1" /> : <span className="text-xl font-mono text-blue-600">{price || "..."}</span>}
                </div>
            </div>

            {/* Holders - Note: Full count via RPC is heavy, using a placeholder/link for performance */}
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-caution text-black border-2 border-black rounded-full flex items-center justify-center text-xl font-bold">
                    <Users size={24} />
                </div>
                <div className="bg-white px-6 py-4 border-2 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-full relative overflow-hidden">
                    <span className="font-bold block text-lg uppercase">Holders</span> 
                    <span className="text-lg font-mono">Distributed & Growing</span>
                    <div className="absolute top-2 right-2 flex space-x-1">
                        <span className="block h-2 w-2 rounded-full bg-green-500 animate-ping"></span>
                    </div>
                </div>
            </div>

          </div>

          {/* Chart */}
          <VibeChart />
          
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;