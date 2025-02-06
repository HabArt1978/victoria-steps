'use client'

import type { NavBarLink } from '@/library/routesAndLinks/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { JSX } from 'react'

interface NavBarLinks {
  navLinks: NavBarLink[]
}

const HeaderNavigation = ({ navLinks }: NavBarLinks): JSX.Element => {
  const pathname = usePathname()

  return (
    <nav className="navbar-center flex rounded-xl bg-[rgba(55,65,81,0.8)] p-3">
      <ul className="flex space-x-5 px-1">
        {navLinks.map((link, idx) => {
          const isActive = pathname === link.path

          return (
            <li
              key={link.path + idx}
              className="text-white"
            >
              <Link
                href={link.path}
                className={`btn btn-ghost btn-sm transition duration-300 hover:border-orange-500 hover:bg-slate-100 hover:bg-transparent hover:text-orange-500 ${isActive ? 'bg-slate-100 text-orange-500 shadow-lg' : ''}`}
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
export default HeaderNavigation
