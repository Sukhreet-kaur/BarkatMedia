import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const { isDark } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Faizan Rasool',
      role: 'Business Owner',
      content: 'Barkat Media transformed our social media presence completely. Within a month, our engagement doubled. Their team understands the Kashmir market like no one else.',
      rating: 5,
      image: 'https://ui-avatars.com/api/?name=Faizan+Rasool&background=1A5C3A&color=fff&size=80'
    },
    {
      id: 2,
      name: 'Zeeshan Tak',
      role: 'Entrepreneur',
      content: 'The wedding film they created for us was absolutely stunning! They captured every emotion perfectly. My family still watches it every month. Highly recommend Barkat Media.',
      rating: 5,
      image: 'https://ui-avatars.com/api/?name=Zeeshan+Tak&background=1A5C3A&color=fff&size=80'
    },
    {
      id: 3,
      name: 'Sarovar Premiere',
      role: 'Hospitality Partner',
      content: 'We needed trained staff for multiple events. Barkat Media provided professional teams who handled everything seamlessly. Our guests were impressed with the service quality.',
      rating: 5,
      image: 'https://ui-avatars.com/api/?name=Sarovar+Premiere&background=1A5C3A&color=fff&size=80'
    },
    {
      id: 4,
      name: 'Khan International Sports',
      role: 'Sports Brand',
      content: 'The social media campaign they created for our brand went viral. We got orders from across India. Their creativity and execution is unmatched in the valley.',
      rating: 5,
      image: 'https://ui-avatars.com/api/?name=Khan+Sports&background=1A5C3A&color=fff&size=80'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className={`py-24 transition-colors duration-500 ${
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
          <span className="section-subtitle justify-center">Testimonials</span>
          <h2 className="section-title mt-3">What Our Clients Say</h2>
          <p className={`mt-4 text-lg ${isDark ? 'text-white/60' : 'text-barkat-text/60'}`}>
            Real stories from real clients we've worked with across Kashmir.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Main Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className={`p-8 md:p-12 rounded-3xl text-center transition-all duration-300 ${
                isDark
                  ? 'bg-barkat-dark/60 border border-white/5'
                  : 'bg-white border border-barkat-green/5 shadow-lg'
              }`}
            >
              {/* Avatar */}
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-barkat-gold"
              />

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-barkat-gold text-barkat-gold" />
                ))}
              </div>

              {/* Content */}
              <p className={`text-lg md:text-xl italic ${isDark ? 'text-white/80' : 'text-barkat-text/80'}`}>
                "{testimonials[currentIndex].content}"
              </p>

              {/* Name & Role */}
              <div className="mt-4">
                <p className={`font-semibold ${isDark ? 'text-white' : 'text-barkat-green'}`}>
                  {testimonials[currentIndex].name}
                </p>
                <p className={`text-sm ${isDark ? 'text-white/40' : 'text-barkat-textLight'}`}>
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className={`absolute -left-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all duration-300 ${
              isDark
                ? 'bg-barkat-dark/80 text-white hover:bg-barkat-dark border border-white/10'
                : 'bg-white text-barkat-green hover:bg-barkat-lightGreen shadow-lg'
            }`}
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className={`absolute -right-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all duration-300 ${
              isDark
                ? 'bg-barkat-dark/80 text-white hover:bg-barkat-dark border border-white/10'
                : 'bg-white text-barkat-green hover:bg-barkat-lightGreen shadow-lg'
            }`}
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'w-6 bg-barkat-gold'
                    : isDark
                      ? 'bg-white/20 hover:bg-white/40'
                      : 'bg-barkat-green/20 hover:bg-barkat-green/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;