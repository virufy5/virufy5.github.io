import Button from '~/components/atoms/button/Button'
import Title from '~/components/atoms/Title/Title'
import TitleText from '~/components/molecules/TitleText/TitleText'
import ImageAtomLocal from '~/components/atoms/imageAtom/ImageAtomLocal'
import microscope from '~/assets/static/images/OurResearch/microscope.png'

export default function Section9({
  TitleSize,
  TitleLabel,
  TextSize,
  TextLabel,
  ContainerTitleProps,
  ContainerTextProps,
  sizeBtn,
  typeBtn,
  labelBtn,
  pathBtn,
}) {
  return (
    <div
      className="
    mb-5 w-[100%] items-center text-center
    "
    >
      <Title Text="Research" H="h1" TitleClassProps="mt-4" />

      <div
        className="
        mt-3
        flex
        w-[100%]
        flex-wrap 
        justify-center
      "
      >
        <div
          className="
          sm:w-1/1 
          mr-[2vw]
          ml-[5vw] flex
          flex-col 
          md:w-1/3
          lg:w-1/3
          2xl:w-1/3
        "
        >
          <div className="flex justify-center">
            <ImageAtomLocal
              src={microscope}
              alt="microscope"
              imagesize={''}
              ImageStyleProps={''}
              border={''}
            />
          </div>

          <TitleText
            TitleSize={TitleSize}
            TitleLabel={TitleLabel[0]}
            TextSize={TextSize}
            TextLabel={TextLabel[0]}
            ContainerTitleProps={ContainerTitleProps}
            ContainerTextProps={ContainerTextProps}
            TitleClassProps="text-left"
            TextClassProps="mt-2 text-left"
          />
        </div>
        <div
          className="
          sm:w-1/1
          ml-[2vw]
          mr-[2.5vw]
          flex
          flex-col sm:ml-[5vw]
          md:w-1/3
          lg:w-1/3
          2xl:w-1/3
        "
        >
          <div className="flex justify-center">
            <ImageAtomLocal
              src={microscope}
              alt="microscope"
              imagesize={''}
              ImageStyleProps={''}
              border={''}
            />
          </div>
          <TitleText
            TitleSize={TitleSize}
            TitleLabel={TitleLabel[1]}
            TextSize={TextSize}
            TextLabel={TextLabel[1]}
            ContainerTitleProps={ContainerTitleProps}
            ContainerTextProps={ContainerTextProps}
            TitleClassProps="text-left"
            TextClassProps="mt-2 text-left"
          />
        </div>
      </div>

      <div
        className="
        mt-3
        flex
        w-[100%]
        flex-wrap 
        justify-center
      "
      >
        <div
          className="
          sm:w-1/1 
          mr-[2vw]
          ml-[5vw] flex
          flex-col 
          md:w-1/3
          lg:w-1/3
          2xl:w-1/3
        "
        >
          <div className="flex justify-center">
            <ImageAtomLocal
              src={microscope}
              alt="microscope"
              imagesize={''}
              border={''}
              ImageStyleProps={''}
            />
          </div>
          <TitleText
            TitleSize={TitleSize}
            TitleLabel={TitleLabel[2]}
            TextSize={TextSize}
            TextLabel={TextLabel[2]}
            ContainerTitleProps={ContainerTitleProps}
            ContainerTextProps={ContainerTextProps}
            TitleClassProps="mt-2 text-left"
            TextClassProps="mt-2 text-left"
          />
        </div>
        <div
          className="
          sm:w-1/1
          ml-[2vw]
          mr-[2vw]
          flex
          flex-col sm:ml-[5vw]
          md:w-1/3
          lg:w-1/3
          2xl:w-1/3
        "
        >
          <div className="flex justify-center">
            <ImageAtomLocal
              src={microscope}
              alt="microscope"
              imagesize={''}
              ImageStyleProps={''}
              border={''}
            />
          </div>
          <TitleText
            TitleSize={TitleSize}
            TitleLabel={TitleLabel[3]}
            TextSize={TextSize}
            TextLabel={TextLabel[3]}
            ContainerTitleProps={ContainerTitleProps}
            ContainerTextProps={ContainerTextProps}
            TitleClassProps="mt-2 text-left"
            TextClassProps="mt-2 text-left"
          />
        </div>
      </div>
      <Title Text="Want to learn more?" H="h2" TitleClassProps="mt-4 mb-14" />
      <Button size={sizeBtn} type={typeBtn} label={labelBtn} path={pathBtn} />
    </div>
  )
}
