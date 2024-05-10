/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'

  ],

  theme: {
    
    extend: {
      backgroundImage: {
        page: "url('./img/background.png')",
      },
      fontFamily: {
  sans: ['dmserif', 'DM Serif', 'serif'],
  com: ['conforta', 'Conforta', 'sans-serif']
},

    },
  },
  plugins: [],
};

