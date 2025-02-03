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
    | '/pages/contacts'
    | '/pages/deliverAndPayment'
    | '/pages/portfolio'
}
