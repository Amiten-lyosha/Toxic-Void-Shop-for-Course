
import React from 'react';
import { Product } from '../types';
import { ShoppingBag } from 'lucide-react';

interface ProductCardProps {
    product: Product;
    onClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
    return (
        <div 
            onClick={onClick}
            className="group relative border border-[#333] bg-[#1a1a1a] overflow-hidden cursor-hover flex flex-col h-full hover:border-[#CCFF00] transition-colors"
        >
            {/* Status Label */}
            {product.status && (
                <div className={`absolute top-2 right-2 z-20 px-2 py-1 font-mono text-[10px] font-bold border ${
                    product.status === 'new' ? 'border-[#CCFF00] text-[#CCFF00]' :
                    product.status === 'sold_out' ? 'border-red-500 text-red-500 bg-red-500/10' :
                    'border-orange-400 text-orange-400'
                }`}>
                    {product.status === 'new' ? 'NEW_ARRIVAL' :
                     product.status === 'sold_out' ? 'SOLD_OUT' : 'LOW_STOCK'}
                </div>
            )}

            {/* Image Container with Glitch Effect */}
            <div className="relative aspect-[3/4] overflow-hidden">
                <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0 grayscale contrast-125"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[#CCFF00]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 mix-blend-overlay"></div>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow justify-between border-t border-[#333]">
                <div>
                    <h3 className="font-['Oswald'] text-lg leading-tight uppercase text-white mb-2 group-hover:text-[#CCFF00] transition-colors">
                        {product.name}
                    </h3>
                    <p className="font-mono text-sm text-[#B0B0B0]">
                        {product.price.toLocaleString('ru-RU')} ₽
                    </p>
                </div>

                <button 
                    disabled={product.status === 'sold_out'}
                    className={`mt-4 w-full py-2 flex items-center justify-center gap-2 font-mono text-xs font-bold uppercase border transition-all duration-200 
                    ${product.status === 'sold_out' 
                        ? 'border-[#333] text-[#555] cursor-not-allowed' 
                        : 'border-[#333] text-white group-hover:bg-[#CCFF00] group-hover:text-black group-hover:border-[#CCFF00]'
                    }`}
                >
                    {product.status === 'sold_out' ? (
                        'НЕТ В НАЛИЧИИ'
                    ) : (
                        <>
                            <ShoppingBag className="w-3 h-3" /> В КОРЗИНУ
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};

export default ProductCard;