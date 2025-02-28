import { ourContactsData as contacts } from '@/library/dataForComponents/ourContactsData/ourContactsData'
import Link from 'next/link'
import type { JSX } from 'react'
import SectionContainer from '../Containers/SectionContainer'
import { H1, P } from '../UI/Typography'
import YandexMap from './YandexMap/YandexMap'
import { contactsLink } from './twStyles'

const OurContacts = (): JSX.Element => {
  return (
    <SectionContainer>
      <div className="flex flex-row">
        <div className="h-[50vh] w-1/2">
          <YandexMap />
        </div>

        <div className="w-1/2 px-16 py-8">
          <H1 className="text-start">Как нас найти</H1>

          <address className="space-y-4 py-12 font-normal not-italic no-underline">
            <P className="flex items-center">
              Телефон:
              <Link
                href="tel:+78888888888"
                className={contactsLink}
                target="_blank"
              >
                {contacts.phone}
              </Link>
            </P>
            <P className="flex items-center">
              E-mail:{' '}
              <Link
                href="mailto:viktorua18@yandex.ru"
                className={contactsLink}
                target="_blank"
              >
                {contacts.email}
              </Link>
            </P>
            <P>
              Адрес:
              <span className="ml-4">{contacts.address}</span>
            </P>
            <P>
              Время работы:
              <span className="ml-4">{contacts.openingHours}</span>
            </P>
          </address>
        </div>
      </div>
    </SectionContainer>
  )
}

export default OurContacts
