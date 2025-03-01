import Image from 'next/image'
import type { JSX } from 'react'
import { FiX } from 'react-icons/fi'
import type { ModalProps } from './types'

const Modal = ({ imageSrc, altText, onClose }: ModalProps): JSX.Element => {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900 text-white"
      onClick={onClose} // Закрываем модальное окно при клике вне изображения
    >
      <div className="relative h-[95vh] w-[95vw] shadow-[0_7px_27px_rgba(234,88,12,0.1)] shadow-orange-400">
        <Image
          src={imageSrc}
          alt={altText}
          className="object-cover"
          fill
        />
        <button
          className="bth btn-square absolute right-0 top-0 bg-gray-900 bg-opacity-50 p-2 transition-colors duration-150 hover:bg-opacity-70"
          onClick={onClose} // Закрываем модальное окно при клике на кнопку
        >
          <FiX className="h-8 w-8" />
        </button>
      </div>
    </div>
  )
}

export default Modal
