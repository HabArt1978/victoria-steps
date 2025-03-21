import type { NavBarLink } from './types'

const navBarLinks: NavBarLink[] = [
  {
    label: 'главная',
    path: '/'
  },
  {
    label: 'о компании',
    path: '/pages/about-us'
  },
  {
    label: 'контакты',
    path: '/pages/our-contacts'
  },
  {
    label: 'доставка и оплата',
    path: '/pages/deliver-and-payment'
  },
  {
    label: 'портфолио',
    path: '/pages/portfolio'
  }
]

export { navBarLinks }
