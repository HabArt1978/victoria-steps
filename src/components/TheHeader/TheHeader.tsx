import { navBarLinks } from '@/library/routesAndLinks/routesAndLinks'
import Link from 'next/link'
import type { JSX } from 'react'
import { FiMenu } from 'react-icons/fi'
import NavBar from './NavBar/NavBar'

const TheHeader = (): JSX.Element => {
  return (
    <header className="navbar bg-base-100">
      <div className="navbar-start">
        <Link
          href="/"
          className="btn btn-ghost text-xl"
        >
          STEPSLink
        </Link>
      </div>

      <NavBar navLinks={navBarLinks} />

      <div className="navbar-end">
        <button className="btn btn-circle btn-ghost btn-md">
          <FiMenu className="h-6 w-6" />
        </button>
      </div>
    </header>
  )
}

export default TheHeader
