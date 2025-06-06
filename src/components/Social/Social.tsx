import Link from 'next/link'
import { type JSX } from 'react'
import { FaVk } from 'react-icons/fa'
import { IoIosMail, IoLogoWhatsapp } from 'react-icons/io'
import { RiTelegram2Fill } from 'react-icons/ri'
import { socialContainer, socialLink } from './twStyles'
import type { SocialProps } from './types'

const Social = ({
  position,
  isBackground,
  isVisible,
  className
}: SocialProps): JSX.Element => {
  return (
    <div className={socialContainer(position, isVisible, className)}>
      <Link
        href="mailto:viktorua18@yandex.ru?subject=Сообщение%20от%20пользователя%20сайта%20."
        className={socialLink(isBackground)}
        aria-label="Напишите нам на электронную почту viktorua18@yandex.ru"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoIosMail className="h-10 w-10 text-white transition-colors group-hover:text-red-600" />
      </Link>

      <Link
        href="https://vk.com/id872271836"
        className={socialLink(isBackground)}
        aria-label="Перейдите к нашему профилю ВКонтакте"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaVk className="hover: h-10 w-10 text-white transition-colors group-hover:text-blue-700" />
      </Link>

      <Link
        href="https://wa.me/79276409524?text=Сообщение%20от%20пользователя%20сайта%20."
        className={socialLink(isBackground)}
        aria-label="Напишите нам в WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoWhatsapp className="h-10 w-10 text-white transition-colors group-hover:text-green-600" />
      </Link>

      <Link
        href="https://t.me/Artur_Khab?text=Сообщение%20от%20пользователя%20сайта%20."
        className={socialLink(isBackground)}
        aria-label="Перейти к нашему каналу в Telegram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiTelegram2Fill className="h-10 w-10 text-white transition-colors group-hover:text-blue-500" />
      </Link>
    </div>
  )
}

export default Social
