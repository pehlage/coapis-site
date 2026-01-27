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
      description: 'São cerca de 600 toneladas de mel e derivados produzidos por ano, fortalecendo a cadeia produtiva no Estado de São Paulo.'
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
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-justify">
          <p>
            A história da COAPIS começa com a APTA – Associação Paulista dos Técnicos Apícolas, criada com o objetivo de agregar qualidade à produção de mel. A APTA reúne cerca de 250 associados da região de Sorocaba e expandiu suas atividades para 83 municípios do Estado de São Paulo, fortalecendo toda a cadeia produtiva da apicultura, atuando desde o fornecimento de insumos e assistência técnica até a produção, beneficiamento, comercialização e inovação de produtos derivados do mel.
          </p>

          <p>
            A associação também desempenha importante papel na formação continuada dos produtores, promovendo cursos, eventos, oficinas e projetos que fortalecem a profissionalização da apicultura na região, com foco em boas práticas, sustentabilidade, inovação e acesso a mercados.
          </p>

          <p>
            A partir da Associação surgiu a COAPIS – fundada em 2007, que atua como organização produtiva e comercial da cadeia, sendo responsável por coordenar os processos de produção, beneficiamento e comercialização dos produtos apícolas dos cooperados.
          </p>

          <p>
            Sua governança segue os princípios do cooperativismo solidário, com transparência, autogestão, eleição democrática de conselhos e diretoria, além da realização de assembleias gerais.
          </p>

          <p>
            Juntas, APTA e COAPIS foram reconhecidas pelo Governo do Estado de São Paulo como Cadeia Produtiva Local (CPL Mel) e compartilham responsabilidades e recursos, mantendo uma atuação coordenada e sinérgica, com foco no fortalecimento da apicultura regional, na valorização do produtor e na consolidação de uma cadeia produtiva sustentável e integrada.
          </p>

          <p>
            Atualmente, a fábrica (entreposto) possui a certificação SISP 1043 e todos os programas de autocontrole aprovados pelo Escritório da Defesa.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 text-justify">
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
        className="bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 rounded-3xl shadow-2xl p-10 text-white relative overflow-hidden"
      >
        {/* detalhe decorativo */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />

        <div className="relative z-10 text-center">
          <h3 className="text-4xl font-bold mb-10 tracking-tight">
            Missão, Visão e Valores
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Missão */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:bg-white/15 transition">
              <h4 className="text-2xl font-semibold mb-4">Missão</h4>
              <p className="text-amber-50 leading-relaxed">
                Desenvolver e fortalecer a apicultura racional através da união dos apicultores,
                promovendo o beneficiamento e a comercialização de forma justa e sustentável,
                visando a excelência na qualidade.
              </p>
            </div>

            {/* Visão */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:bg-white/15 transition">
              <h4 className="text-2xl font-semibold mb-4">Visão</h4>
              <p className="text-amber-50 leading-relaxed">
                Ser uma cooperativa reconhecida nacionalmente pela gestão, comercialização
                e qualidade dos produtos e serviços, por meio da satisfação dos seus cooperados
                e clientes.
              </p>
            </div>

            {/* Valores */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:bg-white/15 transition">
              <h4 className="text-2xl font-semibold mb-4">Valores</h4>
              <ul className="space-y-2 text-amber-50">
                <li>• Transparência</li>
                <li>• Integridade</li>
                <li>• Ética</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="text-lg bg-white/15 px-8 py-3 rounded-full backdrop-blur-md shadow-md">
              <span className="font-semibold">
                COAPIS — União, Qualidade e Sustentabilidade
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutTab;
