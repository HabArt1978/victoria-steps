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
      'text-center font-rubikDirt text-6xl text-amber-700',
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
  <h2 className={cn('font-amaticBold text-5xl text-orange-600', className)}>
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
  <h3 className={cn('font-amaticBold text-3xl text-orange-600', className)}>
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
      'overflow-y-auto font-robotoMono text-lg font-light',
      className
    )}
  >
    {children}
  </p>
)

export const Li = ({
  children,
  className
}: {
  children: ReactNode
  className?: string
}): JSX.Element => (
  <li className={cn('font-robotoMono text-lg font-normal', className)}>
    {children}
  </li>
)
