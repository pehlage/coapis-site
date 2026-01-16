import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';
const Header = ({
  activeTab,
  setActiveTab,
  cartItemCount,
  setIsCartOpen
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [{
    id: 'home',
    label: 'Início'
  }, {
    id: 'products',
    label: 'Loja'
  }, {
    id: 'about-products',
    label: 'Sobre o Mel'
  }, {
    id: 'about',
    label: 'A Cooperativa'
  }, {
    id: 'cooperator',
    label: 'Seja Cooperado'
  }];
  const handleNavClick = id => {
    setActiveTab(id);
    setIsMobileMenuOpen(false);
  };
  return <header className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 shadow-lg sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 max-w-7xl">
        <div className="flex items-center justify-between">
          <motion.div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('home')} initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.5
        }}>
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-md">
              <img class="w-full h-full object-contain" alt="Logo da Coapis, uma abelha estilizada com favos de mel" src="/images/logo.webp" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-white leading-tight">COAPIS</h1>
              <p className="text-[10px] md:text-xs text-amber-100 hidden sm:block">Cooperativa dos Apicultores de Sorocaba e Região</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map(item => <Button key={item.id} variant="ghost" onClick={() => handleNavClick(item.id)} className={`relative transition-all text-sm px-4 py-2 text-white hover:bg-amber-700/50 group ${activeTab === item.id ? 'font-bold' : ''}`}>
                {item.label}
                {activeTab === item.id && <motion.span layoutId="activeTabIndicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full" initial={{
              scaleX: 0
            }} animate={{
              scaleX: 1
            }} transition={{
              type: "spring",
              stiffness: 500,
              damping: 30
            }} />}
              </Button>)}
            
            <Button variant="ghost" size="icon" onClick={() => setIsCartOpen(true)} className="relative text-white hover:bg-amber-700/50 transition-all ml-2">
              <ShoppingCart className="w-5 h-5" />
              {cartItemCount > 0 && <motion.span initial={{
              scale: 0
            }} animate={{
              scale: 1
            }} className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-sm">
                  {cartItemCount}
                </motion.span>}
            </Button>
          </nav>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => setIsCartOpen(true)} className="relative text-white hover:bg-amber-700/50 transition-all">
              <ShoppingCart className="w-5 h-5" />
              {cartItemCount > 0 && <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-sm">
                  {cartItemCount}
                </span>}
            </Button>
            
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white hover:bg-amber-700/50">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <motion.nav initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="lg:hidden pt-4 pb-2 space-y-2">
            {navItems.map(item => <Button key={item.id} variant="ghost" onClick={() => handleNavClick(item.id)} className={`w-full justify-start text-white hover:bg-amber-700/50 ${activeTab === item.id ? 'bg-amber-700/70 font-bold' : ''}`}>
                {item.label}
              </Button>)}
          </motion.nav>}
      </div>
    </header>;
};
export default Header;