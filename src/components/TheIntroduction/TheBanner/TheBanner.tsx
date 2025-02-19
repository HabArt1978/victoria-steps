import introductionImage from '@/assets/images/introduction.webp'
import Social from '@/components/Social/Social'
import { H1 } from '@/components/UI/Typography'
import Image from 'next/image'
import type { JSX } from 'react'

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

      <div className="absolute left-[10%] top-[55%] flex w-[80%] flex-row justify-between rounded-3xl text-4xl text-white">
        <div className="border-l-4 border-orange-600 lg:flex-row">
          <div className="card ml-4 rounded-box bg-amber-900 bg-opacity-75">
            <H1 className="p-4 text-start text-white">
              <span className="block text-4xl">Производство ступеней</span>
              <span className="block text-4xl">из массива дуба</span>
              <span className="block text-6xl">в Саранске</span>
            </H1>
          </div>
        </div>

        <Social position="vertical" />
      </div>
    </div>
  )
}

export default TheBanner
