import React, { useState, useMemo, useCallback, memo } from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { products } from '../data/products';
import { Search } from 'lucide-react';

const ITEMS_PER_PAGE = 20;

const ProductsTab = ({ addToCart }) => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Todas');
  const [page, setPage] = useState(1);

  const categories = useMemo(() => {
    const unique = new Set(products.map(p => p.category));
    return ['Todas', ...unique];
  }, []);

  const filteredProducts = useMemo(() => {
    const text = search.toLowerCase();

    return products.filter((product) => {
      const name = product.name?.toLowerCase() || '';
      const description = product.description?.toLowerCase() || '';
      const unit = product.unit?.toLowerCase() || '';
      const categoryText = product.category?.toLowerCase() || '';

      const matchesSearch =
        name.includes(text) ||
        description.includes(text) ||
        unit.includes(text) ||
        categoryText.includes(text);

      const matchesCategory =
        category === 'Todas' || product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const totalPages = useMemo(
    () => Math.ceil(filteredProducts.length / ITEMS_PER_PAGE),
    [filteredProducts.length]
  );

  const currentProducts = useMemo(() => {
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProducts, page]);

  const onSearchChange = useCallback((e) => {
    setSearch(e.target.value);
    setPage(1);
  }, []);

  const onCategoryChange = useCallback((e) => {
    setCategory(e.target.value);
    setPage(1);
  }, []);

  const goPrev = useCallback(() => {
    setPage(p => p - 1);
  }, []);

  const goNext = useCallback(() => {
    setPage(p => p + 1);
  }, []);

  const goPage = useCallback((p) => {
    setPage(p);
  }, []);

  return (
    <div className="py-8">
      {/* Título */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
          Nossa Seleção Premium
        </h2>
        <p className="text-lg md:text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed">
          Descubra nossa seleção de produtos de mel puro e natural.
        </p>
      </motion.div>

      {/* Aviso Produtos Apícolas sob Consulta */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-4xl mx-auto mb-12"
      >
        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-300 rounded-3xl p-6 md:p-7 text-center shadow-md">
          <p className="text-amber-950 font-semibold text-lg leading-relaxed">
            Também oferecemos uma linha completa de{" "}
            <span className="text-amber-700 font-bold">
              equipamentos e materiais apícolas
            </span>
          </p>

          <p className="text-amber-900 mt-3 leading-relaxed">
            Melgueiras, macacões, fumegadores, extratores e diversos acessórios
            para apicultura profissional e hobby.
          </p>

          <div className="mt-4 inline-block bg-amber-200/60 text-amber-950 px-5 py-2 rounded-full font-bold text-sm tracking-wide shadow-sm">
            Disponível somente sob consulta
          </div>

          <p className="text-amber-800 mt-3 text-sm">
            Entre em contato conosco para orçamento, prazos e disponibilidade.
          </p>
        </div>
      </motion.div>

      {/* Filtros */}
      <div className="max-w-3xl mx-auto mb-10 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Pesquisar produtos..."
            value={search}
            onChange={onSearchChange}
            className="w-full pl-12 pr-4 py-3 rounded-full border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white shadow-sm"
          />
        </div>

        <div className="relative">
          <select
            value={category}
            onChange={onCategoryChange}
            className="appearance-none px-5 py-3 pr-10 rounded-full border border-amber-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-amber-500">
            ▼
          </span>
        </div>
      </div>

      {currentProducts.length === 0 ? (
        <p className="text-center text-gray-500">Nenhum produto encontrado.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
                index={index}
              />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center mt-10 gap-2">
              <button
                disabled={page === 1}
                onClick={goPrev}
                className="px-4 py-2 rounded-full border disabled:opacity-40"
              >
                Anterior
              </button>

              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goPage(i + 1)}
                  className={`px-4 py-2 rounded-full border ${
                    page === i + 1 ? 'bg-amber-400 text-white' : ''
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                disabled={page === totalPages}
                onClick={goNext}
                className="px-4 py-2 rounded-full border disabled:opacity-40"
              >
                Próxima
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default memo(ProductsTab);
