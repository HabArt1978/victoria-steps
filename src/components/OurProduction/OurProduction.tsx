import { ourProductionData } from '@/library/dataForComponents/ourProductionData/ourProductionData'
import Image from 'next/image'
import type { JSX } from 'react'
import SectionContainer from '../Containers/SectionContainer'
import { H1, H2, P } from '../UI/Typography'
import { btnClasses } from './twStyles'

const OurProduction = (): JSX.Element => {
  return (
    <SectionContainer className="mt-0">
      <H1 className="mb-20">Наше производство</H1>
      <ul className="space-y-6">
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
                    loading="lazy"
                  />
                </div>

                <div className="card-body h-96">
                  <H2>{card.title}</H2>
                  <P>{card.description}</P>

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
                  <H2>{card.title}</H2>
                  <P>{card.description}</P>

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
