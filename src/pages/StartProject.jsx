import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { 
  Send, 
  CheckCircle, 
  AlertCircle,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';

const StartProject = () => {
  const { isDark } = useTheme();
  const formRef = useRef(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'social-media',
    budget: '',
    timeline: '',
    message: ''
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  // ===== EMAILJS KEYS FROM .env =====
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });

    try {
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );

      if (result.status === 200) {
        setStatus({ loading: false, success: true, error: '' });
        setFormData({ name: '', email: '', phone: '', service: 'social-media', budget: '', timeline: '', message: '' });
        setTimeout(() => {
          setStatus(prev => ({ ...prev, success: false }));
        }, 5000);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({ loading: false, success: false, error: 'Failed to send. Please try again.' });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDark ? 'bg-barkat-darkBg' : 'bg-barkat-lightGreen/30'
    }`}>
      
      {/* Hero Section */}
      <section className={`pt-32 pb-16 transition-colors duration-500 ${
        isDark ? 'bg-barkat-darkBg/50' : 'bg-white'
      }`}>
        <div className="container-custom text-center">
          <Link 
            to="/" 
            className={`inline-flex items-center gap-2 text-sm font-medium mb-6 transition-colors ${
              isDark ? 'text-white/40 hover:text-barkat-gold' : 'text-barkat-text/50 hover:text-barkat-green'
            }`}
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-subtitle justify-center">Start a Project</span>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mt-3 ${
              isDark ? 'text-white' : 'text-barkat-green'
            }`}>
              Let's Start Your Project
            </h1>
            <p className={`mt-4 text-lg max-w-2xl mx-auto ${
              isDark ? 'text-white/60' : 'text-barkat-text/60'
            }`}>
              Fill the form below and we'll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container-custom max-w-3xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className={`p-8 md:p-12 rounded-3xl transition-all duration-300 ${
                isDark
                  ? 'bg-barkat-dark/60 border border-white/5'
                  : 'bg-white border border-barkat-green/5 shadow-lg'
              }`}
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm font-semibold mb-1 ${
                    isDark ? 'text-white/60' : 'text-barkat-textLight'
                  }`}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-barkat-gold ${
                      isDark
                        ? 'bg-barkat-dark/60 border-white/10 text-white placeholder-white/30 focus:border-barkat-gold'
                        : 'bg-white border-barkat-green/10 text-barkat-text placeholder-barkat-text/30 focus:border-barkat-gold'
                    }`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-semibold mb-1 ${
                    isDark ? 'text-white/60' : 'text-barkat-textLight'
                  }`}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-barkat-gold ${
                      isDark
                        ? 'bg-barkat-dark/60 border-white/10 text-white placeholder-white/30 focus:border-barkat-gold'
                        : 'bg-white border-barkat-green/10 text-barkat-text placeholder-barkat-text/30 focus:border-barkat-gold'
                    }`}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className={`block text-sm font-semibold mb-1 ${
                    isDark ? 'text-white/60' : 'text-barkat-textLight'
                  }`}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="user_phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 70069 71736"
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-barkat-gold ${
                      isDark
                        ? 'bg-barkat-dark/60 border-white/10 text-white placeholder-white/30 focus:border-barkat-gold'
                        : 'bg-white border-barkat-green/10 text-barkat-text placeholder-barkat-text/30 focus:border-barkat-gold'
                    }`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-semibold mb-1 ${
                    isDark ? 'text-white/60' : 'text-barkat-textLight'
                  }`}>
                    Service *
                  </label>
                  <select
                    name="user_service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-barkat-gold ${
                      isDark
                        ? 'bg-barkat-dark/60 border-white/10 text-white focus:border-barkat-gold'
                        : 'bg-white border-barkat-green/10 text-barkat-text focus:border-barkat-gold'
                    }`}
                  >
                    <option value="Social Media Management">Social Media Management</option>
                    <option value="Hospitality Staffing">Hospitality Staffing</option>
                    <option value="Wedding Films & Photography">Wedding Films & Photography</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className={`block text-sm font-semibold mb-1 ${
                    isDark ? 'text-white/60' : 'text-barkat-textLight'
                  }`}>
                    Budget Range
                  </label>
                  <select
                    name="user_budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-barkat-gold ${
                      isDark
                        ? 'bg-barkat-dark/60 border-white/10 text-white focus:border-barkat-gold'
                        : 'bg-white border-barkat-green/10 text-barkat-text focus:border-barkat-gold'
                    }`}
                  >
                    <option value="">Select budget range</option>
                    <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000</option>
                    <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                    <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                    <option value="₹1,00,000+">₹1,00,000+</option>
                  </select>
                </div>
                <div>
                  <label className={`block text-sm font-semibold mb-1 ${
                    isDark ? 'text-white/60' : 'text-barkat-textLight'
                  }`}>
                    Project Timeline
                  </label>
                  <select
                    name="user_timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-barkat-gold ${
                      isDark
                        ? 'bg-barkat-dark/60 border-white/10 text-white focus:border-barkat-gold'
                        : 'bg-white border-barkat-green/10 text-barkat-text focus:border-barkat-gold'
                    }`}
                  >
                    <option value="">Select timeline</option>
                    <option value="Urgent (within a week)">Urgent (within a week)</option>
                    <option value="Within 1 month">Within 1 month</option>
                    <option value="2-3 months">2-3 months</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <label className={`block text-sm font-semibold mb-1 ${
                  isDark ? 'text-white/60' : 'text-barkat-textLight'
                }`}>
                  Message *
                </label>
                <textarea
                  name="user_message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us about your project, requirements, and any specific details..."
                  className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-barkat-gold resize-none ${
                    isDark
                      ? 'bg-barkat-dark/60 border-white/10 text-white placeholder-white/30 focus:border-barkat-gold'
                      : 'bg-white border-barkat-green/10 text-barkat-text placeholder-barkat-text/30 focus:border-barkat-gold'
                  }`}
                />
              </div>

              {status.error && (
                <p className="mt-3 text-sm text-red-500 flex items-center gap-2">
                  <AlertCircle size={16} />
                  {status.error}
                </p>
              )}

              {status.success && (
                <p className="mt-3 text-sm text-green-500 flex items-center gap-2">
                  <CheckCircle size={16} />
                  Thank you! We'll get back to you within 24 hours.
                </p>
              )}

              <button
                type="submit"
                disabled={status.loading}
                className={`w-full mt-6 px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  isDark
                    ? 'bg-barkat-gold text-barkat-dark hover:bg-yellow-500'
                    : 'bg-barkat-green text-white hover:bg-barkat-greenDark'
                } ${status.loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {status.loading ? 'Sending...' : (
                  <>
                    Submit Project <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StartProject;