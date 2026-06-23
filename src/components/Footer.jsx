import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Share2, Play, Globe, ArrowRight } from 'lucide-react';

const Footer = () => {
  const { isDark } = useTheme();
  const year = new Date().getFullYear();
  const logoSrc = `${import.meta.env.BASE_URL}logo.png`;

  const quickLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Share2, href: '#', label: 'Social' },
    { icon: Play, href: '#', label: 'YouTube' },
    { icon: Globe, href: '#', label: 'Website' },
  ];

  return (
    <footer className={`transition-colors duration-500 ${
      isDark ? 'bg-barkat-darkBg border-t border-white/5' : 'bg-barkat-lightGreen/30 border-t border-barkat-green/5'
    }`}>
      <div className="container-custom py-16">
        
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <img
                src={logoSrc}
                alt="Barkat Media"
                className="w-10 h-10 rounded-xl object-cover shadow-md"
              />
              <div>
                <span className={`text-xl font-serif font-semibold ${
                  isDark ? 'text-white' : 'text-barkat-green'
                }`}>
                  Barkat
                </span>
                <span className="text-xl font-serif font-semibold text-barkat-gold">
                  Media
                </span>
                <p className={`text-[10px] tracking-[0.2em] uppercase font-medium ${
                  isDark ? 'text-white/40' : 'text-barkat-textLight'
                }`}>
                  Digital Media Agency
                </p>
              </div>
            </div>
            <p className={`mt-4 text-sm ${isDark ? 'text-white/40' : 'text-barkat-textLight'}`}>
              Creative house for businesses across the valley — social media, staffing, and wedding films.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className={`text-sm font-semibold mb-4 ${isDark ? 'text-white/60' : 'text-barkat-textLight'}`}>
              Quick Links
            </h5>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`text-sm transition-colors duration-300 flex items-center gap-1 group ${
                      isDark ? 'text-white/40 hover:text-barkat-gold' : 'text-barkat-text/50 hover:text-barkat-green'
                    }`}
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className={`text-sm font-semibold mb-4 ${isDark ? 'text-white/60' : 'text-barkat-textLight'}`}>
              Contact
            </h5>
            <ul className="space-y-2 text-sm">
              <li className={isDark ? 'text-white/40' : 'text-barkat-text/50'}>
                <a href="tel:+917006971736" className="hover:text-barkat-gold transition-colors">
                  +91 70069 71736
                </a>
              </li>
              <li className={isDark ? 'text-white/40' : 'text-barkat-text/50'}>
                <a href="mailto:Barkatadvertising@gmail.com" className="hover:text-barkat-gold transition-colors">
                  Barkatadvertising@gmail.com
                </a>
              </li>
              <li className={isDark ? 'text-white/40' : 'text-barkat-text/50'}>
                Srinagar, Jammu & Kashmir
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h5 className={`text-sm font-semibold mb-4 ${isDark ? 'text-white/60' : 'text-barkat-textLight'}`}>
              Follow Us
            </h5>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
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
        </div>

        {/* Bottom Bar */}
        <div className={`mt-12 pt-6 text-center text-sm border-t ${
          isDark ? 'border-white/5 text-white/30' : 'border-barkat-green/10 text-barkat-textLight'
        }`}>
          © {year} Barkat Media. Srinagar, Kashmir. Built with ❤️
        </div>
      </div>
    </footer>
  );
};

export default Footer;
