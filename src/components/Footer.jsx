import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { businessConfig } from '../config/businessConfig';

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export const Footer = () => {
  const { language } = useLanguage();

  const footerLinks = {
    main: [
      { label: language === 'en' ? 'Home' : 'முகப்பு', href: '#home' },
      { label: language === 'en' ? 'Services' : 'சேவைகள்', href: '#services' },
      { label: language === 'en' ? 'About' : 'பற்றி', href: '#about' },
      { label: language === 'en' ? 'Gallery' : 'கேலரி', href: '#gallery' },
      { label: language === 'en' ? 'Contact' : 'தொடர்பு', href: '#contact' },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <footer className="bg-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-bold text-xl mb-4">
              NISHA
              <div className="text-xs text-accent tracking-widest">
                TWO-WHEELER WORKSHOP
              </div>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {businessConfig.brand.tagline}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold mb-4">
              {language === 'en' ? 'Quick Links' : 'விரிவு இணைப்புகள்'}
            </h4>
            <ul className="space-y-2">
              {footerLinks.main.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold mb-4">
              {language === 'en' ? 'Contact' : 'தொடர்பு'}
            </h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div>
                <p className="text-gray-300 font-semibold mb-1">
                  {language === 'en' ? 'Phone' : 'தொலைபேசி'}
                </p>
                <a
                  href={`tel:${businessConfig.contact.phone}`}
                  className="hover:text-accent transition-colors"
                >
                  {businessConfig.contact.phone}
                </a>
              </div>
              <div>
                <p className="text-gray-300 font-semibold mb-1">
                  {language === 'en' ? 'Address' : 'முகவரி'}
                </p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    businessConfig.contact.address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors flex items-start gap-2"
                >
                  <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                  <span>{businessConfig.contact.address}</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold mb-4">
              {language === 'en' ? 'Follow Us' : 'எங்களைப் பின்தொடரவும்'}
            </h4>
            <div className="flex gap-4">
              <a
                href={businessConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-dark-secondary border border-white/10 text-gray-400 hover:text-accent hover:border-accent transition-all"
              >
                <InstagramIcon />
              </a>
              <a
                href={businessConfig.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-dark-secondary border border-white/10 text-gray-400 hover:text-accent hover:border-accent transition-all"
              >
                <FacebookIcon />
              </a>
              <a
                href={businessConfig.socialLinks.googleBusiness}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-dark-secondary border border-white/10 text-gray-400 hover:text-accent hover:border-accent transition-all"
              >
                <MapPin size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400"
        >
          <motion.p variants={itemVariants}>
            © 2026 Nisha Two-Wheeler Workshop. All rights reserved.
          </motion.p>

          <motion.p variants={itemVariants}>
            {language === 'en' ? 'Website by' : 'வலைத்தளத்தை உருவாக்கியவர்'} <span className="text-accent font-semibold">Vimal</span>
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};