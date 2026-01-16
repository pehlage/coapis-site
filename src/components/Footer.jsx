import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-amber-950 text-amber-100 pt-20 pb-10 mt-auto">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center shadow-lg shadow-amber-900/50">
                <span className="text-2xl">🐝</span>
              </div>
              <h3 className="text-3xl font-bold text-white tracking-tight">Coapis</h3>
            </div>
            <p className="text-amber-200/80 leading-relaxed text-lg">
              Somos uma cooperativa dedicada à apicultura sustentável, produzindo o mel mais puro e fino. Nossa missão é adoçar sua vida enquanto protegemos os polinizadores do nosso planeta.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.facebook.com/coapis/?locale=pt_BR"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-900/50 p-3 rounded-full hover:bg-amber-700 hover:text-white transition-all transform hover:-translate-y-1"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href="https://www.instagram.com/coapisbr/?hl=pt"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-900/50 p-3 rounded-full hover:bg-amber-700 hover:text-white transition-all transform hover:-translate-y-1"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:pl-12">
            <h4 className="text-xl font-bold text-white mb-8 border-b border-amber-800 pb-2 inline-block">Links Rápidos</h4>
            <ul className="space-y-4 text-lg">
              <li><a href="#" className="hover:text-amber-400 transition-colors flex items-center gap-2"><span className="text-amber-600">›</span> Início</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors flex items-center gap-2"><span className="text-amber-600">›</span> Nossos Produtos</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors flex items-center gap-2"><span className="text-amber-600">›</span> Sobre a Cooperativa</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors flex items-center gap-2"><span className="text-amber-600">›</span> Fale Conosco</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold text-white mb-8 border-b border-amber-800 pb-2 inline-block">Contato</h4>
            <div className="space-y-6 text-lg">
              <div className="flex items-start gap-4 group">
                <div className="p-2 bg-amber-900/50 rounded-lg group-hover:bg-amber-800 transition-colors">
                  <MapPin className="w-6 h-6 text-amber-500" />
                </div>
                <span className="text-amber-200/90">
                  Av. Gonçalves Magalhães, 963<br />
                  Vila Trujillo, Sorocaba - SP
                </span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-2 bg-amber-900/50 rounded-lg group-hover:bg-amber-800 transition-colors">
                  <Phone className="w-6 h-6 text-amber-500" />
                </div>
                <span className="text-amber-200/90">+55 (15) 99646-3145</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-2 bg-amber-900/50 rounded-lg group-hover:bg-amber-800 transition-colors">
                  <Mail className="w-6 h-6 text-amber-500" />
                </div>
                <span className="text-amber-200/90">coapis.sorocaba@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-900/50 pt-8 text-center text-sm text-amber-500/60">
          <p>&copy; {new Date().getFullYear()} Cooperativa Coapis. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;