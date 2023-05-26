
import React from 'react'
import Title from '~/components/atoms/Title/Title'
import Text from "~/components/atoms/Text/Text";

export default function DetailBlog() {

    return (
        <div>
            <div className="flex flex-col items-center">
                <div className="flex mt-10 lg:mt-20 w-full lg:max-w-[1440px] px-2 items-center flex-1">
                    <div className="w-full lg:items-start text-start flex flex-col gap-5">
                        <Title
                            Text={"Project Manager"}
                            H={"h4"}
                            TitleClassProps={"w-[97%] lg:mb-3 text-start "}
                        />
                    </div>
                </div>
                <div className="flex flex-col ml-2 max-w-[1440px] mb-[30px]">
                    <Text
                        Style="normal"
                        Text="Seeking an individual to contribute on a part-time volunteer basis and collaborate closely with the Virufy development team, define the product roadmap, manage development progress and align with stakeholders."
                        TextClassProps="w-[97%] lg:mb-3 text-start "
                    />
                </div>
                <div className="flex mt-10 lg:mt-20 w-full lg:max-w-[1440px] px-2 items-center flex-1">
                    <div className="w-full lg:items-start text-start flex flex-col gap-5">
                        <Title
                            Text={"Responsibilities"}
                            H={"h4"}
                            TitleClassProps={"w-[97%] lg:mb-3 text-start "}
                        />
                    </div>
                </div>
                <div className="flex flex-col ml-2 max-w-[1440px] mb-[30px]">
                    <Text
                        Style="normal"
                        Text="Define product roadmap and manage product backlog 
Analyze user needs and market conditions
Communicate product requirements to the development team
Prioritize tasks and ensure they are successfully achieved
Develop, implement, and maintain production timelines
Work collaboratively with development team, UI/UX, and partner companies"
                        TextClassProps="w-[97%] lg:mb-3 text-start "
                    />
                </div>
                <div className="flex mt-10 lg:mt-20 w-full lg:max-w-[1440px] px-2 items-center flex-1">
                    <div className="w-full lg:items-start text-start flex flex-col gap-5">
                        <Title
                            Text={"Minimum Qualifications"}
                            H={"h4"}
                            TitleClassProps={"w-[97%] lg:mb-3 text-start "}
                        />
                    </div>
                </div>
                <div className="flex flex-col ml-2 max-w-[1440px] mb-[30px]">
                    <Text
                        Style="normal"
                        Text="Age 18 or over 
Legally authorized to work in the United States ( We do not sponsor Visas ) 
High School Graduate or College Degree 
Valid Photo ID ( Drivers License or Passport ) 
Must Be Multi-Lingual ( English, Spanish & Portuguese )  "
                        TextClassProps="w-[97%] lg:mb-3 text-start "
                    />
                </div>
                <div className="flex mt-10 lg:mt-20 w-full lg:max-w-[1440px] px-2 items-center flex-1">
                    <div className="w-full lg:items-start text-start flex flex-col gap-5">
                        <Title
                            Text={"Desired Skills"}
                            H={"h4"}
                            TitleClassProps={"w-[97%] lg:mb-3 text-start "}
                        />
                    </div>
                </div>
                <div className="flex flex-col ml-2 max-w-[1440px] mb-[30px]">
                    <Text
                        Style="normal"
                        Text="Previous experience in product management (may include research or internship)
Organized, collaborative, and detail-oriented
Exceptional communication skills
Strong sense of responsibility"
                        TextClassProps="w-[97%] lg:mb-3 text-start "
                    />
                </div>
                <div className="flex mt-10 lg:mt-20 w-full lg:max-w-[1440px] px-2 items-center flex-1">
                    <div className="w-full lg:items-start text-start flex flex-col gap-5">
                        <Title
                            Text={"Questions?"}
                            H={"h4"}
                            TitleClassProps={"w-[97%] lg:mb-3 text-start "}
                        />
                    </div>
                </div>
                <div className="flex flex-col ml-2 max-w-[1440px] mb-[30px]">
                    <Text
                        Style="normal"
                        Text="Reach out to vivek.krishnani@virufy.org and we will get back to you promptly."
                        TextClassProps="w-[97%] lg:mb-3 text-start "
                    />
                </div>
            </div>
        </div>
    )
}