import { cn } from '@/utils/cn'

export const advantageContainer = (): string =>
  cn(
    'flex w-full flex-col items-center space-y-4 text-center align-middle',
    'sm:w-[40%]',
    'md:w-[30%]',
    'xl:w-[18%]'
  )

export const advantageIcon = (): string =>
  cn('h-10 w-10 md:h-12 md:w-12 text-orange-600')

export const advantageTitle = (): string =>
  cn('text-2xl tracking-wider text-nowrap', 'md:text-3xl')

export const advantageDescription = (): string => cn('text-md', 'md:text-lg')
