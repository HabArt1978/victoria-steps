'use client'

import fallBackImage from '@/assets/images/fallback-image-for-works.webp'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { type JSX } from 'react'
import { MdOutlineZoomOutMap } from 'react-icons/md'
import SectionContainer from '../Containers/SectionContainer'
import { H1, H3, P } from '../UI/Typography'
import { btnClasses } from './twStyles'
import type { OurWorksListData } from './types'

const OurWorks = ({ quantity, data }: OurWorksListData): JSX.Element => {
  const router = useRouter()

  const displayedData = quantity === 'all' ? data : data.slice(0, quantity)

  const clickHandler = (id: string): void => {
    router.push(`/pages/portfolio/${id}`)
  }

  return (
    <SectionContainer>
      <H1 className="my-16 text-3xl xsm:text-4xl sm:text-5xl md:my-20 md:text-6xl">
        Наши ступени
      </H1>

      <ul className="flex flex-wrap justify-center gap-6">
        {displayedData?.map(({ alt, image, id }) => {
          const imageSrc = image || fallBackImage

          return (
            <li
              key={id}
              className="group relative h-80 w-full cursor-pointer overflow-hidden rounded-lg sm:w-[48%] md:w-[31%]"
              onClick={() => clickHandler(id)}
            >
              <Image
                src={imageSrc}
                alt={alt}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="h-full w-full object-cover transition-transform duration-300 ease-in hover:scale-110 group-hover:scale-110"
                fill
                placeholder="blur"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-lg font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex flex-col items-center space-y-2">
                  <MdOutlineZoomOutMap className="h-10 w-10" />
                  <P className="font-semibold tracking-wider">Увеличить</P>
                </div>
              </div>
            </li>
          )
        })}

        {quantity !== 'all' ? (
          <li className="relative h-80 w-full cursor-pointer overflow-hidden rounded-lg sm:w-[48%] md:w-[31%]">
            <Image
              src={fallBackImage}
              alt="изображение заглушка для ссылки на страницу с нашими ступенями"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="h-full w-full object-cover transition-transform duration-300 ease-in hover:scale-110"
              fill
              placeholder="blur"
            />

            <div className="absolute inset-0 z-10 flex items-center justify-center bg-white bg-opacity-80 text-lg font-bold">
              <div className="flex flex-col space-y-3">
                <H3 className="font-bold text-gray-900">
                  Смотреть другие работы
                </H3>
                <button
                  className={btnClasses}
                  onClick={() => router.push('/pages/portfolio')}
                >
                  Перейти в портфолио
                </button>
              </div>
            </div>
          </li>
        ) : (
          <></>
        )}
      </ul>
    </SectionContainer>
  )
}

export default OurWorks
