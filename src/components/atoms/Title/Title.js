import { TitleProps } from "../../themes";

export default function Title({
  Text,
  H,
  TitleClassProps
}) {
  return (
    <h1 className={`${TitleClassProps} ${TitleProps?.[H]}`}>
      {Text}
    </h1>
  );
}