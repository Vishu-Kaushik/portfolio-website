/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primary:"#ffc25d",
        gray:"#333646",
        darkGray:"#252734",
      },
      container:{
        center:true,
        padding: {
          DEFAULT:"1rem",
          sm:"2rem",
        },
      },
    },
  },
  plugins: [],
};

