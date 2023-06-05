//Atoms
import Button from "~/components/atoms/button/Button"

//Molecules
import TitleText from "~/components/molecules/TitleText/TitleText"
import ImageAtomLocal from "~/components/atoms/imageAtom/ImageAtomLocal"

//Assets
import ImageSection3 from "~/assets/static/images/section3/1.jpg"

export default function Section3() {
  return (
    <div
    style={{
      width: "w-[100vw]",
      maxWidth: "1440px",
      textAlign: "center",
      alignItems: "center",
      marginTop: "90px"
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
      <ImageAtomLocal
          imagesize="pr100" 
          border="radious" 
          src={ImageSection3}
          alt="imagen de algo"
          ImageStyleProps={""}
        />
      </div>
      <Button size="medium" type="primary" label="Our Data" path="/Dashboard" />
    </div>
  )
}