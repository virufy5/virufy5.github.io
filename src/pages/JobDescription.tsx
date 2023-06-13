
import React from 'react'
import Title from '~/components/atoms/Title/Title'
import Text from "~/components/atoms/Text/Text";
import Button from '~/components/atoms/button/Button';

export default function DetailBlog() {

    return (
        <div className='max-w-[1440px] mx-auto flex'>
            <div className="flex flex-col max-w-[1100px] items-center">
                <div className="flex mt-10 lg:mt-20 w-full px-2 items-center flex-1">
                    <div className="px-10 w-full lg:items-start text-start flex flex-col gap-5">
                        <Title
                            Text={"Project Manager"}
                            H={"h4"}
                            TitleClassProps={"w-[97%] lg:mb-3 text-start "}
                        />
                    </div>
                </div>
                <div className="px-12 w-full flex flex-col mb-[30px] text-start m-0">
                    <p>
                        Seeking an individual to contribute on a part-time volunteer basis and collaborate closely with the Virufy development team, define the product roadmap, manage development progress and align with stakeholders.
                    </p>
                </div>
                <div className="flex mt-10 lg:mt-10 w-full px-2 items-center flex-1">
                    <div className="px-10 w-full lg:items-start text-start flex flex-col gap-5">
                        <Title
                            Text={"Responsibilities"}
                            H={"h4"}
                            TitleClassProps={"w-[97%] lg:mb-3 text-start "}
                        />
                    </div>
                </div>
                <div className="px-12 w-full flex flex-col mb-[30px] text-start m-0">
                    <li>
                        Define product roadmap and manage product backlog
                    </li>
                    <li>
                        Analyze user needs and market conditions
                    </li>
                    <li>
                        Communicate product requirements to the development team
                    </li>
                    <li>
                        Prioritize tasks and ensure they are successfully achieved
                    </li>
                    <li>
                        Develop, implement, and maintain production timeline
                    </li>
                    <li>
                        Work collaboratively with development team, UI/UX, and partner companies
                    </li>
                </div>
                <div className="flex mt-10 lg:mt-10 w-full px-2 items-center flex-1">
                    <div className="px-10 w-full lg:items-start text-start flex flex-col gap-5">
                        <Title
                            Text={"Minimum Qualifications"}
                            H={"h4"}
                            TitleClassProps={"w-[97%] lg:mb-3 text-start "}
                        />
                    </div>
                </div>
                <div className="px-12 w-full flex flex-col mb-[30px] text-start m-0">
                    <li>
                        Age 18 or over
                    </li>
                    <li>
                        Legally authorized to work in the United States ( We do not sponsor Visas )
                    </li>
                    <li>
                        High School Graduate or College Degree
                    </li>
                    <li>
                        Valid Photo ID ( Drivers License or Passport )
                    </li>
                    <li>
                        Must Be Multi-Lingual ( English, Spanish & Portuguese )
                    </li>
                </div>
                <div className="flex mt-10 lg:mt-10 w-full px-2 items-center flex-1">
                    <div className="px-10 w-full lg:items-start text-start flex flex-col gap-5">
                        <Title
                            Text={"Desired Skills"}
                            H={"h4"}
                            TitleClassProps={"w-[97%] lg:mb-3 text-start "}
                        />
                    </div>
                </div>
                <div className="px-12 w-full flex flex-col mb-[30px] text-start m-0">
                    <li>
                        Previous experience in product management (may include research or internship)
                    </li>
                    <li>
                        Organized, collaborative, and detail-oriented
                    </li>
                    <li>
                        Exceptional communication skills
                    </li>
                    <li>
                        Strong sense of responsibility
                    </li>
                </div>
                <div className="flex mt-10 lg:mt-10 w-full px-2 items-center flex-1">
                    <div className="px-10 w-full lg:items-start text-start flex flex-col gap-5">
                        <Title
                            Text={"Questions?"}
                            H={"h4"}
                            TitleClassProps={"w-[97%] lg:mb-3 text-start "}
                        />
                    </div>
                </div>
                <div className="px-12 w-full flex flex-col mb-[30px] text-start m-0">
                    <li>
                        Reach out to vivek.krishnani@virufy.org and we will get back to you promptly.
                    </li>

                </div>
                <div className='flex w-full px-12 mb-16'>
                    <Button size="medium" type="primary" path="#" label="APPLY TO THIS ROLE" />
                </div>

            </div>
            <div className='flex justify-center w-[340px] pt-20'>
                <Button size="medium" type="primary" path="#" label="APPLY TO THIS ROLE" />
            </div>
        </div>
    )
}