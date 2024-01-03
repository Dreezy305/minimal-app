/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1200px",
      xl: "1500px",
    },
    fontFamily: {
      PublicSansBlack: "PublicSansBlack",
      PublicSansExtraBold: "PublicSansExtraBold",
      PublicSansBold: "PublicSansBold",
      PublicSansSemiBold: "PublicSansSemiBold",
      PublicSansMedium: "PublicSansMedium",
      PublicSansRegular: "PublicSansRegular",
      PublicSansLight: "PublicSansLight",
    },
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
