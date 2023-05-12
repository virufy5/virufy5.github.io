
//Organismo
import SectionDonate from "~/components/organisms/section-donate/SectionDonate"
import SectionJoinOurTeam from "~/components/organisms/section-join-our-team/SectionJoinOurTeam"
import SectionTellYourStoryGetInvolved from "~/components/organisms/section-tell-your-story-get-involved/SectionTellYourStoryGetInvolved"

export default function GetInvolved() {


	return (
		<div className="max-w-[1440px] 100vw mx-[auto]">
            <SectionDonate ContainerTextProps="" ContainerTitleProps="" border="" alt=""/>
            <SectionJoinOurTeam ContainerTextProps="" ContainerTitleProps="" border="" alt=""/>
            <SectionTellYourStoryGetInvolved border="" alt=""/>          
		</div>
	);
}