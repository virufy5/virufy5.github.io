import TitleText from "~/components/molecules/TitleText/TitleText"
import ImageAtomLocal from "~/components/atoms/imageAtom/ImageAtomLocal"
import Button from "~/components/atoms/button/Button"
import Donate from "~/assets/static/images/section-donate/donate.jpg"

export default function SectionDonate({
    ContainerTitleProps,
    ContainerTextProps,
    border,
    alt,
}) {
    return (
        <div className="text-center md:mt-[70px] md:mb-[70px] mb-[40px] flex flex-col md:ml-[5vw] md:mr-[5vw]">
            <div className="flex flex-col md:flex-row-reverse items-center flex-1">
                <div className="w-full md:w-1/2 flex items-center justify-end md:pl-[40px]">
                    <ImageAtomLocal
                        imagesize="pr100"
                        border={border}
                        src={Donate}
                        alt={alt}
                    />
                </div>
                <div className="flex mt-14 md:mt-0 md:hidden w-full md:w-2/5 px-[20px] md:px-[0px] items-center flex-1">
                    <div className="w-full items-center md:items-start md:text-left flex flex-col gap-5">
                        <TitleText
                            TitleSize="h2"
                            TitleLabel="Donate"
                            TextSize="normal"
                            TextLabel="We need your contribution to be able to continue helping millions of people in the fight against Covid-19"
                            ContainerTitleProps={ContainerTitleProps}
                            ContainerTextProps={ContainerTextProps}
                        />
                        <div className="flex md:hidden flex-col justify-center">
                            <Button size="medium" type="primary" path="#" label="DONATE" />
                        </div>
                    </div>
                </div>
                <div className="hidden mt-14 md:mt-0 md:flex flex-row w-full md:w-2/5 px-[20px] md:px-[0px] items-center flex-1">
                    <div className="w-full items-center md:items-start md:text-left flex flex-col gap-5">
                        <TitleText
                            TitleSize="h2"
                            TitleLabel="Donate"
                            TextSize="subtitulo"
                            TextLabel="We need your contribution to be able to continue helping millions of people in the fight against Covid-19"
                            ContainerTitleProps={ContainerTitleProps}
                            ContainerTextProps={ContainerTextProps}
                        />
                        <div className="hidden md:flex flex-col justify-center">
                            <Button size="medium" type="primary" path="#" label="DONATE" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
