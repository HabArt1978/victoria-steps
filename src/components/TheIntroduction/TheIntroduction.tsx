import type { JSX } from 'react'
import TheBanner from './TheBanner/TheBanner'

const TheIntroduction = (): JSX.Element => {
  return (
    <section
      style={{
        width: 'calc(100vw - var(--scrollbar-width))',
        height: '70vh'
      }}
      className="relative -top-20"
    >
      <TheBanner />
    </section>
  )
}

export default TheIntroduction
