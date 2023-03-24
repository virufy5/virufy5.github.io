import Title from "~/components/atoms/Title/Title"
import Text from "~/components/atoms/Text/Text"


export default function TitleText({
  TitleSize,
  TitleLabel,
  TextSize,
  TextLabel,
  ContainerTitleProps,
  ContainerTextProps
}) {


  return (
    <>
      <div className={ContainerTitleProps}>
        <Title H={TitleSize} Text={TitleLabel} />
      </div>
      <div className={ContainerTextProps}>
        <Text Style={TextSize} Text={TextLabel} />
      </div>
    </>
  );
}
