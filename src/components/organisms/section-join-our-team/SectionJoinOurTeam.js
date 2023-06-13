import TitleText from "~/components/molecules/TitleText/TitleText"
import ImageAtomLocal from "~/components/atoms/imageAtom/ImageAtomLocal"
import Button from "~/components/atoms/button/Button"
import CareerImage from "~/assets/static/images/section-join-our-team/JoinOurTeam1.jpg"
import BecomeAPartner from "~/assets/static/images/section-join-our-team/JoinOurTeam2.jpg"

export default function SectionJoinOurTeam({
    ContainerTitleProps,
    ContainerTextProps,
    border,
    alt,
}) {
    return (
        <div className="text-center mb-[40px] flex flex-col">
            <div className="flex w-full px-7 py-16 flex-col items-center justify-center gap-7">
                <TitleText
                    //TitleText
                    TitleSize="h1"
                    TitleLabel="Join our team"
                    TextSize="subtitulo"
                    TextLabel={"Whether you're a humanitarian, an expert, or simply want to take part in Virufy's mission, there are so many ways to help!"}
                    ContainerTextProps="items-start"
                    TextClassProps=""
                    TitleClassProps=""
                    ContainerTitleProps=""

                />
            </div>
            <div className="flex flex-col lg:flex-row">
                <div className="flex w-full lg:w-1/2 lg:px-5">
                    <div className="flex flex-col items-center">
                        <div className="w-full px-7 flex flex-col items-center justify-center gap-7">
                            <TitleText
                                //TitleText
                                TitleSize="h2"
                                TitleLabel="Careers"
                                ContainerTextProps="items-start"
                                TextClassProps=""
                                TitleClassProps=""
                                ContainerTitleProps=""
                                TextLabel=""
                                TextSize=""
                            />
                        </div>
                        <div className="w-full flex items-center mx-[auto]">
                            <ImageAtomLocal
                                imagesize="pr100"
                                border={border}
                                src={CareerImage}
                                alt={alt}
                                ImageStyleProps=""
                            />
                        </div>
                        <div className="flex w-full px-[20px] items-center">
                            <div className="w-full items-center flex flex-col gap-7 text-gray-700">
                                <TitleText
                                    TextSize="subtitulo"
                                    TextLabel="Join our fast-paced, mission-driven team combining unique skills to curb the spread of the pandemic globally."
                                    ContainerTitleProps={ContainerTitleProps}
                                    ContainerTextProps={ContainerTextProps}
                                    TextClassProps=""
                                    TitleClassProps=""
                                    TitleLabel=""
                                    TitleSize=""
                                />
                                <div className="flex-col justify-center mb-14">
                                    <Button size="medium" type="primary" path="/JobListing" label="View available roles" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-full lg:w-1/2 lg:px-5">
                    <div className="flex flex-col items-center">
                        <div className="w-full px-7 flex flex-col items-center justify-center gap-7">
                            <TitleText
                                //TitleText
                                TitleSize="h2"
                                TitleLabel="Become a partner"
                                ContainerTextProps="items-start"
                                TextClassProps=""
                                TitleClassProps=""
                                ContainerTitleProps=""
                                TextLabel=""
                                TextSize=""
                            />
                        </div>
                        <div className="w-full flex items-center justify-end">
                            <ImageAtomLocal
                                imagesize="pr100"
                                border={border}
                                src={BecomeAPartner}
                                alt={alt}
                                ImageStyleProps=""
                            />
                        </div>
                        <div className="flex w-full px-[20px] items-center">
                            <div className="w-full items-center flex flex-col gap-7 text-gray-700">
                                <TitleText
                                    TextSize="subtitulo"
                                    TextLabel="We work with established medical, technology, and government organizations across the globe to shape Virufy’s mission."
                                    ContainerTitleProps={ContainerTitleProps}
                                    ContainerTextProps={ContainerTextProps}
                                    TextClassProps=""
                                    TitleClassProps=""
                                    TitleLabel=""
                                    TitleSize=""
                                />
                                <div className="flex-col justify-center mb-14">
                                    <Button size="medium" type="primary" path="/OurPeople1" label="Become a partner" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
