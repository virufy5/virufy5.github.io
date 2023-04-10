import Title from "~/components/atoms/Title/Title";
import Text from "~/components/atoms/Text/Text";
import ImageAtomLocal from "~/components/atoms/imageAtom/ImageAtomLocal";

import Card1 from "~/assets/static/images/ourPeople/card1.jpg"
import Card3 from "../../../assets/static/images/ourPeople/card3.jpg"
import Card2 from "~/assets/static/images/ourPeople/card2.jpg"

export default function Card({
	CardsData
}) {	
	
	return (
		<div className="flex flex-wrap mb-4 text-center items-center w-[100%] justify-center mt-5">

			{CardsData?.map(({ route, name, text, subtitle }) => (

				<div className="flex flex-col text-center items-center w-[348px] sm:w-1/1 md:w-1/2 lg:w-1/3 xl:w-1/3 mb-4 mt-4">
					<ImageAtomLocal
						imagesize="pr30"
						border="circular"
						src={route}
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
