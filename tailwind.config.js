module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'glowAllSide': '0px 0px 5px 5px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [require("daisyui"), require('@codaworks/react-glow/tailwind')],
};
