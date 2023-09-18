//Organismo
import TitleText from "~/components/molecules/TitleText/TitleText";
import ImageAtomLocal from "~/components/atoms/imageAtom/ImageAtomLocal";
import Map from "~/assets/static/images/dashboard/map.jpg";
import Section7 from "~/components/organisms/section-7/Section7";
import { useI18n } from "~/i18n";
export default function Dashboard() {
  const {
    dashboard: { tittle, tittleInfo, advertisement },
  } = useI18n();

  return (
    <div>
      <div className="flex h-[300px] w-full flex-col items-start justify-center gap-5 bg-slate-100 px-[7%]">
        <TitleText
          //TitleText
          TitleSize="h1"
          TitleLabel={tittle}
          TextSize="normal"
          TextLabel={tittleInfo}
          ContainerTextProps="items-start"
          TextClassProps=""
          TitleClassProps=""
          ContainerTitleProps=""
        />
      </div>
      <div className="100vw mx-[auto] flex max-w-[1440px] flex-col">
        <div>
          <ImageAtomLocal
            src={Map}
            imagesize=""
            ImageStyleProps=""
            alt=""
            border=""
          />
        </div>
        <Section7
          TitleLabel={advertisement}
          Label1="share your cough"
          Label2="learn more"
          Url1="https://virufy.org/study/welcome"
          Url2="/OurTechnology"
        />
      </div>
    </div>
  );
}
