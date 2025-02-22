import { advantagesData } from '@/library/dataForComponents/advantagesData/advantagesData'
import type { JSX } from 'react'
import SectionContainer from '../Containers/SectionContainer'
import { H2, P } from '../UI/Typography'
import styles from './Advantages.module.css'
import {
  advantageContainer,
  advantageDescription,
  advantageIcon,
  advantageTitle
} from './twStyles'

const Advantages = (): JSX.Element => {
  return (
    <SectionContainer>
      <h1 className={styles.srOnly}>Наши преимущества</h1>
      <ul className="flex flex-wrap justify-center gap-x-8 gap-y-10 align-baseline xl:justify-between">
        {advantagesData.map((item, idx) => (
          <li
            key={item.title + idx}
            className={advantageContainer()}
          >
            <item.icon className={advantageIcon()} />
            <H2 className={advantageTitle()}>{item.title}</H2>
            <P className={advantageDescription()}>{item.description}</P>
          </li>
        ))}
      </ul>
    </SectionContainer>
  )
}

export default Advantages
