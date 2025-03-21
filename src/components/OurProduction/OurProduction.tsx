import fallBackImage from '@/assets/images/fallback-image-for-production.webp'
import { ourProductionData } from '@/library/dataForComponents/ourProductionData/ourProductionData'

import Image from 'next/image'
import Link from 'next/link'
import type { JSX } from 'react'
import { buttonLinkClasses } from '../../utils/globalStyles'
import SectionContainer from '../Containers/SectionContainer'
import { H1, H2, P } from '../UI/Typography'
import { previewTextClasses } from './twStyles'

const OurProduction = (): JSX.Element => {
  return (
    <SectionContainer className="mt-0">
      <H1 className="my-16 md:my-20">Наше производство</H1>
      <ul className="space-y-14 px-3">
        {ourProductionData.map(({ title, image, id, previewText }, idx) => {
          const index = idx + 1

          const imageSrc = image || fallBackImage

          const isEven = index % 2 === 0

          return (
            <li
              className="grid grid-cols-1 gap-y-0 bg-base-100 shadow-none md:grid-cols-2 md:gap-6"
              key={title + idx}
            >
              {index !== 1 && (
                <div className="divider divider-vertical h-10 md:hidden" />
              )}

              <div
                className={`flex flex-col justify-between space-y-8 p-6 text-center md:space-y-0 md:text-start ${
                  isEven ? 'md:order-2' : 'md:order-1'
                }`}
              >
                <H2 className="lg:w-[440px]">{title}</H2>
                <P className={previewTextClasses}>{previewText}</P>

                <div className={isEven ? 'md:ml-auto' : 'md:mr-auto'}>
                  <Link
                    href={`/pages/our-production/${id}`}
                    className={buttonLinkClasses}
                  >
                    Узнать больше
                  </Link>
                </div>
              </div>

              <div
                className={`relative h-[320px] shadow-lg shadow-black md:h-[450px] ${
                  index % 2 === 0 ? 'md:order-1' : 'md:order-2'
                }`}
              >
                <Image
                  src={imageSrc}
                  alt={`изображение "${title}"`}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  fill
                  placeholder="blur"
                />
              </div>
            </li>
          )
        })}
      </ul>
    </SectionContainer>
  )
}

export default OurProduction
