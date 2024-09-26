/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["League Spartan"]
      },
      colors: {
        "vd-magenta": "hsl(300, 43%, 22%)",
        "pink": "hsl(333, 80%, 67%)",
        "dark-magenta": "hsl(303, 10%, 53%)",
        "light-magenta": "hsl(300, 24%, 96%)"
      },
      screens: {
        xs: '375px'
      }
    },
  },
  plugins: [],
}

