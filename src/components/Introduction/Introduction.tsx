import introductionImage from '@/assets/images/introduction.webp'
import Image from 'next/image'
import type { JSX } from 'react'
import Social from '../Social/Social'

const Introduction = (): JSX.Element => {
  return (
    <header
      className="relative -top-20 -mb-20 h-[650px] w-full overflow-hidden"
      role="img"
      aria-label="Процесс производства ступеней для лестниц на нашем предприятии"
    >
      <Image
        src={introductionImage}
        alt="Процесс производства ступеней для лестниц на нашем заводе"
        placeholder="blur"
        className="absolute left-0 top-0 object-cover object-center"
        fill
      />

      <div className="absolute left-[10%] top-[55%] flex w-[80%] flex-row justify-between rounded-3xl text-4xl text-white">
        <div className="border-l-4 border-orange-600 lg:flex-row">
          <div className="card ml-4 rounded-box bg-amber-900 bg-opacity-75">
            <h1 className="text-gray-50xl mx-auto p-4 font-rubikDirt text-white">
              <span className="block text-4xl">Производство ступеней</span>
              <span className="block text-4xl">из массива дуба</span>
              <span className="block text-6xl">в Саранске</span>
            </h1>
          </div>
        </div>

        <Social position="vertical" />
      </div>
    </header>
  )
}

export default Introduction
