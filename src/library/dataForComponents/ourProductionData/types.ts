import type { StaticImageData } from 'next/image'

export interface OurProductionData {
  id: string
  title: string
  previewText: string
  description: string
  image: StaticImageData
}
