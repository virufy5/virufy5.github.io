//Atoms
import ImageAtomLocal from "~/components/atoms/imageAtom/ImageAtomLocal"
import Title from "~/components/atoms/Title/Title"
import Button from "~/components/atoms/button/Button"

//Assets
import ImageSection6 from "~/assets/static/images/section6/1.png"

export default function Section6() {
  return (
    <div
    style={{
      width: "100%",
      textAlign: "center",
    }}>
      <div className="mr-[5vw]">
      <Title
        H="h1"
        Text="Our Supporters"
        TitleClassProps="ml-[5vw]"      
      />
      </div>
      <div className="mr-[5vw] ml-[5vw]">
      <ImageAtomLocal
        src={ImageSection6}
      />
      <Button size="large" type="primary" path="#" label="Become  a supporter" />
      </div>
    </div>
  )
}