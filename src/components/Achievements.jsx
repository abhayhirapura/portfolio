import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2, GitCommit, Brain, BookOpen } from 'lucide-react';

const ACHIEVEMENTS = [
  {
    label: 'Projects Completed',
    value: '15+',
    description: 'Successful personal, client, and open-source applications built.',
    icon: CheckCircle2,
    color: 'from-accent-blue/15 to-transparent',
    borderColor: 'group-hover:border-accent-blue/40',
    iconColor: 'text-accent-blue',
  },
  {
    label: 'Frontend Projects Built',
    value: '8+',
    description: 'Built responsive frontend projects including portfolio websites, landing pages, and interactive UI applications.',
    icon: GitCommit,
    color: 'from-accent-purple/15 to-transparent',
    borderColor: 'group-hover:border-accent-purple/40',
    iconColor: 'text-accent-purple',
  },
  {
    label: 'LeetCode Problems Solved',
    value: '350+',
    description: 'Practiced data structures, algorithms, loops, arrays, recursion, sorting, and problem-solving concepts consistently.',
    icon: Brain,
    color: 'from-accent-blue/15 to-transparent',
    borderColor: 'group-hover:border-accent-blue/40',
    iconColor: 'text-accent-lightBlue',
  },
  {
    label: 'Technologies Explored',
    value: '10+',
    description: 'Worked with modern web technologies, frontend frameworks, developer tools, version control systems, and UI design platforms.',
    icon: BookOpen,
    color: 'from-accent-purple/15 to-transparent',
    borderColor: 'group-hover:border-accent-purple/40',
    iconColor: 'text-accent-lightPurple',
  },
];
function AnimatedCounter({ value, duration = 1500 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    const endValue = parseInt(value, 10);
    if (isNaN(endValue)) {
      setCount(value);
      return;
    }

    let start = 0;
    const increment = endValue / (duration / 16); // ~60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        clearInterval(timer);
        setCount(endValue);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  const suffix = value.toString().replace(/[0-9]/g, '');

  return (
    <span ref={ref} className="font-sans font-extrabold text-5xl md:text-6xl text-white tracking-tight">
      {count}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 bg-dark-950 px-6 overflow-hidden">
      {/* Light glow accents */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[250px] h-[250px] bg-accent-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 md:mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase font-semibold tracking-widest text-accent-blue mb-3 font-sans"
          >
            Milestones
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white tracking-tight heading-grad font-sans"
          >
            My Achievements
          </motion.h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-accent-blue to-accent-purple mt-4 rounded-full" />
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ACHIEVEMENTS.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass-card p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between`}
              >
                {/* Visual hover background spotlight */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10 space-y-6">
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center ${stat.iconColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Counter */}
                  <div className="block">
                    <AnimatedCounter value={stat.value} />
                  </div>

                  {/* Details */}
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-2 font-sans">
                      {stat.label}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed font-sans font-light">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
