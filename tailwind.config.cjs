/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",],
  //we star to customize colors and fonts
  theme: {
    extend: {
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
      colors: {
        main: '#0E101B',
        subMain:'#9A48FF',
        dry:'#0B0F29',
        star: '#FFB000',
        text: '#C0C0C0',
        border: '#4b5563',
        dryGray: '#E0D5D5',

      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}