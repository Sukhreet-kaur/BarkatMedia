import React from 'react';
import { motion } from 'framer-motion';

const Logo3D = ({ className = '' }) => {
  return (
    <motion.div
      className={`relative ${className}`}
      animate={{
        rotateY: [0, 360],
        scale: [1, 1.02, 1],
      }}
      transition={{
        rotateY: {
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        },
        scale: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      style={{ perspective: 1000 }}
    >
      <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-barkat-green to-barkat-greenDark shadow-lg shadow-barkat-green/20 flex items-center justify-center">
        <span className="text-2xl font-serif font-bold text-white">B</span>
        
        {/* Gold Ring */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-barkat-gold/40 via-yellow-500/20 to-barkat-gold/40 blur-sm"></div>
        
        {/* Shine Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/10 to-transparent"></div>
        
        {/* Glow Pulse */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -inset-2 rounded-2xl bg-barkat-gold/20 blur-xl"
        />
      </div>
    </motion.div>
  );
};

export default Logo3D;