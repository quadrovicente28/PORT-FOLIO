/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   "./index.html",
   "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [
    'tailwind',
  ],
  rules: {
    'tailwind/no-custom-classname': 'off',
  },
}
