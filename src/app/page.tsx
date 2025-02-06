import Introduction from '@/components/Introduction/Introduction'
import PageContainer from '@/components/PageContainer/PageContainer'
import type { JSX } from 'react'

const HomePage = (): JSX.Element => {
  return (
    <>
      <Introduction />

      <PageContainer>
        <div className="mt-6 border-4 border-red-700 text-center">
          <h2 className="h-[2000px] text-2xl">Прочий контент</h2>
        </div>
      </PageContainer>
    </>
  )
}

export default HomePage
