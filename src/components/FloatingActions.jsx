import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { businessConfig } from '../config/businessConfig';

export const FloatingActions = () => {
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

  const actions = [
    {
      icon: Phone,
      label: language === 'en' ? 'CALL' : 'அழைக்கவும்',
      onClick: handleCall,
      color: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      icon: MessageCircle,
      label: language === 'en' ? 'WHATSAPP' : 'WHATSAPP',
      onClick: handleWhatsApp,
      color: 'bg-green-600 hover:bg-green-700',
    },
    {
      icon: MapPin,
      label: language === 'en' ? 'DIRECTIONS' : 'திசைகள்',
      onClick: handleDirections,
      color: 'bg-red-600 hover:bg-red-700',
    },
  ];

  return (
    <>
      {/* Desktop Floating Actions (Bottom Right) */}
      <div className="hidden md:flex fixed bottom-8 right-8 flex-col gap-4 z-40">
        {actions.map((action, index) => (
          <motion.button
            key={index}
            onClick={action.onClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`p-4 rounded-full text-white font-bold shadow-lg transition-all ${action.color} flex items-center gap-2 group`}
            title={action.label}
          >
            <action.icon size={24} />
            <span className="hidden group-hover:inline text-sm">
              {action.label}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Mobile Fixed Bottom Action Bar */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 right-0 md:hidden bg-dark border-t border-white/10 z-40"
      >
        <div className="flex gap-1 p-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))]">
          {actions.map((action, index) => (
            <motion.button
              key={index}
              onClick={action.onClick}
              whileTap={{ scale: 0.95 }}
              className={`flex-1 py-3 rounded-lg text-white font-bold text-xs flex items-center justify-center gap-1 transition-all ${action.color}`}
            >
              <action.icon size={18} />
              <span className="hidden sm:inline">{action.label}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Mobile Bottom Padding */}
      <div className="md:hidden h-[calc(5rem+env(safe-area-inset-bottom))]"></div>
    </>
  );
};
