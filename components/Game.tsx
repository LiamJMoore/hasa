import React, { useState, useEffect, useRef } from 'react';
import { Ban, Siren, Trophy, Aperture } from 'lucide-react';

const Game: React.FC = () => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [targetPosition, setTargetPosition] = useState({ top: '50%', left: '50%' });
  const [highScore, setHighScore] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setIsPlaying(true);
    moveTarget();
  };

  const moveTarget = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const x = Math.random() * (container.clientWidth - 80);
      const y = Math.random() * (container.clientHeight - 80);
      setTargetPosition({ top: `${y}px`, left: `${x}px` });
    }
  };

  const handleClick = () => {
    if (!isPlaying) return;
    setScore(s => s + 2500000); // Seizing large subsidy amounts
    moveTarget();
  };

  useEffect(() => {
    if (timeLeft > 0 && isPlaying) {
      const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && isPlaying) {
      setIsPlaying(false);
      if (score > highScore) setHighScore(score);
    }
  }, [timeLeft, isPlaying, score, highScore]);

  // Format score as currency
  const formattedScore = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(score);

  return (
    <section id="game" className="py-20 px-4 bg-gray-900 border-t-8 border-caution relative overflow-hidden">
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl font-news text-white mb-2 flex justify-center items-center gap-4 tracking-tighter uppercase">
          <span className="text-red-600 animate-pulse">●</span> CCTV CAMERA 04
        </h2>
        <p className="font-mono text-green-500 text-sm mb-8 uppercase tracking-widest">
          // DAYCARE SURVEILLANCE FEED // UNUSUAL ACTIVITY DETECTED
        </p>

        {/* The Monitor Container */}
        <div className="bg-black p-2 rounded-xl shadow-[0_0_50px_rgba(0,0,0,1)] border-4 border-gray-800">
          
          {/* Game Area / Screen */}
          <div 
            ref={containerRef}
            className="relative h-[450px] bg-black overflow-hidden cursor-crosshair group border border-gray-800"
            style={{
                backgroundImage: 'radial-gradient(circle, #051a05 0%, #000000 100%)'
            }}
          >
            {/* Night Vision Green Overlay */}
            <div className="absolute inset-0 bg-green-900/10 pointer-events-none mix-blend-overlay z-10"></div>
            
            {/* Scanlines for Game Screen */}
            <div className="absolute inset-0 z-10 pointer-events-none opacity-20" 
                 style={{backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 2px, 3px 100%'}}>
            </div>

            {/* UI Overlay on Camera */}
            <div className="absolute top-4 left-4 text-green-500 font-mono text-xs z-20 flex flex-col items-start gap-1">
                <span>CAM 04 [NURSERY]</span>
                <span>{new Date().toLocaleTimeString()}</span>
                {isPlaying && <span className="text-red-500 animate-pulse font-bold">REC ●</span>}
            </div>

            <div className="absolute top-4 right-4 text-green-500 font-mono text-xl z-20 text-right">
                <div className="text-xs opacity-70">SEIZED FUNDS</div>
                <div className="font-bold">{formattedScore}</div>
            </div>

            {!isPlaying && timeLeft === 0 && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 z-30 backdrop-blur-sm">
                <div className="border border-green-500 p-8 bg-black/90 max-w-md w-full shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                  <h3 className="font-news text-4xl mb-2 text-white uppercase tracking-widest">
                      {score > 0 ? "SUSPECTS DETAINED" : "INITIATE RAID"}
                  </h3>
                  {score > 0 && <p className="font-mono text-green-500 mb-6 text-sm border-b border-green-900 pb-4">
                      ASSET SEIZURE REPORT: {formattedScore}
                  </p>}
                  <button 
                    onClick={startGame}
                    className="w-full bg-green-700 text-black font-bold text-xl py-3 hover:bg-green-600 transition-colors uppercase tracking-widest flex items-center justify-center gap-2"
                  >
                    {score > 0 ? <Aperture size={20}/> : <Siren size={20}/>}
                    {score > 0 ? "RE-ENGAGE" : "START FEED"}
                  </button>
                </div>
              </div>
            )}

            {isPlaying && (
              <button
                onClick={handleClick}
                style={{ top: targetPosition.top, left: targetPosition.left }}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 active:scale-95 transition-transform duration-75 outline-none group z-20"
              >
                <div className="relative">
                  {/* The Target: Runner with Money Bag - Color adjusted for night vision feel */}
                  <div className="text-8xl filter drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] grayscale-[0.3] contrast-125">
                    🏃🏾‍♂️💰
                  </div>
                  {/* Target Box */}
                  <div className="absolute inset-0 border-2 border-red-500 rounded-lg animate-pulse opacity-50"></div>
                  
                  {/* Hit Effect */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-green-400 font-mono text-sm font-bold opacity-0 group-active:opacity-100 transition-opacity whitespace-nowrap bg-black/80 px-2 py-1 border border-green-500">
                    CONFISCATED!
                  </div>
                </div>
              </button>
            )}
          </div>
          
          {/* Bottom Control Panel Look */}
          <div className="bg-gray-900 p-2 flex justify-between items-center font-mono text-xs text-gray-500 border-t border-gray-700">
             <div>PLAYBACK SPEED: 1.0X</div>
             <div className="text-red-500">TIME REMAINING: 00:{timeLeft.toString().padStart(2, '0')}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Game;