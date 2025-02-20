import type { JSX } from 'react'
import TheBanner from './TheBanner/TheBanner'

const TheIntroduction = (): JSX.Element => {
  return (
    <section className="relative -top-20 h-[70vh] w-full">
      <TheBanner />
    </section>
  )
}

export default TheIntroduction
