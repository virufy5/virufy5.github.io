import Title from "~/components/atoms/Title/Title"
import Text from "~/components/atoms/Text/Text"


export default function TitleText(
  Title,
  TitleLabel,
  Text,
  TextLabel
) {

  const options = [
    { label: 'List 1', value: '1' },
    { label: 'List 2', value: '2' },
    { label: 'List 3', value: '3' },
  ];

  return (
    <>
      <Title Text={TitleLabel} H={Title} />
      <Text Text={TextLabel} Style={Text} />
    </>
  );
}
