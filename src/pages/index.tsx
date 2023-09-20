// import LocaleSelector from "~/components/LocaleSelector";
import LocaleSelector from "~/components/atoms/Select/LocaleSelector";
import { useI18n } from "~/i18n";

export default function Home() {
  // const {
  //   home: { title, subtitle },
  // } = useI18n();

  return (
    <>
      <LocaleSelector />
      {/* <h1>{title} </h1>
      <p>{subtitle}</p> */}
    </>
  );
}
