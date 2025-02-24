import { cn } from '@/utils/cn'
import type { JSX } from 'react'
import React from 'react'

const PageContainer = ({
  children,
  className
}: Readonly<{
  children: React.ReactNode
  className?: string
}>): JSX.Element => {
  return (
    <div
      className={cn('mx-auto w-[96%] overflow-hidden xmd:w-[90%]', className)}
    >
      {children}
    </div>
  )
}

export default PageContainer
