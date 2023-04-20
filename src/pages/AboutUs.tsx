import TextinsImg from "~/components/molecules/TextinsImg/TextinsImg"


//Assets
import AboutUsImage from "~/assets/static/images/textInImage/AboutUs.jpg"
import Section5 from "~/components/organisms/section-5/Section5"
import Card from "~/components/molecules/Card/Card"

import Card1 from "~/assets/static/images/aboutUs/card1.png"
import Card2 from "~/assets/static/images/aboutUs/card2.png"
import Card3 from "~/assets/static/images/aboutUs/card3.png"
import Card4 from "~/assets/static/images/aboutUs/card4.png"
import Card5 from "~/assets/static/images/aboutUs/card5.png"
import Card7 from "~/assets/static/images/aboutUs/card7.png"
import Title from "~/components/atoms/Title/Title"

export default function AboutUs() {

  const CardsData = [
    {
      route: Card1,
      name: "Transformation",
      text: "We aim to transform expensive healthcare systems by using technology to drive necessary changes.",
    },
    {
      route: Card2,
      name: "Collaboration",
      text: "We commit to making rapid disease detection available to every person in the world, regardless of background.",
    },
    {
      route: Card3,
      name: "Health",
      text: "We commit to always putting the health and well-being of all people across the globe first and foremost.",
    },
    {
      route: Card4,
      name: "Affordability",
      text: "We aim to use technology to make disease prevention and detection free for all people around the world.",
    },
    {
      route: Card5,
      name: "Efficiency",
      text: "We commit to creating intuitive technology that delivers rapid detection, stopping virus spread and saving lives.",
    },
    {
      route: Card7,
      name: "Innovation",
      text: "We aim to ensure rapid detection of dieseases with just one tap on a mobile device.",
    },        
  ]

  return (
    <>
      <TextinsImg
        sizeImg="auto"
        borderImg="none"
        src={AboutUsImage}
        altImg="Imagen cabezera"
        Text="Transforming the world’s health, one cough at a time."
      />
      <Section5
        StylePropsSection="text-center w-[100%] mt-12"
        TitleSize1="h1"
        TitleLabel1="Our Mission"
        TextSize1="normal"
        TextLabel1="Our innovative approach aims to offer superior COVID pre-screening for patients, clinicians and governments, especially in low-income countries. 
        We aspire to be the leading nonprofit organization for technology - enabled disease identification, transforming global healthcare and inspiring others to support and invest in this mission with us."
        ContainerTitleProps1="mb-5 mr-[15vw]"
        ContainerTextProps1="mb-4 mr-[15vw] text-left"
        TitleClassProps1="ml-[15vw]"
        TextClassProps1="ml-[15vw]"
        TitleSize2="h1"
        TitleLabel2="Our Story"
        TextSize2="normal"
        TextLabel2="When the pandemic hit, Virufy’s founder, Amil Khanzada, knew smartphones were omnipresent and that COVID impacted the nose, throat, and lungs. 
        He hypothesized that breathing and cough sounds could be analyzed with machine learning to detect COVID patterns. 
        Wanting to make a positive impact, he orchestrated a clinical study with 362 patients in an esteemed university hospital. The original team of Virufy, beginning with Stanford graduate AI students, expanded to volunteers from universities globally."
        ContainerTitleProps2="mb-5 mr-[15vw]"
        ContainerTextProps2="mb-4 mr-[15vw] text-left"
        TitleClassProps2="ml-[15vw]"
        TextClassProps2="ml-[15vw]"        
      />
      <Title 
        H="h1"
        Text="Our Values"
        TitleClassProps="text-center mt-16 mb-4"
      />
      <Card
        CardsData={CardsData}
        CardClassProps="flex flex-col text-center items-center w-[348px] sm:w-1/1 md:w-1/2 lg:w-1/3 xl:w-1/3 mb-4 mt-4"
      />
      <Section5
        StylePropsSection="text-center w-[100%] mt-4"
        TitleSize1="h1"
        TitleLabel1="Our Commitment to Privacy"
        TextSize1="normal"
        TextLabel1="Virufy takes the privacy and protection of your personal information seriously. Our legal team has prepared a detailed Privacy Policy and Cookie Policy to protect the personal information you share with us through use of our website."
        ContainerTitleProps1="mb-5 mr-[15vw]"
        ContainerTextProps1="mb-4 mr-[15vw] text-center"
        TitleClassProps1="ml-[15vw]"
        TextClassProps1="ml-[15vw]"
        
        TitleSize2
        TitleLabel2
        TextSize2
        TextLabel2
        ContainerTitleProps2
        ContainerTextProps2
        TitleClassProps2
        TextClassProps2 
      />      
    </>
  )
}
