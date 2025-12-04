
import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { X, ShoppingBag, Check } from 'lucide-react';

interface ProductModalProps {
    product: Product;
    onClose: () => void;
    onAddToCart: (product: Product, size: string) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onAddToCart }) => {
    const [selectedSize, setSelectedSize] = useState<string>('');
    const [isAdded, setIsAdded] = useState(false);
    const sizes = ['S', 'M', 'L', 'XL'];

    // Close on escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    const handleAddToCart = () => {
        if (!selectedSize) return;
        onAddToCart(product, selectedSize);
        setIsAdded(true);
        // Reset "Added" state after delay or close modal
        setTimeout(() => {
            onClose();
        }, 1000);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal Window */}
            <div className="relative bg-[#0F0F0F] border border-[#CCFF00] w-full max-w-4xl h-auto max-h-[90vh] overflow-y-auto grid grid-cols-1 md:grid-cols-2 shadow-[0_0_50px_rgba(204,255,0,0.15)] animate-in fade-in zoom-in-95 duration-300">
                
                {/* Close Button */}
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 text-white hover:text-[#CCFF00] transition-colors cursor-hover"
                >
                    <X className="w-8 h-8" />
                </button>

                {/* Left: Image */}
                <div className="relative h-[40vh] md:h-full bg-black border-b md:border-b-0 md:border-r border-[#333]">
                    <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover filter contrast-125"
                    />
                    {/* Status Badge */}
                    {product.status && (
                        <div className="absolute top-6 left-6 bg-[#CCFF00] text-black font-mono text-xs font-bold px-3 py-1">
                            {product.status.toUpperCase().replace('_', ' ')}
                        </div>
                    )}
                </div>

                {/* Right: Info Form */}
                <div className="p-8 md:p-12 flex flex-col justify-between relative">
                     {/* Decorative noise inside form */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>

                    <div className="relative z-10">
                        <div className="font-mono text-[10px] text-[#CCFF00] mb-2 uppercase tracking-widest">
                            System // Product_Details
                        </div>
                        <h2 className="font-['Oswald'] text-4xl md:text-5xl uppercase text-white mb-2 leading-none">
                            {product.name}
                        </h2>
                        <div className="text-2xl font-['JetBrains_Mono'] text-white mb-8 border-b border-[#333] pb-4 inline-block">
                            {product.price.toLocaleString('ru-RU')} ₽
                        </div>

                        <div className="space-y-6">
                            <p className="font-mono text-sm text-[#B0B0B0] leading-relaxed">
                                {product.description || "Материалы премиум-класса. Усиленные швы. Лимитированная серия. Изделие прошло обработку кислотным стиранием для создания уникального гранж-эффекта."}
                            </p>

                            {/* Size Selector */}
                            <div>
                                <label className="block font-mono text-xs text-[#666] mb-3 uppercase">Выберите Размер:</label>
                                <div className="flex gap-4">
                                    {sizes.map(size => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`cursor-hover w-12 h-12 flex items-center justify-center border font-mono text-sm transition-all duration-200 ${
                                                selectedSize === size 
                                                    ? 'bg-[#CCFF00] text-black border-[#CCFF00] font-bold' 
                                                    : 'bg-transparent text-white border-[#333] hover:border-[#CCFF00] hover:text-[#CCFF00]'
                                            }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Area */}
                    <div className="mt-12 relative z-10">
                        <button
                            onClick={handleAddToCart}
                            disabled={!selectedSize || isAdded}
                            className={`cursor-hover w-full py-4 font-['Chakra_Petch'] font-bold text-lg uppercase clip-sharp transition-all duration-300 flex items-center justify-center gap-2 ${
                                isAdded 
                                    ? 'bg-white text-black border border-white'
                                    : !selectedSize 
                                        ? 'bg-[#1a1a1a] text-[#555] border border-[#333] cursor-not-allowed'
                                        : 'bg-[#CCFF00] text-black border border-[#CCFF00] hover:shadow-[0_0_20px_rgba(204,255,0,0.5)] active:scale-95'
                            }`}
                        >
                            {isAdded ? (
                                <>
                                    <Check className="w-5 h-5" /> ДОБАВЛЕНО
                                </>
                            ) : (
                                <>
                                    <ShoppingBag className="w-5 h-5" /> {selectedSize ? 'ДОБАВИТЬ В КОРЗИНУ' : 'ВЫБЕРИТЕ РАЗМЕР'}
                                </>
                            )}
                        </button>
                        
                        {!selectedSize && (
                            <p className="text-center font-mono text-[10px] text-red-500 mt-2 uppercase animate-pulse">
                                * Необходим выбор конфигурации
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;