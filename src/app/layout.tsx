import {
  fontAmaticBold,
  fontAmaticRegular,
  fontRobotoMono,
  fontRubikDirtRegular
} from '@/assets/fonts'
import TheFooter from '@/components/TheFooter/TheFooter'
import TheHeader from '@/components/TheHeader/TheHeader'
import { cn } from '@/utils/cn'
import type { Metadata } from 'next'
import type { JSX } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title:
    'Производство деревянных ступеней для лестниц из массива дуба в Саранске',
  description:
    'Производство ступеней для лестниц из массива дуба по оригинальной технологии в Саранске'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  return (
    <html lang="ru">
      <body
        className={cn(
          'antialiased` flex min-h-screen flex-col',
          fontRobotoMono.variable,
          fontRubikDirtRegular.variable,
          fontAmaticRegular.variable,
          fontAmaticBold.variable
        )}
      >
        <TheHeader />

        <main className="w-full flex-1">{children}</main>

        <TheFooter />
      </body>
    </html>
  )
}
