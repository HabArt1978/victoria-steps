import { cn } from '@/utils/cn'
import type { ClassName, IsBackground, IsVisible, Position } from './types'

export const socialLink = (isBackground: IsBackground): string =>
  cn(
    'group btn btn-circle btn-md sm:btn-lg m-0 border-none hover:rotate-12 bg-[rgba(0,0,0,0.4)] hover:scale-125 hover:bg-transparent transition duration-200',

    { 'bg-inherit': !isBackground }
  )

export const socialContainer = (
  position: Position,
  isVisible: IsVisible,
  className?: ClassName
): string =>
  cn(
    'flex justify-between xsm:justify-evenly md:justify-between',

    {
      'md:flex my-auto flex-row justify-self-center min-[1000px]:justify-self-end':
        position === 'horizontal'
    },
    { 'absolute bottom-0 right-0 flex-col space-y-4': position === 'vertical' },
    { 'hidden xmd:flex': !isVisible },

    className
  )
