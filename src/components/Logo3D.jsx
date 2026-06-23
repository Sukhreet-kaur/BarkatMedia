import React from 'react';
import { motion } from 'framer-motion';

const Logo3D = ({ className = '' }) => {
  const logoSrc = `${import.meta.env.BASE_URL}logo.png`;

  return (
    <motion.div
      className={`relative ${className}`}
      animate={{
        rotateY: [0, 360],
      }}
      transition={{
        rotateY: {
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }
      }}
      style={{ perspective: 1200 }}
    >
      {/* ===== ANIMATED RINGS ===== */}
      
      {/* Ring 1 — Outer Gold */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute -inset-6 rounded-full border-2 border-barkat-gold/30"
      />
      
      {/* Ring 2 — Opposite Direction */}
      <motion.div
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        className="absolute -inset-3 rounded-full border border-barkat-green/40"
      />

      {/* Ring 3 — Dashed */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute -inset-9 rounded-full border-2 border-dashed border-barkat-gold/15"
      />

      {/* Ring 4 — Dotted */}
      <motion.div
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute -inset-12 rounded-full border-2 border-dotted border-barkat-green/10"
      />

      {/* ===== GLOW EFFECTS ===== */}
      
      {/* Main Glow */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -inset-10 rounded-full bg-barkat-gold/10 blur-2xl"
      />

      {/* Secondary Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute -inset-14 rounded-full bg-barkat-green/10 blur-2xl"
      />

      {/* ===== MAIN LOGO ===== */}
      <motion.div
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.3 }}
        className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-barkat-green to-barkat-greenDark shadow-2xl shadow-barkat-green/30 flex items-center justify-center overflow-hidden"
      >
        {/* Animated Gradient Overlay */}
        <motion.div
          animate={{
            background: [
              'linear-gradient(135deg, rgba(26,92,58,0) 0%, rgba(199,154,69,0.3) 50%, rgba(26,92,58,0) 100%)',
              'linear-gradient(135deg, rgba(26,92,58,0) 0%, rgba(199,154,69,0.5) 50%, rgba(26,92,58,0) 100%)',
              'linear-gradient(135deg, rgba(26,92,58,0) 0%, rgba(199,154,69,0.3) 50%, rgba(26,92,58,0) 100%)',
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0"
        />

        {/* Shine Effect */}
        <motion.div
          animate={{
            x: ['-100%', '200%'],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]"
        />

        {/* Brand Logo */}
        <motion.img
          src={logoSrc}
          alt="Barkat Media"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative z-10 h-full w-full object-cover"
        />

        {/* Gold Accent Dot */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1.5 right-2 w-1.5 h-1.5 rounded-full bg-barkat-gold"
        />
      </motion.div>

      {/* ===== FLOATING ORBS ===== */}
      
      {/* Orb 1 */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          x: [0, 8, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-barkat-gold/60 blur-[1px]"
      />
      
      {/* Orb 2 */}
      <motion.div
        animate={{
          y: [0, 10, 0],
          x: [0, -8, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-barkat-green/60 blur-[1px]"
      />

      {/* Orb 3 */}
      <motion.div
        animate={{
          y: [0, 12, 0],
          x: [0, -6, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-1/2 -left-3 w-2 h-2 rounded-full bg-yellow-400/40 blur-[1px]"
      />
    </motion.div>
  );
};

export default Logo3D;
