import type { JSX } from 'react'
import React from 'react'

const SectionContainer = ({
  children
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element => {
  return <section className="my-20 w-full">{children}</section>
}

export default SectionContainer
