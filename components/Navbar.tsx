
import React, { useMemo } from 'react';
import { Search } from 'lucide-react';
import { CartItem } from '../types';

interface NavbarProps {
  onNavigate: (view: 'home' | 'shop' | 'drops' | 'archive' | 'cart') => void;
  cart: CartItem[];
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, cart }) => {
  const totalPrice = useMemo(() => {
    return cart.reduce((total, item) => total + item.price, 0);
  }, [cart]);

  return (
    <nav className="fixed top-0 left-0 w-full z-40 border-b border-[#333] bg-[#121212]/90 backdrop-blur-sm">
      <div className="flex justify-between items-center h-16 px-4 md:px-8 max-w-[1920px] mx-auto">
        {/* Brand */}
        <div className="w-1/4">
          <button onClick={() => onNavigate('home')} className="cursor-hover font-['Oswald'] text-2xl md:text-3xl font-bold tracking-tighter hover:text-[#CCFF00] transition-colors uppercase italic">
            Toxic Void<span className="bg-gradient-to-br from-white/10 to-white/0 bg-clip-text text-transparent">.</span>
          </button>
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-12 font-mono text-xs tracking-widest text-[#B0B0B0]">
          <button onClick={() => onNavigate('shop')} className="cursor-hover hover:text-white hover:underline decoration-[#CCFF00] underline-offset-4">[ МАГАЗИН ]</button>
          <button onClick={() => onNavigate('drops')} className="cursor-hover hover:text-white hover:underline decoration-[#CCFF00] underline-offset-4 text-[#CCFF00]/80 hover:text-[#CCFF00] animate-pulse">[ ДРОПЫ 🔥 ]</button>
          <button onClick={() => onNavigate('archive')} className="cursor-hover hover:text-white hover:underline decoration-[#CCFF00] underline-offset-4">[ АРХИВ ]</button>
        </div>

        {/* Actions */}
        <div className="w-1/4 flex justify-end items-center gap-6">
          <Search className="w-5 h-5 text-white hover:text-[#CCFF00] cursor-hover transition-colors hidden sm:block" />
          
          <button 
            onClick={() => onNavigate('cart')}
            className="cursor-hover flex items-center gap-2 font-mono text-xs border border-[#333] px-3 py-1 hover:border-[#CCFF00] transition-colors group bg-black/50"
          >
            <span className="group-hover:text-[#CCFF00] transition-colors">КОРЗИНА</span>
            
            <div className={`flex items-center gap-2 border-l border-[#333] pl-2 ml-1 ${cart.length > 0 ? 'text-[#CCFF00]' : 'text-[#666]'}`}>
              <span className="font-bold">[{cart.length}]</span>
              {cart.length > 0 && (
                 <span className="hidden md:inline group-hover:text-white transition-colors">
                    :: {totalPrice.toLocaleString('ru-RU')} ₽
                 </span>
              )}
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
