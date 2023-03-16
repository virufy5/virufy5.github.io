import { TitleProps } from "../../themes";

export default function Title({
  Text,
  H
}) {
  return (
    <h1 className={TitleProps?.[H]}>
      {Text}
    </h1>
  );
}