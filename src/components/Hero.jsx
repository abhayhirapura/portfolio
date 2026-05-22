import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowRight, MousePointer } from 'lucide-react';

const LeetCodeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.777 9.778a1.375 1.375 0 0 0 0 1.945l1.9 1.9a1.375 1.375 0 0 0 1.95 0l9.777-9.778a1.375 1.375 0 0 0 0-1.945l-1.9-1.9a1.372 1.372 0 0 0-.989-.414zM12.43 5.218L6.29 11.357a1.375 1.375 0 0 0 0 1.945l1.9 1.9a1.375 1.375 0 0 0 1.95 0l6.14-6.14a1.375 1.375 0 0 0 0-1.945l-1.9-1.9a1.372 1.372 0 0 0-.95-.4zM22 13.483a1.374 1.374 0 0 0-.414-.961l-1.9-1.9a1.375 1.375 0 0 0-1.945 0l-6.14 6.14a1.375 1.375 0 0 0 0 1.945l1.9 1.9a1.375 1.375 0 0 0 1.945 0l6.14-6.14a1.374 1.374 0 0 0 .414-.984z" />
  </svg>
);

function Typewriter({ words, delay = 100, deleteDelay = 60, period = 2000 }) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(delay);

  useEffect(() => {
    let timer;
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(deleteDelay);
      } else {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(delay);
      }

      if (!isDeleting && text === fullText) {
        timer = setTimeout(() => setIsDeleting(true), period);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    if (!timer) {
      timer = setTimeout(handleType, typingSpeed);
    }
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words, delay, deleteDelay, period]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">
      {text}
      <span className="text-accent-blue animate-pulse ml-0.5 font-light">|</span>
    </span>
  );
}

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleScrollTo = (id) => {
    const target = document.querySelector(id);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const targetRect = target.getBoundingClientRect().top;
      const targetPosition = targetRect - bodyRect;
      const offsetPosition = targetPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }; 

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-950 px-6 py-20"
    >
      {/* Background Animated Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-accent-blue/10 rounded-full blur-[100px] animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-accent-purple/10 rounded-full blur-[130px] animate-float-medium" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      {/* Mouse spotlight overlay */}
      {isHovering && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 hidden md:block"
          style={{
            background: `radial-gradient(700px circle at ${mousePos.x}px ${mousePos.y}px, rgba(37, 99, 235, 0.07), transparent 50%)`,
          }}
        />
      )}

      {/* Hero Content */}
      <div className="max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
        {/* Subtle glowing pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5 backdrop-blur-md text-xs font-medium text-gray-300 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Available for new opportunities
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-sans tracking-tight text-white mb-6 leading-[1.1]"
        >
          Crafting Modern <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-lightPurple to-accent-purple text-glow-blue">
            Digital Experiences
          </span>
        </motion.h1>

        {/* Subtitle / Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base md:text-lg text-gray-400 font-normal max-w-2xl mb-4 leading-relaxed font-sans"
        >
          Hi, I’m <span className="text-white font-medium">Abhay Pratap Singh Rajawat</span> — a{' '}
          <Typewriter
            words={[
              'Frontend Web Developer',
              'React.js Specialist',
              'UI/UX Enthusiast',
              'Problem Solver',
            ]}
          />{' '}
          passionate about building modern, fast, and responsive web applications.
        </motion.p>

        {/* Call to action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-8"
        >
          <button
            onClick={() => handleScrollTo('#projects')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-dark-950 text-sm font-semibold tracking-wide hover:bg-white/90 transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2 group"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => handleScrollTo('#contact')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-transparent border border-white/10 hover:border-white/20 text-white text-sm font-semibold tracking-wide transition-all duration-300 backdrop-blur-sm hover:bg-white/5 flex items-center justify-center gap-2"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="flex items-center gap-6 mt-16"
        >
          <a
            href="https://github.com/abhayhirapura"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/15 text-gray-400 hover:text-white transition-all duration-300"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/abhay-pratap-singh-rajawat-571aa8283"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/15 text-gray-400 hover:text-white transition-all duration-300"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://leetcode.com/u/abhayheerapura/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/15 text-gray-400 hover:text-white transition-all duration-300"
            aria-label="LeetCode Profile"
          >
            <LeetCodeIcon className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Floating Mouse scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none flex flex-col items-center gap-2">
        <span className="text-[10px] text-gray-500 font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 border border-white/10 rounded-full p-1 flex justify-center">
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-1.5 h-1.5 bg-accent-blue rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
