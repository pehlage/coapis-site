import React, { memo, useMemo, useCallback } from 'react';
import { ArrowRight, MapPin, Clock, Phone } from 'lucide-react';
import { Button } from './ui/button';
import HeroCarousel from './HeroCarousel';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const HomeTab = ({ setActiveTab, addToCart }) => {
  // Evita recalcular a cada render
  const featuredProducts = useMemo(() => products.slice(0, 3), []);

  // Evita recriar funções a cada render
  const goToProducts = useCallback(() => setActiveTab('products'), [setActiveTab]);
  const goToAbout = useCallback(() => setActiveTab('about'), [setActiveTab]);
  const openMaps = useCallback(() => window.open('https://maps.google.com', '_blank'), []);

  return (
    <div className="space-y-24 pb-12">
      {/* Hero Section */}
      <HeroCarousel setActiveTab={setActiveTab} />

      {/* Featured Products */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-3">
              Destaques da Colmeia
            </h2>
            <p className="text-amber-700 text-lg">
              Os favoritos dos nossos clientes, fresquinhos para você.
            </p>
          </div>
          <Button
            onClick={goToProducts}
            variant="outline"
            className="hidden md:flex items-center gap-2 border-amber-300 text-amber-800 hover:bg-amber-100 hover:text-amber-900"
          >
            Ver Loja Completa <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              index={index}
            />
          ))}
        </div>

        <div className="mt-8 md:hidden text-center">
          <Button
            onClick={goToProducts}
            variant="outline"
            className="w-full border-amber-300 text-amber-800 hover:bg-amber-100 py-6"
          >
            Ver Loja Completa
          </Button>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="bg-white rounded-[2rem] shadow-xl overflow-hidden mx-4 md:mx-0">
        <div className="grid md:grid-cols-2">
          <div className="p-8 md:p-16 flex flex-col justify-center bg-gradient-to-br from-white to-amber-50">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
              Quem Somos
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              A Coapis é mais que uma produtora de mel; somos uma cooperativa de apicultores apaixonados dedicados à arte do manejo sustentável de apiários. Fundada no coração do interior paulista, unimos tradição e qualidade.
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Nossa cooperativa garante que cada pote que você abre contém mel 100% puro e natural, colhido com respeito ao meio ambiente e às abelhas que o criam.
            </p>
            <Button
              onClick={goToAbout}
              className="self-start bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg rounded-full shadow-lg"
            >
              Conheça Nossa História
            </Button>
          </div>
          <div className="h-64 md:h-auto bg-amber-100 relative min-h-[400px]">
            <img
              className="w-full h-full object-cover"
              alt="Apicultor segurando quadro de mel"
              src="https://images.unsplash.com/photo-1479141612380-8b9a55a9e196"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Find Us Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            Visite Nossa Sede
          </h2>
          <p className="text-amber-700 text-lg">
            Venha conhecer de perto onde a mágica acontece
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Map Column */}
          <div className="bg-white p-3 rounded-2xl shadow-lg border border-amber-100 flex">
            <iframe
              src="https://www.google.com/maps?q=Gonçalves+Magalhães,+963,+Vila+Trujillo,+Sorocaba,+SP,+Coapis&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '1rem' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Coapis"
            />
          </div>

          {/* Info Column */}
          <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl shadow-lg p-8 md:p-12 text-white flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-8 border-b border-white/20 pb-4">
              Informações de Contato
            </h3>

            <div className="space-y-8">
              <InfoItem icon={MapPin} title="Endereço">
                <p>Av. Gonçalves Magalhães, 963 - Vila Trujillo</p>
                <p>Sorocaba, SP - CEP: 18060-240</p>
              </InfoItem>

              <InfoItem icon={Clock} title="Horário de Funcionamento">
                <p>Segunda a Sexta: 08:00 - 18:00</p>
                <p>Sábado: 08:00 - 12:00</p>
                <p className="text-white/80 text-sm mt-1 italic">
                  Fechado aos domingos e feriados
                </p>
              </InfoItem>

              <InfoItem icon={Phone} title="Telefone / WhatsApp">
                <p>+55 (15) 99646-3145</p>
              </InfoItem>
            </div>

            <Button
              className="mt-8 bg-white text-amber-600 hover:bg-amber-50 font-bold shadow-md w-full"
              onClick={openMaps}
            >
              Traçar Rota
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Subcomponente memoizado para evitar re-render desnecessário
const InfoItem = memo(({ icon: Icon, title, children }) => (
  <div className="flex items-start gap-4">
    <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <div>
      <h4 className="font-bold text-lg text-amber-50">{title}</h4>
      <div className="text-white/90">{children}</div>
    </div>
  </div>
));

export default memo(HomeTab);
