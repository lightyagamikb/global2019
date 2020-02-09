module.exports = {
  theme: {
    textColor: theme  => ({
      ...theme('colors'),
      'primary': '#354EA0',
      'secondary': '#FCB02C'
    }),
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#354EA0',
      'secondary': '#FCB02C'
    }),
    extend: {
      center: true, 
    }
  },
  variants: {
    display: ['responsive', 'hover', 'focus']
  },
  plugins: []
}
