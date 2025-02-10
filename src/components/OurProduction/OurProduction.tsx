import { ourProductionData } from '@/library/dataForComponents/ourProductionData/ourProductionData'
import Image from 'next/image'
import type { JSX } from 'react'
import SectionContainer from '../Containers/SectionContainer'

const OurProduction = (): JSX.Element => {
  return (
    <SectionContainer>
      <h1 className="text-center text-5xl">Наше производство</h1>
      <ul className="mt-20 space-y-6">
        {ourProductionData.map((card, idx) => {
          const index = idx + 1

          if (index % 2 === 0) {
            return (
              <div
                className="card grid grid-cols-2 bg-base-100 shadow-none lg:card-side"
                key={card.title + idx}
              >
                <div className="relative shadow-lg shadow-black">
                  <Image
                    src={card.image}
                    alt={`изображение "${card.title}"`}
                    className="object-cover"
                    fill
                  />
                </div>

                <div className="card-body h-96">
                  <h2 className="card-title">{card.title}</h2>
                  <p className="overflow-y-auto">{card.description}</p>

                  <div className="card-actions justify-end">
                    <button className="btn bg-orange-500 text-white transition duration-150 hover:bg-slate-700 hover:shadow-md hover:shadow-orange-600 active:shadow-inner">
                      Узнать больше
                    </button>
                  </div>
                </div>
              </div>
            )
          } else {
            return (
              <div
                className="card grid grid-cols-2 bg-base-100 shadow-none lg:card-side"
                key={card.title + idx}
              >
                <div className="card-body h-96">
                  <h2 className="card-title">{card.title}</h2>
                  <p className="overflow-y-auto">{card.description}</p>

                  <div className="card-actions justify-start">
                    <button className="btn bg-orange-500 text-white transition duration-150 hover:bg-slate-700 hover:shadow-md hover:shadow-orange-600 active:shadow-inner">
                      Узнать больше
                    </button>
                  </div>
                </div>

                <div className="relative shadow-lg shadow-black">
                  <Image
                    src={card.image}
                    alt={`изображение "${card.title}"`}
                    className="object-cover"
                    fill
                  />
                </div>
              </div>
            )
          }
        })}
      </ul>
    </SectionContainer>
  )
}

export default OurProduction
