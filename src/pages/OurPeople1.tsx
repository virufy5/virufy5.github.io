
//Organismo
import Section1 from "~/components/organisms/section-1/Section1"

//Prueba
import TextinsImg from "~/components/molecules/TextinsImg/TextinsImg"
import Card from "~/components/molecules/Card/Card"
import Title from "~/components/atoms/Title/Title"

import Card1 from "~/assets/static/images/ourPeople/card1.jpg"
import Card2 from "~/assets/static/images/ourPeople/card1.jpg"
import Card3 from "~/assets/static/images/ourPeople/card1.jpg"
import Card4 from "~/assets/static/images/ourPeople/card1.jpg"
import Card5 from "~/assets/static/images/ourPeople/card1.jpg"
import Card6 from "~/assets/static/images/ourPeople/card1.jpg"
import Card7 from "~/assets/static/images/ourPeople/card1.jpg"
import Card8 from "~/assets/static/images/ourPeople/card1.jpg"
import Card9 from "~/assets/static/images/ourPeople/card1.jpg"
import Card10 from "~/assets/static/images/ourPeople/card1.jpg"
import Card11 from "~/assets/static/images/ourPeople/card1.jpg"
import Card12 from "~/assets/static/images/ourPeople/card1.jpg"
import Card13 from "~/assets/static/images/ourPeople/card1.jpg"
import Card14 from "~/assets/static/images/ourPeople/card1.jpg"
import Card15 from "~/assets/static/images/ourPeople/card1.jpg"
import Card16 from "~/assets/static/images/ourPeople/card1.jpg"
import Card17 from "~/assets/static/images/ourPeople/card1.jpg"
import Card18 from "~/assets/static/images/ourPeople/card1.jpg"
import Card19 from "~/assets/static/images/ourPeople/card1.jpg"
import Card20 from "~/assets/static/images/ourPeople/card1.jpg"
import Card21 from "~/assets/static/images/ourPeople/card1.jpg"
import Card22 from "~/assets/static/images/ourPeople/card1.jpg"
import Card23 from "~/assets/static/images/ourPeople/card1.jpg"
import ImageAmil from "~/assets/static/images/ourPeople/Amil.png"

