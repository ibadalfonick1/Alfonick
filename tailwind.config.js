module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arial: ["Arial", "sans-serif"],
        sans: ['Arial', 'Helvetica', 'sans-serif'],
        inter: ["var(--font-inter)", "sans-serif"],
        dm: ["var(--font-dm-sans)", "sans-serif"],
        roboto: ["var(--font-roboto)", "sans-serif"],
        mono: ["var(--font-mono)", "sans-serif"],
        jakarta: ["var(--font-plus-jakarta)", "sans-serif"],
        unbounded: ["var(--font-unbounded)", "sans-serif"],
      },
    },
  },
  plugins: [],
};