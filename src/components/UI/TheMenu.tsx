'use client'

import { navBarLinks } from '@/library/routeAndLinkData/routeAndLinkData'
import { cn } from '@/utils/cn'
import { mobileMenuButton } from '@/utils/globalStyles'
import { useScreenSize } from '@/utils/hooks/useScreenSize'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState, type JSX } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { useMediaQuery } from 'usehooks-ts'
import LabelIcon from '../LabelIcon/LabelIcon'
import Social from '../Social/Social'

const TheMenu = (): JSX.Element | null => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const pathname = usePathname()
  const { isHorizontal, height } = useScreenSize()

  useEffect(() => {
    setIsMounted(() => true)
  }, [])

  // Вызываем useMediaQuery всегда, но отключаем SSR
  const isMobile = useMediaQuery('(max-width: 710px)', {
    initializeWithValue: false, // Отключает начальный рендер на сервере
    defaultValue: false // <-- Это предотвращает ошибку гидратации
  })

  useEffect(() => {
    if (!isMobile || height >= 640) {
      setIsOpen(false)
    }
  }, [isMobile, height])

  const clickHandler = (): void => {
    setIsOpen((prevState) => !prevState)
  }

  if (!isMounted) return null // Избегаем гидратации, пока не смонтировано

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

        <ul
          className={cn(
            'flex w-full flex-col items-center justify-center text-xl font-bold',
            {
              'flex w-[70%] flex-row flex-wrap gap-4': isHorizontal,
              'gap-y-4': !isHorizontal
            }
          )}
        >
          {navBarLinks.map((link, idx) => {
            const isActive = pathname === link.path

            return (
              <Link
                key={link.label + idx}
                href={link.path}
                className={cn(mobileMenuButton(isActive, isHorizontal))}
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
          className={cn('my-0 w-full px-8', {
            'w-[80%]': isHorizontal
          })}
        />
      </div>

      <button
        onClick={() => clickHandler()}
        className="h-sm-block btn btn-circle btn-md fixed right-4 top-4 z-50 border-none bg-gradient-to-r from-yellow-400 to-red-600 bg-[length:200%_200%] transition-all duration-300 ease-in-out hover:from-yellow-500 hover:to-red-700 hover:shadow-md xmd:hidden"
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
