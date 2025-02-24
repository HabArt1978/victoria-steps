import Advantages from '@/components/Advantages/Advantages'
import PageContainer from '@/components/Containers/PageContainer'
import OurProduction from '@/components/OurProduction/OurProduction'
import OurWorksList from '@/components/OurWorksList/OurWorksList'
import TheIntroduction from '@/components/TheIntroduction/TheIntroduction'
import { ourWorksData } from '@/library/dataForComponents/ourWorksData/ourWorksData'
import type { JSX } from 'react'

const HomePage = (): JSX.Element => {
  return (
    <>
      <TheIntroduction />

      <PageContainer className="-mt-24">
        <Advantages />

        <div className="divider divider-horizontal mx-auto h-14 md:h-20" />
        <OurProduction />

        <div className="divider divider-horizontal mx-auto h-14 md:h-20" />
        <OurWorksList
          quantity={6}
          data={ourWorksData}
        />
      </PageContainer>
    </>
  )
}

export default HomePage
