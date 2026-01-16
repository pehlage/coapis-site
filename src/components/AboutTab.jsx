import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Award, Leaf } from 'lucide-react';

const AboutTab = () => {
  const features = [
    {
      icon: Heart,
      title: 'Compromisso com a Qualidade',
      description: 'A produção da COAPIS segue rigorosamente as boas práticas apícolas, garantindo mel puro, seguro e de alta qualidade.'
    },
    {
      icon: Users,
      title: 'Força do Associativismo',
      description: 'A cooperativa nasce do trabalho coletivo de apicultores que acreditam na união como caminho para o crescimento sustentável.'
    },
    {
      icon: Award,
      title: 'Produção Reconhecida',
      description: 'São cerca de 300 toneladas de mel e derivados produzidos por ano, fortalecendo a cadeia produtiva no Estado de São Paulo.'
    },
    {
      icon: Leaf,
      title: 'Apicultura Sustentável',
      description: 'A COAPIS incentiva práticas que respeitam o meio ambiente e fortalecem o desenvolvimento social, econômico e cultural.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
          Sobre a COAPIS
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16 border border-amber-100"
      >
        <div className="relative h-80 rounded-2xl overflow-hidden mb-10 shadow-md">
          <img 
            className="w-full h-full object-cover"
            alt="Apicultores trabalhando nas colmeias"
            src="https://images.unsplash.com/photo-1619457632148-6d631bbb3b25" 
          />
        </div>

        <h3 className="text-3xl font-bold text-amber-900 mb-6">Nossa História</h3>
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            A história da COAPIS começa com a APTA – Associação Paulista dos Técnicos Apícolas, criada com o objetivo de agregar qualidade à produção de mel. A APTA reúne cerca de 250 associados da região de Sorocaba e expandiu suas atividades para 67 municípios do Estado de São Paulo, fortalecendo toda a cadeia produtiva da apicultura.
          </p>
          <p>
            A produção anual chega, em média, a 300 toneladas de mel e derivados. Além da produção, a associação atua fortemente no fortalecimento do associativismo, na divulgação da atividade apícola e na capacitação de apicultores por meio de cursos, oficinas técnicas avançadas e programas de boas práticas de produção.
          </p>
          <p>
            A APTA investiu aproximadamente R$ 60 mil na ampliação das instalações físicas no bairro Trujillo, em Sorocaba. Os cursos são desenvolvidos em parceria com o Serviço Nacional de Aprendizagem Rural (SENAR), garantindo formação técnica contínua aos produtores.
          </p>
          <p>
            A partir da Associação surgiu a COAPIS – Cooperativa dos Apicultores de Sorocaba e Região, com a missão de incentivar a apicultura sustentável, promovendo desenvolvimento social, econômico, ambiental e cultural, e gerando impacto positivo na sociedade.
          </p>
          <p>
            A COAPIS desenvolve projetos em parceria com a CONAB para fornecimento de mel e derivados destinados à merenda escolar, beneficiando diversos municípios. Com o crescimento da demanda, foi criado um projeto de ampliação e modernização das instalações e equipamentos, em parceria com o Banco do Brasil, por meio do programa DRS – Desenvolvimento Rural Sustentado.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-amber-100 hover:border-amber-300 transition-all hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mb-6 shadow-md">
                <IconComponent className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl shadow-xl p-10 text-white text-center relative overflow-hidden"
      >
        <div className="relative z-10">
          <h3 className="text-3xl font-bold mb-4">Nossa Missão</h3>
          <p className="text-amber-50 mb-8 text-lg max-w-2xl mx-auto">
            Incentivar a apicultura sustentável, promovendo desenvolvimento social, econômico, ambiental e cultural, fortalecendo os apicultores e impactando positivamente a sociedade.
          </p>
          <div className="flex items-center justify-center gap-3 text-xl bg-white/10 py-3 px-6 rounded-full inline-flex backdrop-blur-sm">
            <span className="font-semibold">COAPIS - Mel Puro, Trabalho Coletivo</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutTab;
