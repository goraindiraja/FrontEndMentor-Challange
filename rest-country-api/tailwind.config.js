/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkElement': 'hsl(209, 23%, 22%)',
        'darkBackground': 'hsl(207, 26%, 17%)',
        'lightText': 'hsl(200, 15%, 8%)',
        'lightInput': 'hsl(0, 0%, 52%)',
        'lightBackground': 'hsl(0, 0%, 98%)',
        'lightElement': 'hsl(0, 0%, 100%)',
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
}

