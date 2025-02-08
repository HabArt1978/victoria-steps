import Link from 'next/link'
import type { JSX } from 'react'
import { FaVk, FaWhatsapp } from 'react-icons/fa'
import { RiTelegram2Fill } from 'react-icons/ri'
import type { Position } from './types'

const Social = ({ position }: Position): JSX.Element => {
  return (
    <div
      className={`flex ${position === 'horizontal' ? 'flex-row justify-self-end' : 'flex-col'} justify-between`}
    >
      <Link
        href="#"
        className="btn btn-circle m-0 border-none bg-transparent p-0 text-neutral-content hover:scale-110 hover:bg-transparent"
      >
        <FaVk className="h-10 w-10 hover:scale-110 hover:text-blue-500" />
      </Link>

      <Link
        href="#"
        className="btn btn-circle m-0 border-none bg-transparent p-0 hover:scale-110 hover:bg-transparent"
      >
        <FaWhatsapp className="h-10 w-10 text-neutral-content hover:scale-110 hover:text-green-600" />
      </Link>

      <Link
        href="#"
        className="btn btn-circle m-0 border-none bg-transparent p-0 hover:scale-110 hover:bg-transparent"
      >
        <RiTelegram2Fill className="h-10 w-10 text-neutral-content hover:scale-110 hover:text-blue-600" />
      </Link>
    </div>
  )
}

export default Social
