import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ThemeToggle from './components/ThemeToggle';
import Footer from './components/Footer';
import Particles from './components/Particles';  // ← ON KARO
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

  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 relative">
        <LoadingScreen onComplete={handleLoadingComplete} />
        
        {!loading && (
          <>
            <Particles />  {/* ← ON */}
            <CustomCursor />
            <div className="relative z-10">
              <Navbar />
              <ThemeToggle />
              <Hero />
              <Footer />
            </div>
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;