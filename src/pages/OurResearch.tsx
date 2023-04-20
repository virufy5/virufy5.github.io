
//Organismo
import Section1 from "~/components/organisms/section-1/Section1"
/* import Section9 from "~/components/organisms/section-9/Section9" */
import CardLargue from "~/components/organisms/section-9/CardLarge"

//image
import imageOurResearch from "~/assets/static/images/OurResearch/image.png"
import microscope from "~/assets/static/images/OurResearch/microscope.png"
import Title from "~/components/atoms/Title/Title"
import Button from "~/components/atoms/button/Button"

export default function OurResearch() {

	const CardsData = [
		{
			route: microscope,
			name: "1. Imperial College London",
			text: "Our The study 'A Cough-Based Algorithm for Automatic Diagnosis of Pertussis' uses pertussis cough, croup, and cough containing wheezing sounds corresponding to other diseases read more...",
		},
		{
			route: microscope,
			name: "2. Carnegie Mellon University (CMU)",
			text: "A study by Carnegie Mellon University aimed to collect a large number of voice samples to train AI for diagnosis of COVID. The rationale behind the study is that, the sound of our voice read more...",
		},
		{
			route: microscope,
			name: "3. Massachusetts Institute of Technology (MIT)",
			text: "MIT's IEEE reviewed research reported sensitivities of 98% for asymptomatic COVID-19 detection from cough alone read more...",
		},
		{
			route: microscope,
			name: "4. University of Cambridge",
			text: "A crowdsource research done by University of Cambridge that used cough samples and breathing to understand how discernible COVID-19 sounds are from those in asthma or healthy controls read more..."
		},
	]

	return (
		<>
			<Section1
				//TitleText
				TitleSize="h1"
				TitleLabel="The science behind Virufy"
				TextSize="normal"
				TextLabel={"Artificial intelligence (AI) is capable of detecting minute differences in vocal patterns to detect disease presence."}
				ContainerTextProps="items-start h-[100%] mr-4"
				//Image
				sizeImg="pr90"
				border="none"
				route={imageOurResearch}
				alt="imagen de algo"

			/>

			<div className="
    w-[100%] text-center items-center mb-5
    ">
				<Title
					Text="Research"
					H="h1"
					TitleClassProps="mt-4"
				/>
				<CardLargue
					CardsData={CardsData}
					CardClassProps="flex flex-row text-center items-center justify-center sm:w-1/1 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 mt-4"
				/>
				<Title
					Text="Want to learn more?"
					H="h2"
					TitleClassProps="mt-4 mb-14"
				/>
				<Button
					size="medium"
					type="primary"
					label="Read our papers"
					path="/about"
				/>
			</div>
		</>
	);
}