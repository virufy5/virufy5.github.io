import TitleText from "~/components/molecules/TitleText/TitleText"
import ImageAtomLocal from "~/components/atoms/imageAtom/ImageAtomLocal"
import Button from "~/components/atoms/button/Button"
import Image from "~/assets/static/images/SectionTellYourStoryGetInvolved/SectionTellYourStoryGetInvolved.jpg"

export default function SectionTellYourStoryGetInvolved({
    border,
    alt,
}) {
    return (
        <div className="text-center flex flex-col md:mb-[120px]">
            <div className="flex items-center flex-col">
                <div className="flex md:w-1/2 px-7 flex-col items-center justify-center gap-7">
                    <TitleText
                        //TitleText
                        TitleSize="h1"
                        TitleLabel="Tell your story"
                        TextSize="subtitulo"
                        TextLabel={"Many people will find motivation in your story."}
                        ContainerTextProps="items-start"
                        TextClassProps=""
                        TitleClassProps=""
                        ContainerTitleProps=""

                    />
                </div>
                <div className="flex md:w-1/2 px-7 pb-16 flex-col items-center justify-center gap-7">
                    <TitleText
                        //TitleText
                        TextSize="subtitulo"
                        TextLabel={"Share how COVID-19 has affected you or your loved ones, and how you have been able to overcome the disease."}
                        ContainerTextProps="items-start"
                        TextClassProps=""
                        TitleClassProps=""
                        ContainerTitleProps=""
                        TitleLabel=""
                        TitleSize=""
                    />
                </div>
            </div>
            <div className="flex-col justify-center mb-14">
                <Button size="medium" type="primary" path="#" label="Tell us your story" />
            </div>
            <div className="w-full md:hidden flex items-center justify-end">
                <ImageAtomLocal
                    imagesize="pr100"
                    border={border}
                    src={Image}
                    alt={alt}
                    ImageStyleProps=""
                />
            </div>
            <div className="hidden w-full md:flex items-center justify-center md:pt-10">
                <ImageAtomLocal
                    imagesize="pr70"
                    border={border}
                    src={Image}
                    alt={alt}
                    ImageStyleProps=""
                />
            </div>
        </div>
    )
}
