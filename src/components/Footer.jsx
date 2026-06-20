import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();
  const year = new Date().getFullYear();

  return (
    <footer className={`py-12 border-t transition-colors duration-500 ${
      isDark 
        ? 'bg-barkat-darkBg border-white/5' 
        : 'bg-white border-barkat-green/10'
    }`}>
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/assets/logo/logo.png" 
              alt="Barkat Media" 
              className="h-10 w-10 rounded-xl object-cover"
            />
            <div>
              <span className={`text-xl font-serif font-semibold ${
                isDark ? 'text-white' : 'text-barkat-green'
              }`}>
                Barkat
              </span>
              <span className="text-xl font-serif font-semibold text-barkat-gold">
                Media
              </span>
              <p className={`text-[10px] tracking-[0.2em] uppercase ${
                isDark ? 'text-white/40' : 'text-barkat-textLight'
              }`}>
                Digital Media Agency
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="#services" className={`transition-colors ${
              isDark ? 'text-white/60 hover:text-white' : 'text-barkat-text/60 hover:text-barkat-green'
            }`}>
              Services
            </a>
            <a href="#work" className={`transition-colors ${
              isDark ? 'text-white/60 hover:text-white' : 'text-barkat-text/60 hover:text-barkat-green'
            }`}>
              Work
            </a>
            <a href="#process" className={`transition-colors ${
              isDark ? 'text-white/60 hover:text-white' : 'text-barkat-text/60 hover:text-barkat-green'
            }`}>
              Process
            </a>
            <a href="#about" className={`transition-colors ${
              isDark ? 'text-white/60 hover:text-white' : 'text-barkat-text/60 hover:text-barkat-green'
            }`}>
              About
            </a>
            <a href="#contact" className={`transition-colors ${
              isDark ? 'text-white/60 hover:text-white' : 'text-barkat-text/60 hover:text-barkat-green'
            }`}>
              Contact
            </a>
          </div>
        </div>

        <div className={`mt-8 pt-8 text-center text-xs border-t ${
          isDark ? 'border-white/5 text-white/30' : 'border-barkat-green/10 text-barkat-textLight'
        }`}>
          © {year} Barkat Media. Srinagar, Kashmir.
        </div>
      </div>
    </footer>
  );
};

export default Footer;