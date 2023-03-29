import Title from "~/components/atoms/Title/Title"
import Text from "~/components/atoms/Text/Text"
import ImageAtom from "~/components/atoms/imageAtom/ImageAtom";


export default function TitleText({
  Order,
  TitleSize,
  TitleLabel,
  TextSize,
  TextLabel,
  ImgSize, 
  ImgRoute, 
  ImgAlt, 
  ImgBorder
}) {


  return (
    <>

      {Order[0] == "Title" && <Title H={TitleSize} Text={TitleLabel} />}
      {Order[0] == "Text" && <Text Style={TextSize} Text={TextLabel} />}
      {Order[0] == "Image" && <ImageAtom imagesize={ImgSize} border={ImgBorder} route={ImgRoute} alt={ImgAlt} />}
      
      {Order[1] == "Title" && <Title H={TitleSize} Text={TitleLabel} />}
      {Order[1] == "Text" && <Text Style={TextSize} Text={TextLabel} />}
      {Order[1] == "Image" && <ImageAtom imagesize={ImgSize} border={ImgBorder} route={ImgRoute} alt={ImgAlt} />}

      {Order[2] == "Title" && <Title H={TitleSize} Text={TitleLabel} />}
      {Order[2] == "Text" && <Text Style={TextSize} Text={TextLabel} />}
      {Order[2] == "Image" && <ImageAtom imagesize={ImgSize} border={ImgBorder} route={ImgRoute} alt={ImgAlt} />}      
      
    </>
  );
}