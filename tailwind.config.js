/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  important: true,
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: ["light", "dark", "halloween"],
    base: false,
    utils: true,
    logs: true,
    rtl: false,
    darkTheme: "dark",
  },
};
