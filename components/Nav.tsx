import React, { useState } from 'react';
import { Menu, X, Copy, Check, ExternalLink, Gamepad2, Siren, LineChart, Users } from 'lucide-react';
import { CA, PUMP_URL, COMMUNITY_URL, DEXSCREENER_URL } from '../constants';

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyCA = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <nav className="fixed w-full z-50 bg-caution border-b-8 border-black font-news shadow-lg">
      {/* Tape Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #000 10px, #000 20px)'}}>
      </div>

      <div className="max-w-7xl mx-auto flex justify-between items-center p-3 relative z-10">
        <div className="text-3xl font-black italic tracking-tighter text-black flex items-center gap-2">
          <Siren className="text-black animate-spin-slow" />
          $DAYCARE
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 font-bold text-lg uppercase tracking-wider text-black">
          <a href="#game" className="hover:bg-black hover:text-caution px-2 py-1 transition-colors flex items-center gap-1">
             <Gamepad2 size={18} /> RAID
          </a>
          <a href="#about" className="hover:bg-black hover:text-caution px-2 py-1 transition-colors">EVIDENCE</a>
          <a href="#tokenomics" className="hover:bg-black hover:text-caution px-2 py-1 transition-colors">THE STASH</a>
          
          <a href={COMMUNITY_URL} target="_blank" rel="noreferrer" className="hover:bg-black hover:text-caution px-2 py-1 transition-colors flex items-center gap-1">
            X COMM <Users size={18}/>
          </a>

          <a href={DEXSCREENER_URL} target="_blank" rel="noreferrer" className="hover:bg-black hover:text-caution px-2 py-1 transition-colors flex items-center gap-1">
            DEX <LineChart size={18}/>
          </a>
          
          <button 
            onClick={copyCA}
            className="flex items-center gap-2 bg-black text-white px-4 py-1 rounded-sm border-2 border-white hover:bg-white hover:text-black hover:border-black transition-all"
          >
            <span className="text-sm font-mono">{CA.slice(0, 4)}...{CA.slice(-4)}</span>
            {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
          </button>
          
          <a 
            href={PUMP_URL} 
            target="_blank" 
            rel="noreferrer"
            className="bg-siren text-white px-6 py-2 rounded-sm border-2 border-black font-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all"
          >
            SEIZE COINS
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-black">
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-caution border-b-4 border-black p-6 flex flex-col space-y-4 font-news text-xl border-t-2 border-black shadow-2xl">
          <a href="#game" onClick={() => setIsOpen(false)} className="text-black font-bold flex items-center gap-2 uppercase"><Gamepad2 size={20} /> RAID</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="text-black font-bold uppercase">EVIDENCE</a>
          <a href="#tokenomics" onClick={() => setIsOpen(false)} className="text-black font-bold uppercase">THE STASH</a>
          <a href={COMMUNITY_URL} target="_blank" rel="noreferrer" className="text-black font-bold uppercase flex items-center gap-2">X Community <Users size={20}/></a>
          <a href={DEXSCREENER_URL} target="_blank" rel="noreferrer" className="text-black font-bold uppercase flex items-center gap-2">DexScreener <LineChart size={20}/></a>
          <div onClick={copyCA} className="cursor-pointer text-sm font-mono bg-black text-white border-2 border-white p-3 rounded-none flex justify-between items-center">
             <span>{CA.slice(0, 15)}...</span>
             {copied ? <Check size={18} /> : <Copy size={18} />}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;