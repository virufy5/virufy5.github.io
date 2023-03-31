/* //ASSETS
import Advisor1 from "../assets/static/images/cards/advisor1.jpg";

//ATOMOS
import Button from "../components/atoms/button/button";
import ImageAtom from "../components/atoms/imageAtom/ImageAtom";
import Video from "../components/atoms/videoAtom/Video";

//MOLECULAS
import Navbar from "../components/molecules/Navbar/Navbar";
import ButtonGroup from "../components/molecules/ButtonGroup/ButtonGroup";
import ImageButton from "../components/molecules/Image-Button/Image-Button";
import CardHome from "../components/molecules/CardHome/CardHome"; */

//ORGANISMOS
import Section2 from "../components/organisms/section-2/Section2";
import Section4 from "../components/organisms/section-4/Section4";
import ImageAtomLocal from "../components/atoms/imageAtom/ImageAtomLocal";
import ImageAtomURL from "../components/atoms/imageAtom/ImageAtomURL";
import Advisor1 from "../assets/static/images/cards/advisor1.jpg"

export default function Prueba2() {

    const buttons = ["share your cough", "learn more"]
    const label = ["share your cough", "learn more"]

  return (
    <div>
      <ImageAtomLocal border="circular" imagesize="px100" src={Advisor1}/>
      <ImageAtomURL imagesize="px100" src="https://s3-alpha-sig.figma.com/img/99bb/cede/512efb42eae3a6e08942c7ea56304393?Expires=1680480000&Signature=aZcNGWBPN6Y3Ud4uOhr3r~zM0poKbcfwkkVDe73KK2yTVdD~KhQsYvaKcYsY-dz4FYuGLKHJbGr9Ag0kQaJwdNBzrNHgFmx2QCXeSEM8RuI8gxBguLPXlNGVtpbj72Nk9oRAJWEGunuoF5ld6CQIGu~s9kFWGmxp1ikj7d~92h5tBnmjcVad0aJ9U1YXgko7KHgZs0FFO8VWXOfD8Xbo1DZYr-dp0MnEj~a8Nb7M9FucyuMRuYEelj6il8VDOjFivfqDCdXRg79NeINN19yLV2-qqrScvdQqR3UVUyeUfIU5PQq4yIWlilx-uHB8CluCjMHp6S53F~E-cuSliGdGZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
    </div>
  );
}