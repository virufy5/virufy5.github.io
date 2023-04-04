import ImageAtomURL from "~/components/atoms/imageAtom/ImageAtomURL";
import Title from "~/components/atoms/Title/Title";

export default function TextinsImg({
	sizeImg,
	borderImg,
	src,
	altImg,
	Text
}) {
	return (
		<div className="over overflow-hidden relative w-[100%]">
			<ImageAtomURL
				imagesize={sizeImg}
				border={borderImg}
				src={src}
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
