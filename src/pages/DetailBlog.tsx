
import ImageAtomLocal from "~/components/atoms/imageAtom/ImageAtomLocal"
import Image1 from "~/assets/static/images/Blog Cards Images/1.jpg"
import React from 'react'
import Title from '~/components/atoms/Title/Title'
import Text from "~/components/atoms/Text/Text";
import Button from "~/components/atoms/button/Button"
import LeaveAComment from "~/components/organisms/LeaveAComment/LeaveAComment"

export default function DetailBlog() {

    return (
        <div>
            <div className="flex flex-col items-center">
                <div className="flex mt-10 lg:mt-20 w-full lg:max-w-[1440px] px-2 items-center flex-1">
                    <div className="w-full lg:items-start text-start flex flex-col gap-5">
                        <Title
                            Text={"How Do We Ensure that Healthcare AI is Useful?"}
                            H={"h4"}
                            TitleClassProps={"w-[97%] lg:mb-3 text-start "}
                        />
                        <Text
                            Text={"March 8, 2023 | Katherine Miller"}
                            Style="subtitle"
                            TextClassProps={"w-[97%] lg:mb-7 text-start text-blue-600"}
                        />

                    </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-center max-w-[1440px] w-[100vw] mt-12 mb-8">
                    <div className="w-full flex items-center justify-end lg:mb-[20px]">
                        <ImageAtomLocal
                            imagesize="pr100"
                            border=""
                            src={Image1}
                            alt=""
                            ImageStyleProps=""
                        />
                    </div>
                </div>
                <div className="flex flex-col ml-2 max-w-[1440px] mb-[30px]">
                    <Text
                        Style="subtitle"
                        Text="In the big scheme of healthcare operations, predictive models play a role not unlike that of blood tests, X-rays, or MRIs: They influence decisions about whether an intervention is appropriate."
                        TextClassProps="w-[97%] lg:mb-3 text-start "
                    />
                    <Text
                        Style="subtitle"
                        Text="her to act,” says Nigam Shah, Chief Data Scientist for Stanford Health Care and a Stanford HAI faculty member. But those probability estimates are only useful to healthcare providers if they trigger decisions that are more beneficial than not."
                        TextClassProps="w-[97%] lg:mb-3 text-start "
                    />
                    <Text
                        Style="subtitle"
                        Text="In the big scheme of healthcare operations, predictive models play a role not unlike that of blood tests, X-rays, or MRIs: They influence decisions about whether an intervention is appropriate."
                        TextClassProps="w-[97%] lg:mb-3 text-start "
                    />
                    <Text
                        Style="subtitle"
                        Text="In the big scheme of healthcare operations, predictive models play a role not unlike that of blood tests, X-rays, or MRIs: They influence decisions about whether an intervention is appropriate."
                        TextClassProps="w-[97%] lg:mb-3 text-start "
                    />
                    <Text
                        Style="subtitle"
                        Text="In the big scheme of healthcare operations, predictive models play a role not unlike that of blood tests, X-rays, or MRIs: They influence decisions about whether an intervention is appropriate."
                        TextClassProps="w-[97%] lg:mb-3 text-start "
                    />
                    <Text
                        Style="subtitle"
                        Text="In the big scheme of healthcare operations, predictive models play a role not unlike that of blood tests, X-rays, or MRIs: They influence decisions about whether an intervention is appropriate."
                        TextClassProps="w-[97%] lg:mb-3 text-start "
                    />
                </div>
            </div >

<Title
                Text="Leave a comment"
                H={"h3"}
                TitleClassProps={"w-[100%] mt-8 text-center "}
            />
            <LeaveAComment />


            <div className="flex flex-col items-center bg-[#EEEEEE]">
                <div className="max-w-[1300px] w-[100vw] mt-14 xl:mt-0 flex flex-col xl:flex-row items-center xl:justify-between">
                    <div className="flex xl:hidden">
                        <Title
                            H="h6"
                            Text="How Do We Ensure that Healthcare AI is Useful?"
                            TitleClassProps="text-center"
                        />
                    </div>
                    <div className="hidden xl:flex">
                        <Title
                            H="h5tepsHome"
                            Text="Get the latest in Virufy’s Health Blog"
                            TitleClassProps="text-center"
                        />
                    </div>
                    <div className="mb-8 px-7 mt-7 w-full max-w-[1000px] xl:w-1/3">
                        <input type="name" id="name" className="focus:border-none focus:ring-2 focus:outline-none focus:ring-blue-500 shadow-sm bg-white border text-gray-900 text-smlock w-full p-2.5 border-gray-400" required></input>
                    </div>
                    <div className="flex flex-col justify-center items-center mb-14 xl:mb-0">
                        <Button size="medium" type="primary" path="#" label="Sign Up" />
                    </div>
                </div>
            </div >
        </div>
    )
}