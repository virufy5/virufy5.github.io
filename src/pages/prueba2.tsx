//ATOMOS
import Button from "~/components/atoms/button/button";
import Image from "~/components/atoms/imageAtom/Image";
import Video from "~/components/atoms/videoAtom/Video";
import ButtonGroup from "~/components/molecules/ButtonGroup/ButtonGroup";

//MOLECULAS




export default function Prueba2() {

  return (
    <>
        {/* ATOMOS */}
        <h1 className="text-sky-600 text-3xl ml-4 mt-4">Átomos</h1>
        <Button size="medium" type="secondary" label="button1" path="/about" />
        <Button size="large" type="secondary" label="button2" path="/about" />
        <Button size="small" type="primary" label="button3" path="/about" />
        <Image size="medium" border="radious" route="https://imagen-ai.com/wp-content/uploads/2022/07/open-graph-default.jpg" alt="imagen de algo" />
        <Video width="30%" route="https://youtu.be/hvJgwPNYnZo" />
        <h1 className="text-sky-600 text-3xl ml-4 mt-4">Moléculas</h1>
        <ButtonGroup buttons={["One", "Two", "Three", "Four"]} label={["One", "Two", "Three", "Four"]} type="primary" size="small" path="/" />
    </>
  );
}