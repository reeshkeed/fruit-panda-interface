/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#3e445e',
          200: '#292f4c',
          300: '#252a44',
          400: '#21263d',
          500: '#1d2135',
          600: '#191c2e',
          700: '#151826',
          800: '#10131e',
          900: '#0c0e17',
        },

        light: {
          100: '#ffffff',
          200: '#eaeaed',
          300: '#d4d5db',
          400: '#bfc1c9',
          500: '#a9acb7',
          600: '#9497a6',
          700: '#7f8294',
          800: '#696d82',
          900: '#545970',
        },

        primary: {
          100: '#f5d7df',
          200: '#ebafbe',
          300: '#e1869e',
          400: '#d75e7d',
          500: '#cd365d',
          600: '#a42b4a',
          700: '#7b2038',
          800: '#521625',
          900: '#3e101c',
        },

        secondary: {
          100: '#dfa7e8',
          200: '#da99e4',
          300: '#d58ae1',
          400: '#cf7cdd',
          500: '#ca6dd9',
          600: '#b662c3',
          700: '#a257ae',
          800: '#8d4c98',
          900: '#794182',
        },
      },

      animation: {
        'fade-in-out': 'fadein 0.5s, fadeout 0.5s 2.5s',
      },

      keyframes: {
        fadein: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeout: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
