import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { businessConfig } from '../config/businessConfig';

export const Location = () => {
  const { language } = useLanguage();

  const handleCall = () => {
    window.open(`tel:${businessConfig.contact.phone}`);
  };

  const handleWhatsApp = () => {
    const phoneNumber = businessConfig.contact.phone;
    const message = encodeURIComponent(businessConfig.contact.whatsapp);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleDirections = () => {
    window.open(
      `https://maps.google.com/?q=${encodeURIComponent(
        businessConfig.contact.address
      )}, ${businessConfig.contact.pincode}`,
      '_blank'
    );
  };

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-8 lg:px-16 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="text-balance text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 sm:mb-12"
            >
              {language === 'en' ? 'GET IN TOUCH' : 'தொடர்பு கொள்ளவும்'}
            </motion.h2>

            {/* Contact Details */}
            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <h3 className="text-white font-bold text-2xl mb-6">
                {language === 'en' ? businessConfig.brand.name : 'நிஷா டூ-வீலர் பணிசாலை'}
              </h3>

              {/* Address */}
              <div className="flex gap-4 mb-6">
                <MapPin size={24} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300 text-sm font-semibold mb-1">
                    {language === 'en' ? 'Address' : 'முகவரி'}
                  </p>
                  <p className="text-gray-400">
                    {businessConfig.contact.address}
                    <br />
                    {businessConfig.contact.pincode}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 mb-6">
                <Phone size={24} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300 text-sm font-semibold mb-1">
                    {language === 'en' ? 'Phone' : 'தொலைபேசி'}
                  </p>
                  <p className="text-gray-400">{businessConfig.contact.phone}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <Clock size={24} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300 text-sm font-semibold mb-2">
                    {language === 'en' ? 'Opening Hours' : 'திறப்பு நேரம்'}
                  </p>
                  <div className="text-gray-400 text-sm space-y-1">
                    <p>
                      {language === 'en' ? 'Mon - Sat:' : 'திங்கள் - சனி:'}
                      <span className="ml-2 text-white">
                        {businessConfig.hours.monday}
                      </span>
                    </p>
                    <p>
                      {language === 'en' ? 'Sunday:' : 'ஞாயிற்றுக்கிழமை:'}
                      <span className="ml-2 text-white">
                        {businessConfig.hours.sunday}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-white/10"
            >
              <button
                onClick={handleCall}
                className="px-6 py-3 bg-accent text-dark font-bold rounded-full hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                {language === 'en' ? 'CALL' : 'அழைக்கவும்'}
              </button>

              <button
                onClick={handleWhatsApp}
                className="px-6 py-3 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                {language === 'en' ? 'WHATSAPP' : 'WHATSAPP'}
              </button>

              <button
                onClick={handleDirections}
                className="px-6 py-3 border border-accent text-accent font-bold rounded-full hover:bg-accent/10 transition-colors flex items-center justify-center gap-2"
              >
                <MapPin size={20} />
                {language === 'en' ? 'DIRECTIONS' : 'திசைகள்'}
              </button>
            </motion.div>
          </motion.div>

          {/* Right - Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-full h-72 sm:h-96 md:h-[500px] rounded-lg overflow-hidden border border-white/10 bg-dark-secondary flex items-center justify-center relative">
              {/* Stylish Map Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-dark-secondary to-dark-tertiary"></div>

              <div className="relative z-10 text-center px-8">
                <MapPin size={48} className="text-accent mx-auto mb-4" />
                <h3 className="text-white text-2xl font-bold mb-2">
                  {language === 'en' ? 'Nisha Two-Wheeler Workshop' : 'நிஷா டூ-வீலர் பணிசாலை'}
                </h3>
                <p className="text-gray-400 mb-6">
                  {language === 'en'
                    ? 'Located in the heart of Tirunelveli'
                    : 'திருநெல்வேலியின் மையப்பகுதியில் அமைந்துள்ளது'}
                </p>

                <button
                  onClick={handleDirections}
                  className="px-6 py-2 bg-accent text-dark font-bold rounded-full hover:bg-orange-600 transition-colors"
                >
                  {language === 'en' ? 'Open in Maps' : 'மாப்பில் திறக்கவும்'}
                </button>

                {/* Address Info */}
                <div className="mt-6 space-y-2 text-sm text-gray-400">
                  <p>{businessConfig.contact.address}</p>
                  <p>{businessConfig.contact.pincode}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
