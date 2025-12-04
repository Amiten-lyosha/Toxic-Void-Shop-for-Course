
import React, { useState, useEffect } from 'react';
import { DropProduct, Product } from '../types';
import { activeDrops } from '../data/drops';
import { Timer, Zap, AlertTriangle, Lock, Flame } from 'lucide-react';

interface DropsPageProps {
    onProductClick: (product: Product) => void;
}

const DropsPage: React.FC<DropsPageProps> = ({ onProductClick }) => {
    // Toggle this to test Empty State view:
    // const drops = []; 
    const drops = activeDrops;

    return (
        <div className="min-h-screen bg-[#050505] pt-16 pb-24">
            {/* Hero Section */}
            <section className="relative w-full py-20 px-4 md:px-8 border-b border-[#222] overflow-hidden min-h-[50vh] flex flex-col items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#CCFF00]/10 via-black to-black opacity-50"></div>
                
                {/* Background Glitch Elements */}
                <div className="absolute top-10 left-10 w-32 h-1 bg-[#CCFF00]/30 blur-sm animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-64 h-1 bg-white/10 blur-sm animate-pulse delay-75"></div>

                <div className="relative z-10 max-w-[1920px] mx-auto text-center flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 border border-[#CCFF00]/50 bg-[#CCFF00]/5 px-4 py-1 mb-8 backdrop-blur-md clip-sharp">
                        <span className="w-2 h-2 bg-[#CCFF00] animate-pulse"></span>
                        <span className="font-mono text-xs text-[#CCFF00] tracking-widest uppercase">Live Access Granted</span>
                    </div>
                    
                    {/* Hero Style Typography */}
                    <div className="relative text-center select-none">
                        <h1 className="font-['Oswald'] text-[12vw] leading-[0.8] font-bold uppercase tracking-tighter text-white mix-blend-difference">
                            СЕКРЕТНЫЕ
                        </h1>
                        <h1 className="font-['Oswald'] text-[12vw] leading-[0.8] font-bold uppercase tracking-tighter text-transparent text-outline italic ml-8 md:ml-24 mix-blend-difference">
                            ДРОПЫ
                        </h1>
                    </div>
                    
                    <p className="mt-12 font-mono text-[#888] text-sm md:text-base max-w-xl mx-auto uppercase tracking-wider">
                        Время тает. Лимитированный тираж. <br/>
                        <span className="text-black bg-[#CCFF00] px-1 font-bold">Не упусти свой шанс</span> забрать эксклюзив.
                    </p>
                </div>
            </section>

            {/* Content Area */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12">
                
                {drops.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {drops.map((drop) => (
                            <DropCard key={drop.id} drop={drop} onClick={() => onProductClick(drop)} />
                        ))}
                    </div>
                ) : (
                    <EmptyState />
                )}
            </div>
        </div>
    );
};

// --- Sub-components ---

