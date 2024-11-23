// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        sans: ['Source Code Pro', 'monospace'],
      },
      keyframes: {
        'initial-marquee': {
          '0%': { transform: 'translateX(100%)' }, // Start from the right
          '100%': { transform: 'translateX(0%)' },  // End at the left
        },
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },  // Looping animation
        },
      },
      animation: {
        'initial-marquee': 'initial-marquee 2s linear forwards', // Initial animation duration
        'marquee': 'marquee 60s linear infinite', // Continuous looping
      },
    },
  },
  plugins: [],
};
