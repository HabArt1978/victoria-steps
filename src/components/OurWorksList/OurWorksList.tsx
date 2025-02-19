'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useCallback, type JSX } from 'react'
import SectionContainer from '../Containers/SectionContainer'
import type { OurWorksListData } from './types'

const OurWorksList = ({ quantity, data }: OurWorksListData): JSX.Element => {
  const router = useRouter()

  const displayedData = quantity === 'all' ? data : data.slice(0, quantity)

  const handleClick = useCallback(
    (id: string) => {
      router.push(`/pages/portfolio/${id}`)
    },
    [router]
  )

  return (
    <SectionContainer>
      <h1 className="text-center font-rubikDirt text-6xl text-amber-700">
        Наши работы
      </h1>

      <ul className="mt-20 flex flex-wrap justify-center gap-6">
        {displayedData?.map(({ alt, image, id }) => (
          <li
            key={id}
            className="relative h-80 w-[31%] cursor-pointer overflow-hidden rounded-lg"
            onClick={() => handleClick(id)}
          >
            <Image
              src={image}
              alt={alt}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="h-full w-full object-cover transition-transform duration-300 ease-in hover:scale-110"
              loading="lazy"
            />
          </li>
        ))}
      </ul>
    </SectionContainer>
  )
}

export default OurWorksList
