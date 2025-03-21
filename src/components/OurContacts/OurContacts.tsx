import { ourContactsData as contacts } from '@/library/dataForComponents/ourContactsData/ourContactsData'
import Link from 'next/link'
import type { JSX } from 'react'
import SectionContainer from '../Containers/SectionContainer'
import { H1, P } from '../UI/Typography'
import YandexMap from './YandexMap/YandexMap'
import { addressLink } from './twStyles'

const OurContacts = (): JSX.Element => {
  return (
    <SectionContainer>
      <div className="flex flex-col xlg:mx-auto xlg:flex-row">
        <div className="order-2 h-[55vh] xlg:order-1 xlg:w-1/2">
          <YandexMap />
        </div>

        <div className="order-1 flex w-full flex-col items-center xlg:order-2 xlg:w-1/2 xlg:py-16 xlg:pl-16 xlg:pr-0 xl:px-16">
          <H1 className="md:text-5xl xlg:text-start xl:text-6xl">
            Как нас найти
          </H1>

          <address className="w-[95%] space-y-8 py-12 not-italic no-underline sm:w-[80%] xlg:w-full xlg:space-y-4">
            <P className="flex flex-col items-center space-y-2 xlg:flex-row">
              <span className="font-normal">Телефон:</span>
              <Link
                href="tel:+78888888888"
                className={addressLink}
                target="_blank"
              >
                <span>{contacts.phone}</span>
              </Link>
            </P>
            <P className="flex flex-col items-center space-y-2 xlg:flex-row">
              <span className="font-normal">E-mail:</span>
              <Link
                href="mailto:viktorua18@yandex.ru?subject=Сообщение%20от%20пользователя%20сайта%20."
                className={addressLink}
                target="_blank"
              >
                {contacts.email}
              </Link>
            </P>
            <P>
              <span className="font-normal">Адрес:</span>
              <span className="ml-4">{contacts.address}</span>
            </P>
            <P>
              <span className="font-normal">Время работы:</span>
              <span className="ml-4">{contacts.openingHours}</span>
            </P>
          </address>
        </div>
      </div>
    </SectionContainer>
  )
}

export default OurContacts
