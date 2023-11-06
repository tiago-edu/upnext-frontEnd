/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.500rem",
      "5xl": "3.000rem",
      "6xl": "3.500rem",
      "7xl": "4.000rem",
      "8xl": "5.000rem",
      
    },

    extend: {},
    screens: {
      xxxsm: "320px",
      xxsm: "375px",
      xsm: "412px",
      sm: "640px", 
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1440px",
      xxxl: "1920px",
    },
    colors: {
      white: "#FFF",
      deepGreen: "#0C261C",
      mossGreen: "#15573F",
      lightGrey: "#A9A9A9",
      gray: "#f1f5f9",
      textGray: '#848484'
    },
  },
  plugins: [],
};
