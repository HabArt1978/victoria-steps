'use client'

import { ourWorksData } from '@/library/dataForComponents/ourWorksData/ourWorksData'
import Image from 'next/image'
import type { JSX } from 'react'
import SectionContainer from '../Containers/SectionContainer'

const OurWorks = (): JSX.Element => {
  return (
    <SectionContainer>
      <h1 className="text-center text-5xl">Наши работы</h1>

      <ul className="mt-20 flex justify-between">
        {ourWorksData.map(({ image, alt }, idx) => {
          return (
            <li
              key={alt + idx}
              className="relative h-80 w-[31%] cursor-pointer overflow-hidden rounded-lg"
              onClick={() => console.log('Click')}
            >
              <Image
                src={image}
                alt={alt}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="h-full w-full object-cover transition-transform duration-200 ease-in hover:scale-110"
                fill
              />
            </li>
          )
        })}
      </ul>
    </SectionContainer>
  )
}

export default OurWorks
