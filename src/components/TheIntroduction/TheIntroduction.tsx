import type { JSX } from 'react'
import TheBanner from './TheBanner/TheBanner'

const TheIntroduction = (): JSX.Element => {
  return (
    <section className="h-sm:h-[70vh] relative -top-0 h-[100vh] w-full xmd:-top-20">
      <TheBanner />
    </section>
  )
}

export default TheIntroduction
