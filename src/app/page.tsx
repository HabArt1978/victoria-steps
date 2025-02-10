import Advantages from '@/components/Advantages/Advantages'
import Introduction from '@/components/Introduction/Introduction'
import type { JSX } from 'react'

const HomePage = (): JSX.Element => {
  return (
    <>
      <Introduction />

      <Advantages />
    </>
  )
}

export default HomePage
