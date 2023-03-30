import Title from "~/components/atoms/Title/Title";
import Text from "~/components/atoms/Text/Text";
import ImageAtom from "~/components/atoms/imageAtom/ImageAtom";

export default function Card({
	CardsData
}) {

	
	
	return (
		<div className="flex flex-wrap -mb-4 text-center items-center w-[100%] justify-center">

			{CardsData?.map(({ route, name, text, subtitle }) => (

				<div className="flex-col flex text-center items-center w-[348px] sm:w-1/1 md:w-1/2 lg:w-1/3 xl:w-1/3 mb-4 mt-4">
					<ImageAtom
						imagesize="pr30"
						border="circular"
						route={route}
						alt="Imagen card"
					/>

					<Title
						H="h3"
						Text={name}
					/>
					<Text
						Style="subtitle"
						Text={subtitle}

					/>
					<Text
						Style="normal"
						Text={text}
						TextClassProps="ml-[50px] mr-[50px]"
					/>
				</div>
			))}

		</div>
	)
}
