import type { JSX } from 'react'
import TheBanner from './TheBanner/TheBanner'

const TheIntroduction = (): JSX.Element => {
  return (
    <section className="relative -top-0 h-[70vh] w-full h-sm:h-[100vh] xmd:-top-[4.5rem]">
      <TheBanner />
    </section>
  )
}

export default TheIntroduction
