import Introduction from '@/components/Introduction/Introduction'
import TheHeader from '@/components/TheHeader/TheHeader'
import type { Metadata } from 'next'
import { Geist, Geist_Mono, Roboto } from 'next/font/google'
import type { JSX } from 'react'
import './globals.css'

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['cyrillic'],
  weight: ['100', '300', '400', '500', '700', '900']
})

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Производство ступеней для лестниц из массива дуба',
  description:
    'Производство ступеней для лестниц из массива дуба по оригинальной технологии'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}
      >
        <TheHeader />

        <Introduction />

        <main className="mx-auto w-[80%]">{children}</main>
      </body>
    </html>
  )
}
