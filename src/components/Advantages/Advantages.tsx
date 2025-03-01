import { advantagesData } from '@/library/dataForComponents/advantagesData/advantagesData'
import type { JSX } from 'react'
import SectionContainer from '../Containers/SectionContainer'
import styles from './Advantages.module.css'
import { advantageContainer } from './twStyles'

const Advantages = (): JSX.Element => {
  return (
    <SectionContainer>
      <h1 className={styles.srOnly}>Наши преимущества</h1>
      <ul className="flex flex-wrap justify-center gap-x-8 gap-y-10 align-baseline xl:justify-between">
        {advantagesData.map((item, idx) => (
          <li
            key={item.title + idx}
            className={advantageContainer}
          >
            <item.icon className="h-10 w-10 text-orange-600 md:h-12 md:w-12" />
            <h2 className="text-nowrap font-amaticBold text-2xl text-orange-600 md:text-3xl">
              {item.title}
            </h2>
            <p className="text-md font-robotoMono font-light tracking-normal md:text-lg">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </SectionContainer>
  )
}

export default Advantages
