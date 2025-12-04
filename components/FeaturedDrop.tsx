import React, { useState, useEffect } from 'react';
import { Heart, ShoppingBag, Timer } from 'lucide-react';
import { activeDrops } from '../data/drops';

const FeaturedDrop: React.FC = () => {
  // Get the first active drop or null
  const currentDrop = activeDrops.length > 0 ? activeDrops[0] : null;

  // Timer State
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(currentDrop?.endsAt || ''));

  useEffect(() => {
    if (!currentDrop) return;

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(currentDrop.endsAt));
    }, 1000);

    return () => clearInterval(timer);
  }, [currentDrop]);

  // Helper to format title (Last word outlined)
  const renderTitle = (name: string) => {
    const parts = name.split(' ');
    if (parts.length === 1) return <span className="text-white">{name}</span>;
    
    const lastWord = parts.pop();
    const firstPart = parts.join(' ');

    return (
      <>
        {firstPart} <br/>
        <span className="text-outline stroke-white">{lastWord}</span>
      </>
    );
  };

  // If no active drops, we can hide the section or show a "Wait for it" placeholder.
  // For now, let's return null to keep the layout clean if empty, or render a placeholder.
  if (!currentDrop) {
     return (
        <section className="py-24 bg-[#0F0F0F] border-b border-[#333] text-center">
            <h2 className="font-['Oswald'] text-4xl text-[#333] uppercase">NO_ACTIVE_DROPS // SYSTEM_IDLE</h2>
        </section>
     );
  }

  return (
    <section className="max-w-[1920px] mx-auto border-b border-[#333] relative overflow-hidden py-24 bg-[#0F0F0F]">
      
      {/* Background Grid */}
      <div className="absolute inset-0 grid grid-cols-6 pointer-events-none opacity-10">
        <div className="border-r border-[#333] h-full"></div>
        <div className="border-r border-[#333] h-full"></div>
        <div className="border-r border-[#333] h-full"></div>
        <div className="border-r border-[#333] h-full"></div>
        <div className="border-r border-[#333] h-full"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Product 3D Display Effect */}
        <div className="flex flex-col items-center justify-center relative">
          {/* Decorative Circles */}
          <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-[#333] rounded-full animate-[spin_10s_linear_infinite]"></div>
          <div className="absolute w-[280px] h-[280px] md:w-[480px] md:h-[480px] border border-[#CCFF00] rounded-full opacity-20 animate-[spin_15s_linear_infinite_reverse]"></div>
          
          <div className="relative z-10 aspect-square w-full max-w-md">
             <img 
                src={currentDrop.image} 
                alt={currentDrop.name} 
                className="w-full h-full object-cover rounded-sm animate-float drop-shadow-[0_20px_50px_rgba(204,255,0,0.15)] grayscale hover:grayscale-0 transition-all duration-500 border border-[#333]"
            />
          </div>
          
          <div className="absolute bottom-0 text-[8vw] md:text-[5vw] font-['Oswald'] font-bold text-[#1a1a1a] select-none -z-10 whitespace-nowrap opacity-50">
            LIMITED_EDITION
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col space-y-8">
          <div className="flex items-center gap-4">
            <span className="w-3 h-3 bg-[#CCFF00] animate-pulse rounded-full box-shadow-[0_0_10px_#CCFF00]"></span>
            <span className="font-mono text-[#CCFF00] tracking-widest text-sm uppercase">Текущий Эксклюзив</span>
          </div>

          <h2 className="font-['Oswald'] text-5xl md:text-7xl font-bold uppercase leading-[0.9] text-white break-words">
            {renderTitle(currentDrop.name)}
          </h2>

          {/* Digital Countdown */}
          <div className="flex items-center gap-4">
             <div className="font-mono text-4xl md:text-5xl text-[#CCFF00] tracking-widest bg-black/50 border border-[#CCFF00]/30 p-4 inline-block w-fit relative overflow-hidden group">
                <div className="absolute inset-0 bg-[#CCFF00]/10 animate-pulse"></div>
                <span className="relative z-10">
                    {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
                </span>
             </div>
             <div className="flex flex-col font-mono text-[10px] text-[#666] uppercase">
                <span>Time</span>
                <span>Remaining</span>
             </div>
          </div>

          <div className="space-y-4 font-mono text-sm text-[#B0B0B0] max-w-md border-l-2 border-[#333] pl-6">
            <p>Статус: <span className="text-[#CCFF00]">АКТИВЕН</span></p>
            <p>Остаток: {currentDrop.remainingStock} / {currentDrop.totalStock} шт.</p>
            <p>Категория: {currentDrop.category.toUpperCase()}</p>
          </div>

          <div className="flex gap-4 pt-4">
            <button className="cursor-hover flex-1 bg-white text-black font-bold uppercase py-4 hover:bg-[#CCFF00] transition-colors border border-white hover:border-[#CCFF00] font-['Chakra_Petch'] text-lg flex items-center justify-center gap-2">
              <ShoppingBag className="w-5 h-5" /> КУПИТЬ - {currentDrop.price.toLocaleString('ru-RU')} ₽
            </button>
            <button className="cursor-hover px-6 border border-[#333] hover:border-white text-white transition-colors flex items-center justify-center bg-[#1a1a1a]">
              <Heart className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Helpers (Duplicated to avoid complex props passing for now) ---
function calculateTimeLeft(endTime: string) {
    const difference = +new Date(endTime) - +new Date();
    let timeLeft = { hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
        timeLeft = {
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }
    return timeLeft;
}

function formatTime(val: number) {
    return val < 10 ? `0${val}` : val;
}

export default FeaturedDrop;