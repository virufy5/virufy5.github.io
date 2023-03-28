
//Organismo
import Section1 from "~/components/organisms/section-1/Section1"
import Section9 from "~/components/organisms/section-9/Section9"



export default function OurResearch() {

	const TitleLabels = [ 
		"1. Imperial College London", 
		"2. Carnegie Mellon University (CMU)",
		"3. Massachusetts Institute of Technology (MIT)",
		"4. University of Cambridge"
	]
	const TextLabels = [
		"Our The study 'A Cough-Based Algorithm for Automatic Diagnosis of Pertussis' uses pertussis cough, croup, and cough containing wheezing sounds corresponding to other diseases read more...", 
		"A study by Carnegie Mellon University aimed to collect a large number of voice samples to train AI for diagnosis of COVID. The rationale behind the study is that, the sound of our voice read more...",
		"MIT's IEEE reviewed research reported sensitivities of 98% for asymptomatic COVID-19 detection from cough alone read more...",
		"A crowdsource research done by University of Cambridge that used cough samples and breathing to understand how discernible COVID-19 sounds are from those in asthma or healthy controls read more..."
	]		

	return (
		<>
			<h1 className="text-sky-600 text-3xl m-4">How it Works</h1>

			<p className="text-gray-300">Section - 1</p>
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
				route="https://s3-alpha-sig.figma.com/img/1c56/4fa2/71f0b0f4dc7191df90d6306e3d0a71e1?Expires=1681084800&Signature=AJK9YUVOo29xjV9svfAzWEwJ~RfAysLWnUJOpVuCX4cT4btRepyL7GiFcoSXfZinNBtH9UqshlT5~be4VTHE8PEWt8HNPbc3vNbC-4dkPVPZ72SKItjiyGE-6soH-3vLaQb4p6AETg~CP3Thj7yY52oIJXbBd3p2D77WRYtRu0HzczDFu24RitMRHCvSbCvfOZAXnvaSPL6QKEre4iSgKDzByRFJEQFpUmvsLKvFbu5CegCtXsXDu2m9-zlBJNsUuXAVH004b4uNF5kUyJTyZCEl1xv104Op0zfFs~UIZSy-NPaWRFuF9FW1-1ScaHn7HjqBwhcIHqTzUOYsTg27bQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
				alt="imagen de algo"

			/>
			
			<p className="text-gray-300">Section - 9</p>
			<Section9
				TitleSize="h3"
				TitleLabel={TitleLabels}
				TextSize="normal"
				TextLabel={TextLabels}
				ContainerTitleProps="{ContainerTitleProps}"
				ContainerTextProps="{ContainerTextProps}"
				sizeBtn="medium" 
				typeBtn="primary" 
				labelBtn="Read our papers" 
				pathBtn="/about"
			/>


		</>
	);
}