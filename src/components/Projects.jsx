import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';

const PROJECTS = [
  {
    title: 'AI Resume Builder',
    description: 'An AI-powered application that helps job seekers build professional resumes with tailored suggestions based on their industry.',
    technologies: ['React.js', 'Tailwind CSS', 'Gemini API', 'Node.js'],
    github: 'https://github.com/Abhayheerapura',
    live: 'https://github.com/Abhayheerapura',
    mockupType: 'resume',
  },
  {
    title: 'Weather App',
    description: 'A gorgeous weather forecasting dashboard using open weather APIs with responsive animated climate visualization states.',
    technologies: ['React.js', 'Vite', 'OpenWeather API', 'Tailwind CSS'],
    github: 'https://github.com/Abhayheerapura',
    live: 'https://github.com/Abhayheerapura',
    mockupType: 'weather',
  },
  {
    title: 'Real-time Chat App',
    description: 'A socket-connected real-time chat application with group channels, media file uploads, and online indicators.',
    technologies: ['React.js', 'Socket.io', 'Express.js', 'MongoDB'],
    github: 'https://github.com/abhayhirapura',
    live: 'https://github.com/Abhayheerapura',
    mockupType: 'chat',
  },
  {
    title: 'Animated Landing Page',
    description: 'A premium, highly animated product showcase landing page built to test heavy scroll reveals and SVG parallax states.',
    technologies: ['HTML5', 'CSS3', 'Framer Motion', 'JavaScript'],
    github: 'https://github.com/Abhayhirapura',
    live: 'https://github.com/Abhayheerapura',
    mockupType: 'landing',
  },
  {
    title: 'Developer Portfolio',
    description: 'An ultra-premium, dark-themed responsive website crafted for engineers to showcase their visual designs and projects.',
    technologies: ['React.js', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/Abhayhirapura',
    live: 'https://github.com/Abhayheerapura',
    mockupType: 'portfolio',
  },
];

// Inline Visual Mockups coded in HTML/CSS
function MockupPreview({ type }) {
  if (type === 'resume') {
    return (
      <div className="w-full h-full bg-[#0a0a0c] border border-white/5 rounded-t-xl overflow-hidden p-4 flex flex-col justify-between">
        {/* Mockup Header */}
        <div className="flex items-center gap-1.5 border-b border-white/5 pb-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-red-500/60" />
          <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
          <span className="w-2 h-2 rounded-full bg-green-500/60" />
          <div className="h-3 w-28 bg-white/5 rounded-full ml-2" />
        </div>
        {/* Mockup Body split */}
        <div className="flex flex-1 gap-2">
          <div className="w-1/3 border-r border-white/5 pr-2 flex flex-col gap-2">
            <div className="w-8 h-8 rounded-full bg-accent-blue/20 border border-accent-blue/30 mx-auto" />
            <div className="h-1.5 w-full bg-white/10 rounded-full" />
            <div className="h-1.5 w-3/4 bg-white/5 rounded-full" />
            <div className="h-1.5 w-2/3 bg-white/5 rounded-full" />
          </div>
          <div className="w-2/3 flex flex-col gap-2.5 pt-1">
            <div className="h-2 w-1/2 bg-accent-blue/40 rounded-full" />
            <div className="h-1.5 w-full bg-white/5 rounded-full" />
            <div className="h-1.5 w-full bg-white/5 rounded-full" />
            <div className="h-1.5 w-5/6 bg-white/5 rounded-full" />
            <div className="h-1.5 w-2/3 bg-white/5 rounded-full" />
          </div>
        </div>
      </div>
    );
  }

  if (type === 'weather') {
    return (
      <div className="w-full h-full bg-[#0a0a0c] border border-white/5 rounded-t-xl overflow-hidden p-4 flex flex-col justify-between">
        <div className="flex items-center justify-between border-b border-white/5 pb-2">
          <div className="h-3.5 w-16 bg-white/5 rounded-full" />
          <div className="h-3.5 w-8 bg-white/5 rounded-full" />
        </div>
        <div className="flex items-center justify-between py-4">
          <div className="flex flex-col gap-1.5">
            <span className="text-3xl font-bold text-white tracking-tight leading-none">24°</span>
            <span className="text-[10px] text-accent-lightBlue">Partly Cloudy</span>
          </div>
          {/* Animated Sun behind Cloud */}
          <div className="relative w-12 h-12 mr-2">
            <div className="absolute top-1 right-1 w-7 h-7 rounded-full bg-amber-500/80 blur-[2px] animate-pulse" />
            <div className="absolute bottom-1 left-1 w-9 h-6 rounded-full bg-gray-600/80 border border-white/5 backdrop-blur-xs" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-white/5 border border-white/5 p-1.5 rounded-lg flex flex-col items-center gap-1">
            <span className="text-[8px] text-gray-500 uppercase">Hum</span>
            <span className="text-[10px] font-semibold text-white">65%</span>
          </div>
          <div className="bg-white/5 border border-white/5 p-1.5 rounded-lg flex flex-col items-center gap-1">
            <span className="text-[8px] text-gray-500 uppercase">Wind</span>
            <span className="text-[10px] font-semibold text-white">12km</span>
          </div>
          <div className="bg-white/5 border border-white/5 p-1.5 rounded-lg flex flex-col items-center gap-1">
            <span className="text-[8px] text-gray-500 uppercase">UV</span>
            <span className="text-[10px] font-semibold text-white">Med</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'chat') {
    return (
      <div className="w-full h-full bg-[#0a0a0c] border border-white/5 rounded-t-xl overflow-hidden p-4 flex flex-col justify-between">
        {/* Chat header */}
        <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-2">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-accent-purple/20 border border-accent-purple/30 relative">
              <span className="absolute bottom-0 right-0 w-1.5 h-1.5 rounded-full bg-green-500" />
            </div>
            <div className="h-2 w-16 bg-white/5 rounded-full" />
          </div>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-500" />
        </div>
        {/* Messages */}
        <div className="flex flex-col gap-2 flex-1 pt-1">
          <div className="self-start max-w-[70%] bg-white/5 border border-white/5 rounded-lg rounded-tl-none p-2 flex flex-col gap-1">
            <div className="h-1.5 w-16 bg-white/10 rounded-full" />
            <div className="h-1 w-24 bg-white/5 rounded-full" />
          </div>
          <div className="self-end max-w-[70%] bg-accent-blue/15 border border-accent-blue/20 rounded-lg rounded-tr-none p-2 flex flex-col gap-1">
            <div className="h-1.5 w-20 bg-accent-blue/30 rounded-full" />
            <div className="h-1 w-12 bg-accent-blue/10 rounded-full" />
          </div>
        </div>
        {/* Input box */}
        <div className="flex items-center gap-2 mt-2 pt-2 border-t border-white/5">
          <div className="h-5 flex-1 bg-white/5 border border-white/5 rounded-full px-2 flex items-center">
            <div className="h-1 w-16 bg-white/10 rounded-full" />
          </div>
          <div className="w-5 h-5 rounded-full bg-accent-blue flex items-center justify-center">
            <div className="w-1.5 h-1.5 border-t border-r border-dark-950 rotate-45 -translate-x-[0.5px] translate-y-[0.5px]" />
          </div>
        </div>
      </div>
    );
  }

  if (type === 'landing') {
    return (
      <div className="w-full h-full bg-[#0a0a0c] border border-white/5 rounded-t-xl overflow-hidden p-4 flex flex-col justify-between relative">
        <div className="flex items-center justify-between border-b border-white/5 pb-2">
          <div className="h-2.5 w-8 bg-white/10 rounded-full" />
          <div className="flex gap-1">
            <div className="h-1.5 w-4 bg-white/5 rounded-full" />
            <div className="h-1.5 w-4 bg-white/5 rounded-full" />
          </div>
        </div>
        {/* Glowing Orb Animation vector */}
        <div className="flex-1 flex items-center justify-center relative py-4">
          <div className="w-14 h-14 rounded-full bg-accent-purple/20 border border-accent-purple/40 flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.3)] animate-pulse">
            <div className="w-8 h-8 rounded-full bg-accent-blue/30 border border-accent-blue/50 flex items-center justify-center animate-spin">
              <Code className="w-3.5 h-3.5 text-white" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1.5 items-center">
          <div className="h-2.5 w-24 bg-white/10 rounded-full" />
          <div className="h-1.5 w-32 bg-white/5 rounded-full" />
        </div>
      </div>
    );
  }

  if (type === 'portfolio') {
    return (
      <div className="w-full h-full bg-[#0a0a0c] border border-white/5 rounded-t-xl overflow-hidden p-4 flex flex-col justify-between">
        {/* Portfolio header */}
        <div className="flex items-center justify-between border-b border-white/5 pb-2">
          <div className="h-2 w-8 bg-white/20 rounded-full" />
          <div className="flex gap-2">
            <div className="h-1.5 w-3 bg-white/5 rounded-full" />
            <div className="h-1.5 w-3 bg-white/5 rounded-full" />
            <div className="h-1.5 w-3 bg-white/5 rounded-full" />
          </div>
        </div>
        {/* Body content */}
        <div className="flex-1 flex flex-col items-center justify-center gap-2 py-4">
          <div className="h-3 w-32 bg-gradient-to-r from-accent-blue/50 to-accent-purple/50 rounded-full" />
          <div className="h-1.5 w-40 bg-white/5 rounded-full" />
          <div className="h-1.5 w-28 bg-white/5 rounded-full" />
          <div className="flex gap-2 mt-2">
            <div className="h-4 w-12 bg-white/15 rounded-full" />
            <div className="h-4 w-12 border border-white/10 rounded-full" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="h-8 bg-white/5 border border-white/5 rounded-lg" />
          <div className="h-8 bg-white/5 border border-white/5 rounded-lg" />
        </div>
      </div>
    );
  }

  return null;
}

export default function Projects() {
  return (
    <section id="projects" className="relative min-h-screen py-24 bg-dark-950 px-6 overflow-hidden">
      {/* Light glow accents */}
      <div className="absolute top-1/3 left-0 w-[350px] h-[350px] bg-accent-blue/5 rounded-full blur-[110px] pointer-events-none" />

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
            My Work
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white tracking-tight heading-grad font-sans"
          >
            Featured Projects
          </motion.h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-accent-blue to-accent-purple mt-4 rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-2xl border border-white/5 flex flex-col justify-between group overflow-hidden glass-card-hover"
            >
              {/* Coded CSS/HTML Mockup Preview Area */}
              <div className="h-48 w-full bg-dark-900 flex items-end justify-center px-4 pt-4 border-b border-white/5 relative overflow-hidden">
                {/* Visual shadow backdrop */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-60 z-1" />
                <div className="w-full h-full z-2 transition-transform duration-500 group-hover:scale-[1.03]">
                  <MockupPreview type={project.mockupType} />
                </div>
              </div>

              {/* Text Description and Stack */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 font-sans group-hover:text-accent-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6 font-sans font-light">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Dual CTA Links */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 font-sans"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-accent-blue hover:text-accent-lightBlue transition-colors flex items-center gap-1.5 font-sans"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
