/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#030303', // Matte black
          900: '#0a0a0c', // Dark gray
          800: '#121214', // Lighter dark
          700: '#1a1a1e',
        },
        accent: {
          blue: '#2563eb', // Electric blue
          lightBlue: '#60a5fa',
          purple: '#7c3aed', // Soft purple
          lightPurple: '#a78bfa',
          glow: '#4f46e5', // Glow indigo
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glowPulse 8s ease-in-out infinite',
        'float-slow': 'floatSlow 10s ease-in-out infinite',
        'float-medium': 'floatMedium 7s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { opacity: 0.25, transform: 'scale(1)' },
          '50%': { opacity: 0.5, transform: 'scale(1.08)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(20px, -30px) scale(1.05)' },
        },
        floatMedium: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-15px, 20px) scale(0.95)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
