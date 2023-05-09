import TitleText from "~/components/molecules/TitleText/TitleText"
import Video from "../../atoms/videoAtom/Video"

export default function SectionTellYourStoryGetInvolved() {
    return (
        <div className="text-center flex flex-col md:mb-[70px] md:mt-[70px]">
            <div className="flex items-center flex-col max-w-[1200px] w-[100vw]">
                <div className="flex md:w-1/2 px-7 flex-col items-center justify-center gap-11 mb-10">
                    <TitleText
                        //TitleText
                        TitleSize="h1"
                        TitleLabel="One Young World"
                        TextSize="subtitle"
                        TextLabel={"Virufy & One Young World"}
                        ContainerTextProps="items-start"
                        TextClassProps=""
                        TitleClassProps=""
                        ContainerTitleProps=""

                    />
                </div>
                <div className="flex md:w-3/5 px-7 flex-col items-center justify-center gap-4 mb-5">
                    <TitleText
                        //TitleText
                        TextSize="normal"
                        TextLabel={"Our world needs great leadership. The new generation is one of the most informed, educated and well connected generations in world history. One Young World identifies, promotes and connects the most impactful young leaders across the globe to create a better world: a world with more responsible and effective leadership."}
                        ContainerTextProps="text-start"
                        TextClassProps=""
                        TitleClassProps=""
                        ContainerTitleProps=""
                        TitleLabel=""
                        TitleSize=""
                    />
                    <TitleText
                        //TitleText
                        TextSize="normal"
                        TextLabel={"Virufy has been featured on various OYW platforms, including in the Americas and Japan, ambassadors in action , and ambassadors on the frontline for COVID-19 response . We are also collaborating with OYW coordinating ambassadors across various regions for outreach efforts."}
                        ContainerTextProps="text-start"
                        TextClassProps=""
                        TitleClassProps=""
                        ContainerTitleProps=""
                        TitleLabel=""
                        TitleSize=""
                    />
                </div>
                <div className="flex md:hidden mt-[40px] align-center justify-center">
                    <Video width="370px" height="208px" url="https://youtu.be/hvJgwPNYnZo" />
                </div>
                <div className="hidden md:flex xl:hidden mt-[40px] align-center justify-center">
                    <Video width="800px" height="450px" url="https://youtu.be/hvJgwPNYnZo" />
                </div>
                <div className="hidden xl:flex mt-[40px] align-center justify-center">
                    <Video width="1280px" height="720px" url="https://youtu.be/hvJgwPNYnZo" />
                </div>
            </div>
            
        </div>
    )
}
