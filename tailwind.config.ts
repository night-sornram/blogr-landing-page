import type { Config } from 'tailwindcss'

const {colors : defaultColors } = require("tailwindcss/defaultTheme")

const colors = {
  ...defaultColors,
  ...{
    "custom" : {
      "100" : "hsl(356, 100%, 66%)",
      "200" : "hsl(355, 100%, 74%)",
      "300" : "hsl(208, 49%, 24%)",
      "400" : "hsl(240, 2%, 79%)",
      "500" : "hsl(207, 13%, 34%)",
      "600" : "hsl(240, 10%, 16%)",
      "700" : "hsl(13, 100%, 72%)",
      "800" : "hsl(353, 100%, 62%)",
      "900" : "hsl(237, 17%, 21%)",
      "1000" : "hsl(237, 23%, 32%)",
    }
  }
}

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'bg-desktop' : "url('/images/bg-pattern-intro-desktop.svg')",
        'bg-mobile' : "url('/images/bg-pattern-intro-mobile.svg')",
        "circle" : "url('/images/bg-pattern-circles.svg')"
      },
      colors: colors,
      fontFamily : {
        "overpass" : ['Overpass'],
        "ubuntu" : ['Ubuntu']
      },
      backgroundPosition: {
        custom: 'top 75% left -45%',
        custom1 : 'top -10rem left 55%',
        custom2p : 'top 50% left 30%'
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        'custom': '70%',
        'custom1': '150%',
        "custom2" : "170%",
        "custom2s" : "210%"
      }
    },
  },
  plugins: [],
}
export default config
