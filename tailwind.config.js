/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        ink: {
          900: '#0a0a14',
          800: '#11111f',
          700: '#1a1a2e',
          600: '#252540',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-fade':
          'radial-gradient(circle at 50% 0%, rgba(139,92,246,0.25), transparent 60%), radial-gradient(circle at 90% 30%, rgba(59,130,246,0.18), transparent 55%)',
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
