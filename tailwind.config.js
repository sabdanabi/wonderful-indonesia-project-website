/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        "bg-landing-page" : "url(/public/assets_img/bg_landing_page.png)",
      },
      fontFamily:{
        'inter': ['Inter']
      },
    },
  },
  plugins: [],
}

