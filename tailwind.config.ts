import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'cosmic-cyan':  '#11cbd2',
        'cosmic-blue':  '#16adc1',
        'cosmic-dark':  '#0a2c36',
        'cosmic-light': '#f0f8f8',
      },
      fontFamily: {
        sans:  ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
        serif: ['var(--font-playfair)', 'ui-serif', 'Georgia'],
      },
      keyframes: {
        fadeInDown: {
          from: { opacity: '0', transform: 'translateY(-28px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        scrollBounce: {
          '0%, 100%': { transform: 'rotate(45deg) translate(0,0)',     opacity: '0.55' },
          '50%':      { transform: 'rotate(45deg) translate(4px,4px)', opacity: '1' },
        },
        zoomIn: {
          from: { transform: 'scale(0.88)', opacity: '0' },
          to:   { transform: 'scale(1)',    opacity: '1' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
      },
      animation: {
        'fade-in-down':     'fadeInDown 0.9s ease-out both',
        'fade-in-up':       'fadeInUp 0.9s ease-out 0.2s both',
        'fade-in-up-late':  'fadeInUp 0.9s ease-out 0.4s both',
        'scroll-bounce':    'scrollBounce 1.5s ease-in-out infinite',
        'zoom-in':          'zoomIn 0.25s ease',
        'fade-in':          'fadeIn 0.2s ease',
      },
    },
  },
  plugins: [],
}

export default config
