import { cn } from '@/utils/cn'
import Image from 'next/image'
import type { JSX } from 'react'
import { H1 } from '../UI/Typography'
import labelSrc from './Label.svg'

interface LabelProps {
  isInvertColor: boolean
  className?: string
}

const LabelIcon = ({ isInvertColor, className }: LabelProps): JSX.Element => {
  return (
    <div className={cn('relative h-24 rounded-xl px-2 py-4', className)}>
      <Image
        src={labelSrc}
        alt="Иконка лейбла компании"
        fill
        className={cn(
          { invert: isInvertColor },
          { 'invert-0': !isInvertColor }
        )}
      />
      <H1 className="relative top-[30%] text-nowrap text-lg text-orange-600">
        ООО Виктория
      </H1>
    </div>
  )
}

export default LabelIcon
