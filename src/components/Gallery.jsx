import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { businessConfig } from '../config/businessConfig';

export const Gallery = () => {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Workshop', 'Service', 'Repairs', 'Bikes', 'Mechanics'];

  const filteredGallery =
    filter === 'All'
      ? businessConfig.gallery
      : businessConfig.gallery.filter((img) => img.category === filter);

  const handlePrevious = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? filteredGallery.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedIndex((prev) =>
      prev === filteredGallery.length - 1 ? 0 : prev + 1
    );
  };

  const handleImageClick = (index) => {
    setSelectedImage(filteredGallery[index]);
    setSelectedIndex(index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="gallery" className="py-16 sm:py-20 px-4 sm:px-8 lg:px-16 bg-dark-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-balance text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            {language === 'en' ? 'OUR WORK' : 'எங்கள் வேலை'}
          </h2>
          <p className="text-gray-400 text-lg">
            {language === 'en'
              ? 'Professional motorcycle service and repair at its finest'
              : 'சிறந்த தொழில்முறை மோட்டார் சைக்கிள் சேவை மற்றும் பழுது நீக்கம்'}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 sm:px-6 py-2 rounded-full font-semibold text-sm transition-all ${
                filter === category
                  ? 'bg-accent text-dark'
                  : 'bg-dark-tertiary text-gray-400 hover:text-white border border-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid - Masonry Style */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
        >
          {filteredGallery.map((image, index) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              onClick={() => handleImageClick(index)}
              className="group relative overflow-hidden rounded-lg cursor-pointer h-44 sm:h-72"
            >
              {/* Image */}
              <motion.img
                src={image.imageUrl}
                alt={language === 'en' ? image.altEn : image.altTa}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <p className="text-white font-semibold text-sm">
                    {image.category}
                  </p>
                  <p className="text-gray-300 text-xs mt-1">
                    {language === 'en' ? image.altEn : image.altTa}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          >
            {/* Content */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl"
            >
              {/* Image */}
              <img
                src={selectedImage.imageUrl}
                alt={language === 'en' ? selectedImage.altEn : selectedImage.altTa}
                className="w-full rounded-lg"
              />

              {/* Info */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-center"
              >
                <p className="text-accent font-semibold text-sm mb-2">
                  {selectedImage.category}
                </p>
                <p className="text-white text-lg">
                  {language === 'en' ? selectedImage.altEn : selectedImage.altTa}
                </p>
              </motion.div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-6">
                <button
                  onClick={handlePrevious}
                  className="p-3 rounded-full bg-accent/20 text-accent hover:bg-accent/40 transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>

                <span className="text-gray-400 text-sm">
                  {selectedIndex + 1} / {filteredGallery.length}
                </span>

                <button
                  onClick={handleNext}
                  className="p-3 rounded-full bg-accent/20 text-accent hover:bg-accent/40 transition-colors"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 p-2 text-white hover:text-accent transition-colors"
              >
                <X size={28} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
