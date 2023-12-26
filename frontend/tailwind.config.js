
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        orangee:'#ff6700',
        whitee:'#ebebeb',
        grayy:'#c0c0c0',
        bluee:'#3a6ea5',
        darkBlue:'#004e98',
        grayyy:"#264653",
        Bluee:"#3B60CA",
        Orangee: "#FF7B02",
        divBg: "#adb5bd"
      },
      fontFamily:{
        poppins:['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}
