import PageContainer from '@/components/Containers/PageContainer'
import OurWorksList from '@/components/OurWorksList/OurWorksList'
import { ourWorksData } from '@/library/dataForComponents/ourWorksData/ourWorksData'
import type { JSX } from 'react'

const PortfolioPage = (): JSX.Element => {
  return (
    <PageContainer>
      <OurWorksList
        quantity={'all'}
        data={ourWorksData}
      />
    </PageContainer>
  )
}

export default PortfolioPage
