import { cn } from '@/utils/cn'

export const contactsLink = (): string =>
  cn(
    "relative ml-2 text-orange-600 before:absolute before:bottom-[-2px] before:left-0 before:h-[1px] before:w-0 before:bg-orange-600 before:transition-all before:duration-300 before:content-[''] hover:before:w-full"
  )
