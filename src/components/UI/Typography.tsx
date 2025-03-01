import { cn } from '@/utils/cn'
import type { JSX, ReactNode } from 'react'

export const H1 = ({
  children,
  className
}: {
  children: ReactNode
  className?: string
}): JSX.Element => (
  <h1
    className={cn(
      'text-center font-rubikDirt text-3xl tracking-wide text-amber-700 xsm:text-4xl sm:text-5xl md:text-6xl',
      className
    )}
  >
    {children}
  </h1>
)

export const H2 = ({
  children,
  className
}: {
  children: ReactNode
  className?: string
}): JSX.Element => (
  <h2
    className={cn(
      'font-amaticBold text-3xl tracking-wider text-orange-600 xmd:text-4xl lg:text-5xl',
      className
    )}
  >
    {children}
  </h2>
)

export const H3 = ({
  children,
  className
}: {
  children: ReactNode
  className?: string
}): JSX.Element => (
  <h3
    className={cn(
      'font-amaticBold text-2xl tracking-wider text-orange-600 xmd:text-3xl lg:text-4xl',
      className
    )}
  >
    {children}
  </h3>
)

export const P = ({
  children,
  className
}: {
  children: ReactNode
  className?: string
}): JSX.Element => (
  <p
    className={cn(
      'overflow-y-auto hyphens-auto text-justify indent-4 font-robotoMono text-base font-light leading-relaxed tracking-normal xmd:text-lg md:indent-6 lg:text-xl',
      className
    )}
  >
    {children}
  </p>
)

export const Ul = ({
  children,
  className
}: {
  children: ReactNode
  className?: string
}): JSX.Element => (
  <ul className={cn('ml-6 list-disc space-y-2 md:ml-10', className)}>
    {children}
  </ul>
)
