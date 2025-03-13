'use client'

import fallBackImage from '@/assets/images/fallback-image-for-works.webp'

import { buttonLinkClasses } from '@/utils/globalStyles'
import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import Link from 'next/link'
import { useState, type JSX } from 'react'
import { MdOutlineZoomOutMap } from 'react-icons/md'
import SectionContainer from '../Containers/SectionContainer'
import Modal from '../UI/Modal/Modal'
import { H1, P } from '../UI/Typography'
import type { OurWorksListData } from './types'

const OurWorks = ({ quantity, data }: OurWorksListData): JSX.Element => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedAlt, setSelectedAlt] = useState<string>('')

  const displayedData = quantity === 'all' ? data : data.slice(0, quantity)

  const openModal = (image: string | StaticImageData, alt: string): void => {
    const imageUrl = typeof image === 'string' ? image : image.src // Преобразуем StaticImageData в строку
    setSelectedImage(imageUrl)
    setSelectedAlt(alt)
  }

  const closeModal = (): void => {
    setSelectedImage(null) // Закрываем модальное окно
    setSelectedAlt('') // Сбрасываем alt текст
  }

  return (
    <SectionContainer>
      <H1 className="my-16 md:my-20">Наши ступени</H1>

      <ul className="flex flex-wrap justify-center gap-6">
        {displayedData?.map(({ alt, image, id }) => {
          const imageSrc = image || fallBackImage

          return (
            <li
              key={id}
              className="group relative h-80 w-full cursor-pointer overflow-hidden rounded-lg sm:w-[48%] md:w-[31%]"
              onClick={() => openModal(imageSrc, alt)} // Открываем модальное окно при клике
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
                <p className="font-amaticBold text-3xl font-bold text-gray-900 xmd:text-3xl lg:text-4xl">
                  Смотреть другие работы
                </p>
                <Link
                  className={buttonLinkClasses}
                  href="/pages/portfolio"
                >
                  Перейти в портфолио
                </Link>
              </div>
            </div>
          </li>
        ) : (
          <></>
        )}
      </ul>

      {/* Используем компонент Modal */}
      {selectedImage && (
        <Modal
          imageSrc={selectedImage}
          altText={selectedAlt}
          onClose={closeModal}
        />
      )}
    </SectionContainer>
  )
}

export default OurWorks
