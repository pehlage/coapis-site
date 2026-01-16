import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Hexagon, ShieldCheck, Droplet, Crown, Sparkles } from 'lucide-react';

const AboutProductsTab = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-20 pb-12">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">Nossos Produtos: Pureza e Ciência</h2>
        <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed">
          Entenda o que faz do nosso mel um alimento único e descubra os benefícios do propólis e da geleia real para a sua saúde.
        </p>
      </motion.div>

      {/* Honey Types Section */}
      <section className="space-y-10">
        <div className="flex items-center gap-3 mb-8 border-b border-amber-200 pb-4">
          <Hexagon className="w-8 h-8 text-amber-600" />
          <h3 className="text-3xl font-bold text-amber-900">Nossos Tipos de Mel</h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-amber-100 hover:border-amber-300 transition-all flex flex-col"
          >
            <h4 className="text-2xl font-bold text-amber-800 mb-3">Mel Silvestre</h4>
            <p className="text-gray-700 leading-relaxed mb-4 flex-grow">
              Produzido a partir do néctar de diversas flores do campo. É o mel mais complexo nutricionalmente, variando sua cor e sabor conforme a florada da estação. Rico em antioxidantes e minerais essenciais.
            </p>
            <div className="flex gap-2 text-sm text-amber-600 font-medium pt-4 border-t border-amber-50">
              <span className="bg-amber-50 px-3 py-1 rounded-full">• Multifloral</span>
              <span className="bg-amber-50 px-3 py-1 rounded-full">• Sabor Robusto</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-amber-100 hover:border-amber-300 transition-all flex flex-col"
          >
            <h4 className="text-2xl font-bold text-amber-800 mb-3">Mel de Eucalipto</h4>
            <p className="text-gray-700 leading-relaxed mb-4 flex-grow">
              Um mel mais escuro e de sabor intenso, muito procurado por suas propriedades expectorantes e antissépticas. Ideal para adoçar chás em dias frios e auxiliar no combate a resfriados.
            </p>
            <div className="flex gap-2 text-sm text-amber-600 font-medium pt-4 border-t border-amber-50">
              <span className="bg-amber-50 px-3 py-1 rounded-full">• Monofloral</span>
              <span className="bg-amber-50 px-3 py-1 rounded-full">• Balsâmico</span>
            </div>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-white p-8 rounded-2xl shadow-lg border border-amber-100 hover:border-amber-300 transition-all flex flex-col"
          >
            <h4 className="text-2xl font-bold text-amber-800 mb-3">Mel de Laranjeira</h4>
            <p className="text-gray-700 leading-relaxed mb-4 flex-grow">
              Claro, translúcido e extremamente aromático. Possui um sabor suave com notas cítricas. É considerado um calmante natural, ajuda a reduzir o estresse e melhora a qualidade do sono.
            </p>
            <div className="flex gap-2 text-sm text-amber-600 font-medium pt-4 border-t border-amber-50">
               <span className="bg-amber-50 px-3 py-1 rounded-full">• Aromático</span>
               <span className="bg-amber-50 px-3 py-1 rounded-full">• Calmante</span>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-amber-50 p-8 rounded-2xl shadow-inner border border-amber-200 transition-all flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-3 text-amber-800">
               <AlertCircle className="w-6 h-6" />
               <h4 className="text-xl font-bold">Nota sobre Cristalização</h4>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Todo mel puro cristaliza (açucara) com o tempo, especialmente em temperaturas mais baixas. Isso é o maior atestado de pureza que o produto pode ter. Méis adulterados com glucose de milho ou superaquecidos raramente cristalizam.
            </p>
            <p className="text-sm text-amber-700 mt-4 font-medium italic">
              Dica: Para descristalizar, basta aquecer em banho-maria controlado abaixo de 45°C.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Propolis Section */}
      <section className="bg-gradient-to-br from-amber-950 to-amber-800 rounded-3xl p-8 md:p-12 text-white shadow-xl overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="relative z-10 space-y-12">
          {/* Main Propolis Info */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="w-10 h-10 text-amber-400" />
                <h3 className="text-3xl font-bold">O Poder do Própolis</h3>
              </div>
              <p className="text-amber-100 text-lg leading-relaxed mb-6">
                O "ouro verde" das abelhas. O própolis é uma resina coletada de plantas e alterada por enzimas das abelhas. É utilizada para higienizar e proteger a colmeia, e para nós humanos, serve como um poderoso aliado da saúde.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-600/50 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 text-amber-300" />
                  </div>
                  <span>Potente antibiótico natural e antiviral</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-600/50 flex items-center justify-center shrink-0">
                    <Droplet className="w-4 h-4 text-amber-300" />
                  </div>
                  <span>Acelera a cicatrização e combate inflamações</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-600/50 flex items-center justify-center shrink-0">
                    <Hexagon className="w-4 h-4 text-amber-300" />
                  </div>
                  <span>Antioxidante: combate radicais livres</span>
                </li>
              </ul>
            </div>
            <div className="h-full min-h-[300px] bg-white/10 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10 shadow-2xl">
              <img 
                src="/images/sobre/beneficios-da-propolis.jpeg" 
                alt="Close up of propolis texture" 
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 scale-105"
              />
            </div>
          </div>

          {/* Types of Propolis */}
          <div className="pt-8 border-t border-white/10">
            <h4 className="text-2xl font-bold mb-6 text-amber-200">Tipos de Própolis</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <h5 className="font-bold text-lg text-green-400 mb-2">Própolis Verde</h5>
                <p className="text-sm text-amber-100/80">
                  Originário do Alecrim-do-Campo. O mais famoso mundialmente, rico em Artepillin-C, com forte ação antitumoral e imunomoduladora.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <h5 className="font-bold text-lg text-red-400 mb-2">Própolis Vermelho</h5>
                <p className="text-sm text-amber-100/80">
                  Originário dos manguezais (Dalbergia ecastaphyllum). Raro e potente, conhecido por suas propriedades anti-idade e combate ao colesterol.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <h5 className="font-bold text-lg text-amber-400 mb-2">Própolis Marrom</h5>
                <p className="text-sm text-amber-100/80">
                  O tipo mais comum e versátil, coletado de diversas plantas. Excelente para uso diário no combate a bactérias e infecções de garganta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pollen Section */}
      <section className="bg-white rounded-3xl p-8 md:p-12 border border-amber-200 shadow-lg">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Image */}
          <div className="h-full min-h-[300px] bg-amber-50 rounded-2xl overflow-hidden border border-amber-100 shadow-xl">
            <img 
              src="/images/sobre/polen.JPG"
              alt="Bee collecting pollen from flower"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Hexagon className="w-10 h-10 text-amber-600" />
              <h3 className="text-3xl font-bold text-amber-900">Pólen Apícola: Energia Natural</h3>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              O pólen é coletado pelas abelhas das flores e considerado um dos alimentos mais completos da natureza.
              Rico em proteínas, vitaminas, minerais e aminoácidos essenciais, é um verdadeiro combustível natural
              para o corpo e a mente.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                </div>
                <span className="text-gray-700">Aumenta energia, disposição e rendimento físico</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                </div>
                <span className="text-gray-700">Rico em proteínas e vitaminas do complexo B</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                </div>
                <span className="text-gray-700">Fortalece imunidade e melhora a digestão</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                </div>
                <span className="text-gray-700">Auxilia no ganho de massa magra e recuperação muscular</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Royal Jelly Section */}
      <section className="bg-yellow-50 rounded-3xl p-8 md:p-12 border border-yellow-200 shadow-lg">
        <div className="flex flex-col md:flex-row gap-10 items-center">
           <div className="md:w-1/3 order-2 md:order-1">
              <div className="aspect-square rounded-full overflow-hidden border-4 border-white shadow-xl relative">
                <img 
                  src="/images/sobre/geleiareal.jpg" 
                  alt="Spoon with royal jelly" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-yellow-500/10"></div>
              </div>
           </div>
           <div className="md:w-2/3 order-1 md:order-2">
              <div className="flex items-center gap-3 mb-6">
                <Crown className="w-10 h-10 text-yellow-600" />
                <h3 className="text-3xl font-bold text-yellow-900">Geleia Real: O Alimento da Rainha</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                A geleia real é uma substância cremosa produzida pelas abelhas operárias exclusivamente para alimentar a abelha rainha. Graças a esta dieta, a rainha vive até 5 anos, enquanto as operárias vivem apenas 45 dias.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                   <Sparkles className="w-5 h-5 text-yellow-600 mt-1" />
                   <p className="text-gray-700 text-sm">Superalimento rico em proteínas, lipídios e vitaminas do complexo B.</p>
                </div>
                <div className="flex items-start gap-3">
                   <Sparkles className="w-5 h-5 text-yellow-600 mt-1" />
                   <p className="text-gray-700 text-sm">Estimula a produção de colágeno, melhorando a pele e cabelos.</p>
                </div>
                <div className="flex items-start gap-3">
                   <Sparkles className="w-5 h-5 text-yellow-600 mt-1" />
                   <p className="text-gray-700 text-sm">Aumenta a energia, vitalidade e capacidade de concentração.</p>
                </div>
                <div className="flex items-start gap-3">
                   <Sparkles className="w-5 h-5 text-yellow-600 mt-1" />
                   <p className="text-gray-700 text-sm">Auxilia no equilíbrio hormonal e alívio de sintomas da TPM.</p>
                </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default AboutProductsTab;