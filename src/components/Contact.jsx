import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Send, Check } from 'lucide-react';

const LeetCodeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.777 9.778a1.375 1.375 0 0 0 0 1.945l1.9 1.9a1.375 1.375 0 0 0 1.95 0l9.777-9.778a1.375 1.375 0 0 0 0-1.945l-1.9-1.9a1.372 1.372 0 0 0-.989-.414zM12.43 5.218L6.29 11.357a1.375 1.375 0 0 0 0 1.945l1.9 1.9a1.375 1.375 0 0 0 1.95 0l6.14-6.14a1.375 1.375 0 0 0 0-1.945l-1.9-1.9a1.372 1.372 0 0 0-.95-.4zM22 13.483a1.374 1.374 0 0 0-.414-.961l-1.9-1.9a1.375 1.375 0 0 0-1.945 0l-6.14 6.14a1.375 1.375 0 0 0 0 1.945l1.9 1.9a1.375 1.375 0 0 0 1.945 0l6.14-6.14a1.374 1.374 0 0 0 .414-.984z" />
  </svg>
);

const SOCIAL_ITEMS = [
  {
    name: 'Email',
    value: 'abhayheerapura@gmail.com',
    href: 'mailto:abhayheerapura@gmail.com',
    icon: Mail,
    color: 'text-accent-blue',
    bgColor: 'bg-accent-blue/10',
  },
  {
    name: 'LinkedIn',
    value: 'abhay-pratap-singh-rajawat-571aa8283',
    href: 'https://linkedin.com/in/abhay-pratap-singh-rajawat-571aa8283',
    icon: Linkedin,
    color: 'text-accent-purple',
    bgColor: 'bg-accent-purple/10',
  },
  {
    name: 'GitHub',
    value: 'Abhayheerapura',
    href: 'https://github.com/abhayhirapura',
    icon: Github,
    color: 'text-white',
    bgColor: 'bg-white/10',
  },
  {
    name: 'LeetCode',
    value: 'abhayheerapura',
    href: 'https://leetcode.com/u/abhayheerapura/',
    icon: LeetCodeIcon,
    color: 'text-amber-500',
    bgColor: 'bg-amber-500/10',
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setStatus('sending');
    // Simulate API request
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1800);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="relative min-h-screen py-24 bg-dark-950 px-6 overflow-hidden">
      {/* Light glow accents */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-blue/5 rounded-full blur-[130px] pointer-events-none" />

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
            Connect
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white tracking-tight heading-grad font-sans"
          >
            Get In Touch
          </motion.h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-accent-blue to-accent-purple mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white font-sans tracking-wide">
              Let's build something beautiful together.
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed font-sans font-light max-w-md">
              Whether you want to discuss a new project, ask a question, or simply say hello, feel free to drop a message. I am always open to discussing new ideas and front-end development projects.
            </p>

            <div className="grid grid-cols-1 gap-4 pt-6">
              {SOCIAL_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm hover:border-white/10 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className={`w-10 h-10 rounded-xl ${item.bgColor} flex items-center justify-center ${item.color} group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-widest font-sans">
                        {item.name}
                      </h4>
                      <p className="text-sm font-medium text-white group-hover:text-glow-blue transition-all duration-300 font-sans truncate max-w-[200px] sm:max-w-xs md:max-w-md">
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-8 rounded-3xl border border-white/5">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-semibold text-gray-400 uppercase tracking-wider font-sans">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleInputChange}
                    disabled={status === 'sending' || status === 'success'}
                    placeholder="Abhay Pratap"
                    className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 text-white text-sm font-sans font-normal placeholder-gray-600 focus:outline-none focus:border-accent-blue focus:ring-4 focus:ring-accent-blue/15 transition-all duration-300 disabled:opacity-50"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-semibold text-gray-400 uppercase tracking-wider font-sans">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleInputChange}
                    disabled={status === 'sending' || status === 'success'}
                    placeholder="abhay@example.com"
                    className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 text-white text-sm font-sans font-normal placeholder-gray-600 focus:outline-none focus:border-accent-blue focus:ring-4 focus:ring-accent-blue/15 transition-all duration-300 disabled:opacity-50"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-semibold text-gray-400 uppercase tracking-wider font-sans">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleInputChange}
                    disabled={status === 'sending' || status === 'success'}
                    placeholder="Tell me about your project..."
                    className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 text-white text-sm font-sans font-normal placeholder-gray-600 focus:outline-none focus:border-accent-blue focus:ring-4 focus:ring-accent-blue/15 transition-all duration-300 resize-none disabled:opacity-50"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'sending' || status === 'success' || !formState.name || !formState.email || !formState.message}
                  className={`w-full py-4 rounded-2xl text-sm font-bold tracking-wide font-sans flex items-center justify-center gap-2.5 transition-all duration-300 relative overflow-hidden ${
                    status === 'success'
                      ? 'bg-emerald-500 text-dark-950 hover:bg-emerald-600 shadow-[0_4px_20px_rgba(16,185,129,0.2)]'
                      : status === 'sending'
                      ? 'bg-accent-blue/40 text-white cursor-not-allowed'
                      : 'bg-white text-dark-950 hover:bg-white/90 shadow-[0_4px_25px_rgba(255,255,255,0.1)] disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none'
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {status === 'idle' && (
                      <motion.span
                        key="idle"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2"
                      >
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </motion.span>
                    )}
                    {status === 'sending' && (
                      <motion.span
                        key="sending"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </motion.span>
                    )}
                    {status === 'success' && (
                      <motion.span
                        key="success"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2"
                      >
                        <span>Message Sent!</span>
                        <Check className="w-4.5 h-4.5 stroke-[3px]" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
