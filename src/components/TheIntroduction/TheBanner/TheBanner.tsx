import introductionImage from '@/assets/images/introduction.webp'
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
        placeholder="blur"
        className="absolute left-0 top-0 object-cover object-center"
        fill
        fetchPriority="high"
      />

      <BannerContent />
    </div>
  )
}

export default TheBanner
