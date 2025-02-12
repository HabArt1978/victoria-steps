import { ourContactsData as contacts } from '@/library/dataForComponents/ourContactsData/ourContactsData'
import Link from 'next/link'
import type { JSX } from 'react'
import SectionContainer from '../Containers/SectionContainer'
import YandexMap from './YandexMap/YandexMap'

const OurContacts = (): JSX.Element => {
  return (
    <SectionContainer>
      <div className="flex flex-row">
        <div className="h-[50vh] w-1/2">
          <YandexMap />
        </div>

        <div className="w-1/2 px-16 py-8">
          <h1 className="text-5xl">Как нас найти</h1>

          <address className="space-y-4 py-12 font-normal not-italic text-neutral no-underline">
            <p>
              Телефон:{' '}
              <Link
                href="tel:+78888888888"
                className="text-orange-600"
                target="_blank"
              >
                {contacts.phone}
              </Link>
            </p>
            <p>
              E-mail:{' '}
              <Link
                href="mailto:viktorua18@yandex.ru"
                className="text-orange-600"
                target="_blank"
              >
                {contacts.email}
              </Link>
            </p>
            <p>Адрес: {contacts.address}</p>
            <p>Время работы: {contacts.openingHours}</p>
          </address>
        </div>
      </div>
    </SectionContainer>
  )
}

export default OurContacts
