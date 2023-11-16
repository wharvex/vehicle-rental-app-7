/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        aliceblue: "#ebf5ff",
        white: "#fff",
        lime: "#3bff37",
        "gray-900": "#101828",
      },
      spacing: {},
      fontFamily: {
        "header-footer-button-small": "Cabin",
        "red-hat-mono": "'Red Hat Mono'",
        "body-large": "'Fira Sans'",
      },
      borderRadius: {
        "3xs": "10px",
        xl: "20px",
      },
    },
    fontSize: {
      "21xl": "40px",
      "3xs": "10px",
      "13xl": "32px",
      "36xl": "55px",
      "11xl": "30px",
      "41xl": "60px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