const DropCard: React.FC<{ drop: DropProduct; onClick: () => void }> = ({ drop, onClick }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(drop.endsAt));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(drop.endsAt));
        }, 1000);
        return () => clearInterval(timer);
    }, [drop.endsAt]);

    const progress = (drop.remainingStock / drop.totalStock) * 100;

    return (
        <div 
            onClick={onClick}
            className="group relative bg-[#0F0F0F] border border-[#222] hover:border-[#CCFF00] transition-all duration-300 overflow-hidden flex flex-col cursor-hover"
        >
            
            {/* Image Section */}
            <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                    src={drop.image} 
                    alt={drop.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-[#CCFF00] text-black font-mono text-xs font-bold px-3 py-1 animate-pulse">
                    LIVE DROP
                </div>
                {/* Discount Badge */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur border border-white/10 text-white font-mono text-xs px-2 py-1">
                    -{Math.round(((drop.originalPrice - drop.price) / drop.originalPrice) * 100)}%
                </div>
            </div>

            {/* Info Section */}
            <div className="p-6 flex flex-col flex-grow relative overflow-hidden">
                {/* Background Noise for Card */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

                <div className="relative z-10">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="font-['Oswald'] text-2xl uppercase text-white group-hover:text-[#CCFF00] transition-colors">
                            {drop.name}
                        </h3>
                        <Flame className="text-[#CCFF00] w-5 h-5" />
                    </div>

                    <p className="font-mono text-xs text-[#666] mb-6 line-clamp-2">
                        Эксклюзивный релиз. Материалы премиум качества. Повторов не будет.
                    </p>

                    {/* Timer */}
                    <div className="mb-6 p-4 bg-[#080808] border border-[#222] group-hover:border-[#CCFF00]/30 transition-colors">
                        <div className="flex items-center justify-between mb-2">
                            <span className="font-mono text-[10px] text-[#CCFF00] uppercase flex items-center gap-1">
                                <Timer className="w-3 h-3" /> До конца:
                            </span>
                        </div>
                        <div className="font-['JetBrains_Mono'] text-3xl md:text-4xl text-white font-bold tracking-widest flex items-baseline gap-2">
                            <span>{formatTime(timeLeft.hours)}</span>:
                            <span>{formatTime(timeLeft.minutes)}</span>:
                            <span className="text-[#CCFF00] animate-pulse">{formatTime(timeLeft.seconds)}</span>
                        </div>
                    </div>

                    {/* Stock Bar */}
                    <div className="mb-6">
                        <div className="flex justify-between font-mono text-[10px] mb-1">
                            <span className="text-[#888]">НАЛИЧИЕ</span>
                            <span className={drop.remainingStock < 10 ? "text-[#CCFF00] font-bold" : "text-[#888]"}>
                                {drop.remainingStock} / {drop.totalStock} ОСТАЛОСЬ
                            </span>
                        </div>
                        <div className="w-full h-2 bg-[#222] overflow-hidden">
                            <div 
                                className="h-full bg-gradient-to-r from-[#CCFF00] to-[#99cc00] transition-all duration-1000"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                    </div>

                    {/* Price & Action */}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#222]">
                        <div className="flex flex-col">
                            <span className="font-mono text-xs text-[#555] line-through decoration-[#CCFF00]/50">
                                {drop.originalPrice.toLocaleString('ru-RU')} ₽
                            </span>
                            <span className="font-['Oswald'] text-2xl text-white">
                                {drop.price.toLocaleString('ru-RU')} ₽
                            </span>
                        </div>
                        <button className="bg-[#CCFF00] hover:bg-white text-black font-['Chakra_Petch'] font-bold uppercase px-8 py-3 clip-sharp transition-all hover:shadow-[0_0_20px_rgba(204,255,0,0.5)]">
                            ЗАБРАТЬ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const EmptyState: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full animate-in fade-in duration-700">
            {/* Message */}
            <div className="text-center mb-16">
                <AlertTriangle className="w-12 h-12 text-[#CCFF00] mx-auto mb-4" />
                <h2 className="font-['Oswald'] text-3xl md:text-5xl uppercase text-white mb-4">
                    SOLD OUT // <span className="text-[#333]">ВСЁ РАСПРОДАНО</span>
                </h2>
                <p className="font-mono text-[#888] max-w-md mx-auto text-sm">
                    Текущие дропы уничтожены. Не расстраивайся. Подпишись на уведомления, чтобы первым узнать о следующем запуске.
                </p>
            </div>

            {/* Newsletter Form */}
            <div className="w-full max-w-lg mb-20">
                <form className="relative group" onSubmit={(e) => e.preventDefault()}>
                    <div className="absolute inset-0 bg-[#CCFF00] blur opacity-10 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <div className="relative flex bg-[#0F0F0F] border border-[#333] p-1 group-focus-within:border-[#CCFF00] transition-colors">
                        <input 
                            type="email" 
                            placeholder="ВВЕДИ СВОЙ E-MAIL" 
                            className="flex-grow bg-transparent text-white font-mono text-sm px-4 outline-none placeholder:text-[#444]"
                        />
                        <button className="bg-white hover:bg-[#CCFF00] text-black font-bold uppercase px-6 py-3 transition-colors font-mono text-xs flex items-center gap-2">
                            УВЕДОМИТЬ <Zap className="w-3 h-3 fill-black" />
                        </button>
                    </div>
                </form>
            </div>

            {/* Teaser */}
            <div className="w-full max-w-4xl border border-[#222] bg-[#0A0A0A] p-1 relative overflow-hidden opacity-50 hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/60 backdrop-blur-sm">
                    <div className="text-center border border-white/20 p-6 bg-black/40">
                        <Lock className="w-8 h-8 text-white mx-auto mb-2" />
                        <h3 className="font-['Oswald'] text-2xl text-white uppercase tracking-widest">СКОРО</h3>
                        <p className="font-mono text-xs text-[#888]">??? 2024</p>
                    </div>
                </div>
                <div className="flex items-center gap-8 p-8 filter blur-sm grayscale opacity-30">
                    <div className="w-1/3 aspect-square bg-[#333]"></div>
                    <div className="w-2/3 space-y-4">
                        <div className="h-8 bg-[#333] w-3/4"></div>
                        <div className="h-4 bg-[#333] w-1/2"></div>
                        <div className="h-4 bg-[#333] w-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Helpers ---

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

export default DropsPage;