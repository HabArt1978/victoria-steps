import { navBarLinks } from '@/library/routeAndLinkData/routeAndLinkData'
import type { JSX } from 'react'
import HeaderNavigation from './HeaderNavigation/HeaderNavigation'

const TheHeader = (): JSX.Element => {
  return (
    <header className="navbar sticky top-0 z-50 mx-auto hidden w-fit bg-base-100 bg-transparent xmd:flex">
      <HeaderNavigation navLinks={navBarLinks} />
    </header>
  )
}

export default TheHeader
