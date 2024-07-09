/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        primary:'var(--primary)',
        secondary:'var(--secondary)',
        success:'var(--success)',
        complete:'var(--complete)',
        danger:'var(--danger)',
        dark:'var(--dark)',
        white:'var(--white)',
        border:'var(--border-color)',
        focus:'var(--input-focus)',
      }
    },
   
  },
  plugins: [],
}