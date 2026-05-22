import { motion } from 'framer-motion';
import { User, Code, GraduationCap, Compass } from 'lucide-react';

const TIMELINE_EVENTS = [
  {
    year: '2023 - 2027',
    title: 'Bachelor of Technology in Computer Science & Engineering',
    description: 'Currently pursuing a B.Tech in Computer Science & Engineering with a strong focus on software development, data structures, algorithms, and modern web technologies. Continuously improving problem-solving skills while building real-world web development projects.',
    icon: GraduationCap,
  },
  {
    year: '2023',
    title: 'Beginning the Web Development Journey',
    description: 'Started learning HTML, CSS, and JavaScript fundamentals. Developed a passion for creating responsive, visually appealing, and user-friendly web interfaces with clean modern designs.',
    icon: Code,
  },
  {
    year: '2024',
    title: 'Mastering React & Modern Frontend Development',
    description: 'Transitioned into React.js, Tailwind CSS, Git, and GitHub. Focused on component-based architecture, responsive design, API integration, and building scalable frontend applications.',
    icon: Compass,
  },
  {
    year: '2025 - Present',
    title: 'Building Premium User Experiences',
    description: 'Currently building high-performance modern web applications with premium UI/UX, smooth animations, optimized performance, and interactive user experiences using modern frontend technologies.',
    icon: User,
  },
];

export default function About() {
  return (
    <section id="about" className="relative min-h-screen py-24 bg-dark-950 px-6 overflow-hidden">
      {/* Light glow accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[250px] h-[250px] bg-accent-blue/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 md:mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase font-semibold tracking-widest text-accent-blue mb-3 font-sans"
          >
            About Me
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white tracking-tight heading-grad font-sans"
          >
            My Story & Background
          </motion.h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-accent-blue to-accent-purple mt-4 rounded-full" />
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Intro */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight font-sans">
              Dedicated to designing fast, responsive, and gorgeous web platforms.
            </h3>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed font-sans font-light">
              I am a Computer Science & Information Technology student who loves turning complex code problems into elegant visual designs. My focus is centered around building modern, robust, and accessible user interfaces.
            </p>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed font-sans font-light">
              With a deep understanding of the React ecosystem, I build applications that prioritize speed, responsiveness, and clean component architecture. My designs aim to balance micro-interactions and animations with strong accessibility practices.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="p-4 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm">
                <div className="w-8 h-8 rounded-lg bg-accent-blue/10 flex items-center justify-center mb-3">
                  <Code className="w-4 h-4 text-accent-blue" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1 font-sans">Clean Code</h4>
                <p className="text-xs text-gray-500 font-sans">Semantic structures, linting, and reusable modular hooks.</p>
              </div>

              <div className="p-4 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm">
                <div className="w-8 h-8 rounded-lg bg-accent-purple/10 flex items-center justify-center mb-3">
                  <User className="w-4 h-4 text-accent-purple" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1 font-sans">UI/UX Focus</h4>
                <p className="text-xs text-gray-500 font-sans">Pixel-perfect alignments, hover feedback, and visual flows.</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 pl-0 md:pl-4 relative border-l border-white/5 ml-4 md:ml-6 space-y-12"
          >
            {TIMELINE_EVENTS.map((event, idx) => {
              const Icon = event.icon;
              return (
                <div key={idx} className="relative pl-8 md:pl-10 group">
                  {/* Timeline Node */}
                  <div className="absolute left-0 top-1.5 -translate-x-[13px] w-6 h-6 rounded-full bg-dark-900 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:border-accent-blue/50 group-hover:shadow-[0_0_8px_rgba(37,99,235,0.4)]">
                    <Icon className="w-3 h-3 text-gray-400 group-hover:text-accent-blue transition-colors" />
                  </div>

                  {/* Year Tag */}
                  <span className="inline-block text-[10px] uppercase font-bold tracking-widest text-accent-blue mb-1 font-sans">
                    {event.year}
                  </span>

                  {/* Title & Desc */}
                  <h4 className="text-base md:text-lg font-semibold text-white mb-2 font-sans group-hover:text-glow-blue transition-all duration-300">
                    {event.title}
                  </h4>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-sans font-light max-w-xl">
                    {event.description}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
