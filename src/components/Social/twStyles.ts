import { cn } from '@/utils/cn'

export const socialLink = (isHorizontalPosition: boolean): string =>
  cn(
    'group btn btn-circle btn-lg m-0 border-none hover:rotate-12 bg-[rgba(0,0,0,0.4)] hover:scale-125 hover:bg-transparent transition duration-200',

    { 'bg-inherit': isHorizontalPosition }
  )
