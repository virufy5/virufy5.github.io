import Button from "~/components/atoms/button/Button"
import ImageAtomLocal from "~/components/atoms/imageAtom/ImageAtomLocal"
import TitleText from "~/components/molecules/TitleText/TitleText"

export default function Section8({
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
		<div>
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
					}} className="ml-[5vw]">
					<ImageAtomLocal
						imagesize={sizeImg}
						border={border}
						src={route1}
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
				}} className="">
					<ImageAtomLocal
						imagesize={sizeImg}
						border={border}
						src={route2}
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
				}} className="mr-[2.5vw]">
					<ImageAtomLocal
						imagesize={sizeImg}
						border={border}
						src={route3}
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
			<div
				style={{
					textAlign: "center"
				}} className="ml-[5vw] mr-[2.5vw] mt-2">
				<Button
					size="medium"
					type="primary"
					label="Share your cough"
					path="/HowItWorks"
				/>
			</div>
		</div>
	)
}