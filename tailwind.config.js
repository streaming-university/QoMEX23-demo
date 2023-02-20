/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      height: {
        'screen-3/4': '75vh',
        'screen/2': '50vh',
        'screen/3': '35vh',
        'screen/4': '25vh',
        'screen/5': '20vh',
      },
    },
  },
  plugins: [],
}
