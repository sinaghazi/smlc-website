module.exports = {
  content: ['./*.html', './js/*.js'],
  theme: {
    extend: {
      colors: {
        'primary': '#ff3300',
        'secondary': '#FDE1C4',
        'dark-gray': '#333333',
      },
      fontFamily: {
        'sans': ['Open Sans', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'custom-size': '18px',
        '2.5xl': '1.75rem',
        '3.5xl': '2rem',
      },
      lineHeight: {
        'custom-leading': '1.6',
      },
      backgroundColor: {
        'secondary-60': 'rgba(253, 225, 196, 0.6)',
      },
      gradientColorStops: theme => ({
        'primary': '#ff3300',
        'secondary': '#FDE1C4',
      }),
    },
  },
  plugins: [],
}
