/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "20px",
    },
    extend: {
      screens: {
        sm: "359px",
        "2xl": "1440px",
      },
      colors: {
        primary: {
          "dark-blue": "hsl(var(--dark-blue) / <alpha-value>)",
          "lime-green": "hsl(var(--lime-green) / <alpha-value>)",
          "bright-cyan": "hsl(var(--bright-cyan) / <alpha-value>)",
        },
        netral: {
          "gray-blue": "hsl(var(--grayish-blue) / <alpha-value>)",
          "l-gray-blue": "hsl(var(--light-grayish-blue) / <alpha-value>)",
          "v-light-gray": "hsl(var(--very-light-gray) / <alpha-value>)",
          white: "hsl(var(--white) / <alpha-value>)",
        },
      },
      fontSize: {
        paragraph: "18px",
      },
      fontWeight: {
        "regular-custom": 300,
        "normal-custom": 400,
        "bold-custom": 700,
      },
    },
  },
  plugins: [],
};
