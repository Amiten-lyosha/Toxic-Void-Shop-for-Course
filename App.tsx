
import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeStrip from './components/MarqueeStrip';
import CategoryGrid from './components/CategoryGrid';
import FeaturedDrop from './components/FeaturedDrop';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ShopPage from './components/ShopPage';
import DropsPage from './components/DropsPage';
import ArchivePage from './components/ArchivePage';
import ProductModal from './components/ProductModal';
import CartPage from './components/CartPage';
import { Product, CartItem } from './types';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'shop' | 'drops' | 'archive' | 'cart'>('home');
  
  // Cart State
  const [cart, setCart] = useState<CartItem[]>([]);
  
  // Modal State
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleAddToCart = (product: Product, size: string) => {
    const newItem: CartItem = {
      ...product,
      selectedSize: size,
      addedAt: Date.now(),
    };
    setCart([...cart, newItem]);
  };

  const handleRemoveFromCart = (addedAt: number) => {
    setCart(cart.filter(item => item.addedAt !== addedAt));
  };

  const handleCheckout = () => {
    if (confirm('Подтвердить оплату? (Демо-режим)')) {
        alert('Заказ успешно оформлен! Спасибо за выбор Toxic Void.');
        setCart([]);
        setCurrentView('home');
    }
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white overflow-x-hidden selection:bg-[#CCFF00] selection:text-black">
      {/* Noise Texture */}
      <div className="noise"></div>
      
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Main Content */}
      <Navbar onNavigate={setCurrentView} cart={cart} />
      
      <main className="w-full">
        {currentView === 'home' && (
          <div className="pt-16">
            <Hero />
            <MarqueeStrip />
            <CategoryGrid />
            <FeaturedDrop />
          </div>
        )}
        
        {currentView === 'shop' && (
           <div className="pt-16">
             <ShopPage onProductClick={handleProductClick} />
           </div>
        )}

        {currentView === 'drops' && (
            <DropsPage onProductClick={handleProductClick} />
        )}

        {currentView === 'archive' && (
            <ArchivePage onNavigateToDrops={() => setCurrentView('drops')} />
        )}

        {currentView === 'cart' && (
            <CartPage 
                cartItems={cart} 
                onRemoveItem={handleRemoveFromCart} 
                onCheckout={handleCheckout}
                onNavigateShop={() => setCurrentView('shop')}
            />
        )}
      </main>

      {/* Product Modal Overlay */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={handleCloseModal} 
          onAddToCart={handleAddToCart}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
