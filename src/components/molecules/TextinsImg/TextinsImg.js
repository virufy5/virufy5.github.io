import ImageAtom from "~/components/atoms/imageAtom/ImageAtom";
import Title from "~/components/atoms/Title/Title";

export default function TextinsImg({
	sizeImg,
	borderImg,
	routeImg,
	altImg,
	Text
}) {
	return (
		<div className="over overflow-hidden relative w-[100%]">

			<ImageAtom
				imagesize={sizeImg}
				border={borderImg}
				route={routeImg}
				alt={altImg}
			/>

			<Title 
				Text={Text}
				H="h3"
				TitleClassProps="
					absolute top-[50%] 
					left-[50%] 
					translate-y-[-50%] 
					translate-x-[-50%]
					text-white
				"
			/>
			

		</div>
	)
}
