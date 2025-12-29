import React from 'react';

const Marquee: React.FC = () => {
  return (
    <div className="relative flex overflow-x-hidden bg-caution text-black py-2 border-y-4 border-black z-30">
      <div className="animate-marquee whitespace-nowrap flex items-center font-news text-2xl tracking-tight uppercase font-bold">
        <span className="mx-8">🚨 BREAKING: DAYCARE RAIDED</span>
        <span className="mx-8">MILLIONS MISSING</span>
        <span className="mx-8">$DAYCARE TOKEN SURVIVES</span>
        <span className="mx-8">FEDS CONFUSED</span>
        <span className="mx-8">"I DID NOT DO IT" SAYS OWNER</span>
        <span className="mx-8">📈 CHART GOING PARABOLIC</span>
        <span className="mx-8">🚨 BREAKING: DAYCARE RAIDED</span>
        <span className="mx-8">MILLIONS MISSING</span>
        <span className="mx-8">$DAYCARE TOKEN SURVIVES</span>
        <span className="mx-8">FEDS CONFUSED</span>
        <span className="mx-8">"I DID NOT DO IT" SAYS OWNER</span>
        <span className="mx-8">📈 CHART GOING PARABOLIC</span>
      </div>
    </div>
  );
};

export default Marquee;