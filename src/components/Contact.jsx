import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  AlertCircle,
  Share2,
  Play,
  Globe
} from 'lucide-react';

const Contact = () => {
  const { isDark } = useTheme();
  const formRef = useRef(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Social Media Management',
    date: '',
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
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          user_name: formData.name,
          user_email: formData.email,
          user_phone: formData.phone,
          user_service: formData.service,
          user_date: formData.date,
          user_message: formData.message,
        },
        PUBLIC_KEY
      );

      if (result.status === 200) {
        setStatus({ loading: false, success: true, error: '' });
        setFormData({ 
          name: '', 
          email: '', 
          phone: '', 
          service: 'Social Media Management', 
          date: '', 
          message: '' 
        });
        setTimeout(() => {
          setStatus(prev => ({ ...prev, success: false }));
        }, 5000);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({ loading: false, success: false, error: 'Failed to send. Please try again.' });
    }
  };

  const contactInfo = [
    { icon: Phone, title: 'Call Us', value: '+91 70069 71736', href: 'tel:+917006971736' },
    { icon: Mail, title: 'Email Us', value: 'Barkatadvertising@gmail.com', href: 'mailto:Barkatadvertising@gmail.com' },
    { icon: MapPin, title: 'Visit Us', value: 'Srinagar, Jammu & Kashmir' },
    { icon: Clock, title: 'Working Hours', value: 'Mon - Sat: 10:00 AM - 7:00 PM' },
  ];

  const socialLinks = [
    { icon: Share2, href: 'https://www.instagram.com/barkatmedia', label: 'Instagram' },
    { icon: Play, href: 'https://www.youtube.com/@barkatmedia', label: 'YouTube' },
    { icon: Globe, href: 'https://barkatmedia.com', label: 'Website' },
  ];

  return (
    <section id="contact" className={`py-24 transition-colors duration-500 ${
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
          <span className="section-subtitle justify-center">Get in Touch</span>
          <h2 className="section-title mt-3">Tell Us About Your Business</h2>
          <p className={`mt-4 text-lg ${isDark ? 'text-white/60' : 'text-barkat-text/60'}`}>
            Share a few details and we'll get back to you within a day — whether you need 
            a content plan, staff for the season, or a date covered.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`flex items-start gap-4 p-5 rounded-2xl transition-all duration-300 ${
                    isDark
                      ? 'bg-barkat-dark/40 border border-white/5 hover:border-barkat-gold/20'
                      : 'bg-barkat-lightGreen/30 border border-barkat-green/5 hover:border-barkat-green/20'
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-barkat-gold/10 flex items-center justify-center text-barkat-gold flex-shrink-0">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className={`text-sm font-semibold ${isDark ? 'text-white/60' : 'text-barkat-textLight'}`}>
                      {item.title}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className={`text-lg font-medium hover:text-barkat-gold transition-colors ${
                          isDark ? 'text-white' : 'text-barkat-text'
                        }`}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className={`text-lg font-medium ${isDark ? 'text-white' : 'text-barkat-text'}`}>
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Social Links */}
            <div className={`p-5 rounded-2xl transition-all duration-300 ${
              isDark
                ? 'bg-barkat-dark/40 border border-white/5'
                : 'bg-barkat-lightGreen/30 border border-barkat-green/5'
            }`}>
              <p className={`text-sm font-semibold mb-3 ${isDark ? 'text-white/60' : 'text-barkat-textLight'}`}>
                Follow Us
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isDark
                          ? 'bg-white/5 text-white/60 hover:bg-barkat-gold hover:text-barkat-dark'
                          : 'bg-barkat-green/10 text-barkat-green hover:bg-barkat-green hover:text-white'
                      }`}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className={`p-8 rounded-3xl transition-all duration-300 ${
                isDark
                  ? 'bg-barkat-dark/60 border border-white/5'
                  : 'bg-barkat-lightGreen/30 border border-barkat-green/5'
              }`}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm font-semibold mb-1 ${
                    isDark ? 'text-white/60' : 'text-barkat-textLight'
                  }`}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
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
                    name="email"
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

              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className={`block text-sm font-semibold mb-1 ${
                    isDark ? 'text-white/60' : 'text-barkat-textLight'
                  }`}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
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
                    Service
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
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

              <div className="mt-4">
                <label className={`block text-sm font-semibold mb-1 ${
                  isDark ? 'text-white/60' : 'text-barkat-textLight'
                }`}>
                  Meeting Date (if any)
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-barkat-gold ${
                    isDark
                      ? 'bg-barkat-dark/60 border-white/10 text-white focus:border-barkat-gold'
                      : 'bg-white border-barkat-green/10 text-barkat-text focus:border-barkat-gold'
                  }`}
                />
              </div>

              <div className="mt-4">
                <label className={`block text-sm font-semibold mb-1 ${
                  isDark ? 'text-white/60' : 'text-barkat-textLight'
                }`}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Tell us what you need..."
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
                  Message sent successfully! We'll get back to you soon.
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
                    Send Message <Send size={18} />
                  </>
                )}
              </button>

              <div className="mt-4 text-center">
                <Link
                  to="/start-project"
                  className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                    isDark
                      ? 'text-barkat-gold hover:text-yellow-400'
                      : 'text-barkat-green hover:text-barkat-green/70'
                  }`}
                >
                  Need more details? Fill our detailed project form →
                </Link>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;