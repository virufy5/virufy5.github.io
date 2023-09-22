import { StaticImageData } from 'next/image'
//---- | ----
// ---- BlogDetail ---

export interface BlogDetailsObject {
    id: number
    title: string
    category: string
    date: string
    autor: string
    image: string | StaticImageData
    description: string
  }
  
  export interface BlogDetails {
    itemSelected: BlogDetailsObject[]
  }
  