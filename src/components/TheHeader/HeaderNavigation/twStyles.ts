import { cn } from '@/utils/cn'

export const headerLink = (isActive: boolean): string =>
  cn(
    'btn btn-ghost font-robotoMono font-light text-sm btn-sm transition duration-300',
    'hover:border-orange-500 hover:bg-slate-100 hover:bg-transparent hover:text-orange-500',

    { 'bg-slate-100 text-orange-500 shadow-lg': isActive }
  )
