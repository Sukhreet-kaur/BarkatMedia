import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import StartProject from './pages/StartProject';
import ServiceDetail from './pages/ServiceDetail';  // ← ADD THIS
import ThemeToggle from './components/ThemeToggle';
import Footer from './components/Footer';
import Particles from './components/Particles';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import './styles/globals.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  const basePath = import.meta.env.BASE_URL || '/';

  return (
    <ThemeProvider>
      <Router basename={basePath}>
        <div className="min-h-screen transition-colors duration-300 relative">
          <LoadingScreen onComplete={handleLoadingComplete} />
          {!loading && (
            <>
              <Particles />
              <CustomCursor />
              <div className="relative z-10">
                <Navbar />
                <ThemeToggle />
                
                <Routes>
                  {/* Home Page */}
                  <Route path="/" element={
                    <>
                      <Hero />
                      <Services />
                      <Process />
                      <About />
                      <Portfolio />
                      <Testimonials />
                      <Contact />
                    </>
                  } />
                  
                  {/* Start Project Page */}
                  <Route path="/start-project" element={<StartProject />} />
                  
                  {/* Service Detail Page */}
                  <Route path="/services/:serviceId" element={<ServiceDetail />} />
                </Routes>
                
                <Footer />
              </div>
            </>
          )}
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;