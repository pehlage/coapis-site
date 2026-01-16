import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import HomeTab from './components/HomeTab';
import ProductsTab from './components/ProductsTab';
import AboutTab from './components/AboutTab';
import AboutProductsTab from './components/AboutProductsTab';
import BecomeCooperatorTab from './components/BecomeCooperatorTab';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      setCart(prevCart => prevCart.filter(item => item.id !== productId));
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <Helmet>
        <title>Coapis - Cooperativa dos Apicultores de Sorocaba e Região</title>
        <meta name="description" content="Descubra produtos de mel de qualidade premium da cooperativa Coapis. Mel puro, natural e produzido de forma sustentável, entregue diretamente de nossos apicultores para você." />
        <html lang="pt-br" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 font-sans">
        <Header 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
          cartItemCount={cartItemCount}
          setIsCartOpen={setIsCartOpen}
        />
        
        <main className="container mx-auto px-4 py-12 max-w-7xl flex-grow">
          {activeTab === 'home' && (
             <HomeTab setActiveTab={setActiveTab} addToCart={addToCart} />
          )}
          {activeTab === 'products' && (
            <ProductsTab addToCart={addToCart} />
          )}
          {activeTab === 'about-products' && (
            <AboutProductsTab />
          )}
          {activeTab === 'about' && (
            <AboutTab />
          )}
          {activeTab === 'cooperator' && (
            <BecomeCooperatorTab />
          )}
        </main>

        <Footer />

        <Cart 
          isOpen={isCartOpen}
          setIsOpen={setIsCartOpen}
          cart={cart}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
        />

        <Toaster />
      </div>
    </>
  );
}

export default App;