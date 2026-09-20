import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { useCountUp } from '../hooks/useCountUp';
import { businessConfig } from '../config/businessConfig';

export const About = () => {
  const { language } = useLanguage();
  const about = businessConfig.about;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const Stat = ({ number }) => {
    const { ref, value } = useCountUp(language === 'en' ? number.numberEn : number.numberTa);
    return <span ref={ref} className="text-accent text-xl sm:text-2xl md:text-3xl font-bold">{value}</span>;
  };

  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-8 lg:px-16 bg-dark-secondary relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-accent/5 blur-[120px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="gradient-border rounded-2xl overflow-hidden h-72 sm:h-96 md:h-[500px] p-1.5">
              <div className="relative rounded-xl overflow-hidden h-full">
                <img
                  src="https://thumb.wikimedia.org/wikipedia/commons/thumb/7/73/Motorcycle_Repair.jpg/960px-Motorcycle_Repair.jpg"
                  alt="Nisha Two-Wheeler Workshop"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent"></div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="absolute bottom-6 left-6 glass rounded-xl px-5 py-3 animate-float"
                >
                  <p className="text-white font-bold text-sm">
                    {language === 'en' ? 'Trusted in Tirunelveli' : 'திருநெல்வேலியில் நம்பிக்கை'}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span
              variants={itemVariants}
              className="inline-block text-accent text-xs font-bold tracking-[0.35em] uppercase mb-4 glass rounded-full px-4 py-2"
            >
              {language === 'en' ? 'About Us' : 'எங்களை பற்றி'}
            </motion.span>

            <motion.h2
              variants={itemVariants}
              className="text-balance text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight whitespace-pre-line"
            >
              {language === 'en' ? about.titleEn : about.titleTa}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-lg leading-relaxed mb-8"
            >
              {language === 'en' ? about.descriptionEn : about.descriptionTa}
            </motion.p>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-2 sm:gap-6 mb-8">
              {about.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="card-glow border border-white/10 rounded-xl p-3 sm:p-4 text-center bg-dark/50"
                >
                  <Stat number={stat} />
                  <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm mt-2">
                    {language === 'en' ? stat.labelEn : stat.labelTa}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Disclaimer */}
            <motion.p
              variants={itemVariants}
              className="text-accent text-xs bg-accent/10 border border-accent/30 rounded-lg p-4 leading-relaxed"
            >
              {language === 'en'
                ? 'Note: Replace statistics with actual business data when available.'
                : 'குறிப்பு: கிடைக்கும் போது உண்மையான தரவுகளால் புள்ளிவிவரங்களை மாற்றவும்.'}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};