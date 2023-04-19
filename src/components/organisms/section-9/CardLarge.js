import Title from "~/components/atoms/Title/Title";
import Text from "~/components/atoms/Text/Text";
import ImageAtomLocal from "~/components/atoms/imageAtom/ImageAtomLocal";

export default function CardLarge({
  CardsData,
  CardClassProps
}) {
  return (
    <div className="flex flex-wrap mb-4 text-center items-center w-[100%] justify-center mt-5">

      {CardsData?.map(({ route, name, text, id }) => (

        <div className={CardClassProps} key={id}>
          <div className="h-[100px] w-[100px] flex mr-2">
          <ImageAtomLocal
            border="none"
            src={route}
            alt="Imagen card"
          />
          </div>
          <div className="w-[362px] sm:w-[270px] md:w-[362px] lg:w-[362px] xl:w-[362px] text-left">
            <Title
              H="h4"
              Text={name}
            />
            <Text
              Style="small"
              Text={text}
              TextClassProps="mt-[4px]"
            />
          </div>
        </div>
      ))}

    </div>
  )
}
