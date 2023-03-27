
//Organismo
import Section1 from "~/components/organisms/section-1/Section1"
import Section3 from "~/components/organisms/section-3/Section3"
import Section5 from "~/components/organisms/section-5/Section5"
import Section6 from "~/components/organisms/section-6/Section6"


export default function Prueba() {

  const buttons = ["share your cough", "learn more"]
  const label = ["share your cough", "learn more"]

  return (
    <>
      <h1 className="text-sky-600 text-3xl m-4">HOME</h1>
      
      <p className="text-gray-300">Section - 1</p>
      <Section1
        //TitleText
        TitleSize="h1"
        TitleLabel="An online Covid-19 test is possible"
        TextSize="normal"
        TextLabel={"Virufy is a nonprofit research organization developing artificial intelligence (AI) technology to rapidly screen for COVID-19 from cough patterns, through use of a smartphone at no cost."}
        ContainerTextProps="items-start h-[100%] mr-2"
        //Image
        sizeImg="pr90" 
        border="radious" 
        route="https://s3-alpha-sig.figma.com/img/99bb/cede/512efb42eae3a6e08942c7ea56304393?Expires=1680480000&Signature=aZcNGWBPN6Y3Ud4uOhr3r~zM0poKbcfwkkVDe73KK2yTVdD~KhQsYvaKcYsY-dz4FYuGLKHJbGr9Ag0kQaJwdNBzrNHgFmx2QCXeSEM8RuI8gxBguLPXlNGVtpbj72Nk9oRAJWEGunuoF5ld6CQIGu~s9kFWGmxp1ikj7d~92h5tBnmjcVad0aJ9U1YXgko7KHgZs0FFO8VWXOfD8Xbo1DZYr-dp0MnEj~a8Nb7M9FucyuMRuYEelj6il8VDOjFivfqDCdXRg79NeINN19yLV2-qqrScvdQqR3UVUyeUfIU5PQq4yIWlilx-uHB8CluCjMHp6S53F~E-cuSliGdGZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" 
        alt="imagen de algo"
        //Buttons
        buttons={buttons}
        label={label}
        type="primary"
        sizeBtn="medium"
        path="/"
      />

      <p className="text-gray-300">Section - 3</p>
      <Section3 />

      <p className="text-gray-300">Section - 5</p>
      <Section5 />

      <p className="text-gray-300">Section - 6</p>
      <Section6 /> 

    </>
  );
}