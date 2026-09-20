import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { businessConfig } from '../config/businessConfig';

export const Packages = () => {
  const { language } = useLanguage();
  const [hoveredPackage, setHoveredPackage] = useState(null);

  const handleWhatsApp = () => {
    const phoneNumber = businessConfig.contact.phone;
    const message = encodeURIComponent('Hi Nisha Two-Wheeler Workshop, I am interested in booking a service.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
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
    <section className="py-16 sm:py-20 px-4 sm:px-8 lg:px-16 bg-dark-secondary">
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
            {language === 'en' ? 'SERVICE PACKAGES' : 'சேவை தொகுப்புகள்'}
          </h2>
          <p className="text-gray-400 text-lg">
            {language === 'en'
              ? 'Choose the perfect package for your motorcycle'
              : 'உங்கள் மோட்டார் சைக்கிளுக்கு சரியான தொகுப்பைத் தேர்ந்தெடுக்கவும்'}
          </p>
        </motion.div>

        {/* Packages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {businessConfig.packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              variants={cardVariants}
              onMouseEnter={() => setHoveredPackage(pkg.id)}
              onMouseLeave={() => setHoveredPackage(null)}
              className="group relative"
            >
              <motion.div
                className={`p-6 sm:p-8 rounded-lg border transition-all duration-300 h-full flex flex-col ${
                  hoveredPackage === pkg.id
                    ? 'bg-accent/10 border-accent shadow-lg shadow-accent/20'
                    : 'bg-dark border-white/10'
                }`}
                animate={{
                  y: hoveredPackage === pkg.id ? -10 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Badge */}
                {index === 2 && (
                  <div className="absolute -top-4 left-8 px-4 py-1 bg-accent text-dark text-xs font-bold rounded-full">
                    {language === 'en' ? 'MOST POPULAR' : 'மிகவும் பிரபலமான'}
                  </div>
                )}

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {language === 'en' ? pkg.titleEn : pkg.titleTa}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-6">
                  {language === 'en' ? pkg.descriptionEn : pkg.descriptionTa}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <p className="text-2xl sm:text-3xl font-bold text-accent">
                    {language === 'en' ? pkg.priceEn : pkg.priceTa}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-8 flex-grow">
                  <p className="text-xs text-gray-500 mb-4">
                    {language === 'en' ? 'INCLUDES:' : 'உள்ளடங்குதல்:'}
                  </p>
                  <ul className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-400 text-sm">
                        <Check size={16} className="text-accent" />
                        <span>
                          {i === 1
                            ? language === 'en'
                              ? 'Professional inspection'
                              : 'தொழில்முறை ஆய்வு'
                            : i === 2
                            ? language === 'en'
                              ? 'Quality service'
                              : 'தரமான சேவை'
                            : language === 'en'
                            ? 'Warranty'
                            : 'வாரண்டி'}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <motion.button
                  onClick={handleWhatsApp}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-full font-bold transition-colors ${
                    hoveredPackage === pkg.id
                      ? 'bg-accent text-dark'
                      : 'bg-dark-tertiary text-accent border border-accent/50 hover:bg-accent/10'
                  }`}
                >
                  {language === 'en' ? 'ASK ON WHATSAPP' : 'WHATSAPP-ல் கேட்கவும்'}
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
