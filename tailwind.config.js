/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        orbitron: ['Orbitron', 'system-ui', 'sans-serif'],
      },
      colors: {
        cedar: {
          red: '#EC7FA9',
          dark: '#FFFFFF',
          deep: '#FFFFFF',
          void: '#FFFFFF',
          ash: '#000000',
          mist: '#FFB8E0',
          lilac: '#FFFFFF',
          violet: '#FFB8E0',
          petal: '#FFFFFF',
          silver: '#FFB8E0',
          blush: '#FFB8E0',
          slate: '#000000',
          mauve: '#FFB8E0',
          steel: '#EC7FA9',
          cloud: '#FFFFFF',
          orchid: '#EC7FA9',
          smoke: '#FFB8E0',
          sand: '#000000',
          frost: '#000000',
          stone: '#FFFFFF',
          pebble: '#FFB8E0',
          plum: '#000000',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out infinite 2s',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marqueeReverse 30s linear infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
    },
  },
  plugins: [],
};
