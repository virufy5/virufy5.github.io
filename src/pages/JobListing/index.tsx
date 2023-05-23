import TextBelowImg from "~/components/molecules/TextinsImg/TextBelowImg";
import ImageinsText from "~/assets/static/images/JobListing/Hero.png"
import TitleText from "~/components/molecules/TitleText/TitleText";
import JobList from "~/components/organisms/JobList/JobList";

export default function JobListing() {
  return (
    <>
      <TextBelowImg
        sizeImg="auto"
        borderImg="none"
        src={ImageinsText}
        altImg="Imagen cabezera"
        Text="Virufy is entirely run by volunteers and pro bono partner companies."
      />
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center max-w-[1440px] ">
          <TitleText
            TitleSize={"h1"}
            TitleClassProps={""}
            TitleLabel={"Our Mission"}
            ContainerTitleProps={"mt-[40px] w-[100%] text-center xl:text-left xl:ml-12"}

            TextSize={"normal"}
            TextClassProps={""}
            TextLabel={"Virufy, a nonprofit research consortium of researchers, innovators, and scientists, has united volunteers from 25+ countries to develop a smartphone app for the detection of COVID-19. Initially developed as a Stanford University COVID-19 Response Innovation Lab project, Virufy’s artificial intelligence (AI) COVID-19 diagnostic solution fights the pandemic through widespread, accessible, and free testing. "}
            ContainerTextProps={"mt-[16px] mb-[40px] mx-8"}
          />

          <JobList/>

        </div>
      </div>
    </>
  )
}