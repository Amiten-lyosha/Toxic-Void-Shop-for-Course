import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[calc(100vh-4rem)] overflow-hidden border-b border-[#333]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1549890984-7a912c418086?q=80&w=2576&auto=format&fit=crop" 
          alt="Streetwear Background" 
          className="w-full h-full object-cover filter grayscale contrast-125 brightness-50 scale-105"
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-4">
        <div className="relative mix-blend-difference text-center select-none">
          <h1 className="font-['Oswald'] text-[12vw] md:text-[15vw] leading-[0.8] font-bold uppercase tracking-tighter text-white">
            БЕЗ ПРАВИЛ
          </h1>
          <h1 className="font-['Oswald'] text-[12vw] md:text-[15vw] leading-[0.8] font-bold uppercase tracking-tighter text-white italic ml-8 md:ml-32">
            ТОЛЬКО СТИЛЬ
          </h1>
        </div>

        <div className="mt-12 z-20">
          <button className="cursor-hover bg-[#CCFF00] text-black font-['Chakra_Petch'] font-bold text-lg md:text-xl px-12 py-4 uppercase tracking-wider border border-[#CCFF00] glitch-hover transition-all duration-200 clip-sharp">
            ВОЙТИ В ПУСТОТУ
          </button>
        </div>
      </div>

      {/* Decorative Corners */}
      <div className="absolute top-8 left-8 w-4 h-4 border-t border-l border-[#CCFF00] z-20"></div>
      <div className="absolute top-8 right-8 w-4 h-4 border-t border-r border-[#CCFF00] z-20"></div>
      <div className="absolute bottom-8 left-8 w-4 h-4 border-b border-l border-[#CCFF00] z-20"></div>
      <div className="absolute bottom-8 right-8 w-4 h-4 border-b border-r border-[#CCFF00] z-20"></div>
    </section>
  );
};

export default Hero;