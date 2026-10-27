/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  // Light is the default. `dark` is put on <html> by the theme toggle.
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Sampled from the hero photograph's dusk sky, so the page and the
        // image it opens on are the same colour rather than nearly so.
        navy: {
          950: '#080f22',
          900: '#0b1734',
          800: '#112247',
          700: '#192f5e',
          600: '#24407a',
          500: '#32548f',
        },
        // Sampled from the logo mark. #d4af36 is the brand gold and it is only
        // legible on navy, where it scores 8.4:1. On white it manages 2.1:1,
        // so small text on a light surface uses `ink` below instead.
        gold: {
          300: '#ecd27a',
          400: '#e1bc42',
          500: '#d4af36',
          600: '#b3922c',
          // The one that passes on white, at 4.9:1.
          ink: '#8a6d12',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 18s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
