import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'anton': ['Anton', 'sans-serif'],
        'impact': ['Impact', 'Charcoal', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
        'bebas': ['Bebas Neue', 'cursive'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'roboto': "var(--roboto)",
        'lato': "var(--lato)"
      },
      colors: {
        'primary': '#49AA85',
        'secondary': '#226A4E'
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}
export default config
