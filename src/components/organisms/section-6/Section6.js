import Image from "~/components/atoms/imageAtom/Image"
import Title from "~/components/atoms/Title/Title"


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
      <Image 
        route="https://i.ibb.co/qxL131Z/Frame-936.png"
      />
      </div>
    </div>
  )
}