import { cn } from '@/utils/cn'
import type { Position } from './types'

export const socialLink = (isBackground: boolean): string =>
  cn(
    'group btn btn-circle btn-lg m-0 border-none hover:rotate-12 bg-[rgba(0,0,0,0.4)] hover:scale-125 hover:bg-transparent transition duration-200',

    { 'bg-inherit': !isBackground }
  )

export const socialContainer = (position: Position): string =>
  cn(
    'hidden xmd:flex xmd:justify-evenly md:justify-between',

    { 'my-auto flex-row justify-self-end': position === 'horizontal' },
    { 'absolute bottom-0 right-0 flex-col space-y-4': position === 'vertical' }
  )
