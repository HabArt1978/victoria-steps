import typography from '@tailwindcss/typography'
import daisyui from 'daisyui'
import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/utils/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      // стили для xsm: '320px' будут применены в диапазоне >=320px && <=640px
      xsm: '320px',
      sm: '640px',
      xmd: '710px',
      md: '900px',
      lg: '1100px',
      xl: '1450px'
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)'
      },
      fontFamily: {
        robotoMono: ['var(--font-robotoMono)', ...fontFamily.mono],
        rubikDirt: ['var(--font-rubikDirtRegular)', ...fontFamily.sans],
        amaticBold: ['var(--font-amaticBold)', ...fontFamily.sans],
        amaticRegular: ['var(--font-amaticRegular)', ...fontFamily.sans]
      }
    }
  },
  plugins: [typography, daisyui]
} satisfies Config
