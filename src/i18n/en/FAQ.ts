import Card1 from '~/assets/static/images/aboutUs/card1.png'
import Card2 from '~/assets/static/images/aboutUs/card2.png'
import Card3 from '~/assets/static/images/aboutUs/card3.png'
import Card4 from '~/assets/static/images/aboutUs/card4.png'
import Card5 from '~/assets/static/images/aboutUs/card5.png'
import Card7 from '~/assets/static/images/aboutUs/card7.png'

export const faq = {
  sectionSearchQuestion: {
    title: 'How Can We Help?',
    descriptionFirstSearch: 'Enter a keyword or a topic in the search box',
    secondDescriptionSearch:
      'or choose a category to quickly find the help you need',
  },
  sectionCardsQuestionsTopics: {
    title: 'FAQ TOPICS',
    cards: [
      {
        route: Card1,
        name: '',
        text: 'Virufy App',
      },
      {
        route: Card2,
        name: '',
        text: 'About Virufy',
      },
      {
        route: Card3,
        name: '',
        text: 'About AI',
      },
      {
        route: Card4,
        name: '',
        text: 'Finances',
      },
      {
        route: Card5,
        name: '',
        text: 'Privacy',
      },
      {
        route: Card7,
        name: '',
        text: 'Others',
      },
    ],
  },
}
