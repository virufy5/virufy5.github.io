import React from "react";
import Section1 from "~/components/organisms/section-1/Section1";
import Section8 from "~/components/organisms/section-8/Section8";

//image
import imageOurResearch from "~/assets/static/images/OurResearch/image.png";
import howItWorksStep1 from "~/assets/static/images/howItWorks/step1.jpg";
import howItWorksStep2 from "~/assets/static/images/howItWorks/step2.jpg";
import howItWorksStep3 from "~/assets/static/images/howItWorks/step3.jpg";
import TitleText from "~/components/molecules/TitleText/TitleText";
import Button from "~/components/atoms/button/Button";
import { useI18n } from "~/i18n";

export default function OurTechnology() {
  const {
    ourTechnology: {
      section1Title,
      section1Text,
      section8Title,
      recordingYourCough,
      section8Text1,
      processing,
      section8Text2,
      results,
      section8Text3,
      collectedDataTitle,
      collectedDataText,
      dashboardButtonLabel,
    },
  } = useI18n();
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-[#F9FAFB]">
        <div className="flex flex-col justify-center items-center max-w-[1440px]">
          <Section1
            TitleSize="h1"
            TitleLabel={section1Title}
            TextSize="normal"
            TextLabel={section1Text}
            ContainerTitleProps={""}
            ContainerTextProps="items-start h-[100%] mr-4"
            sizeImg="pr90"
            border="none"
            route={imageOurResearch}
            alt="imagen de algo"
            buttons={false}
            ImageStyleProps={""}
            buttonTechnology={true}
          />

          <Section8
            TitleLabel={section8Title}
            TitleSize="h1"
            ContainerTitleProps="text-center ml-[5vw] mr-[5vw]"
            sizeImg="pr90"
            border="none"
            route1={howItWorksStep1}
            route2={howItWorksStep2}
            route3={howItWorksStep3}
            alt="Section 7"
            TitleSize1="h3"
            TitleLabel1={recordingYourCough}
            TitleLabel2={processing}
            TitleLabel3={results}
            TextSize="normal"
            TextLabel1={section8Text1}
            TextLabel2={section8Text2}
            TextLabel3={section8Text3}
            ContainerTextProps=""
          />

          <div className='flex flex-col mx-[5vw] mt-[80px]'>
            <TitleText
              TitleSize="h1"
              TitleLabel={collectedDataTitle}
              TextSize="normal"
              TextLabel={collectedDataText}
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
                label={dashboardButtonLabel}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

