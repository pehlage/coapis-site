import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, AlertTriangle } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';

const ProductCard = ({ product, addToCart, index }) => {
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Excelente escolha! 🍯",
      description: `${product.name} foi adicionado ao seu carrinho.`,
      className: "bg-amber-50 border-amber-200 text-amber-900",
      duration: 3000,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-amber-100 hover:border-amber-300 transition-all flex flex-col h-full"
    >
      {/* Imagem + Preço + Categoria */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 group">
        <img
          className="w-full h-full object-cover"
          alt={product.name}
          src={product.image}
          loading="lazy"
        />

        {/* Preço */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-amber-800 px-4 py-1.5 rounded-full text-sm font-bold shadow-md border border-amber-100">
          R$ {product.price.toFixed(2)}
        </div>

        {/* Categoria menor */}
        <div className="absolute top-4 left-4 bg-amber-500/90 text-white px-2 py-0.5 rounded-full text-[10px] font-bold shadow">
          {product.category}
        </div>

        {/* Aviso imagem ilustrativa */}
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-amber-800 px-3 py-1 rounded-full text-xs font-semibold shadow border border-amber-200 flex items-center gap-1">
          <AlertTriangle className="w-3.5 h-3.5" />
          Imagem ilustrativa
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-amber-900 mb-1">
          {product.name}
        </h3>

        {/* Subtítulo mais informativo */}
        <p className="text-sm text-amber-700 font-medium mb-4">
          {product.unit} • {product.category}
        </p>

        <Button
          onClick={handleAddToCart}
          className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold shadow-md transition-all py-6 rounded-xl group-hover:shadow-lg mt-auto"
        >
          <ShoppingCart className="w-5 h-5 mr-2" />
          Adicionar
        </Button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
