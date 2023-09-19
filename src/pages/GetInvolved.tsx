
//Organismo
import SectionDonate from "~/components/organisms/section-donate/SectionDonate"
import SectionJoinOurTeam from "~/components/organisms/section-join-our-team/SectionJoinOurTeam"
import SectionTellYourStoryGetInvolved from "~/components/organisms/section-tell-your-story-get-involved/SectionTellYourStoryGetInvolved"

import { useI18n } from "~/i18n"

export default function GetInvolved() {

	const {
		GetInvolved_: {
			title1,
			text1,
			button1,
			title2,
			text2,
			title3,
			text3,
			button2,
			title4,
			text4,
			text4_1,
			button3,
			title5,
			text5,
			text5_1,
			button4,
		},
	  } = useI18n();

	  const textProps = {
		title1,
		text1,
		button1,
		title2,
		text2,
		title3,
		text3,
		button2,
		title4,
		text4,
		text4_1,
		button3,
		title5,
		text5,
		text5_1,
		button4,
	  };	  


	return (
		<div className="max-w-[1440px] 100vw mx-[auto]">
            <SectionDonate TextProps={textProps} ContainerTextProps="" ContainerTitleProps="" border="" alt=""/>
            <SectionJoinOurTeam TextProps={textProps} ContainerTextProps="" ContainerTitleProps="" border="" alt=""/>
            <SectionTellYourStoryGetInvolved TextProps={textProps} border="" alt=""/>          
		</div>
	);
}