/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
// tailwind.config.js
// eslint-disable-next-line no-unused-vars
// const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      colors: {
        primary: '#32373B',
        secondary: '#4A5859',
        danger: '#C83E4D',
        alt: '#F4B860',
        border: '#4A5859',
        fonty: '#F4D6CC',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-textshadow')],
};
