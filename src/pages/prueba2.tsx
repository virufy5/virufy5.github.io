//ATOMOS
import Button from "../components/atoms/button/button";
import ImageAtom from "../components/atoms/imageAtom/ImageAtom";
import Video from "../components/atoms/videoAtom/Video";

//MOLECULAS
import ButtonGroup from "../components/molecules/ButtonGroup/ButtonGroup";
import ImageButton from "../components/molecules/Image-Button/Image-Button";
import CardHome from "../components/molecules/CardHome/CardHome";

export default function Prueba2() {

  return (
    <>
      <h1 className="text-sky-600 text-3xl ml-4 mt-4">Átomos</h1>
        <Button size="medium" type="secondary" label="button1" path="/about" />
        <Button size="large" type="secondary" label="button2" path="/about" />
        <Button size="small" type="primary" label="button3" path="/about" />
        <ImageAtom imagesize="medium" border="radious" route="https://imagen-ai.com/wp-content/uploads/2022/07/open-graph-default.jpg" alt="imagen de algo" />
        <Video width="30%" route="https://youtu.be/hvJgwPNYnZo" />
      <h1 className="text-sky-600 text-3xl ml-4 mt-4">Moléculas</h1>
        <ButtonGroup buttons={["One", "Two", "Three", "Four"]} label={["One", "Two", "Three", "Four"]} type="primary" size="small" path="/" />
        <ImageButton border="radious" imagesize="medium" route="https://imagen-ai.com/wp-content/uploads/2022/07/open-graph-default.jpg" alt="imagen de algo" type="primary" size="medium" path="/" label="Donate Your Cough"></ImageButton>
        <CardHome
          route="https://imagen-ai.com/wp-content/uploads/2022/07/open-graph-default.jpg"
          alt="imagen de algo" 
          TitleSize="h6" 
          TitleLabel="Nombre Cliente"
          TextSize="normal"
          TextLabel="Director. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis turpis nisi, justo, integer dignissim ornare leo euismod ac.">
        </CardHome>
    </>
  );
}