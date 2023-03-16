import { TextProps } from "../../themes";

export default function Title({
  Text,
  Style,
  textprimary
}) {
  return (
    <p className={`${textprimary} ${TextProps?.[Style]}`}>
      {Text}
    </p>
  );
}