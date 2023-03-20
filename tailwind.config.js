/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      // Note: @media (min-width: 1279px) || Large Laptops and above+
      xl: { min: '1200px' },

      // Note: @media (max-width: 1199px) || Laptops
      lg: { max: '1199px' },

      // Note: @media (max-width: 991px) || Tablets
      md: { max: '991px' },

      // Note: @media (max-width: 767px) || Mobiles
      sm: { max: '767px' },

      // Note: @media (max-width: 425px) || Small Mobiles and below-
      xs: { max: '425px' },
    },
    extend: {
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          100: '#dff7fe',
          200: '#bff0fd',
          300: '#a0e8fc',
          400: '#80e1fb',
          500: '#61dafb',
          600: '#57c4e1',
          700: '#4daec8',
          800: '#4398af',
          900: '#3a8296',
        },
        success: colors.green,
        danger: colors.rose,
        warning: colors.yellow,
      },
    },
  },
  plugins: [require('tailwindcss'), require('@tailwindcss/typography')],
};
