/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "#02182b",
        },
        red: {
          DEFAULT: "#d7263d",
          hover: "#FF2945",
        },
        white: {
          DEFAULT: "#f4f5f5",
        },
        grey: {
          DEFAULT: "808080"
        },
        black: {
          DEFAULT: "#010D17",
        },
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'josefin': ['"Josefin Sans"', 'sans-serif'],
      },
      fontSize: {
        title: "3rem",
        subtitle: "2rem",
        intermediate: "1.5rem",
        bigger: "18px",
      },
      padding: {
        cta: "0.75rem 1.5rem",
        cta_small: "10px 14px",
        cta_slide: "1.25rem 4rem",
        input: "0.75rem 10px 0.75rem 1.25rem",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
