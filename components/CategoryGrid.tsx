import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const CategoryGrid: React.FC = () => {
  return (
    <section className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-12 auto-rows-[300px] md:auto-rows-[400px] border-b border-[#333]">
      
      {/* Item 1: Large Left */}
      <div className="group md:col-span-8 border-r border-b md:border-b-0 border-[#333] relative overflow-hidden cursor-hover bg-[#1a1a1a]">
        <img 
          src="https://images.unsplash.com/photo-1617114919297-3c8ddbec014e?q=80&w=3087&auto=format&fit=crop" 
          className="w-full h-full object-cover transition-all duration-500 ease-out filter grayscale contrast-120 group-hover:invert group-hover:scale-105" 
          alt="Jackets" 
        />
        <div className="absolute bottom-0 left-0 p-6 z-10 bg-black/50 backdrop-blur-sm border-t border-r border-[#333]">
          <h3 className="font-['Oswald'] text-4xl uppercase text-white group-hover:text-[#CCFF00]">ТЯЖЕЛЫЙ ЛЮКС</h3>
          <p className="font-mono text-xs text-[#B0B0B0] mt-1">// КУРТКИ_И_ПАЛЬТО</p>
        </div>
        <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ArrowUpRight className="w-10 h-10 text-[#CCFF00]" />
        </div>
      </div>

      {/* Item 2: Top Right */}
      <div className="group md:col-span-4 border-b border-[#333] relative overflow-hidden cursor-hover bg-[#1a1a1a]">
        <img 
          src="https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=2787&auto=format&fit=crop" 
          className="w-full h-full object-cover transition-all duration-500 ease-out filter grayscale contrast-120 group-hover:invert group-hover:scale-105" 
          alt="Headwear" 
        />
        <div className="absolute top-0 left-0 p-6 z-10">
          <h3 className="font-['Oswald'] text-3xl uppercase text-white mix-blend-difference">ГОЛОВНЫЕ УБОРЫ</h3>
        </div>
        <div className="absolute bottom-4 right-4">
          <span className="font-mono text-[10px] border border-[#CCFF00] px-2 py-1 bg-gradient-to-br from-white/10 to-white/0 bg-clip-text text-transparent">
            ЛИМИТИРОВАНО
          </span>
        </div>
      </div>

      {/* Item 3: Bottom Right */}
      <div className="group md:col-span-4 border-r border-[#333] relative overflow-hidden cursor-hover md:border-t-0 bg-[#1a1a1a]">
        <img 
          src="https://images.unsplash.com/photo-1552160753-117159d7419d?q=80&w=3432&auto=format&fit=crop" 
          className="w-full h-full object-cover transition-all duration-500 ease-out filter grayscale contrast-120 group-hover:invert group-hover:scale-105" 
          alt="Bottoms" 
        />
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <h3 className="font-['Oswald'] text-5xl uppercase text-transparent stroke-white text-outline group-hover:text-[#CCFF00] transition-colors">
            НИЗ
          </h3>
        </div>
      </div>
      
      {/* Item 4: Filler / Tech / Archive */}
      <div className="group md:col-span-8 relative bg-[#0a0a0a] flex items-center justify-center border-[#333] overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="text-center z-10 p-8">
          <p className="font-mono text-sm mb-4 animate-pulse bg-gradient-to-br from-white/10 to-white/0 bg-clip-text text-transparent">
            /// СИСТЕМА_ГОТОВА
          </p>
          <h2 className="font-['Oswald'] text-6xl uppercase tracking-tight text-white mb-2">АРХИВ</h2>
          <p className="font-mono text-[#B0B0B0] max-w-md mx-auto text-sm">
            Исследуйте прошлые коллекции. Редкие вещи. Никаких рестоков. Как только они исчезнут, они будут удалены из базы данных.
          </p>
          <button className="cursor-hover mt-8 border border-white text-white px-8 py-2 font-mono text-xs hover:bg-white hover:text-black transition-colors uppercase">
            ДОСТУП К БАЗЕ
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;