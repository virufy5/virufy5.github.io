import { BlogListing } from '../type'
import card1 from '~/assets/static/images/Blog Cards Images/card1.jpg'
import card2 from '~/assets/static/images/Blog Cards Images/card2.jpg'
import card3 from '~/assets/static/images/Blog Cards Images/card3.jpg'
import card4 from '~/assets/static/images/Blog Cards Images/card4.jpg'

export const blogListing: BlogListing = {
  cardItem: [
    {
      id: 1,
      category: '',
      title:
        '¿Cómo nos aseguramos de que la IA en la atención sanitaria sea útil?',
      image: card1,
      description:
        'En la atención sanitaria, los modelos predictivos deben ser más que buenos predictores. Los académicos de Stanford sugieren un marco para determinar el valor de un modelo.',
    },
    {
      id: 2,
      category: '',
      title:
        'La confianza es la contribución más crítica de la IA a la atención sanitaria',
      image: card2,
      description:
        'La IA puede revelar perspectivas médicas notables, pero solo si los pacientes y los médicos confían en ella. Por lo tanto, la confianza se ha convertido en el objetivo singular de la IA, dice James Zou de Stanford.',
    },
    {
      id: 3,
      category: '',
      title:
        'Enfermedad por coronavirus (COVID-19): Condición posterior a la COVID-19',
      image: card3,
      description:
        'La mayoría de las personas que desarrollan COVID-19 se recuperan por completo, pero la evidencia actual sugiere que aproximadamente el 10%-20% de las personas experimentan una variedad de efectos a mediano y largo plazo.',
    },
    {
      id: 4,
      category: '',
      title:
        'La confianza es la contribución más crítica de la IA a la atención sanitaria',
      image: card4,
      description:
        'La pandemia de COVID-19 continúa presentando desafíos considerables para la salud pública en los Estados Unidos y en todo el mundo.',
    },
  ],
}
