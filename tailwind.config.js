
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#263048',
        coral: '#F03754',
        sky: '#F2F6FF',
        pastel: '#DAE3FF',
      },
    },
  },
  plugins: [],
}
