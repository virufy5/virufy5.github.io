import TextinsImg from "~/components/molecules/TextinsImg/TextinsImg"
import ImageinsText from "~/assets/static/images/ourSupporters/ImageinsText.png"
import CardLarge from "~/components/organisms/section-9/CardLarge"

import Card1 from "~/assets/static/images/ourSupporters/card1.jpg"
import Card2 from "~/assets/static/images/ourSupporters/card2.jpg"
import Card3 from "~/assets/static/images/ourSupporters/card3.jpg"
import Card4 from "~/assets/static/images/ourSupporters/card4.jpg"
import Title from "~/components/atoms/Title/Title"
import Card1TL from "~/assets/static/images/ourSupporters/card1.png"
import Card2TL from "~/assets/static/images/ourSupporters/card2.png"
import Card3TL from "~/assets/static/images/ourSupporters/card3.png"
import Card4TL from "~/assets/static/images/ourSupporters/card4.png"
import Card5TL from "~/assets/static/images/ourSupporters/card5.png"
import Card6TL from "~/assets/static/images/ourSupporters/card6.png"
import Card7TL from "~/assets/static/images/ourSupporters/card7.png"
import Card8TL from "~/assets/static/images/ourSupporters/card8.png"
import Card9TL from "~/assets/static/images/ourSupporters/card9.png"
import Card10TL from "~/assets/static/images/ourSupporters/card10.png"
import Card11TL from "~/assets/static/images/ourSupporters/card11.png"
import Card12TL from "~/assets/static/images/ourSupporters/card12.png"
import Card13TL from "~/assets/static/images/ourSupporters/card13.png"
import Card14TL from "~/assets/static/images/ourSupporters/card14.png"
import Card15TL from "~/assets/static/images/ourSupporters/card15.png"
import Card16TL from "~/assets/static/images/ourSupporters/card16.png"
import Card17TL from "~/assets/static/images/ourSupporters/card17.png"
import Card18TL from "~/assets/static/images/ourSupporters/card18.png"
import Card19TL from "~/assets/static/images/ourSupporters/card19.png"
import Card from "~/components/molecules/Card/Card"
import SectionOneYoungWorld from "~/components/organisms/SectionOneYoungWorld/SectionOneYoungWorld"
import TitleText from "~/components/molecules/TitleText/TitleText"
import CardSliderTall from "~/components/organisms/CardSlider/CardSliderTall"
import OurSupportersSection from "~/components/organisms/OurSupportersSection/OurSupportersSection"


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

  const CardsDataTL = [
    {
      route: Card1TL,
      name: "Amil Khanzada",
      text: "OYW Ambassador, Japan       Virufy Founder & Leader",
    },
    {
      route: Card2TL,
      name: "Madhav Datt",
      text: "OYW Ambassador, India         Virufy Advisor",
    },
    {
      route: Card3TL,
      name: "Marcos Deza",
      text: "OYW Ambassador, Argentina  Virufy Digital Communications",
    },
    {
      route: Card4TL,
      name: "Yulie Qiao",
      text: "2021 OYW bp Delegate, USA Virufy Operations",
    },
    {
      route: Card5TL,
      name: "Ayomide Owoyemi, MD",
      text: "2021 OYW Novartis Delegate, Nigeria                                      Virufy Machine Learning Clinical Statistics",
    },
    {
      route: Card6TL,
      name: "Shreya Sreeram, MD",
      text: "2021 Virufy Delegate, India    Virufy Clinical Research",
    },
    {
      route: Card7TL,
      name: "Laura Velasquez",
      text: "2021 OYW Johnson & Johnson Delegate, Colombia            Arkangel AI Co-founder and President & Virufy Partner",
    },
    {
      route: Card8TL,
      name: "Nathan Thomas",
      text: "OYW Coordinating Ambassador, USA",
    },
    {
      route: Card9TL,
      name: "Jason Pareja Jauregui",
      text: "OYW Coordinating Ambassador LATAM, Peru",
    },
    {
      route: Card10TL,
      name: "Katherine Thalia Ortiz León",
      text: "OYW Ambassador, Peru",
    },
    {
      route: Card11TL,
      name: "Gonzalo Roiffe",
      text: "OYW Ambassador, Argentina",
    },
    {
      route: Card12TL,
      name: "Annelisse Torrez Daza",
      text: "OYW Ambassador, Bolivia",
    },
    {
      route: Card13TL,
      name: "Verónica Guzmán Quilaqueo",
      text: "OYW Ambassador, Chile",
    },
    {
      route: Card14TL,
      name: "Sebastian Pedraza",
      text: "OYW Ambassador, Colombia",
    },
    {
      route: Card15TL,
      name: "Kenmaru Suedomi",
      text: "OYW Ambassador, Japan",
    },
    {
      route: Card16TL,
      name: "Kapil Narain, MD",
      text: "OYW Ambassador, South Africa",
    },
    {
      route: Card17TL,
      name: "Leonard Burhz",
      text: "OYW Ambassador, Ireland",
    },
    {
      route: Card18TL,
      name: "Allana Doyle",
      text: "Embajador OYW, EE.UU",
    },
    {
      route: Card19TL,
      name: "Kavya Madhavan",
      text: "Embajador OYW, EE.UU",
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

    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center max-w-[1440px] ">

      <OurSupportersSection/>
        
      <SectionOneYoungWorld />



          <Title
            H="h2"
            Text="Why One Young World?"
            TitleClassProps="text-center mt-4"
          />
          <CardLarge
            CardsData={CardsData}
            CardClassProps="flex flex-row text-center items-center justify-center sm:w-1/1 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 mt-4"
          />

          <TitleText 
            TitleSize={"h2"}
            TitleLabel={"Volunteer Stories"}
            TitleClassProps={"text-center mt-32 "}
            TextSize={"normal"}
            TextLabel={"Our organization structure matches One Young World with youth ambassadors leading operations in each country, with regional coordinating ambassadors."}
            TextClassProps={"m-10 "}
            ContainerTitleProps
            ContainerTextProps            
          />

          <CardSliderTall

          />

          <Title
            H="h2"
            Text="Team Leads"
            TitleClassProps="text-center mt-4"
          />
          <Card
            CardsData={CardsDataTL}
            CardClassProps="flex flex-col text-center items-center w-[348px] sm:w-1/1 md:w-1/2 lg:w-1/3 xl:w-1/3 mb-4 mt-4"
          />
         </div>
      </div>
    </>
  )
}
