import TitleText from '~/components/molecules/TitleText/TitleText'
import ImageAtomLocal from '~/components/atoms/imageAtom/ImageAtomLocal'
import Button from '~/components/atoms/button/Button'

export default function Section1({
  TitleSize,
  TitleLabel,
  TextSize,
  TextLabel,
  ContainerTitleProps,
  ContainerTextProps,
  sizeImg,
  border,
  route,
  alt,
  buttons,
  buttonTechnology,
  ImageStyleProps,
  shareButtonLabel = '',
  learnMoreButtonLabel = '',
  researchButtonLabel = '',
}) {
  return (
    <div
      className="
      flex
      w-[100vw]
      max-w-[1440px] 
      flex-col-reverse 
      items-center
      space-y-4
      lg:mt-16 
      lg:flex-row 
      lg:items-center 
      lg:justify-center 
      lg:space-x-4
      lg:space-y-0
      lg:text-center
      2xl:mt-16
    "
    >
      <div
        className="
        mr-[5vw] 
        grid 
        flex-1
        items-center
        justify-center 
        text-center
        sm:mt-6 
        md:mt-6
        lg:mt-6
        lg:w-[100%]
        lg:items-center
        lg:text-left
      "
      >
        <TitleText
          TitleSize={TitleSize}
          TitleLabel={TitleLabel}
          TextSize={TextSize}
          TextLabel={TextLabel}
          ContainerTitleProps={ContainerTitleProps}
          ContainerTextProps={ContainerTextProps}
          TitleClassProps="ml-[5vw]"
          TextClassProps="ml-[5vw] mt-4 mb-4"
        />

        {buttons ? (
          <div className="ml-[5vw] mt-3 flex flex-col items-center gap-3 text-center lg:flex-row lg:text-left">
            <Button
              size="medium"
              type="primary"
              path="https://virufy.org/study/welcome"
              label={shareButtonLabel}
            />
            <Button
              size="medium"
              type="secondary"
              path="/ourTechnology"
              label={learnMoreButtonLabel}
            />
          </div>
        ) : null}

        {buttonTechnology ? (
          <div className="ml-[5vw] mt-3 flex flex-col items-center gap-3 text-center lg:flex-row lg:text-left">
            <Button
              size="medium"
              type="primary"
              path="/OurResearch"
              label={researchButtonLabel}
            />
          </div>
        ) : null}
      </div>
      <div
        className="flex w-[100%] flex-1
        justify-center
        text-center 
        md:text-left lg:mx-[2.5vw]
        lg:mr-[5vw]
        2xl:mx-[2.5vw]
       "
      >
        <ImageAtomLocal
          imagesize={sizeImg}
          border={border}
          src={route}
          alt={alt}
          ImageStyleProps={ImageStyleProps}
        />
      </div>
    </div>
  )
}
