import PageContainer from '@/components/Containers/PageContainer'
import OurWorks from '@/components/OurWorks/OurWorks'
import { ourWorksData } from '@/library/dataForComponents/ourWorksData/ourWorksData'
import type { JSX } from 'react'

const PortfolioPage = (): JSX.Element => {
  return (
    <PageContainer>
      <OurWorks
        quantity={'all'}
        data={ourWorksData}
      />
    </PageContainer>
  )
}

export default PortfolioPage
