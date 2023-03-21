import Title from "~/components/atoms/Title/Title"
import Text from "~/components/atoms/Text/Text"


export default function TitleText({
  TitleSize,
  TitleLabel,
  TextSize,
  TextLabel
}) {


  return (
    <>
      <Title H={TitleSize} Text={TitleLabel} />
      <Text Style={TextSize} Text={TextLabel} />
    </>
  );
}
