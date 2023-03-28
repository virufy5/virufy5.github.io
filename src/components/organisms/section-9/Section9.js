import Button from "~/components/atoms/button/Button"
import Title from "~/components/atoms/Title/Title"
import TitleText from "~/components/molecules/TitleText/TitleText"

export default function Section9({
	TitleSize,
	TitleLabel,
	TextSize,
	TextLabel,
	ContainerTitleProps,
	ContainerTextProps,
	TitleClassProps,
	TextClassProps,
	sizeBtn,
	typeBtn,
	labelBtn,
	pathBtn,
}) {
	return (
		<div
			style={{
				width: "100%",
				textAlign: "center",
				alignItems: "center",
			}}>

			<Title
				Text="Research"
				H="h1"
				TitleClassProps="mt-4"
			/>

			<div className="flex mt-3"
				style={{
					width: "100%",
				}}>
				<div className=""
					style={{
						width: "50%",
					}}>

					<TitleText
						TitleSize={TitleSize}
						TitleLabel={TitleLabel[0]}
						TextSize={TextSize}
						TextLabel={TextLabel[0]}
						ContainerTitleProps={ContainerTitleProps}
						ContainerTextProps={ContainerTextProps}
						TitleClassProps="ml-[5vw] text-left"
						TextClassProps="ml-[5vw] mt-2 text-left"
					/>

				</div>
				<div className=""
					style={{
						width: "50%",
					}}>

					<TitleText
						TitleSize={TitleSize}
						TitleLabel={TitleLabel[1]}
						TextSize={TextSize}
						TextLabel={TextLabel[1]}
						ContainerTitleProps={ContainerTitleProps}
						ContainerTextProps={ContainerTextProps}
						TitleClassProps="ml-[2vw] mr-[2.5vw] text-left"
						TextClassProps="ml-[2vw] mr-[2.5vw] mt-2 text-left"
					/>

				</div>
			</div>

			<div className="flex"
				style={{
					width: "100%",
				}}>
				<div className=""
					style={{
						width: "50%",
					}}>
					<TitleText
						TitleSize={TitleSize}
						TitleLabel={TitleLabel[2]}
						TextSize={TextSize}
						TextLabel={TextLabel[2]}
						ContainerTitleProps={ContainerTitleProps}
						ContainerTextProps={ContainerTextProps}
						TitleClassProps="ml-[5vw] mt-2 text-left"
						TextClassProps="ml-[5vw] mt-2 text-left"
					/>
				</div>
				<div className=""
					style={{
						width: "50%",
					}}>

					<TitleText
						TitleSize={TitleSize}
						TitleLabel={TitleLabel[3]}
						TextSize={TextSize}
						TextLabel={TextLabel[3]}
						ContainerTitleProps={ContainerTitleProps}
						ContainerTextProps={ContainerTextProps}
						TitleClassProps="ml-[2vw] mr-[2.5vw] mt-2 text-left"
						TextClassProps="ml-[2vw] mr-[2.5vw] mt-2 text-left"
					/>
				</div>
			</div>
			<Title
				Text="Want to learn more?"
				H="h2"
				TitleClassProps="mt-4 mb-14"
			/>
			<Button 
				size={sizeBtn}
				type={typeBtn}
				label={labelBtn}
				path={pathBtn}
			/>
		</div>
	)
}
