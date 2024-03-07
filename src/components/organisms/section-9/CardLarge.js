import Title from '~/components/atoms/Title/Title'
import Text from '~/components/atoms/Text/Text'
import ImageAtomLocal from '~/components/atoms/imageAtom/ImageAtomLocal'

export default function CardLarge({ CardsData, CardClassProps }) {
  return (
    <div className="mb-4 mt-5 flex w-[100vw] max-w-[1440px] flex-wrap items-center justify-center text-center">
      {CardsData?.map(({ route, name, text, id }) => (
        <div className={CardClassProps} key={id}>
          <div className="mr-2 flex h-[100px] w-[100px]">
            <ImageAtomLocal
              border="none"
              src={route}
              alt="Imagen card"
              ImageStyleProps={''}
              imagesize={''}
            />
          </div>
          <div className="text-left sm:w-[290px] md:w-[403px] lg:w-[403px] 2xl:w-[403px]">
            <Title H="h4" Text={name} TitleClassProps={''} />
            <Text Style="small" Text={text} TextClassProps="mt-[4px]" />
          </div>
        </div>
      ))}
    </div>
  )
}
