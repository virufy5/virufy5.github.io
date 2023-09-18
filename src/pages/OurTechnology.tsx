import React from 'react'
import Section1 from '~/components/organisms/section-1/Section1'
import Section8 from '~/components/organisms/section-8/Section8'

//image
import imageOurResearch from "~/assets/static/images/OurResearch/image.png"
import howItWorksStep1 from "~/assets/static/images/howItWorks/step1.jpg"
import howItWorksStep2 from "~/assets/static/images/howItWorks/step2.jpg"
import howItWorksStep3 from "~/assets/static/images/howItWorks/step3.jpg"
import TitleText from '~/components/molecules/TitleText/TitleText'
import Button from '~/components/atoms/button/Button'


export default function OurTechnology() {

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-[#F9FAFB]">
        <div className="flex flex-col justify-center items-center max-w-[1440px]">

          <Section1
            //TitleText
            TitleSize="h1"
            TitleLabel="The science behind Virufy"
            TextSize="normal"
            TextLabel={"Artificial intelligence (AI) is capable of detecting minute differences in vocal patterns to detect disease presence."}
            ContainerTitleProps={""}
            ContainerTextProps="items-start h-[100%] mr-4"
            //Image
            sizeImg="pr90"
            border="none"
            route={imageOurResearch}
            alt="imagen de algo"
            buttons={false}
            ImageStyleProps={""}
            buttonTechnology={true}
          />

          <Section8
            TitleLabel="How our online Covid-19 test works"
            TitleSize="h1"
            ContainerTitleProps="text-center ml-[5vw] mr-[5vw]"
            //Image
            sizeImg="pr90"
            border="none"
            route1={howItWorksStep1}
            route2={howItWorksStep2}
            route3={howItWorksStep3}
            alt="Section 7"
            //TitleText
            TitleSize1="h3"
            TitleLabel1="Recording your cough"
            TitleLabel2="Processing"
            TitleLabel3="Results"
            TextSize="normal"
            TextLabel1={"Your cough helps us improve our predictive model, thus being crucial in the fight against COVID-19. Contribute to the progress we are making by sharing your cough!"}
            TextLabel2={"Our artificial intelligence algorithm processing the recording to detect Covid-19 based on cough sounds. "}
            TextLabel3={"Within minutes, our Artificial intelligence algorithm is able to accurately predict your test results through the app."}
            ContainerTextProps=""
          />

          <div className='flex flex-col mx-[5vw] mt-[80px]'>
            <TitleText
              TitleSize="h1"
              TitleLabel="Collected Data"
              TextSize="normal"
              TextLabel="Your cough helps us improve our predictive model, thus being crucial in the fight against COVID-19. Contribute to the progress we are making by sharing your cough!"
              ContainerTitleProps={""}
              ContainerTextProps="items-start h-[100%] mr-4 mt-[20px]"
              TitleClassProps={""}
              TextClassProps={"mb-[52px]"}
            />
            <div className='flex items-center justify-center mb-[90px]'>
              <Button
                size="medium"
                type="primary"
                path="/Dashboard"
                label="VIEW DASHBOARD"
              />
            </div>
          </div>

        </div>
      </div>

    </>
  )
}
