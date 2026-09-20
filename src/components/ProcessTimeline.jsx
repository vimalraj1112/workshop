import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { businessConfig } from '../config/businessConfig';

export const ProcessTimeline = () => {
  const { language } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-8 lg:px-16 bg-dark">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 text-center"
        >
          <h2 className="text-balance text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            {language === 'en' ? 'HOW WE WORK' : 'நாம் எவ்வாறு வேலை செய்கிறோம்'}
          </h2>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-5 gap-8"
        >
          {businessConfig.processSteps.map((step, index) => (
            <React.Fragment key={step.number}>
              <motion.div
                variants={itemVariants}
                className="flex flex-col relative"
              >
                {/* Step Number */}
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-accent/10 border border-accent rounded-full text-accent font-bold text-sm">
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                  {language === 'en' ? step.titleEn : step.titleTa}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                  {language === 'en' ? step.descriptionEn : step.descriptionTa}
                </p>

                {/* Connector Line (Desktop) */}
                {index < businessConfig.processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-24 left-1/2 w-full h-px bg-gradient-to-r from-accent/30 to-transparent transform translate-x-1/2" />
                )}
              </motion.div>

              {/* Vertical Connector (Mobile) */}
              {index < businessConfig.processSteps.length - 1 && (
                <div className="md:hidden h-8 w-px bg-gradient-to-b from-accent/30 to-transparent mx-auto" />
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-lg mb-6">
            {language === 'en'
              ? 'Ready to get your bike back on the road?'
              : 'உங்கள் பைக்கை சாலைக்கு திரும்ப வைக்க தயாரா?'}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
