import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { ArrowRight, MapPin, Users, Camera, Heart } from 'lucide-react';

const About = () => {
  const { isDark } = useTheme();

  const stats = [
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '200+', label: 'Projects Delivered', icon: Camera },
    { number: '100%', label: 'Client Satisfaction', icon: Heart },
  ];

  return (
    <section id="about" className={`py-24 transition-colors duration-500 ${
      isDark ? 'bg-barkat-darkBg/50' : 'bg-barkat-lightGreen/30'
    }`}>
      <div className="container-custom">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left — Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="section-subtitle">Rooted in the Valley</span>
            
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mt-3 leading-tight ${
              isDark ? 'text-white' : 'text-barkat-green'
            }`}>
              Barkat Media is built in <br />
              <span className="text-barkat-gold">Kashmir</span>, for Kashmir's businesses.
            </h2>

            <div className={`mt-6 space-y-4 text-lg ${isDark ? 'text-white/70' : 'text-barkat-text/70'}`}>
              <p>
                We're based in Srinagar and work with hotels, resorts, restaurants, 
                and family businesses across the valley — the kind of clients who 
                need a team that already understands the season, the wedding calendar, 
                and the way word travels here.
              </p>
              <p>
                <span className="font-semibold text-barkat-gold">"Barkat"</span> means 
                blessing, growth, abundance. It's the word we want attached to your 
                business — more guests, more bookings, more people who remember your 
                name after a single reel or a single wedding film.
              </p>
            </div>

            <a
              href="#contact"
              className={`inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                isDark
                  ? 'bg-barkat-gold text-barkat-dark hover:bg-yellow-500'
                  : 'bg-barkat-green text-white hover:bg-barkat-greenDark'
              }`}
            >
              Talk to the team
              <ArrowRight size={18} />
            </a>
          </motion.div>

          {/* Right — Stats & Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`p-6 rounded-2xl text-center transition-all duration-300 ${
                      isDark
                        ? 'bg-barkat-dark/60 border border-white/5 hover:border-barkat-gold/20'
                        : 'bg-white border border-barkat-green/5 hover:border-barkat-green/20 shadow-lg'
                    }`}
                  >
                    <div className="w-12 h-12 mx-auto rounded-full bg-barkat-gold/10 flex items-center justify-center text-barkat-gold mb-3">
                      <Icon size={22} />
                    </div>
                    <p className={`text-2xl font-serif font-bold ${
                      isDark ? 'text-barkat-gold' : 'text-barkat-green'
                    }`}>
                      {stat.number}
                    </p>
                    <p className={`text-xs ${isDark ? 'text-white/40' : 'text-barkat-textLight'}`}>
                      {stat.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Illustration / Map */}
            <div className={`p-8 rounded-2xl text-center transition-all duration-300 ${
              isDark
                ? 'bg-barkat-dark/60 border border-white/5'
                : 'bg-white border border-barkat-green/5 shadow-lg'
            }`}>
              <div className="flex items-center justify-center gap-2 text-barkat-gold mb-2">
                <MapPin size={20} />
                <span className="font-semibold">Srinagar, Jammu & Kashmir</span>
              </div>
              <p className={`text-sm ${isDark ? 'text-white/40' : 'text-barkat-textLight'}`}>
                Working across the valley — from Gulmarg to Pahalgam
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;