import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { businessConfig } from '../config/businessConfig';

export const Testimonials = () => {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const timer = setTimeout(() => {
      setCurrentIndex(
        (prev) => (prev + 1) % businessConfig.testimonials.length
      );
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentIndex, autoplay]);

  const handlePrevious = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + businessConfig.testimonials.length) %
        businessConfig.testimonials.length
    );
    setAutoplay(false);
  };

  const handleNext = () => {
    setCurrentIndex(
      (prev) => (prev + 1) % businessConfig.testimonials.length
    );
    setAutoplay(false);
  };

  const testimonial = businessConfig.testimonials[currentIndex];

  return (
    <section id="reviews" className="py-20 px-4 sm:px-8 lg:px-16 bg-dark">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            {language === 'en' ? 'WHAT OUR CUSTOMERS SAY' : 'எங்கள் வாடிக்கையாளர்கள் என்ன சொல்கிறார்கள்'}
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="bg-dark-secondary border border-white/10 rounded-lg p-8 md:p-12 mb-8"
        >
          {/* Stars */}
          <div className="flex gap-1 mb-6">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star
                key={i}
                size={20}
                className="fill-accent text-accent"
              />
            ))}
          </div>

          {/* Review Text */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed italic">
            "{language === 'en' ? testimonial.reviewEn : testimonial.reviewTa}"
          </p>

          {/* Customer Info */}
          <div className="flex items-center justify-between border-t border-white/10 pt-6">
            <div>
              <p className="text-white font-semibold">
                {language === 'en' ? testimonial.nameEn : testimonial.nameTa}
              </p>
              <p className="text-gray-400 text-sm">
                {language === 'en' ? testimonial.bikeEn : testimonial.bikeTa}
              </p>
            </div>
            <div className="text-right">
              <p className="text-accent text-sm font-semibold">
                {language === 'en' ? 'Verified Customer' : 'சரிபார்க்கப்பட்ட வாடிக்கையாளர்'}
              </p>
            </div>
          </div>

          {/* Disclaimer for placeholders */}
          {testimonial.nameEn.includes('[Example') && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 p-4 bg-accent/10 border border-accent/30 rounded text-accent text-xs"
            >
              ⚠️ {language === 'en'
                ? 'This is a placeholder testimonial. It will be replaced with real customer reviews.'
                : 'இது ஒரு உதாரண சாட்சியம். இது உண்மையான வாடிக்கையாளர் மதிப்புரைகளால் மாற்றப்படும்.'}
            </motion.div>
          )}
        </motion.div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={handlePrevious}
            className="p-3 rounded-full border border-white/20 text-white hover:bg-white/10 hover:border-accent transition-all"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Dot Indicators */}
          <div className="flex gap-2">
            {businessConfig.testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setAutoplay(false);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-accent w-6' : 'bg-white/20'
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3 rounded-full border border-white/20 text-white hover:bg-white/10 hover:border-accent transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Info Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-400 text-sm mt-8"
        >
          {currentIndex + 1} {language === 'en' ? 'of' : 'இலிருந்து'}{' '}
          {businessConfig.testimonials.length}{' '}
          {language === 'en' ? 'testimonials' : 'சாட்சியங்கள்'}
        </motion.p>
      </div>
    </section>
  );
};
