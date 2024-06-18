/** @type {import('tailwindcss').Config} */
export default {
  content: [    
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "header-nav": "50pc"
      },
      height: {
        "home": "33pc"
      },
      colors: {
        "gray-gradient-1": "#DCDCDC",
        "gray-gradient-2": "#EEEEEE"
      },
      fontSize: {
        "3xl": "3rem",
        "4xl": "10rem"
      },
      spacing: {
        "absolute-1": "16pc",
        "absolute-2": "17pc",
        "absolute-3": "17pc"
      }
    },
  },
  plugins: [],
}

