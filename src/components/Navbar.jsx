import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { businessConfig } from '../config/businessConfig';

const navItems = [
  { key: 'home', href: '#home', en: 'Home', ta: 'முகப்பு' },
  { key: 'services', href: '#services', en: 'Services', ta: 'சேவைகள்' },
  { key: 'about', href: '#about', en: 'About', ta: 'பற்றி' },
  { key: 'gallery', href: '#gallery', en: 'Gallery', ta: 'கேலரி' },
  { key: 'reviews', href: '#reviews', en: 'Reviews', ta: 'விமர்சனங்கள்' },
  { key: 'contact', href: '#contact', en: 'Contact', ta: 'தொடர்பு' },
];

const LanguageToggle = ({ language, changeLanguage }) => (
  <div className="flex items-center gap-2 border border-white/20 rounded-full px-3 py-1 bg-white/5 backdrop-blur-sm">
    <button
      onClick={() => changeLanguage('en')}
      className={`px-2 py-1 text-xs font-medium transition-colors ${
        language === 'en' ? 'text-accent' : 'text-gray-400 hover:text-white'
      }`}
    >
      EN
    </button>
    <div className="w-px h-4 bg-white/20"></div>
    <button
      onClick={() => changeLanguage('ta')}
      className={`px-2 py-1 text-xs font-medium transition-colors ${
        language === 'ta' ? 'text-accent' : 'text-gray-400 hover:text-white'
      }`}
    >
      TA
    </button>
  </div>
);

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, changeLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    const phoneNumber = businessConfig.contact.phone;
    const message = encodeURIComponent(businessConfig.contact.whatsapp);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/40'
          : 'bg-gradient-to-b from-dark/80 to-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="inline-flex flex-col leading-tight group">
              <span className="text-white font-bold text-lg tracking-wider group-hover:text-accent transition-colors">
                NISHA
              </span>
              <span className="text-xs text-accent tracking-widest group-hover:tracking-[0.2em] transition-all">
                TWO-WHEELER WORKSHOP
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="group relative text-gray-300 hover:text-accent transition-colors text-sm font-medium"
              >
                {language === 'en' ? link.en : link.ta}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-orange-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Right Side - Language Toggle & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageToggle language={language} changeLanguage={changeLanguage} />

            {/* CTA Button */}
            <motion.button
              onClick={handleWhatsApp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="btn-shimmer px-6 py-2 bg-accent text-dark font-bold text-sm rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-accent/30"
            >
              {language === 'en' ? 'BOOK SERVICE' : 'சேவை பதிவு'}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageToggle language={language} changeLanguage={changeLanguage} />

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="md:hidden bg-dark-secondary/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
            >
              <div className="px-2 py-4">
                {navItems.map((link, i) => (
                  <motion.a
                    key={link.key}
                    href={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.3 }}
                    className="block px-4 py-2.5 text-gray-300 hover:text-accent hover:bg-white/5 rounded-lg transition-colors text-sm font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {language === 'en' ? link.en : link.ta}
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="px-4 py-4 mt-2"
                >
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      handleWhatsApp();
                      setIsOpen(false);
                    }}
                    className="w-full btn-shimmer px-4 py-2.5 bg-accent text-dark font-bold text-sm rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-accent/30"
                  >
                    {language === 'en' ? 'BOOK SERVICE' : 'சேவை பதிவு'}
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};