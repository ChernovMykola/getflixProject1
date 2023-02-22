/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          dark: "hsl(0deg 0% 8%)",
          netflixRed: "hsl(357deg 92% 47%)",
          subMain:'#9A48FF',
          main: '#0E101B',
          dry:'#0B0F29',
          star: '#FFB000',
          text: '#C0C0C0',
          border: '#4b5563',
          dryGray: '#E0D5D5',
        },
        height:{
          header: '560px',
          rate:'400px',
        },
        fontSize: {
          h1:'2.6rem',
        },
        screens:{
          xs: '475px',
        },
        animation: {
          "slide-rtl": "slide-rtl .4s ease-in-out",
        },
        keyframes: {
          "slide-rtl": {
            from: { "margin-right": "-90%" },
            to: { "margin-right": "0%" },
          },
        },
      },
    },
    plugins: [require('@tailwindcss/line-clamp')],
  };