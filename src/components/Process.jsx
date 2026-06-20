import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { ClipboardEdit, Layout, Rocket, CheckCircle, ArrowRight } from 'lucide-react';

const Process = () => {
  const { isDark } = useTheme();

  const steps = [
    {
      number: '01',
      icon: ClipboardEdit,
      title: 'Brief',
      description: 'We sit with you, understand the business, the season, and the date that matters.'
    },
    {
      number: '02',
      icon: Layout,
      title: 'Plan',
      description: 'A content calendar, a staffing roster, or a shot list — built around your event or your month.'
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Execute',
      description: 'Our team shoots, posts, or shows up on the ground, on the day it\'s needed.'
    },
    {
      number: '04',
      icon: CheckCircle,
      title: 'Deliver',
      description: 'Edited content, a staffed floor, or a finished film — handed over on schedule.'
    }
  ];

  return (
    <section id="process" className={`py-24 transition-colors duration-500 ${
      isDark ? 'bg-barkat-darkBg' : 'bg-white'
    }`}>
      <div className="container-custom">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="section-subtitle justify-center">How We Work</span>
          <h2 className="section-title mt-3">From Brief to Delivery</h2>
          <p className={`mt-4 text-lg ${isDark ? 'text-white/60' : 'text-barkat-text/60'}`}>
            The same four frames, whether we're managing your page, staffing your front desk, 
            or filming your wedding.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {/* Connector Line — Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-[12.5%] right-[12.5%] h-0.5 -translate-y-1/2">
            <div className={`w-full h-full ${isDark ? 'bg-white/10' : 'bg-barkat-green/10'}`} />
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative p-6 rounded-2xl text-center transition-all duration-500 ${
                  isDark
                    ? 'bg-barkat-dark/40 hover:bg-barkat-dark/60 border border-white/5 hover:border-barkat-gold/20'
                    : 'bg-barkat-lightGreen/30 hover:bg-barkat-lightGreen/60 border border-barkat-green/5 hover:border-barkat-green/20'
                }`}
              >
                {/* Step Number */}
                <span className={`text-5xl font-serif font-bold ${
                  isDark ? 'text-white/10' : 'text-barkat-green/10'
                }`}>
                  {step.number}
                </span>

                {/* Icon */}
                <div className="w-16 h-16 mx-auto rounded-full bg-barkat-gold/10 flex items-center justify-center text-barkat-gold mb-4 relative z-10">
                  <Icon size={26} />
                </div>

                {/* Title */}
                <h4 className={`text-lg font-serif font-semibold ${
                  isDark ? 'text-white' : 'text-barkat-green'
                }`}>
                  {step.title}
                </h4>

                {/* Description */}
                <p className={`mt-2 text-sm ${isDark ? 'text-white/40' : 'text-barkat-text/50'}`}>
                  {step.description}
                </p>

                {/* Connector Dot */}
                <div className={`absolute -bottom-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full ${
                  isDark ? 'bg-barkat-gold/30' : 'bg-barkat-gold/30'
                }`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;