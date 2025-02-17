import type { JSX } from 'react'
import TheBanner from './Banner/TheBanner'

const Introduction = (): JSX.Element => {
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

export default Introduction
