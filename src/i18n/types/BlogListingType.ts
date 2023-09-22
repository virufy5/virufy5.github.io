import { StaticImageData } from 'next/image'

//---- | ----
// ---- BlogListing ---

export interface BlogObjects {
    id: number
    category: string
    title: string
    image: string | StaticImageData
    description: string
  }
  export interface BlogListing {
    cardItem: BlogObjects[]
  }