'use client'

import type { NavBarLink } from '@/library/routeAndLinkData/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { JSX } from 'react'
import { headerLink } from './twStyles'

interface NavBarLinks {
  navLinks: NavBarLink[]
}

const HeaderNavigation = ({ navLinks }: NavBarLinks): JSX.Element => {
  const pathname = usePathname()

  return (
    <nav className="flex rounded-xl bg-[rgba(55,65,81,0.9)] p-3 h-sm:hidden">
      <ul className="flex space-x-3 px-1">
        {navLinks.map((link, idx) => {
          const isActive = pathname === link.path

          return (
            <li key={link.path + idx}>
              <Link
                href={link.path}
                className={headerLink(isActive)}
              >
                <p className="font-robotoMono text-sm font-normal uppercase tracking-wider">
                  {link.label}
                </p>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
export default HeaderNavigation
