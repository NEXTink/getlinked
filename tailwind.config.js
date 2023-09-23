/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'primary-gradient': 'linear-gradient(background: linear-gradient(270deg, #903AFF 0%, #FE34B9 100%)',
      },
      colors:{
        primary: '#D434FE',
        primary2:"#FF26B9",
        primary3:'hsla(266, 100%, 61%, 1)',
        primary4:'hsla(288, 99%, 60%, 1)',
        stroke:"#FFFFFF2E",
        bg:'#150E28'
      }
    },
   

  },
  plugins: [],
}


