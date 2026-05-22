import { Sparkles, Github, Linkedin } from 'lucide-react';

const LeetCodeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.777 9.778a1.375 1.375 0 0 0 0 1.945l1.9 1.9a1.375 1.375 0 0 0 1.95 0l9.777-9.778a1.375 1.375 0 0 0 0-1.945l-1.9-1.9a1.372 1.372 0 0 0-.989-.414zM12.43 5.218L6.29 11.357a1.375 1.375 0 0 0 0 1.945l1.9 1.9a1.375 1.375 0 0 0 1.95 0l6.14-6.14a1.375 1.375 0 0 0 0-1.945l-1.9-1.9a1.372 1.372 0 0 0-.95-.4zM22 13.483a1.374 1.374 0 0 0-.414-.961l-1.9-1.9a1.375 1.375 0 0 0-1.945 0l-6.14 6.14a1.375 1.375 0 0 0 0 1.945l1.9 1.9a1.375 1.375 0 0 0 1.945 0l6.14-6.14a1.374 1.374 0 0 0 .414-.984z" />
  </svg>
);

const FOOTER_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
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
    <footer className="relative bg-dark-950 border-t border-white/5 py-12 px-6 overflow-hidden">
      {/* Background glow shadow */}
      <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[300px] bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 z-10 relative">
        {/* Left Side: Brand Logo */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <a
            href="#home"
            onClick={(e) => handleClick(e, '#home')}
            className="flex items-center gap-2 font-sans font-bold text-lg tracking-tight text-white hover:opacity-85 transition-opacity"
          >
            <Sparkles className="w-4 h-4 text-accent-blue" />
            <span>APSR</span>
          </a>
          <p className="text-[11px] text-gray-500 font-sans tracking-wide">
            Designing modern, fast, and responsive web platforms.
          </p>
        </div>

        {/* Center: Internal Links */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-[11px] font-sans font-medium uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Side: Social Media Icons and Copyright */}
        <div className="flex flex-col items-center md:items-end gap-3">
          {/* Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/abhayhirapura"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4.5 h-4.5" />
            </a>
            <a
              href="https://linkedin.com/in/abhay-pratap-singh-rajawat-571aa8283"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4.5 h-4.5" />
            </a>
            <a
              href="https://leetcode.com/u/abhayheerapura/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
              aria-label="LeetCode Profile"
            >
              <LeetCodeIcon className="w-4.5 h-4.5" />
            </a>
          </div>

          {/* Copyright notice */}
          <span className="text-[10px] text-gray-600 font-sans tracking-wide">
            &copy; {new Date().getFullYear()} Abhay Pratap Singh Rajawat. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
