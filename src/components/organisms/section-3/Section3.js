import TitleText from "~/components/molecules/TitleText/TitleText"
import Image from "~/components/atoms/imageAtom/Image"
import Button from "~/components/atoms/button/Button"

export default function Section3() {
  return (
    <div
    style={{
      width: "100%",
      textAlign: "center",
      alignItems: "center",
    }}>
      <TitleText
        TitleSize="h1"
        TitleLabel="COVID-19 map"
        TextSize="normal"
        TextLabel={"Contribute in the fight against COVID-19 by recording your cough through our mobile App to improve our predictive model. View our COVID-19 Dashboard and see how many people in your country have already 'shared their cough'!"}
        ContainerTitleProps="mb-[16px]"
        ContainerTextProps="mr-[5vw] mb-[16px]"
        TitleClassProps="ml-[5vw]"
        TextClassProps="ml-[5vw]"        
      />
      <div
      className="ml-[5vw] mr-[5vw] mb-[16px]"
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Image 
          size="pr100" 
          border="radious" 
          route="https://s3-alpha-sig.figma.com/img/c9cc/c34d/0d3e35cb9938eb05c69b1c012b1fa9c0?Expires=1680480000&Signature=OwrhrDVgqImxdUPNb~1Ap8FjrzG~Ehc45zjUJl2dGh5ZXu31D~Ld0DYani-aNAiAnBUcAHbcCOBS-WNEJ3NPMTfUjYJkfEwbU5uId2ypkKP3oZUCAz4H6D4V-avFU7Be8oYwiZyRrLtIo5pOQOPeyRQMSLHGerZ-58DqLXIlBdmWnKH6sXfo~watvCTVX5ZHKJ~7zRnQDhllNewH4FfMoPQI2abg84agsJ3axG1-yY~pmaCHDXPQZFNVnBmuG3KL5dOhgNfzsBvlSUWd7HgPB~FimLE~YtKQouNZA2FEkaH5NEXZICU87tGGV1EGAvWAnn-lf~vo0Xzja0fKzvVzIA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" 
          alt="imagen de algo" 
        />
      </div>
      <Button size="medium" type="primary" label="Our Data" path="/prueba" />
    </div>
  )
}