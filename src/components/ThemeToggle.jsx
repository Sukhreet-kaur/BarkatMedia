import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      onClick={toggleTheme}
      className={`fixed top-24 right-6 z-50 p-3 rounded-full transition-all duration-300 ${
        isDark 
          ? 'bg-barkat-dark/80 text-yellow-400 hover:bg-barkat-dark border border-white/10' 
          : 'bg-white/80 text-barkat-green hover:bg-white shadow-lg'
      }`}
    >
      {isDark ? <Sun size={22} /> : <Moon size={22} />}
    </motion.button>
  );
};

export default ThemeToggle;