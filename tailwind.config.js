/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2f6',
          100: '#dbe4ef',
          200: '#bcccdc',
          300: '#8f9eb8',
          400: '#6b7fa3',
          500: '#3f547a',
          600: '#303c61',
          700: '#242148',
          800: '#11274a',
          900: '#011637',
        },
        accent: {
          50: '#fdf6f0',
          100: '#faeadd',
          200: '#f7d6b9',
          300: '#f0bb8e',
          400: '#e8a063',
          500: '#e18538',
          600: '#b96838',
          700: '#984b38',
          800: '#7c3b26',
          900: '#5e2d1d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

