import Image from "~/components/atoms/imageAtom/Image"
import TitleText from "~/components/molecules/TitleText/TitleText"

export default function Section7({
	TitleSize,
	TitleLabel1,
	TitleLabel2,
	TitleLabel3,
	TextSize,
	TextLabel1,
	TextLabel2,
	TextLabel3,
	ContainerTitleProps,
	ContainerTextProps,
	sizeImg,
	border,
	route1,
	route2,
	route3,
	alt,

}) {
	return (
		<div className="flex"
			style={{
				width: "100vw",
			}}>
			<div
				style={{
					display: "flex",
					textAlign: "center",
					flexDirection: "column",
					alignItems: "center",
					flex: "1"
				}} className="ml-[5vw] bg-yellow-500">
				<Image
					size={sizeImg}
					border={border}
					route={route1}
					alt={alt}
				/>
				<TitleText
					TitleSize={TitleSize}
					TitleLabel={TitleLabel1}
					TextSize={TextSize}
					TextLabel={TextLabel1}
					ContainerTextProps={ContainerTextProps}
				/>
			</div>
			<div style={{
					display: "flex",
					textAlign: "center",
					flexDirection: "column",
					alignItems: "center",
					flex: "1"
			}} className="bg-blue-500">
				<Image
					size={sizeImg}
					border={border}
					route={route2}
					alt={alt}
				/>
				<TitleText
					TitleSize={TitleSize}
					TitleLabel={TitleLabel2}
					TextSize={TextSize}
					TextLabel={TextLabel2}
					ContainerTextProps={ContainerTextProps}
				/>				
			</div>
			<div style={{
					display: "flex",
					textAlign: "center",
					flexDirection: "column",
					alignItems: "center",
					flex: "1"
			}} className="mr-[2.5vw] bg-red-500">
				<Image
					size={sizeImg}
					border={border}
					route={route3}
					alt={alt}
				/>
				<TitleText
					TitleSize={TitleSize}
					TitleLabel={TitleLabel3}
					TextSize={TextSize}
					TextLabel={TextLabel3}
					ContainerTextProps={ContainerTextProps}
				/>				
			</div>

		</div>
	)
}