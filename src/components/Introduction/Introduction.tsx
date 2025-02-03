import Image from 'next/image'
import type { JSX } from 'react'
import introductionImage from '../../../public/introduction.webp'

const Introduction = (): JSX.Element => {
  return (
    <div className="relative h-[400px] w-full overflow-hidden">
      <Image
        src={introductionImage}
        alt="Изображение изготовленных лестниц на фоне производственного цеха"
        placeholder="blur" // Показывает размытую версию, пока грузится картинка
        className="absolute left-0 top-0 object-cover object-center"
        fill
      />
    </div>
  )
}

export default Introduction
