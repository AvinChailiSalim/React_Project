/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      dropShadow:{
          'primary':'0 6px 4px #12b573',
          'error':'0 6px 4px #dca19b',
          'neutral':'0 6px 4px #98a1b2',
          'warning':'0 6px 4px #f79009',
          'info':'0 6px 4px #53b0fd',
          'lg-neutral':'0 10px 8px #98a1b2',
          'lg-primary':'0 10px 8px #12b573',
          'lg-error':'0 10px 8px #dca19b',
      },
      width:{
        'tag-sm':'109px',
        'tag-md':'129px',
        'tag-lg':'145px',
        'sm': '117px',
        'md': '131px',
        'lg': '161px'
      },
      height:{
        'sm': '32px',
        'md': '40px',
        'lg': '48px',
      },
      px:{
        'sm': '6px',
        'md': '8px',
        'lg': '12px'
      },
      py:{
        'sm': '16px',
        'md': '16px',
        'lg': '20px'
      },
      colors: { 
        'primary': {
          25: '#f7fffc',
          50: '#ebfcf5',
          100: '#d2faea',
          200: '#a6f5d5',
          300: '#6be8b6',
          400: '#31d694',
          500: '#12b573',
          600: '#03965c',
          700:'#027a4a',
          800:'#055e3a',
          900:'#054f31',
          Focus:'#bde8dc'
        },
        'neutral': {
          25: '#fcfcfd',
          50: '#f9fafb',
          100: '#f2f4f7',
          200: '#eaecf0',
          300: '#d0d5dd',
          400: '#98a1b2',
          500: '#667085',
          600: '#475467',
          700:'#344054',
          800:'#1d2939',
          900:'#101828'
        },
        'error': {
          25: '#fffbfa',
          50: '#fef3f2',
          100: '#fee4e2',
          200: '#fecdca',
          300: '#dca19b',
          400: '#f97066',
          500: '#f04437',
          600: '#d92c20',
          700: '#b42318',
          800: '#912018',
          900: '#7a2619'
        },
        'warning': {
          25: '#fffcf5',
          50: '#fffaeb',
          100: '#fef0c7',
          200: '#fedf89',
          300: '#fec84b',
          400: '#fdb022',
          500: '#f79009',
          600: '#dc6803',
          700: '#b54707',
          800: '#93370c',
          900: '#7a2e0e'
        },
        'info': {
          25: '#f4f9ff',
          50: '#eff8ff',
          100: '#d1e9ff',
          200: '#b2ddff',
          300: '#84caff',
          400: '#53b0fd',
          500: '#2e90fa',
          600: '#156fee',
          700: '#175cd3',
          800: '#1849a9',
          900: '#194084'
        }
      },
      backgroundColor: {
          'primary': {
            25: '#f7fffc',
            50: '#ebfcf5',
            100: '#d2faea',
            200: '#a6f5d5',
            300: '#6be8b6',
            400: '#31d694',
            500: '#12b573',
            600: '#03965c',
            700:'#027a4a',
            800:'#055e3a',
            900:'#054f31',
            Focus:'#bde8dc'
          },
          'neutral': {
            25: '#fcfcfd',
            50: '#f9fafb',
            90: '#5E5E5E',
            100: '#f2f4f7',
            200: '#eaecf0',
            300: '#d0d5dd',
            400: '#98a1b2',
            500: '#667085',
            600: '#475467',
            700:'#344054',
            800:'#1d2939',
            900:'#101828'
          },
          'error': {
            25: '#fffbfa',
            50: '#fef3f2',
            100: '#fee4e2',
            200: '#fecdca',
            300: '#dca19b',
            400: '#f97066',
            500: '#f04437',
            600: '#d92c20',
            700: '#b42318',
            800: '#912018',
            900: '#7a2619'
          },
          'warning': {
            25: '#fffcf5',
            50: '#fffaeb',
            100: '#fef0c7',
            200: '#fedf89',
            300: '#fec84b',
            400: '#fdb022',
            500: '#f79009',
            600: '#dc6803',
            700: '#b54707',
            800: '#93370c',
            900: '#7a2e0e'
          },
          'info': {
            25: '#f4f9ff',
            50: '#eff8ff',
            100: '#d1e9ff',
            200: '#b2ddff',
            300: '#84caff',
            400: '#53b0fd',
            500: '#2e90fa',
            600: '#156fee',
            700: '#175cd3',
            800: '#1849a9',
            900: '#194084'
          },
          white: '#ffff',
          black: '#0000'
        },
        spacing:{
          'sm-h': '6px',
          'sm-md-w': '16px',
          'md-h': '8px',
          'lg-h': '12px',
          'lg-w': '20px',
          'tag-lg-h':'10px',
          'tag-md-h':'6px',
          'tag-sm-h':'2px',
          'tag-lg-w':'12px',
          'tag-md-w':'8px',
          'tag-sm-w':'6px',
        }
      
    }
  },
  
   variants: {
    opacity: ({ after }) => after(['disabled'])
  },

  plugins: [],
}

