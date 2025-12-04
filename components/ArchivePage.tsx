
import React from 'react';
import { products } from '../data/products';
import { ArrowRight, Lock, Database, AlertOctagon } from 'lucide-react';

interface ArchivePageProps {
    onNavigateToDrops: () => void;
}

const ArchivePage: React.FC<ArchivePageProps> = ({ onNavigateToDrops }) => {
    // Only show Sold Out items
    const archiveItems = products.filter(p => p.status === 'sold_out');

    return (
        <div className="min-h-screen bg-[#050505] pt-16 pb-20 selection:bg-[#CCFF00] selection:text-black">
            {/* A. Archive Header */}
            <header className="relative w-full py-20 px-4 md:px-8 border-b border-[#333] overflow-hidden min-h-[50vh] flex flex-col items-center justify-center">
                {/* Background Decor */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#CCFF00] to-transparent opacity-50"></div>
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#CCFF00_1px,transparent_1px)] [background-size:16px_16px]"></div>
                
                <div className="relative z-10 flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 border border-[#CCFF00] px-3 py-1 mb-8 bg-[#CCFF00]/5 backdrop-blur-sm transform -skew-x-12">
                         <Database className="w-4 h-4 text-[#CCFF00]" />
                         <span className="font-mono text-xs text-[#CCFF00] font-bold tracking-widest uppercase">DATABASE_OFFLINE</span>
                    </div>

                    <div className="relative text-center select-none">
                        <h1 className="font-['Oswald'] text-[15vw] leading-[0.8] font-bold uppercase tracking-tighter text-white mix-blend-difference">
                            АРХИВ
                        </h1>
                    </div>
                    
                    <h2 className="font-['Chakra_Petch'] text-[#888] text-sm md:text-base max-w-2xl mx-auto uppercase tracking-wider mt-12">
                        <span className="text-[#CCFF00]">//</span> История потерянных артефактов. Эксклюзивность, ставшая легендой.
                    </h2>
                </div>
            </header>

            {/* B. The Trophy Gallery */}
            <section className="max-w-[1920px] mx-auto p-4 md:p-12">
                {/* Grid Line Decoration */}
                <div className="flex justify-between font-mono text-[10px] text-[#333] mb-4 uppercase border-b border-[#333] pb-2">
                    <span>Target: Lost_Items</span>
                    <span>Count: {archiveItems.length}</span>
                    <span>Status: [ TERMINATED ]</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
                    {archiveItems.map((item, index) => (
                        <div key={item.id} className="group relative bg-[#0a0a0a] border border-[#333] hover:border-[#CCFF00] transition-all duration-300 flex flex-col">
                            
                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#333] group-hover:border-[#CCFF00] transition-colors z-20"></div>

                            {/* Grayscale Image with Glitch Hover */}
                            <div className="relative aspect-square overflow-hidden bg-black border-b border-[#333] group-hover:border-[#CCFF00]/50 transition-colors">
                                <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    className="w-full h-full object-cover opacity-60 grayscale contrast-125 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
                                />
                                
                                {/* Scanline Overlay */}
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none"></div>

                                {/* Status Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center z-20">
                                    <div className="border-2 border-[#333] group-hover:border-[#CCFF00] px-8 py-4 bg-black/80 backdrop-blur-sm transform -rotate-6 group-hover:rotate-0 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(204,255,0,0.2)]">
                                        <span className="font-['Oswald'] text-3xl md:text-4xl text-[#666] group-hover:text-[#CCFF00] uppercase tracking-widest transition-colors">
                                            SOLD OUT
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Item Details */}
                            <div className="p-6 relative">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="font-['Oswald'] text-2xl text-[#888] uppercase group-hover:text-white transition-colors leading-none">
                                        {item.name}
                                    </h3>
                                    <AlertOctagon className="w-5 h-5 text-[#333] group-hover:text-[#CCFF00] transition-colors" />
                                </div>

                                {/* Block Facts */}
                                <div className="space-y-3 font-mono text-[10px] text-[#555] border-l-2 border-[#333] group-hover:border-[#CCFF00] pl-4 mb-6 transition-colors">
                                    <p className="flex justify-between items-center group-hover:text-[#888] transition-colors">
                                        <span>СТАТУС_СИСТЕМЫ:</span> 
                                        <span className="text-[#CCFF00] bg-[#CCFF00]/10 px-2 py-0.5">УДАЛЕНО</span>
                                    </p>
                                    <p className="flex justify-between items-center group-hover:text-[#888] transition-colors">
                                        <span>ВРЕМЯ_ЖИЗНИ:</span> 
                                        <span>
                                            {index === 0 ? '00:01:45' : index === 1 ? '00:12:30' : '00:00:58'}
                                        </span>
                                    </p>
                                    <p className="flex justify-between items-center group-hover:text-[#888] transition-colors">
                                        <span>ВЛАДЕЛЬЦЕВ:</span> 
                                        <span>{index === 0 ? '75' : '150'} / {index === 0 ? '75' : '150'}</span>
                                    </p>
                                </div>

                                {/* Inactive Button */}
                                <div className="w-full py-3 border border-[#333] bg-[#111] text-[#444] font-mono text-xs uppercase cursor-not-allowed flex items-center justify-center gap-2 group-hover:border-[#CCFF00]/30 transition-colors">
                                    <Lock className="w-3 h-3" /> ДОСТУП ЗАПРЕЩЕН
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* C. CTA Section */}
            <section className="max-w-5xl mx-auto mt-24 px-4 text-center">
                <div className="bg-[#0a0a0a] border border-[#333] hover:border-[#CCFF00] p-8 md:p-20 relative overflow-hidden group transition-all duration-500">
                    
                    {/* Animated Background Grid */}
                    <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#CCFF00] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="w-16 h-16 border border-[#333] flex items-center justify-center mb-8 group-hover:border-[#CCFF00] group-hover:bg-[#CCFF00] group-hover:text-black transition-all duration-300 rounded-full">
                            <ArrowRight className="w-8 h-8" />
                        </div>
                        
                        <h2 className="font-['Oswald'] text-4xl md:text-6xl uppercase text-white mb-4">
                            НЕ БУДЬ <span className="text-outline stroke-[#CCFF00] text-transparent group-hover:text-[#CCFF00] transition-colors duration-300">НАБЛЮДАТЕЛЕМ</span>
                        </h2>
                        
                        <p className="font-mono text-[#888] text-sm mb-10 max-w-lg mx-auto">
                            Этого уже не вернуть. Данные стерты. Чтобы не пропустить следующий дроп и не остаться с пустыми руками, подключись к источнику.
                        </p>

                        <div className="w-full flex flex-col md:flex-row gap-6 justify-center items-center">
                            {/* Input */}
                            <div className="relative w-full md:w-auto">
                                <div className="absolute -inset-0.5 bg-[#CCFF00] opacity-30 blur group-hover:opacity-75 transition duration-500"></div>
                                <input 
                                    type="email" 
                                    placeholder="ВВЕДИ_СВОЙ_EMAIL" 
                                    className="relative bg-black border border-[#333] text-white px-6 py-4 font-mono text-sm w-full md:w-80 outline-none focus:border-[#CCFF00] placeholder:text-[#444]"
                                />
                            </div>

                            {/* Button */}
                            <button 
                                onClick={onNavigateToDrops}
                                className="cursor-hover relative bg-[#CCFF00] text-black font-['Chakra_Petch'] font-bold text-lg px-10 py-4 uppercase clip-sharp hover:shadow-[0_0_30px_rgba(204,255,0,0.6)] transition-all duration-300 active:scale-95"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    СМОТРЕТЬ АКТИВНЫЕ ДРОПЫ <ArrowRight className="w-5 h-5" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ArchivePage;
