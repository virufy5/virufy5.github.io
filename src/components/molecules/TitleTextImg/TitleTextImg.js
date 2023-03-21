import Title from "~/components/atoms/Title/Title"
import Text from "~/components/atoms/Text/Text"
import Image from "~/components/atoms/imageAtom/Image"


export default function TitleText({
  Order,
  TitleSize,
  TitleLabel,
  TextSize,
  TextLabel
}) {


  return (
    <>
      
      {Order[0] == "Title" && <Title H={TitleSize} Text={TitleLabel} />}
      {Order[0] == "Text" && <Text Style={TextSize} Text={TextLabel} />}
      {Order[0] == "Image" && <Image size="medium" border="rounded" route="https://imagen-ai.com/wp-content/uploads/2022/07/open-graph-default.jpg" alt="imagen de algo" />}
      
      {Order[1] == "Title" && <Title H={TitleSize} Text={TitleLabel} />}
      {Order[1] == "Text" && <Text Style={TextSize} Text={TextLabel} />}
      {Order[1] == "Image" && <Image size="medium" border="rounded" route="https://imagen-ai.com/wp-content/uploads/2022/07/open-graph-default.jpg" alt="imagen de algo" />}

      {Order[2] == "Title" && <Title H={TitleSize} Text={TitleLabel} />}
      {Order[2] == "Text" && <Text Style={TextSize} Text={TextLabel} />}      
      {Order[2] == "Image" && <Image size="medium" border="rounded" route="https://imagen-ai.com/wp-content/uploads/2022/07/open-graph-default.jpg" alt="imagen de algo" />}      
      
    </>
  );
}