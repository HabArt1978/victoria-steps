import { cn } from '@/utils/cn'

export const btnClasses = cn(
  'btn bg-orange-500 text-white uppercase',
  'transition duration-150',
  'hover:bg-slate-700 hover:shadow-md hover:shadow-orange-600',
  'active:shadow-inner'
)

export const titleClasses = cn('text-3xl xmd:text-4xl lg:text-5xl lg:w-[440px]')

export const previewTextClasses = cn(
  'mb-4 mt-4 line-clamp-6 overflow-hidden hyphens-auto text-justify indent-4 text-base leading-relaxed tracking-normal',
  'md:indent-6 xmd:text-lg',
  'lg:text-xl'
)
