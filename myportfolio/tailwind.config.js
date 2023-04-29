/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      karasha: ['Karasha', 'sans-serif'],
      terex: ['Terex', 'sans-serif'],
      mareka: ['Mareka', 'sans'],
      shuriken: ['Shuriken', 'sans'],
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1137px" },
      // => @media (max-width: 1023px) { ... }

      xmd: { max: "852px" },

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "686px" },
      // => @media (max-width: 639px) { ... }
      xsm: { max: "582px" },
      xxsm: { max: "485px" },
      xxxsm: {max: "331px"},
      xxxxsm: {max: "357px"},
    },
    extend: {
      backgroundImage: theme => ({
        'samurai': "url('./assets/1234.jpg')",
      })
    },
  },
  plugins: [],
}

