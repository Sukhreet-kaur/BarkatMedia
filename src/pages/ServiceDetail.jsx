import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/servicesData';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const { isDark } = useTheme();
  const service = servicesData[serviceId];

  // If service not found
  if (!service) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-serif font-semibold text-barkat-green">Service not found</h2>
          <Link to="/" className="text-barkat-gold hover:underline mt-4 inline-block">Go back home</Link>
        </div>
      </section>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDark ? 'bg-barkat-darkBg' : 'bg-barkat-lightGreen/30'
    }`}>
      
      {/* Hero Section */}
      <section className={`pt-32 pb-16 transition-colors duration-500 ${
        isDark ? 'bg-barkat-darkBg/50' : 'bg-white'
      }`}>
        <div className="container-custom">
          <Link 
            to="/#services" 
            className={`inline-flex items-center gap-2 text-sm font-medium mb-6 transition-colors ${
              isDark ? 'text-white/40 hover:text-barkat-gold' : 'text-barkat-text/50 hover:text-barkat-green'
            }`}
          >
            <ArrowLeft size={16} />
            Back to Services
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-5xl md:text-6xl mb-4 block">{service.icon}</span>
            <span className="section-subtitle">Service Detail</span>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mt-3 ${
              isDark ? 'text-white' : 'text-barkat-green'
            }`}>
              {service.title}
            </h1>
            <p className={`mt-4 text-lg max-w-2xl ${
              isDark ? 'text-white/60' : 'text-barkat-text/60'
            }`}>
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-custom max-w-4xl">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-12"
          >
            {/* Full Description */}
            <div className={`p-8 rounded-3xl transition-all duration-300 ${
              isDark
                ? 'bg-barkat-dark/60 border border-white/5'
                : 'bg-white border border-barkat-green/5 shadow-lg'
            }`}>
              <h2 className={`text-2xl font-serif font-semibold mb-4 ${
                isDark ? 'text-white' : 'text-barkat-green'
              }`}>
                About This Service
              </h2>
              <div className={`whitespace-pre-line ${isDark ? 'text-white/70' : 'text-barkat-text/70'}`}>
                {service.fullDescription}
              </div>
            </div>

            {/* Features */}
            <div className={`p-8 rounded-3xl transition-all duration-300 ${
              isDark
                ? 'bg-barkat-dark/60 border border-white/5'
                : 'bg-white border border-barkat-green/5 shadow-lg'
            }`}>
              <h2 className={`text-2xl font-serif font-semibold mb-4 ${
                isDark ? 'text-white' : 'text-barkat-green'
              }`}>
                What We Offer
              </h2>
              <ul className="grid md:grid-cols-2 gap-3">
                {service.features.map((feature, index) => (
                  <li key={index} className={`flex items-start gap-3 ${
                    isDark ? 'text-white/70' : 'text-barkat-text/70'
                  }`}>
                    <CheckCircle size={18} className="text-barkat-gold flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Process */}
            <div className={`p-8 rounded-3xl transition-all duration-300 ${
              isDark
                ? 'bg-barkat-dark/60 border border-white/5'
                : 'bg-white border border-barkat-green/5 shadow-lg'
            }`}>
              <h2 className={`text-2xl font-serif font-semibold mb-4 ${
                isDark ? 'text-white' : 'text-barkat-green'
              }`}>
                Our Process
              </h2>
              <div className="space-y-4">
                {service.process.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-barkat-gold/10 flex items-center justify-center text-barkat-gold font-semibold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className={isDark ? 'text-white/70' : 'text-barkat-text/70'}>
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing & CTA */}
            <div className={`p-8 rounded-3xl text-center transition-all duration-300 ${
              isDark
                ? 'bg-barkat-dark/60 border border-white/5'
                : 'bg-white border border-barkat-green/5 shadow-lg'
            }`}>
              <p className={`text-sm font-semibold mb-2 ${isDark ? 'text-white/40' : 'text-barkat-textLight'}`}>
                Starting From
              </p>
              <p className={`text-3xl font-serif font-bold ${isDark ? 'text-barkat-gold' : 'text-barkat-green'}`}>
                {service.pricing}
              </p>
              <Link
                to="/start-project"
                className="inline-flex items-center gap-2 mt-6 px-8 py-4 rounded-full font-semibold transition-all duration-300 bg-barkat-gold text-barkat-dark hover:bg-yellow-500"
              >
                {service.cta}
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;