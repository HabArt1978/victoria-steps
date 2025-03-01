import { cn } from '@/utils/cn'

export const headerLink = (isActive: boolean): string =>
  cn(
    'btn btn-ghost text-slate-100 tracking-wider font-robotoMono text-sm btn-sm transition duration-300',
    'hover:border-orange-400 hover:bg-transparent hover:text-orange-400',

    { 'bg-slate-200 text-orange-700': isActive }
  )
