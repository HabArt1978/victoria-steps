import { cn } from './cn'

export const pForList = cn('indent-0 sm:indent-2 md:indent-2')

export const buttonLinkClasses = cn(
  'btn bg-orange-700 text-white uppercase border-orange-700',
  'transition duration-150',
  'hover:bg-slate-800 hover:shadow-md hover:shadow-orange-600 hover:border-white',
  'active:shadow-inner active:bg-slate-800'
)

export const mobileMenuButton = (
  isActive: boolean,
  isHorizontal: boolean
): string =>
  cn(
    'btn uppercase border-slate-600 bg-slate-600 text-gray-300',
    'transition duration-150',
    'hover:bg-slate-700 hover:shadow-md hover:shadow-orange-600 hover:border-white',
    'active:shadow-inner  active:bg-slate-800',
    'h-xsm:btn-sm',

    {
      'border border-white bg-slate-800 text-white shadow-md shadow-orange-600':
        isActive
    },

    {
      'w-[45%]': isHorizontal,
      'w-[70%]': !isHorizontal
    }
  )
