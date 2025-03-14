import Advantages from '@/components/Advantages/Advantages'
import PageContainer from '@/components/Containers/PageContainer'
import OurProduction from '@/components/OurProduction/OurProduction'
import OurWorks from '@/components/OurWorks/OurWorks'
import TheIntroduction from '@/components/TheIntroduction/TheIntroduction'
import { ourWorksData } from '@/library/dataForComponents/ourWorksData/ourWorksData'
import type { JSX } from 'react'

const HomePage = (): JSX.Element => {
  return (
    <>
      <TheIntroduction />

      <PageContainer className="-mt-14 xmd:-mt-28">
        <Advantages />

        <OurProduction />

        <OurWorks
          quantity={5}
          data={ourWorksData}
        />
      </PageContainer>
    </>
  )
}

export default HomePage
