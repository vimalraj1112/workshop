import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { businessConfig } from '../config/businessConfig';

export const FinalCTA = () => {
  const { language } = useLanguage();

  const handleWhatsApp = () => {
    const phoneNumber = businessConfig.contact.phone;
    const message = encodeURIComponent(businessConfig.contact.whatsapp);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleCall = () => {
    window.open(`tel:${businessConfig.contact.phone}`);
  };

  return (
    <section className="relative py-20 px-4 sm:px-8 lg:px-16 overflow-hidden bg-dark">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/Harley-Davidson_Road_King_in_Switzerland_%282022%29.jpg/1920px-Harley-Davidson_Road_King_in_Switzerland_%282022%29.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        initial={{ scale: 1 }}
        whileInView={{ scale: 1.05 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/60 to-dark/40"></div>
      </motion.div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
        >
          {language === 'en'
            ? 'READY TO GET YOUR BIKE BACK ON THE ROAD?'
            : 'உங்கள் பைக்கை சாலைக்கு திரும்ப வைக்க தயாரா?'}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-gray-300 mb-8"
        >
          {language === 'en'
            ? 'Book your next service with Nisha Two-Wheeler Workshop today.'
            : 'இன்று Nisha Two-Wheeler Workshop உடன் உங்கள் அடுத்த சேவையை பதிவு செய்யவும்.'}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={handleWhatsApp}
            className="px-8 py-4 bg-accent text-dark font-bold text-lg rounded-full hover:bg-orange-600 transition-colors"
          >
            {language === 'en' ? 'BOOK A SERVICE' : 'சேவை பதிவு'}
          </button>

          <button
            onClick={handleCall}
            className="px-8 py-4 border-2 border-accent text-accent font-bold text-lg rounded-full hover:bg-accent/10 transition-colors"
          >
            {language === 'en' ? 'CALL US' : 'எங்களை அழைக்கவும்'}
          </button>
        </motion.div>
      </div>
    </section>
  );
};
