/** @type {import('tailwindcss').Config} */
export default {
  content: [    
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "header-nav": "50pc",
        "big-card": "514px"
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
      boxShadow: {
        'button': "0px 0px 15px #FB2A36"
      },
      screens: {
        'mobile': '400px'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fade: {
          '0%': { opacity: '0%' },
          '100%': { opacity: '100%' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        fadeQuick: 'fade 1s ease-in-out',
        fadeNormal: 'fade 2s ease-in-out',
        fadeSlow: 'fade 3s ease-in-out',
        fadeSlowest: 'fade 4s ease-in-out',
      }
    },
  },
  plugins: [],
}

