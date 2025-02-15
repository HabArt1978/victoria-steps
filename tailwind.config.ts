import typography from '@tailwindcss/typography'
import daisyui from 'daisyui'
import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
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
