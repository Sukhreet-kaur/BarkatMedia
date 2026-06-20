import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';  // ← ADD THIS
import { 
  TrendingUp, 
  Users, 
  Camera,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const { isDark } = useTheme();

  const services = [
    {
      id: 'social-media',  // ← CHANGE: string ID for URL
      icon: TrendingUp,
      title: 'Social Media Management',
      description: 'We plan, shoot, and post so your page stays alive every week.',
      features: [
        'Monthly content calendars',
        'Reels, shorts & static posts',
        'Ad campaigns & boosting',
        'Comment & DM management'
      ],
    },
    {
      id: 'staffing',  // ← CHANGE: string ID for URL
      icon: Users,
      title: 'Hospitality Staffing',
      description: 'We place trained front-of-house and event staff with hotels and resorts across the valley.',
      features: [
        'Seasonal & peak-week staffing',
        'Event and banquet crews',
        'Front desk & guest services',
        'On-ground coordination'
      ],
    },
    {
      id: 'wedding-films',  // ← CHANGE: string ID for URL
      icon: Camera,
      title: 'Wedding Films & Photography',
      description: 'Cinematic coverage for Kashmiri weddings, from the mehendi to the baraat.',
      features: [
        'Full-day photography',
        'Highlight & feature films',
        'Drone coverage',
        'Same-week edited delivery'
      ],
    }
  ];

  return (
    <section id="services" className={`py-24 transition-colors duration-500 ${
      isDark ? 'bg-barkat-darkBg/50' : 'bg-barkat-lightGreen/30'
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
          <span className="section-subtitle justify-center">What We Do</span>
          <h2 className="section-title mt-3">Three Crafts, One Studio</h2>
          <p className={`mt-4 text-lg ${isDark ? 'text-white/60' : 'text-barkat-text/60'}`}>
            Every business in Kashmir needs to be seen, staffed, and remembered. 
            We handle all three, so you can run the business while we run the rest.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative p-8 rounded-3xl transition-all duration-500 ${
                  isDark
                    ? 'bg-barkat-dark/60 hover:bg-barkat-dark/80 border border-white/5 hover:border-barkat-gold/30'
                    : 'bg-white hover:shadow-2xl border border-barkat-green/5 hover:border-barkat-green/20'
                }`}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-barkat-gold/10 flex items-center justify-center text-barkat-gold mb-5">
                  <Icon size={24} />
                </div>

                {/* Title */}
                <h3 className={`text-xl font-serif font-semibold ${
                  isDark ? 'text-white' : 'text-barkat-green'
                }`}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className={`mt-2 text-sm ${isDark ? 'text-white/50' : 'text-barkat-text/60'}`}>
                  {service.description}
                </p>

                {/* Features */}
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className={`flex items-center gap-2 text-sm ${
                      isDark ? 'text-white/40' : 'text-barkat-text/50'
                    }`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-barkat-gold flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* ===== LEARN MORE — LINK TO SERVICE DETAIL PAGE ===== */}
                <Link
                  to={`/services/${service.id}`}
                  className={`inline-flex items-center gap-2 mt-6 text-sm font-semibold transition-all duration-300 group/link ${
                    isDark ? 'text-barkat-gold hover:text-yellow-400' : 'text-barkat-green hover:text-barkat-green/70'
                  }`}
                >
                  Learn More
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;