import { cn } from '@/utils/cn'

export const btnClasses = cn(
  'btn bg-orange-700 text-white uppercase border-orange-700',
  'transition duration-150',
  'hover:bg-slate-700 hover:shadow-md hover:shadow-orange-600',
  'active:shadow-inner hover:border-white'
)

export const titleClasses = cn('text-3xl xmd:text-4xl lg:text-5xl lg:w-[440px]')

export const previewTextClasses = cn(
  'mb-4 mt-4 line-clamp-[9] overflow-hidden hyphens-auto text-justify indent-4 text-base leading-relaxed tracking-normal',
  'md:indent-6 xmd:text-lg',
  'lg:text-xl',
  'xl:line-clamp-none'
)
