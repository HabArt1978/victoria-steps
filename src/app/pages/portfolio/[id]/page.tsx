import PageContainer from '@/components/Containers/PageContainer'
import SectionContainer from '@/components/Containers/SectionContainer'
import { H1 } from '@/components/UI/Typography'
import type { JSX } from 'react'

interface SingleWorkProps {
  params: Promise<{
    id: string
  }>
}

const SingleWorkPage = async (props: SingleWorkProps): Promise<JSX.Element> => {
  const { id } = await props.params

  return (
    <PageContainer>
      <SectionContainer>
        <H1>
          Single Work Image Page <br /> ( id: ${id} )
        </H1>
      </SectionContainer>
    </PageContainer>
  )
}

export default SingleWorkPage
