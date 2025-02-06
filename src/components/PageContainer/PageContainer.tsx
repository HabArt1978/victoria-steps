import type { JSX } from 'react'
import React from 'react'

const PageContainer = ({
  children
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element => {
  return <section className="mx-auto w-[80%]">{children}</section>
}

export default PageContainer
