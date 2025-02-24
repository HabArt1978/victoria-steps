import {
  fontAmaticBold,
  fontAmaticRegular,
  fontRobotoMono,
  fontRubikDirtRegular
} from '@/assets/fonts'
import TheFooter from '@/components/TheFooter/TheFooter'
import TheHeader from '@/components/TheHeader/TheHeader'
import TheMenu from '@/components/UI/TheMenu'
import { cn } from '@/utils/cn'
import type { Metadata } from 'next'
import type { JSX } from 'react'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'), // При хостинге сайта указать актуальный домен
  title: 'Производство ступеней для лестниц в Саранске | ООО Виктория',
  description:
    'Производство комбинированных деревянных ступеней для лестниц. Высокое качество, оригинальная технология, доступные цены. Закажите ступени для лестниц у нас!',
  keywords:
    'ступени для лестниц, производство ступеней, ступени из дуба, ступени из ясеня, деревянные ступени, ступени из дерева, оригинальные ступени, лестницы в Саранске, ступени в Саранске, заказать ступени, купить ступени, комбинированные ступени, ООО Виктория',

  openGraph: {
    title: 'Производство ступеней для лестниц в Саранске | ООО Виктория',
    description:
      'Производство комбинированных деревянных ступеней для лестниц. Высокое качество, оригинальная технология, доступные цены. Закажите ступени для лестниц у нас!',
    images: [
      {
        url: '/images/stair_treads.webp',
        width: 1200,
        height: 630,
        alt: 'Ступени для лестниц с логотипом ООО "Виктория"'
      }
    ]
  }
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
          'flex min-h-screen flex-col antialiased',
          fontRobotoMono.variable,
          fontRubikDirtRegular.variable,
          fontAmaticRegular.variable,
          fontAmaticBold.variable
        )}
      >
        <TheHeader />

        <main className="w-full flex-1">{children}</main>

        <TheFooter />

        <TheMenu />
      </body>
    </html>
  )
}
