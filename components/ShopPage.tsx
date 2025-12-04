
import React, { useState } from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import { CategoryType, Product } from '../types';

interface ShopPageProps {
    onProductClick: (product: Product) => void;
}

const ShopPage: React.FC<ShopPageProps> = ({ onProductClick }) => {
    const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
    const [sortOrder, setSortOrder] = useState<'default' | 'asc' | 'desc'>('default');

    const categories: { id: CategoryType; label: string }[] = [
        { id: 'all', label: '[ ВСЕ ]' },
        { id: 'outerwear', label: '[ ВЕРХНЯЯ ОДЕЖДА ]' },
        { id: 'tops', label: '[ ХУДИ_И_СВИТШОТЫ ]' },
        { id: 'bottoms', label: '[ НИЗ ]' },
        { id: 'accessories', label: '[ АКСЕССУАРЫ ]' },
    ];

    // Filter products: Must match category AND NOT be sold out
    const filteredProducts = products
        .filter(p => p.status !== 'sold_out')
        .filter(p => activeCategory === 'all' || p.category === activeCategory)
        .sort((a, b) => {
            if (sortOrder === 'asc') return a.price - b.price;
            if (sortOrder === 'desc') return b.price - a.price;
            return 0; // default order
        });

    return (
        <section className="min-h-screen pt-4 pb-20 max-w-[1920px] mx-auto flex flex-col md:flex-row">
            
            {/* Sidebar / Terminal Controls */}
            <aside className="w-full md:w-1/4 p-6 md:p-12 border-b md:border-b-0 md:border-r border-[#333] sticky top-16 h-auto md:h-[calc(100vh-4rem)] overflow-y-auto">
                {/* Breadcrumbs */}
                <div className="font-mono text-[10px] text-[#666] mb-8">
                    SYSTEM &gt; ROOT &gt; SHOP &gt; CATALOG
                </div>

                <div className="mb-12">
                    <h2 className="font-['Oswald'] text-2xl mb-6 uppercase">КАТЕГОРИИ</h2>
                    <ul className="space-y-3 font-mono text-xs">
                        {categories.map((cat) => (
                            <li key={cat.id}>
                                <button
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`cursor-hover w-full text-left flex items-center group transition-colors ${
                                        activeCategory === cat.id ? 'text-[#CCFF00]' : 'text-[#B0B0B0] hover:text-white'
                                    }`}
                                >
                                    <span className={`mr-2 transition-opacity ${activeCategory === cat.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`}>&gt;</span>
                                    {cat.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="font-['Oswald'] text-2xl mb-6 uppercase">СОРТИРОВКА</h2>
                    <div className="flex flex-col gap-2 font-mono text-xs text-[#B0B0B0]">
                         <button 
                            onClick={() => setSortOrder('default')} 
                            className={`cursor-hover text-left hover:text-white ${sortOrder === 'default' ? 'text-[#CCFF00]' : ''}`}
                         >
                            ПО УМОЛЧАНИЮ
                         </button>
                         <button 
                            onClick={() => setSortOrder('asc')} 
                            className={`cursor-hover text-left hover:text-white ${sortOrder === 'asc' ? 'text-[#CCFF00]' : ''}`}
                         >
                            ПО ЦЕНЕ (UP)
                         </button>
                         <button 
                            onClick={() => setSortOrder('desc')} 
                            className={`cursor-hover text-left hover:text-white ${sortOrder === 'desc' ? 'text-[#CCFF00]' : ''}`}
                         >
                            ПО ЦЕНЕ (DOWN)
                         </button>
                    </div>
                </div>
            </aside>

            {/* Product Grid */}
            <div className="w-full md:w-3/4 p-4 md:p-8">
                <div className="flex justify-between items-center mb-8 px-2">
                    <h1 className="font-['Oswald'] text-4xl uppercase">
                        {activeCategory === 'all' ? 'ВСЕ ТОВАРЫ' : categories.find(c => c.id === activeCategory)?.label.replace('[ ', '').replace(' ]', '')}
                    </h1>
                    <span className="font-mono text-xs text-[#666]">
                        [{filteredProducts.length} ITEMS FOUND]
                    </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {filteredProducts.map((product, index) => (
                        <div 
                            key={product.id} 
                            className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <ProductCard 
                                product={product} 
                                onClick={() => onProductClick(product)}
                            />
                        </div>
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="py-20 text-center font-mono text-[#666]">
                        /// SYSTEM ERROR: NO_ITEMS_FOUND
                    </div>
                )}
            </div>
        </section>
    );
};

export default ShopPage;