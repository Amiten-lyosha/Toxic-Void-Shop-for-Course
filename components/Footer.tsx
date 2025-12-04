
import React from 'react';
import { ArrowRight, Instagram, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white border-t border-[#333] py-20 min-h-[50vh]">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-24">
          
          {/* Branding */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-['Oswald'] text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.8] mb-8 text-[#333]">
              Toxic<br />Void
            </h2>
            <p className="font-mono text-sm text-[#666] max-w-xs">
              Отказ от алгоритмов. <br />
              Уличная одежда для антиутопического настоящего. <br />
              Спроектировано в пустоте.
            </p>
          </div>

          {/* Chaotic Links */}
          <div className="col-span-1 space-y-2">
            <h4 className="font-mono mb-6 bg-gradient-to-br from-white/10 to-white/0 bg-clip-text text-transparent">[ НАВИГАЦИЯ ]</h4>
            <ul className="space-y-2 font-['Oswald'] text-2xl uppercase">
              <li><a href="#" className="cursor-hover hover:pl-4 transition-all duration-300 hover:text-[#CCFF00] inline-block">Магазин</a></li>
              <li><a href="#" className="cursor-hover hover:pl-4 transition-all duration-300 hover:text-[#CCFF00] inline-block">Новинки</a></li>
              <li><a href="#" className="cursor-hover hover:pl-4 transition-all duration-300 hover:text-[#CCFF00] inline-block">Визуал</a></li>
              <li><a href="#" className="cursor-hover hover:pl-4 transition-all duration-300 hover:text-[#CCFF00] inline-block">Инфо</a></li>
              <li><a href="#" className="cursor-hover hover:pl-4 transition-all duration-300 hover:text-[#CCFF00] inline-block">Доставка</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h4 className="font-mono mb-6 bg-gradient-to-br from-white/10 to-white/0 bg-clip-text text-transparent">[ ВСТУПАЙ_В_КУЛЬТ ]</h4>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="ВВЕДИТЕ_EMAIL" 
                  className="w-full bg-[#121212] border border-[#333] p-4 text-white font-mono text-sm outline-none focus:border-[#CCFF00] transition-colors placeholder:text-[#333]" 
                />
                <button type="submit" className="cursor-hover absolute right-4 top-1/2 -translate-y-1/2 text-[#666] group-focus-within:text-[#CCFF00]">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="flex gap-4">
                <a href="#" title="Instagram" className="cursor-hover w-10 h-10 border border-[#333] flex items-center justify-center hover:bg-[#CCFF00] hover:text-black hover:border-[#CCFF00] transition-all">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" title="Telegram" className="cursor-hover w-10 h-10 border border-[#333] flex items-center justify-center hover:bg-[#CCFF00] hover:text-black hover:border-[#CCFF00] transition-all">
                  <Send className="w-4 h-4" />
                </a>
                <a href="#" title="VK" className="cursor-hover w-10 h-10 border border-[#333] flex items-center justify-center hover:bg-[#CCFF00] hover:text-black hover:border-[#CCFF00] transition-all font-bold text-xs">
                  VK
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-[#333] flex flex-col md:flex-row justify-between items-start md:items-center font-mono text-[10px] text-[#444]">
          <p>© 2024 TOXIC VOID. СДЕЛАНО В АДУ.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <span className="cursor-hover hover:text-[#CCFF00]">ПРОТОКОЛ_ПРИВАТНОСТИ</span>
            <span className="cursor-hover hover:text-[#CCFF00]">УСЛОВИЯ_ХАОСА</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
