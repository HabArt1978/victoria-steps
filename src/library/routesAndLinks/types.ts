export interface NavBarLink {
  label:
    | 'главная'
    | 'о компании'
    | 'контакты'
    | 'доставка и оплата'
    | 'портфолио'

  path:
    | '/'
    | '/pages/aboutUs'
    | '/pages/ourContacts'
    | '/pages/deliverAndPayment'
    | '/pages/portfolio'
}
