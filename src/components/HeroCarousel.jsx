import React, { useState, useEffect, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

/* SLIDES */
const SLIDES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1619457632148-6d631bbb3b25',
    title: 'Nossa História',
    subtitle: 'A trajetória da COAPIS e da APTA fortalecendo a apicultura em São Paulo.',
    action: 'about',
    button: 'Conheça a COAPIS'
  },
  {
    id: 2,
    image: '/images/cooperadoCarousel.png',
    title: 'Ser Cooperado',
    subtitle: 'União, força coletiva e crescimento sustentável para o apicultor.',
    action: 'cooperator',
    button: 'Quero me Cooperar'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71',
    title: 'Curiosidades do Mel',
    subtitle: 'Você sabia? O mel nunca estraga e é um dos alimentos mais puros do mundo.',
    action: 'about-products',
    button: 'Descubra Mais'
  }
];

const SLIDE_VARIANTS = {
  hidden: (direction) => ({
    x: direction > 0 ? '25%' : '-25%',
    opacity: 0
  }),
  visible: {
    x: '0%',
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: 'easeOut'
    }
  },
  exit: (direction) => ({
    x: direction > 0 ? '-25%' : '25%',
    opacity: 0,
    transition: {
      duration: 0.7,
      ease: 'easeIn'
    }
  })
};

const HeroCarousel = ({ setActiveTab }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = SLIDES.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 6000);
    return () => clearInterval(timer);
  }, [total]);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToPage = useCallback(
    (page) => {
      if (!page) return;
      setActiveTab(page);
    },
    [setActiveTab]
  );

  const slide = SLIDES[currentIndex];

  return (
    <div className="relative h-[75vh] md:h-[85vh] lg:h-[90vh] w-full max-w-[1600px] overflow-hidden rounded-[2rem] shadow-2xl mb-16 group mx-auto mt-6 bg-gray-900">
      <AnimatePresence initial={false} custom={direction} mode="sync">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={SLIDE_VARIANTS}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute inset-0 w-full h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 z-10" />
          <img
            className="w-full h-full object-cover"
            alt={slide.title}
            src={slide.image}
            loading="lazy"
          />

          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-4 pt-20 md:pt-0">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="text-5xl md:text-8xl font-bold text-white mb-6 drop-shadow-xl tracking-tight"
            >
              {slide.title}
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg md:text-2xl text-amber-50 mb-10 max-w-3xl drop-shadow-md font-medium leading-relaxed"
            >
              {slide.subtitle}
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.5 }}
            >
              <Button
                onClick={() => goToPage(slide.action)}
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-12 py-8 text-xl rounded-full shadow-2xl border-4 border-white/20 backdrop-blur-sm transition-all hover:scale-105 hover:shadow-amber-500/20"
              >
                {slide.button}
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-30 flex items-center justify-between p-4 pointer-events-none">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="pointer-events-auto bg-white/10 hover:bg-white/30 text-white rounded-full h-16 w-16 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
        >
          <ChevronLeft className="h-10 w-10" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="pointer-events-auto bg-white/10 hover:bg-white/30 text-white rounded-full h-16 w-16 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
        >
          <ChevronRight className="h-10 w-10" />
        </Button>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-4">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`h-2.5 rounded-full transition-all duration-500 ${
              index === currentIndex
                ? 'bg-amber-400 w-10'
                : 'bg-white/40 w-2.5 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(HeroCarousel);
