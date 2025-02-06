import introductionImage from '@/assets/images/introduction.webp'
import Image from 'next/image'
import type { JSX } from 'react'
import { FaVk, FaWhatsapp } from 'react-icons/fa'
import { RiTelegram2Fill } from 'react-icons/ri'

const Introduction = (): JSX.Element => {
  return (
    <header
      className="relative bottom-20 h-[500px] w-full overflow-hidden"
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

      <div className="absolute left-[10%] top-[45%] flex w-[80%] justify-between rounded-3xl text-4xl text-white">
        <div className="border-l-4 border-orange-600 lg:flex-row">
          <div className="card ml-4 rounded-box bg-[rgba(55,65,81,0.6)]">
            <h1 className="mx-auto p-4 text-4xl text-white">
              <span className="block">Производство ступеней</span>
              <span className="block">из массива дуба</span>
              <span className="block text-5xl">в Саранске</span>
            </h1>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <button className="btn btn-circle m-0 border-none bg-transparent p-0 hover:scale-110 hover:bg-transparent">
            <FaVk className="h-10 w-10 text-black hover:scale-110 hover:text-blue-500" />
          </button>

          <button className="btn btn-circle m-0 border-none bg-transparent p-0 hover:scale-110 hover:bg-transparent">
            <FaWhatsapp className="h-10 w-10 text-black hover:scale-110 hover:text-green-600" />
          </button>

          <button className="btn btn-circle m-0 border-none bg-transparent p-0 hover:scale-110 hover:bg-transparent">
            <RiTelegram2Fill className="h-10 w-10 text-black hover:scale-110 hover:text-blue-600" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Introduction
// bg-[rgba(250,250,250,0.8)]
