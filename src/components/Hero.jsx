import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { isDark } = useTheme();
  const logoSrc = `${import.meta.env.BASE_URL}logo.png`;

  return (
    <section
      className={`min-h-screen flex items-center relative overflow-hidden transition-colors duration-500 ${
        isDark ? 'bg-transparent' : 'bg-transparent'
      }`}
    >
      {/* Background Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: ['0%', '10%', '0%'],
            y: ['0%', '-10%', '0%'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-3xl ${
            isDark ? 'bg-barkat-green/20' : 'bg-barkat-gold/10'
          }`}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: ['0%', '-10%', '0%'],
            y: ['0%', '10%', '0%'],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className={`absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full blur-3xl ${
            isDark ? 'bg-barkat-gold/10' : 'bg-barkat-green/10'
          }`}
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: ['0%', '5%', '0%'],
            y: ['0%', '5%', '0%'],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-3xl ${
            isDark ? 'bg-barkat-green/10' : 'bg-barkat-gold/5'
          }`}
        />
      </div>

      <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-16 items-center py-20">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-transparent"
        >
          <span className="inline-flex items-center gap-3 text-barkat-gold font-semibold tracking-[0.15em] uppercase text-sm">
            <span className="w-8 h-px bg-barkat-gold"></span>
            Srinagar, Kashmir
          </span>
          
          <h1
            className={`text-4xl md:text-5xl lg:text-7xl font-serif font-semibold mt-4 leading-[1.1] ${
              isDark ? 'text-white' : 'text-barkat-green'
            }`}
          >
            Stories told the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-barkat-gold via-yellow-500 to-barkat-green">
              Kashmir
            </span>{' '}
            way.
          </h1>
          
          <p
            className={`text-lg mt-6 max-w-lg leading-relaxed ${
              isDark ? 'text-white/70' : 'text-barkat-text/70'
            }`}
          >
            Barkat Media is a creative house for businesses across the valley — 
            we run social media for brands, place trained staff with hotels and 
            resorts, and film weddings worth keeping.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-8">
            {/* ===== START A PROJECT — LINK TO /start-project ===== */}
            <Link to="/start-project" className="btn-primary">
              <span>Start a project</span>
              <ArrowRight size={18} />
            </Link>
            
            <a
              href="#services"
              className={`group inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 font-semibold transition-all duration-300 ${
                isDark
                  ? 'border-white/20 text-white hover:bg-white hover:text-barkat-dark'
                  : 'border-barkat-green/20 text-barkat-green hover:bg-barkat-green hover:text-white'
              }`}
            >
              <Play size={18} className="group-hover:fill-current" />
              See what we do
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-12 mt-12 pt-8 border-t border-barkat-green/10 dark:border-white/10">
            {[
              { label: 'Social', desc: 'Content & ad management' },
              { label: 'Staffing', desc: 'Hotels & resort teams' },
              { label: 'Films', desc: 'Weddings & events' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <p
                  className={`text-lg font-serif font-semibold ${
                    isDark ? 'text-barkat-gold' : 'text-barkat-green'
                  }`}
                >
                  {item.label}
                </p>
                <p
                  className={`text-sm ${
                    isDark ? 'text-white/50' : 'text-barkat-textLight'
                  }`}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right — Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center justify-center"
        >
          <div className="relative w-full aspect-square max-w-lg">
            
            <div className="absolute inset-0 rounded-full bg-transparent">
              <div className="absolute inset-[6%] rounded-full bg-transparent">
                <div
                  className={`absolute inset-[12%] rounded-full flex flex-col items-center justify-center ${
                    isDark
                      ? 'bg-barkat-darkBg/40 backdrop-blur-sm border border-white/5'
                      : 'bg-white/60 backdrop-blur-sm border border-barkat-green/5'
                  } shadow-2xl`}
                >
                  <img
                    src={logoSrc}
                    alt="Barkat Media"
                    className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-2xl object-cover shadow-xl"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-2xl bg-gradient-to-br from-barkat-green to-barkat-greenDark flex items-center justify-center text-white font-serif font-bold text-5xl shadow-xl">
                    B
                  </div>

                  <div className="mt-4 text-center">
                    <span
                      className={`text-2xl md:text-3xl lg:text-4xl font-serif font-bold ${
                        isDark ? 'text-white' : 'text-barkat-green'
                      }`}
                    >
                      Barkat
                    </span>
                    <span className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-barkat-gold">
                      Media
                    </span>
                    <p
                      className={`text-[10px] md:text-xs lg:text-sm tracking-[0.25em] uppercase font-medium mt-1 ${
                        isDark ? 'text-white/50' : 'text-barkat-textLight'
                      }`}
                    >
                      Digital Media Agency
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Labels */}
            <motion.div
              animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className={`absolute top-[2%] right-[8%] px-4 py-2 rounded-full text-xs font-semibold ${
                isDark ? 'bg-transparent text-white/80' : 'bg-transparent text-barkat-green'
              }`}
            >
              🎬 Wedding Films
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className={`absolute bottom-[8%] left-[5%] px-4 py-2 rounded-full text-xs font-semibold ${
                isDark ? 'bg-transparent text-white/80' : 'bg-transparent text-barkat-green'
              }`}
            >
              📱 Social Media
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className={`absolute bottom-[22%] right-[5%] px-4 py-2 rounded-full text-xs font-semibold ${
                isDark ? 'bg-transparent text-white/80' : 'bg-transparent text-barkat-green'
              }`}
            >
              🏔️ Kashmir
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block ${
          isDark ? 'text-white/30' : 'text-barkat-green/30'
        }`}
      >
        <div
          className={`w-6 h-10 rounded-full border-2 flex items-start justify-center p-2 ${
            isDark ? 'border-white/20' : 'border-barkat-green/20'
          }`}
        >
          <div className="w-1 h-2 rounded-full bg-barkat-gold animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
