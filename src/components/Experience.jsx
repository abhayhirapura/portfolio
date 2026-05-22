import { motion } from 'framer-motion';
import { Calendar, Briefcase, GraduationCap } from 'lucide-react';

const TIMELINE_DATA = [
  {
    type: 'education',
    title: 'Bachelor of Technology (B.Tech)',
    subtitle: 'Computer Science ',
    date: '2023 - Present',
    description: 'Focusing on core engineering fundamentals, object-oriented programming, database management systems, and building algorithms.',
    institution: 'Parul University',
    color: 'accent-blue',
  },
  {
    type: 'experience',
    title: 'Frontend Development Journey',
    subtitle: 'Independent Developer & Open Source',
    date: '2023 - Present',
    description: 'Designed and deployed several end-to-end projects. Gained proficiency in React, state architectures, routing, Tailwind CSS layouts, and modern bundler systems.',
    institution: 'Remote / Self-Directed',
    color: 'accent-purple',
  },
  {
    type: 'experience',
    title: 'Web Developer Internship',
    subtitle: 'Industrial Training & Project Dev',
    date: '2024',
    description: 'Developed semantic, pixel-perfect frontend layouts. Integrated mock REST APIs, managed component hierarchies, and optimized page load times.',
    institution: 'Tech Solutions Training',
    color: 'accent-blue',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative min-h-screen py-24 bg-dark-950 px-6 overflow-hidden">
      {/* Light glow accents */}
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase font-semibold tracking-widest text-accent-blue mb-3 font-sans"
          >
            History
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white tracking-tight heading-grad font-sans"
          >
            Experience & Education
          </motion.h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-accent-blue to-accent-purple mt-4 rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative mt-12">
          {/* Vertical line (Desktop center, mobile left) */}
          <div className="absolute left-4 md:left-1/2 -translate-x-[1px] md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/5" />

          <div className="space-y-16">
            {TIMELINE_DATA.map((item, index) => {
              const isEven = index % 2 === 0;
              const NodeIcon = item.type === 'education' ? GraduationCap : Briefcase;
              const glowClass = item.color === 'accent-blue' 
                ? 'border-accent-blue/40 shadow-[0_0_10px_rgba(37,99,235,0.4)] text-accent-blue' 
                : 'border-accent-purple/40 shadow-[0_0_10px_rgba(124,58,237,0.4)] text-accent-purple';

              return (
                <div key={index} className={`flex flex-col md:flex-row relative items-start ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline Node (center on desktop, left on mobile) */}
                  <div className={`absolute left-4 md:left-1/2 -translate-x-[11px] md:-translate-x-1/2 top-1.5 w-6 h-6 rounded-full bg-dark-900 border flex items-center justify-center z-10 ${glowClass}`}>
                    <NodeIcon className="w-3 h-3" />
                  </div>

                  {/* Left spacing for desktop, margin-left for mobile */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.7 }}
                      className="glass-card p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300 relative group overflow-hidden"
                    >
                      {/* Subtle hover line inside card */}
                      <div className={`absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b ${
                        item.color === 'accent-blue' ? 'from-accent-blue to-accent-lightBlue' : 'from-accent-purple to-accent-lightPurple'
                      }`} />

                      {/* Header details */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                        <div>
                          <h3 className="text-lg font-bold text-white font-sans tracking-wide">
                            {item.title}
                          </h3>
                          <span className={`text-xs font-semibold ${
                            item.color === 'accent-blue' ? 'text-accent-lightBlue' : 'text-accent-lightPurple'
                          } font-sans`}>
                            {item.subtitle}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-gray-500 font-sans font-medium">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.date}</span>
                        </div>
                      </div>

                      {/* Detail text */}
                      <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4 font-sans font-light">
                        {item.description}
                      </p>

                      {/* Inst details */}
                      <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-white/5 border border-white/5 px-2.5 py-1 rounded-full font-sans">
                        {item.institution}
                      </span>
                    </motion.div>
                  </div>

                  {/* Blank space holder for desktop alignment */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
