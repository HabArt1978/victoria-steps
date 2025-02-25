'use client'

import { cn } from '@/utils/cn'
import { useState, type JSX } from 'react'
import { FiMenu } from 'react-icons/fi'

const TheMenu = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  const clickHandler = (): void => {
    setIsOpen(() => !isOpen)
  }

  return (
    <>
      <div
        className={cn(
          'fixed bottom-0 left-0 z-50 w-screen overflow-hidden bg-neutral transition-all duration-300',

          {
            'visible h-screen opacity-100': isOpen,
            'invisible h-0 opacity-0 delay-300': !isOpen
          }
        )}
      >
        <ul className="flex h-full flex-col items-center justify-center space-y-4 text-xl font-bold">
          <li>Пункты меню</li>
          <li>Пункты меню</li>
          <li>Пункты меню</li>
          <li>Пункты меню</li>
          <li>Пункты меню</li>
          <li>Пункты меню</li>
        </ul>
      </div>

      <button
        onClick={() => clickHandler()}
        className="btn btn-circle btn-md fixed right-4 top-4 z-50 border-none bg-gradient-to-r from-yellow-400 to-red-600 bg-[length:200%_200%] transition-all duration-300 ease-in-out hover:from-red-600 hover:to-yellow-400 hover:bg-[length:100%_100%] xmd:hidden"
      >
        <FiMenu className="h-6 w-6 text-white" />
      </button>
    </>
  )
}

export default TheMenu
