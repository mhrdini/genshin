const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Whyte', ...defaultTheme.fontFamily.sans],
        heading: ['"Whyte Inktrap"', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        neo: '5px 5px 0px rgb(0 0 0 / 1)',
      },
      colors: {
        electro: 'rgb(var(--color-electro)/1)',
        dendro: 'rgb(var(--color-dendro)/1)',
        pyro: 'rgb(var(--color-pyro)/1)',
        geo: 'rgb(var(--color-geo)/1)',
        cryo: 'rgb(var(--color-cryo)/1)',
        hydro: 'rgb(var(--color-hydro)/1)',
        anemo: 'rgb(var(--color-anemo)/1)',
        base: 'rgb(var(--color-base)/1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography', require('@tailwindcss/container-queries')),
  ],
}
