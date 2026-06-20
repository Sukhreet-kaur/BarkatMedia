import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 2.5 seconds ke baad loading complete
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (onComplete) onComplete();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-barkat-darkBg"
        >
          {/* Logo with 3D Rotation */}
          <motion.div
            animate={{
              rotateY: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotateY: {
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              },
              scale: {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            style={{ perspective: 1000 }}
            className="relative"
          >
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl bg-gradient-to-br from-barkat-green to-barkat-greenDark shadow-2xl shadow-barkat-green/30 flex items-center justify-center">
              <span className="text-5xl md:text-6xl font-serif font-bold text-white">B</span>
              
              {/* Gold Ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-barkat-gold/40 via-yellow-500/20 to-barkat-gold/40 blur-sm"></div>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/10 to-transparent"></div>
            </div>
          </motion.div>

          {/* Brand Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-center"
          >
            <span className="text-3xl md:text-4xl font-serif font-bold text-white">
              Barkat
            </span>
            <span className="text-3xl md:text-4xl font-serif font-bold text-barkat-gold">
              Media
            </span>
            <p className="text-xs md:text-sm tracking-[0.25em] uppercase font-medium text-white/40 mt-1">
              Digital Media Agency
            </p>
          </motion.div>

          {/* Loading Bar */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute bottom-20 left-1/2 -translate-x-1/2 w-48 md:w-64 h-0.5 bg-white/10 rounded-full overflow-hidden"
          >
            <motion.div
              className="h-full bg-gradient-to-r from-barkat-gold to-barkat-green rounded-full"
              style={{ width: '100%' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;