import TitleText from "~/components/molecules/TitleText/TitleText"
import Image from "~/components/atoms/imageAtom/Image"
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
    <div className="flex"
      style={{
        width: "100vw",
      }}>
      <div
        style={{
          width: "50%",
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          flex: "1",
        }}>
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
            className="ml-[5vw] text-start"
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
      <div style={{
        width: "50%",
        display: "flex",
        flex: "1",
        justifyContent: "flex-start",
        alignItems: "center",
      }} className="mr-[2.5vw]">
        <Image
          size={sizeImg}
          border={border}
          route={route}
          alt={alt}
        />
      </div>

    </div>
  )
}
