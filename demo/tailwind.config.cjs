/** @type {import('tailwindcss').Config} */
const color = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,astro}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            "* > :not(pre)": {
              code: {
                backgroundColor: color.indigo[200],
                color: color.indigo[700],
                padding: "0.250rem 0.4rem",
                borderRadius: "0.250rem",
                fontWeight: "400",
              },
            },
          },
        },
      },
    }
  },
  plugins: [require("@tailwindcss/typography")],
};
