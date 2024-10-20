module.exports = {
  content: ['./*.html', './app.js'],
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
        '2.5xl': '1.75rem',  // This is between 2xl and 3xl
        '3.5xl': '2rem',     // This is between 3xl and 4xl
      },
      lineHeight: {
        'custom-leading': '1.6',
      },
      backgroundColor: {
        'secondary-60': 'rgba(253, 225, 196, 0.6)',
      },
    },
  },
  plugins: [],
}
