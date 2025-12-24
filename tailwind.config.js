/** @type {import('tailwindcss').Config} */
module.exports =  {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
       fontFamily: {
        myfont: ['MyFont', 'sans-serif'],
        freck: ['Freckle Face', 'cursive'],
        christmas: ['Mountains of Christmas', 'cursive'],
        chewy: ['Chewy', 'cursive'],
      },
      keyframes: {
        snow: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(100vh)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        snow: "snow linear infinite",
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};