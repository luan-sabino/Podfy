module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#282828',
        unselected: '#B3B3B3',
        main: '#121212',
        card: '#181818',
        currentBG: 'var(--current-bg)'
      },
      grayscale: {
        50: '50%',
      },
      minWidth: {
        241: '241px',
        180: '180px'
      },
      minHeight: {
        61: '61px',
        300: '300px'
      },
      width: {
        150: '150px',
      },
      boxShadow: {
        banner: "10px 0 15px 3px rgba(0, 0, 0, 0.1)",
        card: "0 8px 24px rgb(0 0 0 / 50%);"
      }
    },
  },
  variants: {
    extend: {
      grayscale: ['hover'],
    },
  },
  plugins: [],
}
