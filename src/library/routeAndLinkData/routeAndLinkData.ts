import type { NavBarLink } from './types'

const navBarLinks: NavBarLink[] = [
  {
    label: 'главная',
    path: '/'
  },
  {
    label: 'о компании',
    path: '/pages/aboutUs'
  },
  {
    label: 'контакты',
    path: '/pages/ourContacts'
  },
  {
    label: 'доставка и оплата',
    path: '/pages/deliverAndPayment'
  },
  {
    label: 'портфолио',
    path: '/pages/portfolio'
  }
]

export { navBarLinks }
