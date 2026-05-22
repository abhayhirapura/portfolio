import { useState } from 'react';
import { motion } from 'framer-motion';

// Tech SVG Logos
const ReactLogo = () => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-8 h-8 text-[#00d8ff]" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse rx="11" ry="4.2" stroke="currentColor" strokeWidth="1" />
    <ellipse rx="11" ry="4.2" stroke="currentColor" strokeWidth="1" transform="rotate(60)" />
    <ellipse rx="11" ry="4.2" stroke="currentColor" strokeWidth="1" transform="rotate(120)" />
    <circle r="2" fill="currentColor" />
  </svg>
);

const JSLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#f7df1e]" fill="currentColor">
    <path d="M0 0h24v24H0V0zm22.034 18.268c-.475-1.246-1.67-1.956-3.155-2.51l-.611-.232c-.77-.3-1.464-.53-1.464-1.045 0-.416.326-.703.955-.703.626 0 1.145.257 1.488.76l1.83-1.12c-.59-.973-1.638-1.702-3.17-1.702-2.222 0-3.797 1.258-3.797 3.116 0 2.2 1.83 2.923 3.518 3.565l.635.244c.895.347 1.707.645 1.707 1.282 0 .543-.455.902-1.195.902-1.015 0-1.802-.456-2.268-1.294l-1.8 1.12c.795 1.43 2.198 2.09 3.975 2.09 2.64 0 4.19-1.314 4.19-3.617 0-2.09-1.4-2.73-3.03-3.38zM10.15 11.758c0-1.12-.42-1.69-1.27-1.69-.73 0-1.16.4-1.39 1l-1.9-1.13c.63-1.31 1.95-1.89 3.53-1.89 2.45 0 3.82 1.34 3.82 3.53v6.33c0 .87.1 1.63.3 2.06H9.95c-.13-.34-.23-.84-.23-1.38-.63.95-1.77 1.54-3.1 1.54-2.15 0-3.66-1.39-3.66-3.4 0-2.3 1.9-3.23 4.29-3.23h2.9v-.17zm-2.9 3.03c-1.34 0-2.12.52-2.12 1.4 0 .84.69 1.3 1.7 1.3 1.24 0 2.12-.76 2.12-1.86v-.84h-1.7z" />
  </svg>
);

const HTML5Logo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#e34f26]" fill="currentColor">
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm5.83 9.473l.21 2.3h7.625l-.269 3.012-3.003.812-3.02-.817-.19-2.18h-2.3l.36 4.137 5.15 1.392 5.11-1.396.69-7.75h-8.083l-.2-2.3h8.5l.2-2.3H5.06l.57 6.425h1.7z" />
  </svg>
);

const CSS3Logo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#1572b6]" fill="currentColor">
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm15.79 6.425H5.63l.2 2.3h7.65l-.27 3.015-3.003.81-3.02-.815-.19-2.185H5.21l.36 4.137 5.15 1.39 5.11-1.395.69-7.75h-.23z" />
  </svg>
);

const TailwindLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#38bdf8]" fill="currentColor">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19 12.001 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
  </svg>
);

const GitLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#f05032]" fill="currentColor">
    <path d="M23.546 10.93L13.07.45a1.503 1.503 0 0 0-2.13 0L8.805 2.585l3.14 3.14a1.493 1.493 0 0 1 1.88 1.88l3.14 3.14a1.493 1.493 0 0 1 1.88 1.88l2.67-2.67a1.493 1.493 0 0 0 0-2.125zM12 13.73a1.497 1.497 0 1 1-1.73-1.73v-2.3a1.497 1.497 0 1 1 1.73 0v2.3zm-6.27-.66l3.14-3.14a1.493 1.493 0 0 1 1.88 1.88l-3.14 3.14a1.493 1.493 0 0 1-1.88-1.88z" />
  </svg>
);

const GitHubLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const VSCodeLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#007acc]" fill="currentColor">
    <path d="M23.984 6.136a.823.823 0 0 0-.374-.633L16.297.433a.81.81 0 0 0-1.01.218l-5.69 6.467-3.197-2.4a.822.822 0 0 0-1.045.034L.373 9.421a.822.822 0 0 0-.012 1.233L4.85 14.86l-4.52 4.195a.823.823 0 0 0 .044 1.232l4.898 4.22a.82.82 0 0 0 1.042-.05l3.208-2.9 5.86 6.643a.81.81 0 0 0 1.022.183l7.243-5.267a.822.822 0 0 0 .337-.666V6.136zm-8.835 11.23L9.61 12l5.54-5.366v10.73z" />
  </svg>
);

const FigmaLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#f24e1e]" fill="currentColor">
    <path d="M12 0C8.688 0 6 2.688 6 6c0 1.83 1.08 3.51 2.8 4.34C6.26 11.26 4 13.9 4 17.25c0 3.73 3.02 6.75 6.75 6.75s6.75-3.02 6.75-6.75c0-1.83-1.08-3.51-2.8-4.34C17.74 12.08 20 9.44 20 6.09c0-3.36-2.73-6.09-6.09-6.09zM8.25 6c0-2.07 1.68-3.75 3.75-3.75s3.75 1.68 3.75 3.75-1.68 3.75-3.75 3.75-3.75-1.68-3.75-3.75zm3.75 15c-2.48 0-4.5-2.02-4.5-4.5s2.02-4.5 4.5-4.5 4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5z" />
  </svg>
);

const FRONTEND_SKILLS = [
  { name: 'HTML5', level: 95, logo: HTML5Logo },
  { name: 'CSS3', level: 90, logo: CSS3Logo },
  { name: 'JavaScript', level: 88, logo: JSLogo },
  { name: 'React.js', level: 85, logo: ReactLogo },
  { name: 'Tailwind CSS', level: 92, logo: TailwindLogo },
];

const TOOLS_SKILLS = [
  { name: 'Git', level: 85, logo: GitLogo },
  { name: 'GitHub', level: 88, logo: GitHubLogo },
  { name: 'VS Code', level: 90, logo: VSCodeLogo },
  { name: 'Figma', level: 75, logo: FigmaLogo },
];

function TiltCard({ children, className }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5
    setTilt({ x: x * 12, y: y * -12 }); // max tilt 12 degrees
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        transition: isHovered ? 'none' : 'transform 0.5s ease',
      }}
      className={className}
    >
      {children}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative min-h-screen py-24 bg-dark-950 px-6 overflow-hidden">
      {/* Light glow accents */}
      <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-accent-purple/5 rounded-full blur-[100px] pointer-events-none" />

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
            Capabilities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white tracking-tight heading-grad font-sans"
          >
            My Tech Stack
          </motion.h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-accent-blue to-accent-purple mt-4 rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Frontend Column */}
          <div>
            <h3 className="text-xl font-bold text-white mb-8 border-b border-white/5 pb-3 font-sans tracking-wide">
              Frontend Development
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {FRONTEND_SKILLS.map((skill) => {
                const Logo = skill.logo;
                return (
                  <TiltCard
                    key={skill.name}
                    className="glass-card p-6 rounded-2xl border border-white/5 hover:border-accent-blue/30 transition-all duration-300 relative group overflow-hidden"
                  >
                    {/* Glowing effect inside card */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10 flex flex-col h-full justify-between">
                      <div className="flex items-center justify-between mb-4">
                        <Logo />
                        <span className="text-xs font-semibold text-gray-500 group-hover:text-accent-blue transition-colors">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-2 font-sans">
                          {skill.name}
                        </h4>
                        
                        {/* Progress Bar Container */}
                        <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: 'easeOut' }}
                            className="h-full bg-gradient-to-r from-accent-blue to-accent-lightBlue rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                );
              })}
            </div>
          </div>

          {/* Tools Column */}
          <div>
            <h3 className="text-xl font-bold text-white mb-8 border-b border-white/5 pb-3 font-sans tracking-wide">
              Tools & Workflow
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {TOOLS_SKILLS.map((skill) => {
                const Logo = skill.logo;
                return (
                  <TiltCard
                    key={skill.name}
                    className="glass-card p-6 rounded-2xl border border-white/5 hover:border-accent-purple/30 transition-all duration-300 relative group overflow-hidden"
                  >
                    {/* Glowing effect inside card */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10 flex flex-col h-full justify-between">
                      <div className="flex items-center justify-between mb-4">
                        <Logo />
                        <span className="text-xs font-semibold text-gray-500 group-hover:text-accent-purple transition-colors">
                          {skill.level}%
                        </span>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-white mb-2 font-sans">
                          {skill.name}
                        </h4>

                        {/* Progress Bar Container */}
                        <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: 'easeOut' }}
                            className="h-full bg-gradient-to-r from-accent-purple to-accent-lightPurple rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
