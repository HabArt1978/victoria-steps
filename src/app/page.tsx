import Advantages from '@/components/Advantages/Advantages'
import PageContainer from '@/components/Containers/PageContainer'
import OurProduction from '@/components/OurProduction/OurProduction'
import OurWorks from '@/components/OurWorks/OurWorks'
import TheIntroduction from '@/components/TheIntroduction/TheIntroduction'
import type { JSX } from 'react'

const HomePage = (): JSX.Element => {
  return (
    <>
      <TheIntroduction />

      <PageContainer className="-mt-24">
        <Advantages />
        <OurProduction />
        <OurWorks quantity={6} />
      </PageContainer>
    </>
  )
}

export default HomePage
