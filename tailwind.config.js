const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      grey: {
        light: "#FAFBFD",
      },
      customBgColor: {
        light: "#F0F3FF",
      },
      customPriColor: {
        light: "#3A3C5B",
      },
      amber: {
        light: "#F8D57E",
      },
      customSecColor: {
        light: "#6E7193",
      },
      black: colors.black,
      green: colors.green,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },

    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
    width: ["responsive", "hover", "focus"],
    height: ["responsive", "hover", "focus"],
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar")],
  daisyui: {
    styled: false,
  },
};
