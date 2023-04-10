import TextinsImg from "~/components/molecules/TextinsImg/TextinsImg"


//Assets
import AboutUsImage from "~/assets/static/images/textInImage/AboutUs.jpg"
import Section5 from "~/components/organisms/section-5/Section5"
import Card from "~/components/molecules/Card/Card"

import Card1 from "~/assets/static/images/ourPeople/card1.jpg"
import Card2 from "~/assets/static/images/ourPeople/card2.jpg"
import Title from "~/components/atoms/Title/Title"

export default function AboutUs() {

  const CardsData = [
    {
      route: "https://s3-alpha-sig.figma.com/img/d1d0/ab8e/7a3088f6ec7e4b6fd2e1ccc5061ec8f7?Expires=1681689600&Signature=efB3pNRUTMY~VeodfEbgzHnAAG5rckBMf4Z59HJfgmTe0GI2WALSGn0~vUn2wq-j-Uoqf6JvT2J~0Pq~Ba6ss6itQ9vae5e3pIKURx6S8Yz01fl5BxU23Q1uVJ7MePARcJaqt6yUodqcms3BusVgOV14k077d3S1QdzWNyQTbALwdp-xHmtXOijRcQAsPuexyYZUPdL8YEDjCd-5TRYjrcb3IHvIoGFvr-tGGR7eabFcxdfYOk34lRdjwtEt3kXEnVsHOo3FpAMtpI5TXgs79cTaR9DT3~5s5TuEVrH~W4yUBlqyT-GpfR0HlRCOu0kggN9H5JB4d~77eqeCJ3WsYQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      name: "Transformation",
      text: "We aim to transform expensive healthcare systems by using technology to drive necessary changes.",
    },
    {
      route: "https://s3-alpha-sig.figma.com/img/edbe/c226/aa708222cd0e5cb6333d55b57bd960ad?Expires=1681689600&Signature=M8tTKNwqjucKphassOluZV3tTPi8DyFQPnwzuNW8ebYqfBZy3hyFRau3IChMSmi5XHjvY3AJpO8nfrRtrKuKLRNvB8N7nFYYPOTCZTTwKJNmANr44Fp6~xK4JJQmGUTpT74dty7gxNdQG-YACkErJg~3z5ESfYCMd3neGmYYPD6-9rBgB-eifxnKpBX9Cgoe97fQgjSpoJRphpvLksjVSTEQ4fWempDyUhV0nBxjrWaq0O1i6Ga~wWgc4xM698G8jWvCpyssaKGnInVp6EeQZfEA2NDYtFGtSSQwmOfUahvaUM7VKOJUjke2sThuMFmPD30W7YlPcrD~9TVVOnNO2g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      name: "Collaboration",
      text: "We commit to making rapid disease detection available to every person in the world, regardless of background.",
    },
    {
      route: "https://s3-alpha-sig.figma.com/img/9ca4/24b9/d0e720993584f893664d31a436b4edb4?Expires=1681689600&Signature=TqBXRxqYCi742baNIj8eqU~n090HTtGYA71rCHcHqyW8Wc1j5rNq24F6yeN8RWwJIj5sT5a1~gHax0AdAdQoWt2VkkPwS5MvowIt4c0Ht0lPn693uEjBgQ~~0yWJrzVW4zjRbxOVc9V87SFtpLJMTP1KH-3OwevP4aKynlBsMmaDO~eZkVkPq4sf8iNEP5R9yWFj4GyFrl~Z6TgIa2nsm-Qj4EolZaA3~RdcdiTOcY~25d8O5S4IkIGVQMvMNF8eG5PC8lg5Zqg0cJlLIP0S77RgZGm5OzvFv5h0FW6XAb7IgSIn-IjE9v22xWDaPqyXPx9hvGXD2XmfZBk1NawOwA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      name: "Health",
      text: "We commit to always putting the health and well-being of all people across the globe first and foremost.",
    },
    {
      route: "https://s3-alpha-sig.figma.com/img/94da/271f/984a0711b4af1d1a1567d7552af725d8?Expires=1681689600&Signature=p0iyussjkhk-5GKtTGE5oreAaI13AsQ73eEPLz~d-gqjDEWSX5VmgtMvnRuYEMUXDsGxtczQdMNbf6ublLrpq1is2WNvU96VUTnRrbvHlUqRoXrMiLLPbLVSzjjM5yCbHSF5XwTDDgFpjjbryilENMJXX-m35FU-Gh~AD-m58JSND2OrFjX8-yyS9i0i6X27lCqYub4rhpAnU9aJu6kB95hasCMxxDKlTAmSv8WWLvaVR0m6~tHSaui-iMCgAR-S0JA1gA9xk36ISPooo21OLxEHaPoe1iB-QtOQr3cKEGgMVXS-S12DTbK2xxsbZ91V7wve7opmtaHPmL8gIrqXbg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      name: "Affordability",
      text: "We aim to use technology to make disease prevention and detection free for all people around the world.",
    },
    {
      route: "https://s3-alpha-sig.figma.com/img/b434/cdeb/78927a9636fe3469ef7b3fb3ccebe325?Expires=1681689600&Signature=RmY5H0EjwX4mtHtttAbNpwuVvmcxZRcWgQAG18rKosxO8ttfZmAlGNuzVRG0nRYnxuQrml5HwUGG2p2fK6b6EinmZK8u8ab2l-yVCUrzxS1WmF6dNHECd9eN9iUEtKKdsimSDxUUKdI3MQu5vSx6UCKlh8Yvu4eFMnRT5qJGtdhSqG4CiVDCyM~1SMCI1UmeQ9swzIm-fEu3-NyWO-LipovDYDH7LGv5Gpv4H642IYDJq7auL96SXaorNXsT7VxdmtmiaOYIONRl8eaMwOluNP8tMVmq-WjdfOCxvUl99vPGLyilPIJbyg6iQE1eM05V2WlpRY8npVJOToOy46XsEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      name: "Efficiency",
      text: "We commit to creating intuitive technology that delivers rapid detection, stopping virus spread and saving lives.",
    },
    {
      route: "https://s3-alpha-sig.figma.com/img/4292/1527/1a71c469a9606eb28c97d50a29c761b7?Expires=1681689600&Signature=BUbzv34087XVJnTdgWLzLS4AjUiD1ixPjUVIgRNA6huTq9jyHm-5fBFnw8QdXHUNJxO7lCxhr-c0p6~wv8ZvLnxVxuIx3P8yeO2jNiDH9IcSmiIEvaixhVfje5I-hbeVXiDlm5j9Zp9AeD7rYY~B3FCA16AwdpUH8PqRW47aaTLdIgA42eDST8lVb2QqkkrvP9tOTpymBYjPMubLnFUId5h2ZAQ5H8xCTLk0K~Y1Vwr-OFO8TdKOXbvG8Nd36xyNon2j~A2OLIMADSWarjdEYPxVr0sj7XyFTmTvQ-m1inbbwdSKxOwzHPtCf0~9CXKgc9JYQcWm7Iyr0Ez8QPHweg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
