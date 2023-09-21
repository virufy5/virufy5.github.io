import Card1 from '~/assets/static/images/aboutUs/card1.png'
import Card2 from '~/assets/static/images/aboutUs/card2.png'
import Card3 from '~/assets/static/images/aboutUs/card3.png'
import Card4 from '~/assets/static/images/aboutUs/card4.png'
import Card5 from '~/assets/static/images/aboutUs/card5.png'
import Card7 from '~/assets/static/images/aboutUs/card7.png'
export const faq = {
  sectionSearchQuestion: {
    title: '¿Cómo podemos ayudar?',
    descriptionFirstSearch:
      'Introduzca una palabra clave o un tema en el cuadro de búsqueda',
    secondDescriptionSearch:
      'o elija una categoría para encontrar rápidamente la ayuda que necesita',
  },
  sectionCardsQuestionsTopics: {
    title:"TEMAS FRECUENTES",
    cards:[
    {
      route: Card1,
      name: '',
      text: 'Aplicación Virufy',
    },
    {
      route: Card2,
      name: '',
      text: 'Acerca de Virufy',
    },
    {
      route: Card3,
      name: '',
      text: 'Acerca de la IA',
    },
    {
      route: Card4,
      name: '',
      text: 'Finanzas',
    },
    {
      route: Card5,
      name: '',
      text: 'Privacidad',
    },
    {
      route: Card7,
      name: '',
      text: 'Otros',
    },
  ],}

}
