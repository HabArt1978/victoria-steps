export interface NavBarLink {
  label:
    | 'главная'
    | 'о компании'
    | 'контакты'
    | 'доставка и оплата'
    | 'портфолио'

  path:
    | '/'
    | '/pages/about-us'
    | '/pages/our-contacts'
    | '/pages/deliver-and-payment'
    | '/pages/portfolio'
}
