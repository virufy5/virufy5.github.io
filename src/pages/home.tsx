//Assets
import ImageSection1 from "~/assets/static/images/section1/1.jpg"

//Organismo
import Navbar from "~/components/organisms/Navbar/Navbar"
import Footer from "~/components/organisms/Footer/Footer"
import Section1 from "~/components/organisms/section-1/Section1"
import Section2 from "~/components/organisms/section-2/Section2"
import Section3 from "~/components/organisms/section-3/Section3"
import Section4 from "~/components/organisms/section-4/Section4"
import Section5 from "~/components/organisms/section-5/Section5"
import Section6 from "~/components/organisms/section-6/Section6"
import Section7 from "~/components/organisms/section-7/Section7"

export default function Prueba() {

  const buttons = ["share your cough", "learn more"]
  const label = ["share your cough", "learn more"]

  return (
    <>
      <Navbar/>

      <h1 className="text-sky-600 text-3xl m-4">HOME</h1>
      
      <p className="text-gray-300">Section - 1</p>
      <Section1
        //TitleText
        TitleSize="h1"
        TitleLabel="An online Covid-19 test is possible"
        TextSize="normal"
        TextLabel={"Virufy is a nonprofit research organization developing artificial intelligence (AI) technology to rapidly screen for COVID-19 from cough patterns, through use of a smartphone at no cost."}
        ContainerTextProps="items-start h-[100%] mr-2 mt-2"
        //Image
        sizeImg="pr90"
        border="radious" 
        route={ImageSection1} 
        alt="imagen de algo"
        //Buttons
        buttons={buttons}
        label={label}
        type="primary"
        sizeBtn="medium"
        path="/"
      />

      <p className="text-gray-300">Section - 2</p>
      <Section2 />

      <p className="text-gray-300">Section - 3</p>
      <Section3 />

      <p className="text-gray-300">Section - 4</p>
      <Section4 />

      <p className="text-gray-300">Section - 5</p>
      <Section5
        StylePropsSection="text-center w-[100%]"
        TitleSize1="h1"
        TitleLabel1="The Virufy Community"
        TextSize1="subtitle"
        TextLabel1="Virufy was founded in March 2020. Today, Virufighters across five continents are committed to making disease screening instant and free of charge through innovative technology."
        ContainerTitleProps1="mb-5 mr-[5vw]"
        ContainerTextProps1="mb-4 mr-[5vw]"
        TitleClassProps1="ml-[5vw]"
        TextClassProps1="ml-[5vw]"
        TitleSize2="h2"
        TitleLabel2="We believe that together we can help improve the world"
        TextSize2="normal"
        TextLabel2="People all over the world support and work with us to combat this type of disease but many people like you can help us too"
        ContainerTitleProps2="mb-5 mr-[5vw]"
        ContainerTextProps2="mb-4 mr-[5vw]"
        TitleClassProps2="ml-[5vw]"
        TextClassProps2="ml-[5vw]"
      />

      <p className="text-gray-300">Section - 6</p>
      <Section6 /> 

      <p className="text-gray-300">Section - 7</p>
      <Section7 /> 
      <Footer /> 
    </>
  );
}