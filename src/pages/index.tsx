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
      <iframe
        src={`https://virufy-dashboard.vercel.app/`}
        className="w-full min-h-screen border-none"
      />
      {/* <h1>{title} </h1>
      <p>{subtitle}</p> */}
    </>
  );
}
