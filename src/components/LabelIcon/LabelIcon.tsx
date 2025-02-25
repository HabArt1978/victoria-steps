import Image from 'next/image'
import type { JSX } from 'react'
import { H1 } from '../UI/Typography'
import labelSrc from './Label.svg'

const LabelIcon = (): JSX.Element => {
  return (
    <div className="relative h-24">
      <Image
        src={labelSrc}
        alt="Label Icon"
        fill
        className="invert"
      />
      <H1 className="relative top-[37%] text-nowrap text-lg">ООО Виктория</H1>
    </div>
  )
}

export default LabelIcon
