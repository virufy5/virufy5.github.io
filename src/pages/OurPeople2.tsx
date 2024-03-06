import TextinsImg from '~/components/molecules/TextinsImg/TextinsImg'
import Title from '~/components/atoms/Title/Title'
import Text from '~/components/atoms/Text/Text'

import { useI18n } from '~/i18n'

//Images
import ImageinsText from '~/assets/static/images/textInImage/OurPeople.jpg'
import Amil from '~/assets/static/images/ourPeople/Amil.png'
import ImageAtomLocal from '~/components/atoms/imageAtom/ImageAtomLocal'

export default function OurPeople2() {
  const {
    OurPeople2: { titleImage, sectionAmil },
  } = useI18n()

  return (
    <>
      <TextinsImg
        sizeImg="auto"
        borderImg="none"
        src={ImageinsText}
        altImg="Imagen cabezera"
        Text={titleImage}
      />
      <div className="flex flex-col items-center justify-center">
        <div className="flex max-w-[1440px] flex-col items-center justify-center ">
          <div className="m-10 text-center">
            <Title
              H="h1"
              Text={sectionAmil.titleAmil}
              TitleClassProps={'mt-[80px]'}
            />
          </div>

          <div
            className="ml-[5vw] mt-[80px] flex flex-row flex-wrap items-start
        sm:flex-col sm:items-center
        md:flex-row md:items-end
        lg:flex-row lg:items-end
        2xl:flex-row 2xl:items-end
      "
          >
            <div
              className="m-2 w-[438px]
          sm:w-[438px]
          md:w-[350px]
          lg:w-[300px]
          2xl:w-[365px]
        "
            >
              <ImageAtomLocal
                imagesize={''}
                alt="Amil"
                src={Amil}
                border={''}
                ImageStyleProps={''}
              />
            </div>
            <div
              className="ml-2 mr-[5vw] 
          flex-1 flex-col
        "
            >
              <Text
                Style="normal"
                Text={sectionAmil.textAmil[0]}
                TextClassProps=""
              />

              <Text
                Style="normal"
                Text={sectionAmil.textAmil[1]}
                TextClassProps="mt-4"
              />

              <Text
                Style="normal"
                Text={sectionAmil.textAmil[2]}
                TextClassProps="mt-4"
              />
            </div>
            <div className="ml-2 mr-[5vw] flex sm:flex">
              <Text
                Style="normal"
                Text={sectionAmil.textAmil[3]}
                TextClassProps="mt-4"
              />
            </div>
            <div className="ml-2 mr-[5vw] flex sm:flex">
              <Text
                Style="normal"
                Text={sectionAmil.textAmil[4]}
                TextClassProps="mt-4"
              />
            </div>
            <div className="ml-2 mr-[5vw] flex sm:flex">
              <Text
                Style="normal"
                Text={sectionAmil.textAmil[5]}
                TextClassProps="mt-4"
              />
            </div>
            <div className="ml-2 mr-[5vw] flex sm:flex">
              <Text
                Style="normal"
                Text={sectionAmil.textAmil[6]}
                TextClassProps="mt-4"
              />
            </div>
          </div>
          <div className="ml-[5vw] mr-[5vw] mt-[80px]">
            <Title
              H="h3"
              Text={sectionAmil.titlePublications}
              TitleClassProps="text-center"
            />
            <Text
              Style="normal"
              Text={sectionAmil.listPublications[0]}
              TextClassProps="mt-[60px]"
            />
            <Text
              Style="normal"
              Text={sectionAmil.listPublications[1]}
              TextClassProps="mt-3 mb-3"
            />
            <Text
              Style="normal"
              Text={sectionAmil.listPublications[2]}
              TextClassProps="mt-3 mb-3"
            />
            <Text
              Style="normal"
              Text={sectionAmil.listPublications[3]}
              TextClassProps="mt-3 mb-3"
            />
            <Text
              Style="normal"
              Text={sectionAmil.listPublications[4]}
              TextClassProps="mt-3 mb-[80px]"
            />
          </div>
        </div>
      </div>
    </>
  )
}
