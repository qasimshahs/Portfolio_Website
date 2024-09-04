/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },

      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
        xxs: "344px"
      },
      
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },

      keyframes: {
        'custom-animation': {
          '0%': { left: '65px' },
          '40%': { left: '205px' },
          '60%': { left: '205px' },
          '100%': { left: '65px' },
        },

        'custom-animation-sm': {
          '0%': { left: '260px' },
          '40%': { left: '415px' },
          '60%': { left: '415px' },
          '100%': { left: '260px' },
        },

        'custom-animation-md': {
          '0%': { left: '260px' },
          '40%': { left: '415px' },
          '60%': { left: '415px' },
          '100%': { left: '260px' },
        },

        'custom-animation-lg': {
          '0%': { left: '320px' },
          '40%': { left: '550px' },
          '60%': { left: '550px' },
          '100%': { left: '320px' },
        },

        'custom-animation-g': {
          '0%': { left: '320px' },
          '40%': { left: '600px' },
          '60%': { left: '600px' },
          '100%': { left: '320px' },
        },
        
    },

   

 

    animation: {
      'custom-animation': 'custom-animation 5s steps(12) infinite',
      'custom-animation-sm': 'custom-animation-sm 5s steps(12) infinite',
      'custom-animation-md': 'custom-animation-md 5s steps(12) infinite',
      'custom-animation-lg': 'custom-animation-lg 5s steps(12) infinite',
    },

   
  },
  },
  plugins: [],
};