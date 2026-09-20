import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { businessConfig } from '../config/businessConfig';

export const WhyChooseUs = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-8 lg:px-16 bg-dark-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-balance text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            {language === 'en'
              ? 'YOUR BIKE DESERVES\nMORE THAN JUST\nA SERVICE.'
              : 'உங்கள் பைக் சாதாரண\nசேவையை விட\nபெரிய கவனம் பெறுகிறது.'}
          </h2>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {businessConfig.whyChooseUs.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                {/* Number */}
                <div className="flex-shrink-0">
                  <span className="text-4xl sm:text-5xl font-bold text-accent/30 group-hover:text-accent/50 transition-colors">
                    {benefit.number}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                    {language === 'en' ? benefit.titleEn : benefit.titleTa}
                  </h3>
                </div>
              </div>

              {/* Bottom Border on Hover */}
              <motion.div
                className="h-0.5 bg-gradient-to-r from-accent to-transparent mt-6 origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
