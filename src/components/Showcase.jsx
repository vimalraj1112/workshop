import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';

export const Showcase = () => {
  const { language } = useLanguage();

  return (
    <section className="relative h-96 md:h-screen overflow-hidden bg-dark">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Harley-Davidson_Electra_Glide_-_236.jpg/1920px-Harley-Davidson_Electra_Glide_-_236.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        initial={{ scale: 1 }}
        whileInView={{ scale: 1.05 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
      </motion.div>

      {/* Content */}
      <div className="relative h-full flex items-center px-4 sm:px-8 lg:px-16">
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-balance text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6"
          >
            {language === 'en'
              ? 'ENGINEERED FOR THE ROAD.\nMAINTAINED FOR THE JOURNEY.'
              : 'சாலைக்காக வடிவமைக்கப்பட்டது.\nபயணத்திற்காக பராமரிக்கப்பட்டது.'}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg max-w-xl"
          >
            {language === 'en'
              ? 'Premium service that keeps your motorcycle performing perfectly.'
              : 'உங்கள் மோட்டார் சைக்கிளை சரியாக வேலை செய்யக்கூடிய பிரீமியம் சேவை.'}
          </motion.p>
        </div>
      </div>
    </section>
  );
};