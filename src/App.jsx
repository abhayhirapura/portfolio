import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

// Components
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide loading screen after 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Premium Loader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 bg-dark-950 flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Glowing Backdrop Aura */}
            <div className="absolute w-[250px] h-[250px] bg-accent-blue/10 rounded-full blur-[80px] animate-pulse" />
            
            <div className="relative z-10 flex flex-col items-center">
              {/* Brand Logo / Text */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="flex items-center gap-3 font-sans font-bold text-3xl tracking-wider text-white mb-3"
              >
                <Sparkles className="w-7 h-7 text-accent-blue animate-spin" style={{ animationDuration: '3s' }} />
                <span>APSR</span>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[10px] text-gray-500 font-semibold uppercase tracking-widest font-sans mb-8"
              >
                Crafting Digital Experiences
              </motion.p>

              {/* Progress Line */}
              <div className="w-44 h-[2px] bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.6, ease: 'easeInOut' }}
                  className="h-full bg-gradient-to-r from-accent-blue via-accent-glow to-accent-purple"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main App Content */}
      <div className="min-h-screen bg-dark-950 text-gray-300 relative select-none">
        {/* Custom cursor (Desktops only) */}
        <CustomCursor />

        {/* Navigation */}
        <Navbar />

        {/* Page Sections */}
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Achievements />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
