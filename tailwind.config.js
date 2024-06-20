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
        "gray-gradient-2": "#EEEEEE",
        "red-main": "#FB2A36",
        "red-main-hover": "#BF1721",
        "notebook-background": "#F42C37",
        "notebook-text": "#F54A52",
        "earphone-background": "#2B2B2B",
        "earphone-text": "#414141",
        "gadgets-background": "#FDC62D",
        "gadgets-text": "#FBD25D",
        "console-background": "#DCDCDC",
        "console-text": "#fff",
        "oculus-background": "#2CD06F",
        "oculus-text": "#69F09E",
        "amazon-background": "#1889FF",
        "amazon-text": "#3093FE"
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

