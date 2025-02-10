import { advantagesData } from '@/library/dataForComponents/advantagesData/advantagesData'
import type { JSX } from 'react'
import SectionContainer from '../Containers/SectionContainer'

const Advantages = (): JSX.Element => {
  return (
    <SectionContainer>
      <h1 className="hidden">Наши преимущества</h1>
      <ul className="flex justify-between">
        {advantagesData.map((item, idx) => (
          <li
            key={item.title + idx}
            className="flex w-[18%] flex-col items-center space-y-4 text-center"
          >
            <item.icon
              size={40}
              color="#ea580c"
            />
            <h2 className="text-xl text-orange-600">{item.title}</h2>
            <p className="text-md text-center">{item.description}</p>
          </li>
        ))}
      </ul>
    </SectionContainer>
  )
}

export default Advantages