export default function OurPeople1() {

  const buttons = ["Read more"]
  const label = ["Read more"]

  const CardsData = [
    {
      route: "https://s3-alpha-sig.figma.com/img/eb5a/4582/e632f4d6a37639ee7b5bc50c395e6bc6?Expires=1681084800&Signature=SdJjPP67wL0AFHvhJdBTGZenV6wtJQblGND1ssdTiRdHPS2q0Iq~ePnCCk7SbWEUvpyvDZFIWbH5dWhICtxyc7F1WCotZAV8PhHuVu0ASyM4epI5rcLkw7r4W~OJy6tGgL5LWOJcCLbfrqKpqZl8439LaZHj5vnuaglNQQAlSBZHUoeI-qUNQaqgitjb5RWZJ~j9f2tJ~Q24SFR767OtYbNXuVlDJKUsUXAgGComtunBBgvz5PcZ7O~KcVzs6kwtcqhvAWeJxvMtveoyiy5cNJwarVxzewkbvCtHM~htRiEGsTlOmtvsmiawOLCimQQTV7CMW2ruJoYMN1Y8pwZE8g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      name: "Kara Meister, M.D.",
      subtitle: "Clinical Advisor",
      text: "Clinical Assistant Professor of ENT Stanford School of Medicine",
    },
    {
      route: "https://s3-alpha-sig.figma.com/img/eb5a/4582/e632f4d6a37639ee7b5bc50c395e6bc6?Expires=1681084800&Signature=SdJjPP67wL0AFHvhJdBTGZenV6wtJQblGND1ssdTiRdHPS2q0Iq~ePnCCk7SbWEUvpyvDZFIWbH5dWhICtxyc7F1WCotZAV8PhHuVu0ASyM4epI5rcLkw7r4W~OJy6tGgL5LWOJcCLbfrqKpqZl8439LaZHj5vnuaglNQQAlSBZHUoeI-qUNQaqgitjb5RWZJ~j9f2tJ~Q24SFR767OtYbNXuVlDJKUsUXAgGComtunBBgvz5PcZ7O~KcVzs6kwtcqhvAWeJxvMtveoyiy5cNJwarVxzewkbvCtHM~htRiEGsTlOmtvsmiawOLCimQQTV7CMW2ruJoYMN1Y8pwZE8g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      name: "Dr. Jure Leskovec",
      subtitle: "Artificial Intelligence Advisor",
      text: "Chief Scientist - Pinterest Associate Professor of AI - Stanford",
    },
    {
      route: "https://s3-alpha-sig.figma.com/img/45b9/c3d5/ebb22b045edb2cbea52119a5acf28533?Expires=1681084800&Signature=OYzOjw8LOUGdchgjwRtMmcs9ksHhtBWluOLUntd86mRHxmgxczhlOKrUAXalHLiCeqLmnaIOZixK6xmqkYNrpFF9J7yluZsE8BXR4voJ~gal1nr4fjIwG58lMtsXiSWF0T5FUm0PZIq8dA1zQ9AjysdvCcZFLbscEHABMvFY9h6Mg4-5-gu5~5mwsBT5eiAP9fyYZMrv3pU6VsbDdJCV-0O-3~1bskj6~VcyZy~ciq0bW9IXwg90R8957B4PTD1fBnR~fhLzCeapkBLj38yK-rgDGI3FP59WmTbLJgGX0Hw-EjQJ1inu5zJTARF7cwrbNDcHWAna6eOii3R2YC4m2w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      name: "Melissa Dyrdahl",
      subtitle: "Executive Marketing Advisor",
      text: "Former CMO - Adobe Board Member - CommonSpirit Health",
    },
    {
      route: "https://s3-alpha-sig.figma.com/img/7049/d85b/17a7360b884265cafb3d2a11ed444722?Expires=1681084800&Signature=GbXmPqKz-43Pkh1bNmNR3gGcHqxpTPiTdFqIHrLBoMfIh1p9I-rUHcpXeHKRoL0X3mVTQxX7d-DYUH-vnK4~IsOuK20keKJj-1cWrVuhlNoGlkdSjHlOpCdvjiMTTKt3U7zbqsyZRhCeNrM3LvuGAVJiQxXFIBx8bRqW~eB~fDrY~V-uF9DWrL-L49ovU040Hjd3~jPcc9l38aCvyG9R7YxnNaDBw8YxKP1VtfKCeiRlOLeOvdILhLmVN4VldSCWiadya~dHsgTbMLuJs-X36Q3-H5wG1cEcIPUO2KZ0DVWhHvai5YBw2JQqGuzOS8Y1zsh99FfN9xPevplh2B42lQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      name: "Anaïs Rameau, M.D.",
      subtitle: "Clinical Advisor",
      text: "Assistant Professor of ENT - Cornell University Doctor of Medicine - McGill University",
    },
    {
      route: "https://s3-alpha-sig.figma.com/img/2d52/0dd7/7f258dcbd49ee9eb116629b3c090cacc?Expires=1681084800&Signature=JMW1HsQcJJGob-~26yUJMiLR~leAIN4JBdWwMatmVCiaRly8xgpZmaVis-2JRR4xxGRhJ~996zviM3PxZe6vE94Ufo4CEmNhY~PQ8oxomRPsiiDC-a3vr7ZBJ80FtcSB3RdQ-iqkqmuuR7M756ECLxYnUxUi4mPCewAIsl~QEgDYwT5INakrygihd3PaSPDZxy~AWOSdbiFC2vUJfsk1PEGimCRbV3yAacxLjS30Gwvosa-2Igcv-lAsA6UVIclc7vEj-6ormuY~5KEkqkg5DpQV6xtZcFHFyMeYfq6~Fbz58Q5L0GtOPIphnidP0Gyh7L8mlpkauFaNilVniaov6A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      name: "Madhav Datt",
      subtitle: "Executive Nonprofit Advisor",
      text: "Founder - Green the Gene Former Global Representative for Youth - UN EP",
    },
    {
      route: "https://s3-alpha-sig.figma.com/img/6410/33fd/aed52736739b3b15843358ba4a3cecf0?Expires=1681084800&Signature=NEs~1zUkjPbm-Sf2~vSqAKSRa7BlFNzUXthSUSC8QFwvccxcI4ofa9-5eIiHQcbUU3Zpszu6yWKviD50PjFUdkR5MSzqpaZmtfS4qQ4OMfi3xEFmGBXY7xlbLUdr8h4qmx5zJsNNFa5EGo~IYnUGHTsqxzV7NgGE-tnxvjfGZiVQPWEMlRYvj9KozCz6zx2WIyx-EW4Pgs5o8jsax5FNnB29KwiW7wLntharfZv9cPqnAUIGuf6ooqlhTr0tcUceSrueO6sNZOVejYLw9rLLPu8cBR3uv2CC~PJZzMPPAcP61gse2NM03HjkJshifQum19nVO7z1vUH86tg608SUkg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      name: "Rafi Azim-Khan",
      subtitle: "Executive Legal Advisor",
      text: "Partner, IP/IT & Head Data Privacy Europe Pillsbury Winthrop Shaw Pittman LLP",
    },
    {
      route: "https://s3-alpha-sig.figma.com/img/d2fe/166e/17a60782646217d641e9465a433df4f5?Expires=1681084800&Signature=qWz25nNKRASDeGAaYH2fDMktLi9g5Mrl97btYdX2KW~AtlTj-uy60bPHQMiQ1oFKnKkXYLm3KxOVWfFGrFYvev0iIqag~49prBvQmQI6G5sbdbrf93zUiPLmO-8~NBs4h1b3W8h0dAtQfImK-4RNwoEv2Ci0PrOpnVaYW2ZtPJ00PpBIyIFfSRK0Icgm0XpnAvGZJikBdEdkFof9F1PEV~qt8NSW7yw8hYpvLt8aA4zwmMXaXZMVUmzU-7~je1EdJKFPdtaor8sVHje0wjgRD4zlBCEKIKZBm7Saohjgj50USjHVG3hz-vb2T5QRNVbnBVOAXzbcuvR6yHGFuZpjLQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      name: "Richard Swartzbaugh",
      subtitle: "Executive Advisor",
      text: "Risk Management - Curaesoft J.D. - University of Iowa",
    },
    {
      route: "https://s3-alpha-sig.figma.com/img/bed8/57dd/ca516c43e2e3378248bae69ce0fd9214?Expires=1681084800&Signature=onKC~j5Z0J5ZOZCXqNkTTTRAK9oztZIJA~0rmxo79rpAkcsJste48urEAQexd8rUcD2BJ8VyeEsajGVzsbYzXNBHGtRcPDzFILYSsWs7WW6zWjr7u4EfUmRCjL7b5IIbeO7GhwABfVnC~Cu0BTeP4hqHVjHfqL7oCuWPbaqaC0m6P5FGyn6gyXhRRZJhrY2XpWfvD45WdAqzTKwVbHMCDFIQK-AqpKy2YghIBaPTZdaLmZORl5QB59GYcyG74kNarORqJQoxxMsdmD-To5B8vEhSyyZPLEfah1-PVKV1B8Bb4PR~UuWDGhNrp1~zUfuTyHczrFtZDAjggWkC9CrRaw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      name: "Ronan Dunlop",
      subtitle: "Executive Nonprofit Advisor",
      text: "Founder - Green the Gene Former Global Representative for Youth - UN EP",
    }
  ]

  return (
    <>
      <h1 className="text-sky-600 text-3xl m-4">Our People 1</h1>

      <TextinsImg
        sizeImg="auto"
        borderImg="none"
        src="https://s3-alpha-sig.figma.com/img/598a/ee88/e2a7c1d88a487a3d3d9dd1d55f06d0d1?Expires=1681084800&Signature=JD81GZFwcnTmJNz4iCsLGf85GFLC~cN0VAN1miPhQ-ryh~0tlLTaHSpJBa4rrkoInqkE29J7a~qs5xKJxaKtAgeMvbNTDmjwcTERhimo0mNGss4XNFR9dysy5O-D69JdsITgYSi9-RPNLEkeloP~wKJoT1yvP8ir3lXABjmLL2oSb0zy~v~n5p2tZEXu2vzuHoN8bCwvUrzBK1IYDFhPpBgwEQBevwV7W8b9R~DcivedwmOpj01nQJk8vNh39LkVZbVbBhdSCIZ9j8A9tkVHkNjTIRPzgGjkdHhHVjpuFs1KfKsrPAZIvK3vCj5DiOxAZqIvXrnQa2Ypt6-qirrqjg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        altImg="Imagen cabezera"
        Text="We unite from across the world to defeat COVID-19 one cough at a time."
      />
      <div
        className="text-center m-7"
      >
        <Title
          H="h1"
          Text="Meet Our Founder"
        />
      </div>
      <Section1
        //TitleText
        TitleSize="h2"
        TitleLabel="Amil Khanzada"
        TextSize="normal"
        TextLabel="MBA Candidate, Haas School of Business Master of Engineering Candidate, Department of Electrical Engineering and Computer Sciences"
        ContainerTextProps="items-start h-[100%] mr-2"
        //Image
        sizeImg="pr70"
        border="radious"
        route={ImageAmil}
        alt="imagen de algo"
        //Buttons
        buttons={buttons}
        label={label}
        type="primary"
        sizeBtn="medium"
        path="/"
      />

      <Card
        CardsData={CardsData}
      />

    </>
  );
}