import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Users2, Sprout, HeartHandshake as Handshake } from 'lucide-react';
import { Button } from './ui/button';

const BecomeCooperatorTab = () => {
  const benefits = [
    {
      icon: Handshake,
      title: "Comércio Justo",
      description: "Garantimos preços justos pela sua produção, eliminando intermediários exploradores."
    },
    {
      icon: Users2,
      title: "Força Coletiva",
      description: "Acesso a compras coletivas de insumos e equipamentos com custos reduzidos."
    },
    {
      icon: Sprout,
      title: "Assistência Técnica",
      description: "Suporte especializado para melhorar o manejo e a produtividade do seu apiário."
    },
    {
      icon: CheckCircle2,
      title: "Certificação de Qualidade",
      description: "Apoio para obter selos de inspeção e qualidade para o seu mel."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold text-amber-900 mb-6">Junte-se à Coapis</h2>
        <p className="text-xl text-amber-800 max-w-2xl mx-auto">
          Fortalecendo a apicultura regional através da união, qualidade e sustentabilidade.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-amber-500 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-100 rounded-lg text-amber-600">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <section className="bg-amber-50 rounded-3xl p-8 md:p-12 border border-amber-200">
        <div className="text-center max-w-2xl mx-auto space-y-8">
          <h3 className="text-2xl font-bold text-amber-900">Como se Tornar um Cooperado?</h3>
          <p className="text-gray-700 leading-relaxed">
            Para fazer parte da Coapis, você precisa ser um produtor ativo na região e compartilhar de nossos valores de sustentabilidade e qualidade. O processo envolve uma visita técnica ao seu apiário e análise da qualidade do mel.
          </p>
          
          <div className="bg-white p-6 rounded-xl shadow-sm inline-block text-left w-full">
            <h4 className="font-bold text-amber-900 mb-4 border-b pb-2">Pré-requisitos Básicos:</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>Possuir Cadastro de Apicultor ativo</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>Apiário localizado em área livre de agrotóxicos</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>Comprometimento com as boas práticas de produção</span>
              </li>
            </ul>
          </div>

          <div className="pt-4">
            <Button 
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-6 text-lg rounded-full shadow-lg w-full md:w-auto"
              onClick={() => window.open('https://wa.me/5515996463145?text=Olá,%20gostaria%20de%20saber%20como%20me%20tornar%20um%20cooperado%20da%20Coapis.', '_blank')}
            >
              Falar com a Diretoria no WhatsApp
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              Ou visite nossa sede para tomar um café e conversar pessoalmente.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BecomeCooperatorTab;