import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { X, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const { isDark } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Aanya & Faizan',
      category: 'Wedding Film',
      location: 'Srinagar',
      gradient: 'from-emerald-600 to-teal-700',
      description: 'Cinematic wedding coverage capturing the beauty of Kashmiri traditions.'
    },
    {
      id: 2,
      title: 'Lakeside Resort',
      category: 'Staffing',
      location: 'Dal Lake',
      gradient: 'from-amber-600 to-orange-700',
      description: 'Full-season staffing solution for a premium lakeside property.'
    },
    {
      id: 3,
      title: 'Houseboat Stays',
      category: 'Social Reel',
      location: 'Dal Lake',
      gradient: 'from-blue-600 to-indigo-700',
      description: 'Viral social media campaign for houseboat experiences.'
    },
    {
      id: 4,
      title: 'Mehak & Owais',
      category: 'Photography',
      location: 'Gulmarg',
      gradient: 'from-rose-600 to-pink-700',
      description: 'Dreamy wedding photography amidst snow-capped mountains.'
    },
    {
      id: 5,
      title: 'Orchard Lodge',
      category: 'Staffing',
      location: 'Sopore',
      gradient: 'from-green-600 to-emerald-700',
      description: 'Event staffing for a boutique orchard wedding venue.'
    },
    {
      id: 6,
      title: 'Valley Apple Co.',
      category: 'Social & Ads',
      location: 'Kashmir Valley',
      gradient: 'from-red-600 to-orange-700',
      description: 'Brand awareness campaign for Kashmir\'s finest apples.'
    }
  ];

  const categories = ['All', ...new Set(projects.map(p => p.category))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="work" className={`py-24 transition-colors duration-500 ${
      isDark ? 'bg-barkat-darkBg' : 'bg-white'
    }`}>
      <div className="container-custom">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="section-subtitle justify-center">Our Work</span>
          <h2 className="section-title mt-3">Recent Frames</h2>
          <p className={`mt-4 text-lg ${isDark ? 'text-white/60' : 'text-barkat-text/60'}`}>
            A sample of the briefs we've shot, staffed, and posted for clients across Kashmir.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? isDark
                    ? 'bg-barkat-gold text-barkat-dark'
                    : 'bg-barkat-green text-white'
                  : isDark
                    ? 'bg-white/5 text-white/60 hover:bg-white/10'
                    : 'bg-barkat-lightGreen text-barkat-text/60 hover:bg-barkat-green/10'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(project)}
              className={`group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${
                isDark ? 'border border-white/5' : 'border border-barkat-green/5'
              }`}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`} />
              
              {/* Grain Texture */}
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                backgroundSize: '256px 256px'
              }} />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  <span className={`text-xs font-semibold tracking-wider uppercase ${
                    isDark ? 'text-white/60' : 'text-white/80'
                  }`}>
                    {project.category}
                  </span>
                  <h3 className={`text-xl font-serif font-semibold mt-1 text-white`}>
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/70">{project.location}</p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-white/80 text-sm mb-2">{project.description}</p>
                    <span className="inline-flex items-center gap-2 text-barkat-gold font-semibold text-sm">
                      View Project <ExternalLink size={16} />
                    </span>
                  </div>
                </div>

                {/* Category Badge */}
                <div className={`self-start px-3 py-1 rounded-full text-xs font-medium ${
                  isDark ? 'bg-white/10 text-white/80' : 'bg-white/20 text-white'
                }`}>
                  {project.category}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className={`max-w-md w-full p-8 rounded-3xl ${
                isDark ? 'bg-barkat-darkBg' : 'bg-white'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className={`text-sm font-semibold text-barkat-gold`}>
                    {selectedProject.category}
                  </span>
                  <h3 className={`text-2xl font-serif font-semibold ${
                    isDark ? 'text-white' : 'text-barkat-green'
                  }`}>
                    {selectedProject.title}
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-white/50' : 'text-barkat-textLight'}`}>
                    {selectedProject.location}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className={`p-2 rounded-full ${
                    isDark ? 'hover:bg-white/10' : 'hover:bg-barkat-green/10'
                  }`}
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className={`p-6 rounded-2xl bg-gradient-to-br ${selectedProject.gradient} opacity-80 mb-4 aspect-video flex items-center justify-center`}>
                <span className="text-white/40 text-4xl">🎬</span>
              </div>
              
              <p className={`${isDark ? 'text-white/70' : 'text-barkat-text/70'}`}>
                {selectedProject.description}
              </p>
              
              <a
                href="#contact"
                className={`block w-full text-center mt-4 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  isDark
                    ? 'bg-barkat-gold text-barkat-dark hover:bg-yellow-500'
                    : 'bg-barkat-green text-white hover:bg-barkat-greenDark'
                }`}
              >
                Discuss Your Project
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;