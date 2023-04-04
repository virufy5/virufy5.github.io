import TitleText from "~/components/molecules/TitleText/TitleText"
import ImageAtomLocal from "~/components/atoms/imageAtom/ImageAtomLocal"
import ButtonGroup from "~/components/molecules/ButtonGroup/ButtonGroup"

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
  label,
  type,
  sizeBtn,
  path,
}) {
  return (
    <div className="
      w-[100%]
      space-y-4 
      flex 
      flex-col-reverse
      items-center
      md:flex-row 
      md:space-x-4 
      md:space-y-0 
      md:justify-center 
      md:items-center
      md:text-center
    ">
      <div className="
        text-center 
        flex-1 
        grid
        mr-[5vw]
        items-center 
        justify-center
        md:items-center 
        md:text-left
        md:w-[100%] 
      ">
        <TitleText
          TitleSize={TitleSize}
          TitleLabel={TitleLabel}
          TextSize={TextSize}
          TextLabel={TextLabel}
          ContainerTitleProps={ContainerTitleProps}
          ContainerTextProps={ContainerTextProps}
          TitleClassProps="ml-[5vw]"
          TextClassProps="ml-[5vw]"
        />

        {buttons ? 
          <div
            className="ml-[5vw] mt-3 md:text-left text-center"
          > 
            <ButtonGroup
              buttons={buttons}
              label={label}
              type={type}
              size={sizeBtn}
              path={path}
            />
          </div> : null
        }
      </div>
      <div 
      style={{
        flex: "1",
      }} className="flex justify-center mr-[2.5vw] md:mr-[5vw] w-[50%] md:text-left text-center">
        <ImageAtomLocal
          imagesize={sizeImg}
          border={border}
          src={route}
          alt={alt}
        />
      </div>

    </div>
  )
}
