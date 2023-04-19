import React from 'react'
import Card from "~/components/molecules/Card/Card"

import Card1 from "~/assets/static/images/aboutUs/card1.png"
import Card2 from "~/assets/static/images/aboutUs/card2.png"
import Card3 from "~/assets/static/images/aboutUs/card3.png"
import Card4 from "~/assets/static/images/aboutUs/card4.png"
import Card5 from "~/assets/static/images/aboutUs/card5.png"
import Card7 from "~/assets/static/images/aboutUs/card7.png"

export default function FAQ() {

  const CardsData = [
    {
      route: Card1,
      name: "",
      text: "Virufy App",
    },
    {
      route: Card2,
      name: "",
      text: "About Virufy",
    },
    {
      route: Card3,
      name: "",
      text: "About AI",
    },
    {
      route: Card4,
      name: "",
      text: "Finances",
    },
    {
      route: Card5,
      name: "",
      text: "Privacy",
    },
    {
      route: Card7,
      name: "",
      text: "Others",
    }, 
  ]

  return (
    <Card
        CardsData={CardsData}
        CardClassProps="flex flex-col text-center items-center w-[197px] sm:w-1/1 md:w-[197px] lg:w-[197px] xl:w-[197px] mb-4 mt-4 bg-yellow-100 rounded-[28px] ml-4 h-[114px] bg-[#F3F4F6]"
      />
  )
}
