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
import ImageAtomLocal from "../components/atoms/imageAtom/ImageAtomLocal";
import Advisor1 from "../assets/static/images/cards/advisor1.jpg"

export default function Prueba2() {

  return (
    <div>
      <ImageAtomLocal border="circular" imagesize="px100" src={Advisor1}/>
    </div>
  );
}