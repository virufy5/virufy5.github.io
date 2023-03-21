import TitleText from "~/components/molecules/TitleText/TitleText"
import Image from "~/components/atoms/imageAtom/Image"

export default function Section1() {
  return (
    <div className="flex bg-orange-200" 
    style={{
      width: "100vw",
    }}>
      <div 
      style={{
        width: "50%",
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        flex: "1"
      }}>
        <TitleText
          TitleSize="h1"
          TitleLabel="An online Covid-19 test is possible"
          TextSize="normal"
          TextLabel={"Virufy is a nonprofit research organization developing artificial intelligence (AI) technology to rapidly screen for COVID-19 from cough patterns, through use of a smartphone at no cost."}
        />
      </div>
      <div style={{
        width: "50%",
        display: "flex",
        flex: "1",
        justifyContent: "center",
        alignItems: "center",
      }} className="bg bg-yellow-200">
        <Image 
          size="auto" 
          border="radious" 
          route="https://s3-alpha-sig.figma.com/img/99bb/cede/512efb42eae3a6e08942c7ea56304393?Expires=1680480000&Signature=aZcNGWBPN6Y3Ud4uOhr3r~zM0poKbcfwkkVDe73KK2yTVdD~KhQsYvaKcYsY-dz4FYuGLKHJbGr9Ag0kQaJwdNBzrNHgFmx2QCXeSEM8RuI8gxBguLPXlNGVtpbj72Nk9oRAJWEGunuoF5ld6CQIGu~s9kFWGmxp1ikj7d~92h5tBnmjcVad0aJ9U1YXgko7KHgZs0FFO8VWXOfD8Xbo1DZYr-dp0MnEj~a8Nb7M9FucyuMRuYEelj6il8VDOjFivfqDCdXRg79NeINN19yLV2-qqrScvdQqR3UVUyeUfIU5PQq4yIWlilx-uHB8CluCjMHp6S53F~E-cuSliGdGZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" 
          alt="imagen de algo" 
        />
      </div>
      
    </div>
  )
}
