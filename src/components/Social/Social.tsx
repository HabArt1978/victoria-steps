import Link from 'next/link'
import type { JSX } from 'react'
import { FaVk } from 'react-icons/fa'
import { IoIosMail, IoLogoWhatsapp } from 'react-icons/io'
import { RiTelegram2Fill } from 'react-icons/ri'
import { socialLink } from './twStyles'
import type { Position } from './types'

const Social = ({ position }: Position): JSX.Element => {
  return (
    <div
      className={`flex ${position === 'horizontal' ? 'my-auto flex-row justify-self-end' : 'absolute bottom-0 right-0 flex-col space-y-4'} justify-between`}
    >
      <Link
        href="#"
        className={socialLink(position === 'horizontal')}
      >
        <IoIosMail className="h-10 w-10 text-white transition-colors group-hover:text-red-600" />
      </Link>

      <Link
        href="#"
        className={socialLink(position === 'horizontal')}
      >
        <FaVk className="hover: h-10 w-10 text-white transition-colors group-hover:text-blue-700" />
      </Link>

      <Link
        href="#"
        className={socialLink(position === 'horizontal')}
      >
        <IoLogoWhatsapp className="h-10 w-10 text-white transition-colors group-hover:text-green-600" />
      </Link>

      <Link
        href="#"
        className={socialLink(position === 'horizontal')}
      >
        <RiTelegram2Fill className="h-10 w-10 text-white transition-colors group-hover:text-blue-500" />
      </Link>
    </div>
  )
}

export default Social
