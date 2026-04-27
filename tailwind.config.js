/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garant', 'Georgia', 'serif'],
      },
      colors: {
        gold: {
          DEFAULT: '#C4964A',
          dark: '#A07838',
          light: '#FEF3E2',
        },
        cream: {
          DEFAULT: '#FAF8F4',
          dark: '#F2EDE4',
        },
        ink: {
          DEFAULT: '#1A1714',
          muted: '#7A7268',
          border: '#E8E2D8',
        },
        night: {
          DEFAULT: '#141210',
          soft: '#1C1915',
          footer: '#0D0C0B',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.65s cubic-bezier(.22,1,.36,1) both',
        'fade-in': 'fadeIn 0.5s ease both',
        'bob': 'bob 2.4s ease-in-out infinite',
        'marquee': 'marquee 24s linear infinite',
        'spin-slow': 'spin 0.8s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        bob: {
          '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
          '50%':       { transform: 'translateX(-50%) translateY(-8px)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
