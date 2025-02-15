import { ourProductionData } from '@/library/dataForComponents/ourProductionData/ourProductionData'
import Image from 'next/image'
import type { JSX } from 'react'
import SectionContainer from '../Containers/SectionContainer'
import { btnClasses } from './twStyles'

const OurProduction = (): JSX.Element => {
  return (
    <SectionContainer>
      <h1 className="text-center font-rubikDirt text-6xl text-amber-700">
        Наше производство
      </h1>
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    fill
                  />
                </div>

                <div className="card-body h-96">
                  <h2 className="font-amaticBold text-4xl text-orange-600">
                    {card.title}
                  </h2>
                  <p className="overflow-y-auto font-robotoMono text-lg font-light">
                    {card.description}
                  </p>

                  <div className="card-actions mt-2 justify-end">
                    <button className={`${btnClasses}`}>Узнать больше</button>
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
                  <h2 className="font-amaticBold text-4xl text-orange-600">
                    {card.title}
                  </h2>
                  <p className="overflow-y-auto font-robotoMono text-lg font-light">
                    {card.description}
                  </p>

                  <div className="card-actions mt-2 justify-start">
                    <button className={btnClasses}>Узнать больше</button>
                  </div>
                </div>

                <div className="relative shadow-lg shadow-black">
                  <Image
                    src={card.image}
                    alt={`изображение "${card.title}"`}
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
