import { cn } from '@/utils/cn'

export const bannerContentContainer = (): string =>
  cn(
    'absolute left-0 bottom-[2%] flex w-[95%] flex-col justify-between rounded-3xl',
    'sm:left-[10%] sm:w-[80%]',
    'xmd:bottom-[4%]',
    'md:flex-row md:bottom-[10%]'
  )
