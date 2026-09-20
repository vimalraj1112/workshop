import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { businessConfig } from '../config/businessConfig';

export const BikeBrands = () => {
  const { language } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16 bg-dark">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-gray-400 text-sm font-bold tracking-widest uppercase mb-4">
            {language === 'en' ? 'Supported Brands' : 'ஆதரிக்கப்பட்ட பிராண்ட்கள்'}
          </h3>
          <p className="text-xl text-gray-300">
            {language === 'en'
              ? 'We service all major motorcycle brands'
              : 'நாம் அனைத்து முக்கிய மோட்டார் சைக்கிள் பிராண்ட்களைப் பராமரிக்கிறோம்'}
          </p>
        </motion.div>

        {/* Brands Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4"
        >
          {businessConfig.brands.map((brand, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              className="p-4 border border-white/10 rounded-lg bg-dark-secondary hover:border-accent/50 hover:bg-dark-tertiary transition-all duration-300 flex items-center justify-center h-16 sm:h-20 cursor-pointer group"
            >
              <span className="text-xs sm:text-sm font-semibold text-gray-400 group-hover:text-accent transition-colors text-center">
                {brand}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
