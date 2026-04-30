import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-in': 'slideIn 0.5s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-pool': 'linear-gradient(135deg, #0A1628 0%, #1B4F8A 50%, #2196C9 100%)',
        'gradient-gold': 'linear-gradient(135deg, #C9A84C 0%, #E8C97A 100%)',
      },
      colors: {
        pool: {
          navy: '#0A1628',
          deep: '#0D1F3C',
          blue: '#1B4F8A',
          accent: '#2196C9',
          light: '#4FC3F7',
          gold: '#C9A84C',
          'gold-light': '#E8C97A',
          white: '#F8FAFC',
          gray: '#94A3B8',
        },
      },
      fontFamily: {
        display: ['Josefin Sans', 'sans-serif'],
        body: ['Lato', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
