'use client'

import type { NavBarLink } from '@/library/routesAndLinks/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { JSX } from 'react'

interface NavBarLinks {
  navLinks: NavBarLink[]
}

const NavBar = ({ navLinks }: NavBarLinks): JSX.Element => {
  const pathname = usePathname()

  return (
    <nav className="navbar-center flex">
      <ul className="flex space-x-5 px-1">
        {navLinks.map((link, idx) => {
          const isActive = pathname === link.path

          return (
            <li key={link.path + idx}>
              <Link
                href={link.path}
                className={`btn btn-ghost btn-sm transition duration-300 hover:bg-slate-200 ${isActive ? 'bg-slate-200 text-orange-600 shadow-lg' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
export default NavBar
