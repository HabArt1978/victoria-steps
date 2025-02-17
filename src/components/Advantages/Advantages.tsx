import { advantagesData } from '@/library/dataForComponents/advantagesData/advantagesData'
import type { JSX } from 'react'
import SectionContainer from '../Containers/SectionContainer'
import { H2, P } from '../UI/Typography'
import styles from './Advantages.module.css'

const Advantages = (): JSX.Element => {
  return (
    <SectionContainer>
      <h1 className={styles.srOnly}>Наши преимущества</h1>
      <ul className="flex items-baseline justify-between">
        {advantagesData.map((item, idx) => (
          <li
            key={item.title + idx}
            className="flex w-[18%] flex-col items-center space-y-4 text-center align-middle"
          >
            <item.icon
              size={40}
              color="#ea580c"
            />
            <H2 className="text-3xl tracking-wider">{item.title}</H2>
            <P>{item.description}</P>
          </li>
        ))}
      </ul>
    </SectionContainer>
  )
}

export default Advantages
