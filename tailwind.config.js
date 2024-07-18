/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./build/**/*.{js,jsx,ts,tsx,pug,html}",
    './public/index.html',
   
  ],

  theme: {
    extend: {
      colors:{
        primary:'var(--primary)',
        secondary:'var(--secondary)',
        success:'var(--success)',
        complete:'var(--complete)',
        danger:'var(--danger)',
        dark:'var(--dark)',
        light:'var(--light)',
        white:'var(--white)',
        border:'var(--border-color)',
        focus:'var(--input-focus)',
      }
    },
   
  },
  plugins: [],
}