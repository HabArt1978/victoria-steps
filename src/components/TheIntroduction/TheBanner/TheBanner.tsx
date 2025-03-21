import introductionImage from '@/assets/images/introduction.webp'
import LabelIcon from '@/components/LabelIcon/LabelIcon'
import Image from 'next/image'
import type { JSX } from 'react'
import BannerContent from './BannerContent/BannerContent'

const TheBanner = (): JSX.Element => {
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      role="img"
      aria-label="Процесс производства ступеней для лестниц на нашем предприятии"
    >
      <Image
        src={introductionImage}
        alt="Процесс производства ступеней для лестниц на нашем заводе"
        className="absolute left-0 top-0 object-cover object-center"
        fill
        placeholder="blur"
        priority
      />

      <LabelIcon
        isInvertColor={false}
        className="h-xsm-top-1 absolute left-1/2 top-[10%] z-50 h-24 -translate-x-1/2 bg-[rgba(255,255,255,0.8)] xmd:top-[13%] lg:left-[5.5rem] lg:top-3"
      />

      <BannerContent />
    </div>
  )
}

export default TheBanner
