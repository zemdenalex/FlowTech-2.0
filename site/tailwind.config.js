/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screns: {
        'xxs': '512px',
        'xs': '588px',  
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "3rem",
          sm: "5rem",
        }
      },
      colors: {
        main: "#1B1A28",
        secondary: "#252352",
        border: "#765BAB",
        gd0: "#040319",
        gd40: "#252352",
        gd70: "#534FB8",
        gd100: "#765BAB",
      },
      fontFamily: {
        roboto: ["roboto", "sans-serif"],
        openSans: ["open-sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}