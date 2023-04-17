import TextinsImg from "~/components/molecules/TextinsImg/TextinsImg";
import ImageinsText from "~/assets/static/images/ourSupporters/ImageinsText.png"

export default function OurSupporters() {
  return (
    <TextinsImg
      sizeImg="auto"
      borderImg="none"
      src={ImageinsText}
      altImg="Imagen cabezera"
      Text="Companies and organizations support us from their extensive knowledge and provide us with security and certainty in what we do."
    />
  )
}
