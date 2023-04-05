import Button from "~/components/atoms/button/Button"
import ImageAtomLocal from "~/components/atoms/imageAtom/ImageAtomLocal"
import TitleText from "~/components/molecules/TitleText/TitleText"

export default function Section8({
  TitleLabel,
  TitleSize,
  TitleSize1,
  TitleLabel1,
  TitleLabel2,
  TitleLabel3,
  TextSize,
  TextLabel1,
  TextLabel2,
  TextLabel3,
  ContainerTitleProps,
  ContainerTextProps,
  sizeImg,
  border,
  route1,
  route2,
  route3,
  alt,

}) {
  return (
    <div>
      <TitleText
        TitleSize={TitleSize}
        TitleLabel={TitleLabel}
        ContainerTitleProps={ContainerTitleProps}
      />
      <div className="flex flex-wrap -mb-4 text-center items-center w-[100%] justify-center mt-5"
        style={{
          width: "100vw",
        }}>
        <div className="
					flex flex-col text-center items-center w-[250px] sm:w-[250px] md:w-[250px] lg:w-[447px] xl:w-[447px] mt-0 
				">
          <ImageAtomLocal
            imagesize={sizeImg}
            border={border}
            src={route1}
            alt={alt}
          />
          <TitleText
            TitleSize={TitleSize1}
            TitleLabel={TitleLabel1}
            TextSize={TextSize}
            TextLabel={TextLabel1}
            ContainerTextProps={ContainerTextProps}
          />
        </div>
        <div className="
					flex flex-col text-center items-center w-[250px] sm:w-[250px] md:w-[250px] lg:w-[447px] xl:w-[447px] mb-4 mt-0 ml-3 mr-3
				">
          <ImageAtomLocal
            imagesize={sizeImg}
            border={border}
            src={route2}
            alt={alt}
          />
          <TitleText
            TitleSize={TitleSize1}
            TitleLabel={TitleLabel2}
            TextSize={TextSize}
            TextLabel={TextLabel2}
            ContainerTextProps={ContainerTextProps}
          />
        </div>
        <div className="
					flex flex-col text-center items-center w-[250px] sm:w-[250px] md:w-[250px] lg:w-[447px] xl:w-[447px] mb-4 mt-0
				">
          <ImageAtomLocal
            imagesize={sizeImg}
            border={border}
            src={route3}
            alt={alt}
          />
          <TitleText
            TitleSize={TitleSize1}
            TitleLabel={TitleLabel3}
            TextSize={TextSize}
            TextLabel={TextLabel3}
            ContainerTextProps={ContainerTextProps}
          />
        </div>
      </div>
      <div className="ml-[5vw] mr-[2.5vw] mt-5 pt-5 text-center">
        <Button
          size="medium"
          type="primary"
          label="Share your cough"
          path="/HowItWorks"
        />
      </div>
    </div>
  )
}