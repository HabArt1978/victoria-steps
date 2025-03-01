import { cn } from '@/utils/cn'
import type { JSX } from 'react'
import React from 'react'

const ProseContainer = ({
  children,
  className
}: Readonly<{
  children: React.ReactNode
  className?: string
}>): JSX.Element => {
  return (
    <div
      className={cn(
        'mx-auto mt-10 w-[96%] space-y-4 sm:w-[80%] lg:w-[70%] xl:w-[60%]',
        className
      )}
    >
      {children}
    </div>
  )
}

export default ProseContainer
