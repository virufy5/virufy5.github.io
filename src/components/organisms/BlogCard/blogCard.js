import TitleText from "~/components/molecules/TitleText/TitleText"
import ImageAtomLocal from "~/components/atoms/imageAtom/ImageAtomLocal"
import Image1 from "~/assets/static/images/Blog Cards Images/1.jpg"
import LinkAtom from "~/components/atoms/LinkAtom/LinkAtom"

export default function blogCard() {

    const link1 = [
        { label: 'Read Here', route: '/es/Home' }
    ]

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col lg:flex-row items-center justify-center max-w-[1300px] w-[100vw] mt-12 mb-8">
                <div className="w-full lg:w-1/2 flex items-center justify-end mb-[20px]">
                    <ImageAtomLocal
                        imagesize="pr100"
                        border=""
                        src={Image1}
                        alt=""
                        ImageStyleProps=""
                    />
                </div>
                <div className="flex mt-2 lg:mt-0 w-full lg:w-2/5 px-[20px] lg:px-[0px] items-center flex-1">
                    <div className="w-full lg:items-start text-start flex flex-col gap-5 md:pl-7">
                        <TitleText
                            TitleSize="h3"
                            TitleLabel="How Do We Ensure that Healthcare AI is Useful?"
                            TextSize="normal"
                            TextLabel="In healthcare, predictive models need to be more than good predictors. Stanford scholars suggest a framework for determining a model’s worth."
                            ContainerTitleProps=""
                            ContainerTextProps=""
                            TextClassProps=""
                            TitleClassProps=""
                        />
                        <LinkAtom Routes={link1} Style="linkBlog" />
                    </div>
                </div>
            </div>
        </div >
    )
}
