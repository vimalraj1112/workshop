import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Wrench, Cpu, ShieldCheck, Zap, Disc3, GitBranch } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { businessConfig } from '../config/businessConfig';

const serviceIcons = [Wrench, Cpu, ShieldCheck, Zap, Disc3, GitBranch];

export const Services = () => {
  const { language } = useLanguage();
  const [hoveredCard, setHoveredCard] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="services" className="py-16 sm:py-20 px-4 sm:px-8 lg:px-16 bg-dark relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-40 bg-accent/10 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-accent text-xs font-bold tracking-[0.35em] uppercase mb-4 inline-block glass rounded-full px-4 py-2"
          >
            {language === 'en' ? 'Our Services' : 'எங்கள் சேவைகள்'}
          </motion.span>
          <h2 className="text-balance text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            {language === 'en' ? (
              <>
                BUILD AROUND <span className="text-gradient-static font-bold">YOUR RIDE.</span>
              </>
            ) : (
              'உங்கள் பைக்கைச் சுற்றி கட்டப்பட்டது.'
            )}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {language === 'en'
              ? 'From routine maintenance to complex repairs, we keep your motorcycle ready for the road.'
              : 'வழக்கமான பராமரிப்பு முதல் சிக்கலான பழுதுதிருத்தம் வரை, நாம் உங்கள் மோட்டார் சைக்கிளை சாலைக்கு தயாராக வைத்திருக்கிறோம்.'}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {businessConfig.services.map((service, i) => {
            const Icon = serviceIcons[i % serviceIcons.length];
            const hovered = hoveredCard === service.id;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative card-glow"
              >
                <div
                  className={`h-full p-6 sm:p-8 rounded-2xl transition-all duration-300 cursor-pointer relative overflow-hidden ${
                    hovered
                      ? 'bg-gradient-to-br from-dark-secondary to-dark border border-accent/50'
                      : 'bg-dark-secondary/80 glass border border-white/10'
                  }`}
                >
                  {/* Number watermark */}
                  <div
                    className={`absolute -top-3 right-4 text-7xl font-extrabold transition-all duration-500 ${
                      hovered ? 'text-accent/20' : 'text-white/5'
                    }`}
                  >
                    {service.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 relative">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        hovered
                          ? 'bg-accent/20 text-accent shadow-lg shadow-accent/30 scale-110'
                          : 'bg-white/5 text-gray-300 border border-white/10'
                      }`}
                    >
                      <Icon size={24} />
                    </div>
                    {hovered && (
                      <div className="absolute inset-0 animate-ping-ring rounded-2xl border border-accent/40 pointer-events-none"></div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                    {language === 'en' ? service.titleEn : service.titleTa}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {language === 'en' ? service.descriptionEn : service.descriptionTa}
                  </p>

                  {/* Arrow */}
                  <motion.div
                    animate={{ x: hovered ? 6 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center text-accent"
                  >
                    <ArrowRight size={20} />
                  </motion.div>

                  {/* Top gradient bar */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-orange-400 to-accent transition-opacity duration-300 ${
                      hovered ? 'opacity-100' : 'opacity-0'
                    }`}
                  ></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};