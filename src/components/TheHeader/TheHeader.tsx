import { navBarLinks } from '@/library/routeAndLinkData/routeAndLinkData'
import type { JSX } from 'react'
import HeaderNavigation from './HeaderNavigation/HeaderNavigation'

const TheHeader = (): JSX.Element => {
  return (
    <header className="navbar sticky top-0 z-50 mx-auto w-fit bg-base-100 bg-transparent">
      <HeaderNavigation navLinks={navBarLinks} />

      {/* <button className="btn btn-circle btn-md border-none bg-opacity-0 bg-gradient-to-r from-yellow-400 to-red-600 hover:scale-105">
        <FiMenu
          className="h-6 w-6"
          color="white"
        />
      </button> */}
    </header>
  )
}

export default TheHeader
