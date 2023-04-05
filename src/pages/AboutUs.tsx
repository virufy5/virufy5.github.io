import TextinsImg from "~/components/molecules/TextinsImg/TextinsImg"


//Assets
import AboutUsImage from "~/assets/static/images/textInImage/AboutUs.jpg"
import Section5 from "~/components/organisms/section-5/Section5"
import Card from "~/components/molecules/Card/Card"

import Card1 from "~/assets/static/images/ourPeople/card1.jpg"
import Card2 from "~/assets/static/images/ourPeople/card2.jpg"

export default function AboutUs() {

  const CardsData = [
    {
      route: "https://s3-alpha-sig.figma.com/img/d1d0/ab8e/7a3088f6ec7e4b6fd2e1ccc5061ec8f7?Expires=1681689600&Signature=efB3pNRUTMY~VeodfEbgzHnAAG5rckBMf4Z59HJfgmTe0GI2WALSGn0~vUn2wq-j-Uoqf6JvT2J~0Pq~Ba6ss6itQ9vae5e3pIKURx6S8Yz01fl5BxU23Q1uVJ7MePARcJaqt6yUodqcms3BusVgOV14k077d3S1QdzWNyQTbALwdp-xHmtXOijRcQAsPuexyYZUPdL8YEDjCd-5TRYjrcb3IHvIoGFvr-tGGR7eabFcxdfYOk34lRdjwtEt3kXEnVsHOo3FpAMtpI5TXgs79cTaR9DT3~5s5TuEVrH~W4yUBlqyT-GpfR0HlRCOu0kggN9H5JB4d~77eqeCJ3WsYQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      name: "Transformation",
      text: "We aim to transform expensive healthcare systems by using technology to drive necessary changes.",
    },
    {
      route: {Card2},
      name: "Collaboration",
      text: "We commit to making rapid disease detection available to every person in the world, regardless of background.",
    },
    {
      route: {Card1},
      name: "Health",
      text: "We commit to always putting the health and well-being of all people across the globe first and foremost.",
    },
    {
      route: {Card2},
      name: "Affordability",
      text: "We aim to use technology to make disease prevention and detection free for all people around the world.",
    },
    {
      route: {Card1},
      name: "Efficiency",
      text: "We commit to creating intuitive technology that delivers rapid detection, stopping virus spread and saving lives.",
    },
    {
      route: {Card2},
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
      <Card
        CardsData={CardsData}
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
      />      
    </>
  )
}
