import Advantages from '@/components/Advantages/Advantages'
import PageContainer from '@/components/Containers/PageContainer'
import Introduction from '@/components/Introduction/Introduction'
import OurProduction from '@/components/OurProduction/OurProduction'
import OurWorks from '@/components/OurWorks/OurWorks'
import type { JSX } from 'react'

const HomePage = (): JSX.Element => {
  return (
    <>
      <Introduction />

      <PageContainer className="-mt-24">
        <Advantages />
        <OurProduction />
        <OurWorks quantity={6} />
      </PageContainer>
    </>
  )
}

export default HomePage
