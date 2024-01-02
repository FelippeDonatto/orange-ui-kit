import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/components/**/*.tsx', './src/app/**/*.tsx'],
  theme: {
    colors: {
      white: '#fff',
      black: '#000',
      transparent: 'transparent',

      primary: {
        50: '#f1fbf0',
        100: '#d4f3d0',
        200: '#c0eeb9',
        300: '#a3e698',
        400: '#91e185',
        500: '#75d966',
        600: '#6ac55d',
        700: '#539a48',
        800: '#407738',
        900: '#315b2b',
      },

      secondary: {
        50: '#efedfb',
        100: '#cec8f3',
        200: '#b6aeee',
        300: '#9588e6',
        400: '#8171e1',
        500: '#614ed9',
        600: '#5847c5',
        700: '#45379a',
        800: '#352b77',
        900: '#29215b',
      },

      terciary: {
        50: '#edebfe',
        100: '#c8c0fb',
        200: '#aea2f9',
        300: '#8878f6',
        400: '#715df5',
        500: '#4e35f2',
        600: '#4730dc',
        700: '#3726ac',
        800: '#2b1d85',
        900: '#211666',
      },

      gray: {
        50: '#e7e7e7',
        100: '#b4b4b4',
        200: '#909090',
        300: '#5d5d5d',
        400: '#3d3d3d',
        500: '#0d0d0d',
        600: '#0c0c0c',
        700: '#090909',
        800: '#070707',
        900: '#050505',
      },
    },

    fontSize: {
      xxs: '0.75rem', // 12 px
      xs: '0.875rem', // 14 px
      sm: '1rem', // 16 px
      md: '1.25rem', // 20 px
      lg: '1.5rem', // 24 px
      xl: '2rem', // 32 px
      '2xl': '2.5rem', // 40 px
      '4xl': '3rem', // 48 px
      '6xl': '3.5rem', // 56 px
      '8xl': '4rem', // 64 px
    },

    fontFamily: {
      sans: 'var(--font-roboto)',
      title: 'var(--font-archivo)',
    },

    extend: {},
  },
  plugins: [],
}
export default config
