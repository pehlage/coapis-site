import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, Send } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';

const Cart = ({ isOpen, setIsOpen, cart, updateQuantity, removeFromCart, clearCart }) => {
  const { toast } = useToast();

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const sendToWhatsApp = () => {
    if (cart.length === 0) {
      toast({
        title: "O carrinho está vazio",
        description: "Adicione alguns produtos antes de fazer o pedido.",
        variant: "destructive"
      });
      return;
    }

    let message = "Olá! Gostaria de fazer o seguinte pedido na Coapis:\n\n";
    
    cart.forEach(item => {
      message += `🍯 ${item.name} - ${item.unit} (${item.category})\n`;
      message += `   Qtd: ${item.quantity}\n`;
      message += `   Subtotal: R$ ${(item.price * item.quantity).toFixed(2)}\n\n`;
    });

    message += `💰 Total Geral: R$ ${total.toFixed(2)}\n\n`;
    message += "Por favor, confirmem a disponibilidade e a taxa de entrega. Obrigado!";

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/5515996463145?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
    
    toast({
      title: "Abrindo WhatsApp... 💬",
      description: "Seu pedido está sendo preparado para envio.",
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col border-l border-amber-100"
          >
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-6 flex items-center justify-between shadow-md">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">Seu Carrinho </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-amber-600/50 rounded-full"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 bg-amber-50/30">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-8">
                  <div className="text-7xl mb-6 bg-amber-100 p-8 rounded-full">🍯</div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">Seu carrinho está vazio</h3>
                  <p className="text-gray-500">Adicione um pouco de doçura ao seu dia!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="bg-white rounded-xl p-4 border border-amber-200 shadow-sm hover:shadow-md transition-all"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <h3 className="font-bold text-amber-900 text-lg leading-tight">
                            {item.name}
                          </h3>
                          <p className="text-sm text-amber-700 font-medium">
                            {item.unit} • {item.category}
                          </p>
                          <p className="text-sm text-amber-700">
                            R$ {item.price.toFixed(2)} cada
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-400 hover:text-red-600 hover:bg-red-50 -mt-1 -mr-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-amber-50">
                        <div className="flex items-center gap-3">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-8 w-8 border-amber-300 hover:bg-amber-100 rounded-full"
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="w-6 text-center font-bold text-amber-900 text-lg">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8 border-amber-300 hover:bg-amber-100 rounded-full"
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                        <div className="text-lg font-bold text-amber-600">
                          R$ {(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t border-amber-200 p-6 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xl text-gray-600">Total:</span>
                  <span className="text-3xl font-bold text-amber-600">R$ {total.toFixed(2)}</span>
                </div>

                <Button
                  onClick={sendToWhatsApp}
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-6 text-lg shadow-lg transition-all rounded-xl mb-3"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Pedir no WhatsApp
                </Button>

                <Button
                  variant="outline"
                  onClick={clearCart}
                  className="w-full border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-700 rounded-xl"
                >
                  Limpar Carrinho
                </Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Cart;