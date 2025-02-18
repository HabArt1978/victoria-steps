import type { OurWorksData } from '@/library/dataForComponents/ourWorksData/types'

export interface OurWorksListData {
  quantity: number | 'all'
  data: OurWorksData[]
}
