import { navBarLinks } from '@/library/routeAndLinkData/routeAndLinkData'
import Link from 'next/link'
import type { JSX } from 'react'
import { FiMenu } from 'react-icons/fi'
import HeaderNavigation from './HeaderNavigation/HeaderNavigation'

const TheHeader = (): JSX.Element => {
  return (
    <header className="navbar sticky top-0 z-50 bg-base-100 bg-transparent">
      <div className="navbar-start">
        <Link
          href="/"
          className="btn btn-ghost rounded-2xl border-b-orange-500 border-l-red-700 border-r-orange-500 border-t-red-700 text-xl"
        >
          <span className="text-orange-500">
            STEPS<span className="m-0 text-red-600">Link</span>
          </span>
        </Link>
      </div>

      <HeaderNavigation navLinks={navBarLinks} />

      <div className="navbar-end">
        <button className="btn btn-circle btn-md border-none bg-opacity-0 bg-gradient-to-r from-yellow-400 to-red-600 hover:scale-105">
          <FiMenu
            className="h-6 w-6"
            color="white"
          />
        </button>
      </div>
    </header>
  )
}

export default TheHeader
