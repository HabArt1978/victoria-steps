'use client'

import { ourContactsData as contacts } from '@/library/dataForComponents/ourContactsData/ourContactsData'
import { navBarLinks } from '@/library/routeAndLinkData/routeAndLinkData'
import { cn } from '@/utils/cn'
import { mobileMenuButton } from '@/utils/styles'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState, type JSX } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { useMediaQuery } from 'usehooks-ts'
import LabelIcon from '../LabelIcon/LabelIcon'
import Social from '../Social/Social'
import { P } from './Typography'

const TheMenu = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsMounted(() => true)
  }, [])

  // Вызываем useMediaQuery всегда, но отключаем SSR
  const isExtraMiddleScreen = useMediaQuery('(min-width: 710px)', {
    initializeWithValue: false, // Отключает начальный рендер на сервере
    defaultValue: false // <-- Это предотвращает ошибку гидратации
  })

  useEffect(() => {
    if (isExtraMiddleScreen) {
      setIsOpen(false)
    }
  }, [isExtraMiddleScreen])

  const clickHandler = (): void => {
    setIsOpen((prevState) => !prevState)
  }

  if (!isMounted) return <></> // Избегаем гидратации, пока не смонтировано

  return (
    <>
      <div
        className={cn(
          'fixed bottom-0 left-0 z-50 flex w-full flex-col items-center justify-around overflow-hidden bg-neutral transition-all duration-300',

          {
            'visible h-screen opacity-100': isOpen,
            'invisible h-0 opacity-0 delay-300': !isOpen
          }
        )}
      >
        <LabelIcon isInvertColor={true} />

        <address className="space-y-4 font-robotoMono not-italic">
          <P>
            Телефон:{' '}
            <Link
              href="tel:+78888888888"
              target="_blank"
              className="btn btn-outline btn-sm ml-2 text-gray-300 hover:bg-white"
            >
              {contacts.phone}
            </Link>
          </P>
          <P>
            E-mail:{' '}
            <Link
              href="mailto:viktorua18@yandex.ru"
              target="_blank"
              className="btn btn-outline btn-sm ml-2 text-gray-300 hover:bg-white"
            >
              {contacts.email}
            </Link>
          </P>
        </address>

        <ul className="flex w-full flex-col items-center justify-center space-y-4 text-xl font-bold">
          {navBarLinks.map((link, idx) => {
            const isActive = pathname === link.path

            return (
              <Link
                key={link.label + idx}
                href={link.path}
                className={mobileMenuButton(isActive)}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            )
          })}
        </ul>

        <Social
          isBackground={false}
          isVisible={true}
          position="horizontal"
          className="my-0 w-full px-8"
        />
      </div>

      <button
        onClick={() => clickHandler()}
        className="btn btn-circle btn-md fixed right-4 top-4 z-50 border-none bg-gradient-to-r from-yellow-400 to-red-600 bg-[length:200%_200%] transition-all duration-300 ease-in-out hover:from-yellow-500 hover:to-red-700 hover:shadow-md xmd:hidden"
      >
        <div className="transition duration-500">
          {!isOpen ? (
            <FiMenu className="h-6 w-6 text-white" />
          ) : (
            <FiX className="h-7 w-7 text-white" />
          )}
        </div>
      </button>
    </>
  )
}

export default TheMenu
