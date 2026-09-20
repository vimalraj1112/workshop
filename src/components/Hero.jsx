import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Play, Sparkles, ShieldCheck, Wrench } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { businessConfig } from '../config/businessConfig';

const HERO_BG =
  'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/Harley-Davidson_%22Street_Bob%22.jpg/1920px-Harley-Davidson_%22Street_Bob%22.jpg';

export const Hero = () => {
  const { language } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleWhatsApp = () => {
    const phoneNumber = businessConfig.contact.phone;
    const message = encodeURIComponent(businessConfig.contact.whatsapp);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleScroll = () => {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative w-full h-[100dvh] overflow-hidden bg-dark">
      {/* Background Image - Slow Ken Burns zoom */}
      <motion.div
        className="absolute inset-0"
        style={{ y: mousePosition.y * 0.015 }}
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${HERO_BG}')` }}
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/70 to-dark/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/40"></div>
      </motion.div>

      {/* Glow Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-accent/20 blur-[120px] animate-float pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-24 w-80 h-80 rounded-full bg-orange-500/15 blur-[100px] animate-float pointer-events-none" style={{ animationDelay: '1.5s' }}></div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-start px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-5"
        >
          <span className="inline-flex items-center gap-2 text-accent text-xs sm:text-sm font-bold tracking-widest uppercase glass rounded-full px-4 py-2">
            <Sparkles size={14} />
            {language === 'en' ? 'NISHA TWO-WHEELER WORKSHOP' : 'நிஷா டூ-வீலர் பணிசாலை'}
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight max-w-xl"
        >
          {language === 'en' ? (
            <>
              KEEP YOUR RIDE
              <br />
              <span className="text-gradient-static">PERFORMING AT PEAK</span>
            </>
          ) : (
            <>
              உங்கள் பைக்கை
              <br />
              <span className="text-gradient-static">சிறந்த செயல்திறனில் வைத்திருங்கள்</span>
            </>
          )}
        </motion.h1>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-400 text-base sm:text-lg max-w-xl mb-8 leading-relaxed"
        >
          {language === 'en'
            ? 'Professional motorcycle servicing with AI-powered diagnostics and precision maintenance.'
            : 'AI-சக்தி கொண்ட கண்டறிதல் மற்றும் துல்லியமான பராமரிப்புடன் தொழில்முறை மோட்டார் சைக்கிள் சேவை.'}
        </motion.p>

        {/* Trust Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-3 sm:gap-6 mb-8 text-sm text-gray-300"
        >
          {[
            { icon: Wrench, text: language === 'en' ? 'Experienced Mechanics' : 'அனுபவமுள்ள மெக்கானிக்குகள்' },
            { icon: ShieldCheck, text: language === 'en' ? 'Quality Service' : 'தரமான சேவை' },
            { icon: Sparkles, text: language === 'en' ? 'Transparent Pricing' : 'தெளிவான விலை' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.12 }}
              className="flex items-center gap-2"
            >
              <span className="text-accent">
                <item.icon size={16} />
              </span>
              <span>{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleWhatsApp}
            className="btn-shimmer px-8 py-3 bg-accent text-dark font-bold rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-accent/40"
          >
            {language === 'en' ? 'BOOK A SERVICE' : 'சேவை பதிவு'}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleScroll}
            className="px-8 py-3 border border-accent/60 text-accent font-bold rounded-full hover:bg-accent/10 transition-colors flex items-center justify-center gap-2 glass"
          >
            {language === 'en' ? 'EXPLORE SERVICES' : 'சேவைகளை பார்க்கவும்'}
            <Play size={16} />
          </motion.button>
        </motion.div>

        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="absolute bottom-24 right-8 hidden lg:block animate-float"
        >
          <div className="gradient-border rounded-2xl px-6 py-5 text-center shadow-xl shadow-accent/20">
            <p className="text-3xl font-extrabold text-gradient-static">10+</p>
            <p className="text-xs text-gray-400 mt-1 tracking-wide uppercase">
              {language === 'en' ? 'Years of Trust' : 'ஆண்டுகளாக நம்பிக்கை'}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-gray-500 text-[10px] tracking-[0.3em] uppercase">
          {language === 'en' ? 'Scroll' : 'கீழே'}
        </span>
        <div className="w-6 h-10 rounded-full border border-accent/40 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="w-1.5 h-3 rounded-full bg-accent"
          />
        </div>
        <ChevronDown size={16} className="text-accent -mt-1" />
      </motion.div>
    </section>
  );
};