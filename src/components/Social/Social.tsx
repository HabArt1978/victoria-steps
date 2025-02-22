import Link from 'next/link'
import { type JSX } from 'react'
import { FaVk } from 'react-icons/fa'
import { IoIosMail, IoLogoWhatsapp } from 'react-icons/io'
import { RiTelegram2Fill } from 'react-icons/ri'
import { socialContainer, socialLink } from './twStyles'
import type { Background, Position } from './types'
interface SocialProps {
  position: Position
  isBackground: Background
}

const Social = ({ isBackground, position }: SocialProps): JSX.Element => {
  return (
    <div className={socialContainer(position)}>
      <Link
        href="#"
        className={socialLink(isBackground)}
      >
        <IoIosMail className="h-10 w-10 text-white transition-colors group-hover:text-red-600" />
      </Link>

      <Link
        href="#"
        className={socialLink(isBackground)}
      >
        <FaVk className="hover: h-10 w-10 text-white transition-colors group-hover:text-blue-700" />
      </Link>

      <Link
        href="#"
        className={socialLink(isBackground)}
      >
        <IoLogoWhatsapp className="h-10 w-10 text-white transition-colors group-hover:text-green-600" />
      </Link>

      <Link
        href="#"
        className={socialLink(isBackground)}
      >
        <RiTelegram2Fill className="h-10 w-10 text-white transition-colors group-hover:text-blue-500" />
      </Link>
    </div>
  )
}

export default Social
