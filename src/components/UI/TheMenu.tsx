'use client'

import { cn } from '@/utils/cn'
import { useState, type JSX } from 'react'
import { TbArrowBigUpLinesFilled } from 'react-icons/tb'
import { P } from './Typography'

const TheMenu = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        className={cn(
          'fixed bottom-0 left-0 z-50 w-screen overflow-hidden bg-orange-300 transition-all duration-300',

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
        onClick={() => setIsOpen(() => !isOpen)}
        className="sticky bottom-0 left-0 z-50 flex w-[100%] items-center justify-center gap-2 bg-orange-500 p-4 text-white"
      >
        <TbArrowBigUpLinesFilled
          size={30}
          className={cn(
            'transition-transform duration-300',
            isOpen ? 'rotate-180' : ''
          )}
        />
        <P className="transition duration-300">
          {isOpen ? 'Закрыть меню' : 'Открыть меню'}
        </P>
      </button>
    </>
  )
}

export default TheMenu
