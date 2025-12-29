import React from 'react';
import { PUMP_URL, COMMUNITY_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-chill-sweater text-white py-12 px-4 text-center border-t-4 border-black">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-6xl font-meme text-white tracking-wide drop-shadow-md">
          $DAYCARE
        </h2>
        <p className="font-comic text-white/90 max-w-lg mx-auto text-lg">
          "I run the daycare now." - Just a meme coin. We have no affiliation with any actual financial crimes in Minnesota.
        </p>
        <div className="flex justify-center gap-8 font-bold font-comic text-lg">
          <a href={PUMP_URL} target="_blank" rel="noreferrer" className="text-white hover:text-black transition-colors">Pump.fun</a>
          <a href={COMMUNITY_URL} target="_blank" rel="noreferrer" className="text-white hover:text-black transition-colors">Community</a>
        </div>
        <div className="text-xs text-white/70 mt-8 font-mono">
          © 2025 Chill Daycare. All rights reserved (allegedly).
        </div>
      </div>
    </footer>
  );
};

export default Footer;