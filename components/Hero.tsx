import React, { useState, useEffect } from 'react';
import { Copy, Check, ExternalLink, AlertTriangle, LineChart, TrendingUp } from 'lucide-react';
import { CA, PUMP_URL, FOX_NEWS_URL, DEXSCREENER_URL, DEXSCREENER_API } from '../constants';

const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [marketCap, setMarketCap] = useState<string | null>(null);

  const copyCA = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const fetchMC = async () => {
        try {
            const res = await fetch(DEXSCREENER_API);
            const data = await res.json();
            if (data.pairs && data.pairs[0]?.fdv) {
                // Format with K/M/B if needed, or just commas
                setMarketCap(Math.floor(data.pairs[0].fdv).toLocaleString());
            }
        } catch (e) {
            console.error("Failed to fetch MC");
        }
    };
    fetchMC();
    const interval = setInterval(fetchMC, 10000); // Update every 10s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-32 pb-16 px-4 min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-dark-bg">
      
      {/* Ambient Police Lights Background */}
      <div className="absolute inset-0 z-0 opacity-20 animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-transparent to-red-900 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left: Content - Breaking News Style */}
        <div className="text-center md:text-left space-y-6 order-2 md:order-1 relative">
          
          <div className="inline-block bg-red-600 text-white px-4 py-1 font-news font-bold tracking-widest uppercase text-sm mb-2 animate-pulse border border-white/20">
             🔴 LIVE: FEDERAL RAID IN PROGRESS
          </div>

          <h1 className="text-7xl md:text-9xl font-news leading-[0.85] text-white drop-shadow-[0_5px_5px_rgba(0,0,0,1)]">
            JUST A CHILL <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-caution to-yellow-600">DAYCARE</span>
          </h1>
          
          <div className="bg-black/80 backdrop-blur-md border-l-4 border-caution p-6 transform hover:scale-[1.01] transition-transform">
              <h3 className="text-caution font-mono text-xl mb-2 flex items-center gap-2">
                <AlertTriangle size={20}/> SUSPECT IDENTIFIED
              </h3>
              <p className="font-comic text-xl text-gray-300 leading-relaxed italic">
                "Look at me. I have the subsidies now. I am the captain of this daycare."
              </p>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <a 
                    href={FOX_NEWS_URL} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 hover:underline font-news tracking-wide uppercase"
                >
                    <ExternalLink size={16} />
                    Watch the Surveillance Footage
                </a>
              </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-6">
             <a 
              href={PUMP_URL}
              target="_blank"
              rel="noreferrer"
              className="bg-red-600 text-white px-8 py-4 rounded-none border-2 border-white font-news text-2xl tracking-tighter uppercase shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:bg-red-700 hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              BREACH & BUY
            </a>
            
            <a 
              href={DEXSCREENER_URL}
              target="_blank"
              rel="noreferrer"
              className="bg-black text-caution px-8 py-4 rounded-none border-2 border-caution font-news text-2xl tracking-tighter uppercase shadow-[0_0_20px_rgba(250,204,21,0.2)] hover:bg-caution hover:text-black transition-all flex items-center justify-center gap-2"
            >
              <LineChart size={24}/> CHART
            </a>
          </div>

          <button 
              onClick={copyCA}
              className="w-full sm:w-auto bg-transparent text-white px-8 py-2 rounded-none border border-white/30 font-mono font-bold text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2 mx-auto md:mx-0"
            >
              {copied ? "COPIED" : `CA: ${CA}`}
              {copied ? <Check size={16} /> : <Copy size={16} />}
          </button>
        </div>

        {/* Right: The Villain Character */}
        <div className="order-1 md:order-2 flex justify-center relative">
            <div className="relative group animate-float">
                <div className="relative w-[350px] md:w-[450px]">
                    
                    {/* Live Market Cap Bubble */}
                    {marketCap && (
                        <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-[60] animate-bounce">
                             <div className="bg-green-600 text-white px-6 py-2 border-4 border-white font-news text-3xl font-bold shadow-[0_0_20px_rgba(34,197,94,0.6)] flex items-center gap-2 whitespace-nowrap rotate-2 hover:scale-110 transition-transform cursor-default">
                                <TrendingUp size={28} className="text-white" />
                                ${marketCap} MC
                             </div>
                             {/* Speech bubble triangle */}
                             <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[15px] border-t-white mx-auto mt-[-4px]"></div>
                        </div>
                    )}

                    {/* CSS Villain Character */}
                    <div className="w-full aspect-square relative flex flex-col items-center justify-end filter drop-shadow-[0_20px_20px_rgba(0,0,0,0.8)]">
                        
                        {/* Mugshot Board Overlay */}
                        <div className="absolute top-10 z-50 bg-black/80 border-2 border-white text-white p-2 font-mono text-xs text-center transform -rotate-6 shadow-xl">
                          MINNESOTA PD<br/>
                          CASE #80085<br/>
                          <span className="text-xl font-bold text-red-500">WANTED</span>
                        </div>

                        {/* Head (The Black House) */}
                        <div className="w-48 h-40 bg-[#111] border-4 border-[#333] relative z-20 flex items-center justify-center shadow-inner">
                            {/* Roof */}
                            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[100px] border-l-transparent border-r-[100px] border-r-transparent border-b-[80px] border-b-[#111]"></div>
                            
                            {/* Face */}
                            <div className="flex flex-col gap-3 items-center mt-4">
                                {/* Eyes - Stark White & Intense */}
                                <div className="flex gap-6">
                                    <div className="w-10 h-3 bg-white shadow-[0_0_15px_white]"></div>
                                    <div className="w-10 h-3 bg-white shadow-[0_0_15px_white]"></div>
                                </div>
                                
                                {/* The GNARLY TEETH Mouth */}
                                <div className="w-24 h-12 bg-[#2a0a0a] border-2 border-white/20 rounded-md overflow-hidden relative flex justify-center items-center px-1">
                                    {/* Upper Teeth */}
                                    <div className="absolute top-0 flex gap-0.5 w-full justify-center">
                                      <div className="w-3 h-4 bg-yellow-100 border border-yellow-900 rounded-b-sm"></div>
                                      <div className="w-4 h-5 bg-yellow-200 border border-yellow-900 rounded-b-sm"></div>
                                      <div className="w-2 h-3 bg-yellow-600 border border-yellow-900 rounded-b-sm"></div> {/* Rotten tooth */}
                                      <div className="w-3 h-4 bg-yellow-100 border border-yellow-900 rounded-b-sm"></div>
                                    </div>
                                    
                                    {/* Lower Teeth */}
                                    <div className="absolute bottom-0 flex gap-0.5 w-full justify-center">
                                      <div className="w-3 h-3 bg-yellow-200 border border-yellow-900 rounded-t-sm"></div>
                                      <div className="w-2 h-4 bg-yellow-100 border border-yellow-900 rounded-t-sm"></div>
                                      <div className="w-4 h-3 bg-yellow-300 border border-yellow-900 rounded-t-sm"></div>
                                      <div className="w-3 h-4 bg-yellow-600 border border-yellow-900 rounded-t-sm"></div> {/* Rotten tooth */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Body (Dark Sweater) */}
                        <div className="w-44 h-36 bg-gray-900 border-4 border-[#333] -mt-2 z-10 rounded-t-3xl relative">
                           {/* Gold Chain */}
                           <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-16 border-b-4 border-yellow-500 rounded-full"></div>
                        </div>
                        
                        {/* Legs (Prison Pants?) */}
                        <div className="w-36 h-24 bg-orange-700 border-4 border-[#333] -mt-1 z-0 flex justify-center gap-1">
                            <div className="w-1 h-full bg-black/20"></div>
                        </div>

                         {/* Shoes */}
                         <div className="flex gap-4 -mt-4 z-20">
                            <div className="w-16 h-10 bg-black border-2 border-white/20 rounded-lg"></div>
                            <div className="w-16 h-10 bg-black border-2 border-white/20 rounded-lg"></div>
                         </div>
                    </div>

                </div>
            </div>
        </div>
      </div>
      
      {/* Ticker Tape Bottom */}
      <div className="absolute bottom-0 left-0 w-full bg-caution text-black font-news text-xl py-2 z-20 border-t-4 border-black">
        <div className="animate-marquee whitespace-nowrap">
          BREAKING NEWS: SUBSIDIES SIPHONED +++ MILLIONS MISSING +++ FEDS AT THE DOOR +++ DAYCARE OWNER "JUST CHILLING" +++ $DAYCARE TOKEN SURGING +++ INVESTIGATION ONGOING +++
        </div>
      </div>

    </section>
  );
};

export default Hero;