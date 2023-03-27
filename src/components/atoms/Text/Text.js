import { TextProps } from "../../themes";

export default function Title({
  Text,
  Style,
  TextClassProps
}) {
  return (
    <p className={`${TextClassProps} ${TextProps?.[Style]}`}>
      {Text}
    </p>
  );
}