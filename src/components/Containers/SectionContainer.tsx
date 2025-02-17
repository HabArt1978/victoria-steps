import { cn } from '@/utils/cn'
import type { JSX } from 'react'
import React from 'react'

const SectionContainer = ({
  children,
  className
}: Readonly<{
  children: React.ReactNode
  className?: string
}>): JSX.Element => {
  return <section className={cn('my-20 w-full', className)}>{children}</section>
}

export default SectionContainer
