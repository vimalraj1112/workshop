import { useState } from 'react';
import { LanguageContext } from './LanguageContext';

export const LanguageProvider = ({ children }) => {
  // Load language preference from localStorage on mount
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('nishaLanguage') || 'en';
    return savedLanguage;
  });

  // Save language preference to localStorage
  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('nishaLanguage', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};