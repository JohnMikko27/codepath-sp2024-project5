/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dBlue: "#06065D",
        mBlue: "#0E4985",
        lBlue: "#A2DAE0",
        lRed: "#ED0101",
        mRed: "#A70107",
      }
    },
  },
  plugins: [],
};

