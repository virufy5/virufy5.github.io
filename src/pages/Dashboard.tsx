
//Organismo
import TitleText from "~/components/molecules/TitleText/TitleText"
import ImageAtomLocal from "~/components/atoms/imageAtom/ImageAtomLocal"
import Map from "~/assets/static/images/dashboard/map.jpg"
import Section7 from "~/components/organisms/section-7/Section7"

export default function Dashboard() {


	return (
		<>
            <div className="w-full h-[300px] bg-slate-100 px-[7%] flex flex-col items-start justify-center gap-5">
                <TitleText
                    //TitleText
                    TitleSize="h1"
                    TitleLabel="Collected Data"
                    TextSize="normal"
                    TextLabel={"Your cough helps us improve our predictive model, thus being crucial in the fight against COVID-19. Contribute to the progress we are making by sharing your cough!"}
                    ContainerTextProps="items-start"
                    TextClassProps=""
                    TitleClassProps=""
                    ContainerTitleProps=""

			    />
            </div>
            <div>
                <ImageAtomLocal src={Map} imagesize="" ImageStyleProps="" alt="" border=""/>
            </div>
            <Section7 TitleLabel="Let’s help the world and save many lives by recording your cough" Label1="share your cough" Label2="learn more"/> 
		</>
	);
}