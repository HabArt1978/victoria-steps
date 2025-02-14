import PageContainer from '@/components/Containers/PageContainer'
import OurWorks from '@/components/OurWorks/OurWorks'
import type { JSX } from 'react'

const PortfolioPage = (): JSX.Element => {
  return (
    <PageContainer>
      <OurWorks quantity={'all'} />
    </PageContainer>
  )
}

export default PortfolioPage
