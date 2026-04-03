/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#090909',
        fg: '#f0ece0',
        accent: '#f0a8be',
        pink: '#c87fa0',
        dim: '#3a3832',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
