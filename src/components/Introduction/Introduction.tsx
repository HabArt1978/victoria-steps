import introductionImage from '@/assets/images/introduction.webp'
import Image from 'next/image'
import type { JSX } from 'react'
import Social from '../Social/Social'

const Introduction = (): JSX.Element => {
  return (
    <header
      className="relative -top-20 -mb-20 h-[500px] w-full overflow-hidden"
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

      <div className="absolute left-[10%] top-[45%] flex w-[80%] flex-row justify-between rounded-3xl text-4xl text-white">
        <div className="border-l-4 border-orange-600 lg:flex-row">
          <div className="card ml-4 rounded-box bg-[rgba(55,65,81,0.6)]">
            <h1 className="mx-auto p-4 text-4xl text-white">
              <span className="block">Производство ступеней</span>
              <span className="block">из массива дуба</span>
              <span className="block text-5xl">в Саранске</span>
            </h1>
          </div>
        </div>

        <Social position="vertical" />
      </div>
    </header>
  )
}

export default Introduction
