import { StaticImageData } from "next/image"

interface Card {
  route: StaticImageData
  name: string
  text: string
}

export interface FAQ {
  sectionSearchQuestion: {
    title: string
    descriptionFirstSearch: string
    secondDescriptionSearch: string
  }
  sectionCardsQuestionsTopics: {
    title: string
    cards: Card[]
  }
}
