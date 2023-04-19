import TextinsImg from "~/components/molecules/TextinsImg/TextinsImg";
import ImageinsText from "~/assets/static/images/ourSupporters/ImageinsText.png"
import CardLarge from "~/components/organisms/section-9/CardLarge";

import Card1 from "~/assets/static/images/ourSupporters/card1.jpg"
import Card2 from "~/assets/static/images/ourSupporters/card2.jpg"
import Card3 from "~/assets/static/images/ourSupporters/card3.jpg"
import Card4 from "~/assets/static/images/ourSupporters/card4.jpg"
import Title from "~/components/atoms/Title/Title";

export default function OurSupporters() {

  const CardsData = [
    {
      route: Card1,
      name: "Ambassador driven",
      text: "Our organization structure matches One Young World with youth ambassadors leading operations in each country, with regional coordinating ambassadors.",
    },
    {
      route: Card2,
      name: "Youth led",
      text: "Our growing team is led by youth from over a dozen countries and are advised by global leaders.",
    },
    {
      route: Card3,
      name: "Focused on global impact",
      text: "Former CMO - Adobe Board Member - CommonSpirit HealthCollect data and provide equitable solutions for people in developing countries across the world.",
    },
    {
      route: Card4,
      name: "Diverse representation",
      text: "Our team has representation from over 25 universities and 15 countries and includes more than 10 One Young World ambassadors.",
    },
  ]

  return (
    <>
      <TextinsImg
        sizeImg="auto"
        borderImg="none"
        src={ImageinsText}
        altImg="Imagen cabezera"
        Text="Companies and organizations support us from their extensive knowledge and provide us with security and certainty in what we do."
      />
      <Title 
        H="h2"
        Text="Why One Young World?"
        TitleClassProps="text-center mt-4"
      />
      <CardLarge
        CardsData={CardsData}
        CardClassProps="flex flex-row text-center items-center justify-center sm:w-1/1 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 mt-4"
      />
    </>
  )
}
