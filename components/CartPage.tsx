
import React from 'react';
import { CartItem } from '../types';
import { Trash2, ArrowRight, ShieldCheck, Terminal } from 'lucide-react';

interface CartPageProps {
    cartItems: CartItem[];
    onRemoveItem: (addedAt: number) => void;
    onCheckout: () => void;
    onNavigateShop: () => void;
}

const CartPage: React.FC<CartPageProps> = ({ cartItems, onRemoveItem, onCheckout, onNavigateShop }) => {
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen bg-[#050505] pt-32 pb-20 flex flex-col items-center justify-center px-4">
                <div className="border border-[#333] bg-[#0F0F0F] p-12 md:p-24 text-center max-w-2xl w-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
                    
                    <Terminal className="w-16 h-16 text-[#333] mx-auto mb-6" />
                    <h2 className="font-['Oswald'] text-4xl text-white uppercase mb-4 tracking-tight">ПУСТОТА ОБНАРУЖЕНА</h2>
                    <p className="font-mono text-[#666] mb-12 uppercase text-xs tracking-widest">
                        // Корзина пуста. Объекты не выбраны.
                    </p>
                    
                    <button 
                        onClick={onNavigateShop}
                        className="cursor-hover relative bg-[#CCFF00] text-black font-['Chakra_Petch'] font-bold text-lg px-10 py-4 uppercase clip-sharp hover:shadow-[0_0_30px_rgba(204,255,0,0.6)] transition-all"
                    >
                        ПЕРЕЙТИ В МАГАЗИН
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#050505] pt-24 pb-20 px-4 md:px-8 max-w-[1920px] mx-auto">
            <header className="mb-12 border-b border-[#333] pb-6">
                <div className="flex items-center gap-2 text-[#CCFF00] font-mono text-xs uppercase mb-2">
                    <span className="w-2 h-2 bg-[#CCFF00] animate-pulse"></span>
                    System checkout protocol
                </div>
                <h1 className="font-['Oswald'] text-5xl md:text-7xl uppercase text-white tracking-tighter">
                    ВАША КОРЗИНА
                </h1>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                
                {/* Cart Items List */}
                <div className="lg:col-span-2 space-y-6">
                    {cartItems.map((item) => (
                        <div 
                            key={item.addedAt} 
                            className="group relative bg-[#0F0F0F] border border-[#222] hover:border-[#CCFF00] p-4 flex flex-col sm:flex-row gap-6 transition-all duration-300"
                        >
                            {/* Image */}
                            <div className="w-full sm:w-32 aspect-[3/4] overflow-hidden border border-[#333]">
                                <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    className="w-full h-full object-cover filter contrast-125 group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            {/* Details */}
                            <div className="flex-grow flex flex-col justify-between py-2">
                                <div>
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-['Oswald'] text-xl uppercase text-white mb-1 group-hover:text-[#CCFF00] transition-colors">
                                            {item.name}
                                        </h3>
                                        <div className="font-mono text-xs text-[#666] uppercase">
                                            ID: {item.id.padStart(4, '0')}
                                        </div>
                                    </div>
                                    <p className="font-mono text-sm text-[#B0B0B0] mb-2">
                                        Категория: {item.category}
                                    </p>
                                    <div className="inline-block border border-[#333] px-3 py-1 font-mono text-xs text-white uppercase bg-black">
                                        Размер: <span className="text-[#CCFF00] font-bold">{item.selectedSize}</span>
                                    </div>
                                </div>

                                <div className="flex justify-between items-end mt-4 sm:mt-0">
                                    <span className="font-['JetBrains_Mono'] text-xl text-white">
                                        {item.price.toLocaleString('ru-RU')} ₽
                                    </span>
                                    
                                    <button 
                                        onClick={() => onRemoveItem(item.addedAt)}
                                        className="cursor-hover flex items-center gap-2 text-[#555] hover:text-red-500 font-mono text-xs uppercase transition-colors"
                                    >
                                        <Trash2 className="w-4 h-4" /> Удалить
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Summary / Checkout */}
                <div className="lg:col-span-1">
                    <div className="sticky top-24 bg-[#0F0F0F] border border-[#CCFF00] p-8 shadow-[0_0_30px_rgba(204,255,0,0.05)]">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#CCFF00] to-transparent"></div>
                        
                        <h3 className="font-['Oswald'] text-3xl uppercase text-white mb-8 border-b border-[#333] pb-4">
                            ИТОГО
                        </h3>

                        <div className="space-y-4 font-mono text-sm mb-8">
                            <div className="flex justify-between text-[#B0B0B0]">
                                <span>Товары ({cartItems.length}):</span>
                                <span>{totalPrice.toLocaleString('ru-RU')} ₽</span>
                            </div>
                            <div className="flex justify-between text-[#B0B0B0]">
                                <span>Доставка:</span>
                                <span className="text-[#CCFF00]">БЕСПЛАТНО</span>
                            </div>
                            <div className="flex justify-between text-[#B0B0B0]">
                                <span>Налог:</span>
                                <span>0 ₽</span>
                            </div>
                            <div className="pt-4 border-t border-[#333] flex justify-between text-lg text-white font-bold">
                                <span>Сумма:</span>
                                <span>{totalPrice.toLocaleString('ru-RU')} ₽</span>
                            </div>
                        </div>

                        <button 
                            onClick={onCheckout}
                            className="cursor-hover w-full bg-[#CCFF00] text-black font-['Chakra_Petch'] font-bold text-xl py-4 uppercase clip-sharp hover:shadow-[0_0_20px_rgba(204,255,0,0.5)] transition-all active:scale-95 flex items-center justify-center gap-2"
                        >
                            ОПЛАТИТЬ <ArrowRight className="w-5 h-5" />
                        </button>

                        <div className="mt-6 flex items-center justify-center gap-2 text-[#444] font-mono text-[10px] uppercase">
                            <ShieldCheck className="w-3 h-3" />
                            Безопасное соединение // Encrypted
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
