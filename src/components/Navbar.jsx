import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? isDark
            ? 'bg-barkat-darkBg/90 backdrop-blur-xl border-b border-white/5'
            : 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-barkat-green/5'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom flex justify-between items-center h-20 lg:h-24">
        
        {/* Logo — Tumhari existing logo.png */}
        <a href="#" className="flex items-center gap-3 group">
          <img 
            src="/assets/logo/logo.png" 
            alt="Barkat Media" 
            className="h-12 w-12 rounded-xl object-cover"
          />
          <div className="hidden sm:block">
            <span className={`text-2xl font-serif font-semibold tracking-tight ${
              isDark ? 'text-white' : 'text-barkat-green'
            }`}>
              Barkat
            </span>
            <span className="text-2xl font-serif font-semibold text-barkat-gold">
              Media
            </span>
            <p className={`text-[10px] tracking-[0.25em] uppercase font-medium ${
              isDark ? 'text-white/40' : 'text-barkat-textLight'
            }`}>
              Digital Media Agency
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative px-5 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${
                isDark
                  ? 'text-white/60 hover:text-white hover:bg-white/5'
                  : 'text-barkat-text/70 hover:text-barkat-green hover:bg-barkat-green/5'
              }`}
            >
              {link.name}
              <span className="absolute inset-x-4 -bottom-0.5 h-0.5 bg-barkat-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          ))}
          
          <div className={`w-px h-6 mx-3 ${
            isDark ? 'bg-white/10' : 'bg-barkat-green/10'
          }`}></div>
          
          <a href="#contact" className="btn-primary">
            <span>Start a Project</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden relative w-12 h-12 flex items-center justify-center rounded-2xl transition-colors duration-300 ${
            isDark
              ? 'bg-white/5 hover:bg-white/10 text-white'
              : 'bg-barkat-green/5 hover:bg-barkat-green/10 text-barkat-green'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className={`lg:hidden overflow-hidden ${
              isDark
                ? 'bg-barkat-darkBg/95 backdrop-blur-xl border-t border-white/5'
                : 'bg-white/95 backdrop-blur-xl border-t border-barkat-green/5'
            }`}
          >
            <div className="px-6 py-8 flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                  href={link.href}
                  className={`text-lg font-medium py-3 px-4 rounded-xl transition-colors ${
                    isDark
                      ? 'text-white/60 hover:text-white hover:bg-white/5'
                      : 'text-barkat-text/70 hover:text-barkat-green hover:bg-barkat-green/5'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                href="#contact"
                className="btn-primary text-center"
                onClick={() => setIsOpen(false)}
              >
                <span>Start a Project</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;