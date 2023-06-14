import { useRouter } from "next/router"
import React, { useEffect, useState } from 'react'
import Title from '~/components/atoms/Title/Title'
import Button from '~/components/atoms/button/Button';

const IdJob = () => {

  const initialProps = {
    id: "",
    title: "",
    category: {
      id: "",
      title: "",
      createdAt: "",
      updatedAt: ""
    },
    publishedDate: "",
    summary: "",
    link: "",
    slug: "",
    meta: {},
    _status: "",
    createdAt: "",
    updatedAt: "",
    desiredSkills: [
      {
        type: "ul",
        children: [
          {
            children: [
              {
                text: ""
              }
            ],
            type: ""
          }
        ]
      }
    ],
    hours: [
      {
        type: "",
        children: [
          {
            children: [
              {
                text: ""
              }
            ],
            type: ""
          }
        ]
      }
    ],
    minimunQualifications: [
      {
        type: "ul",
        children: [
          {
            children: [
              {
                text: ""
              }
            ],
            type: "li"
          }
        ]
      }
    ],
    responsabilities: [
      {
        type: "ul",
        children: [
          {
            children: [
              {
                "text": ""
              }
            ],
            type: "li"
          }
        ]
      }
    ]
  }

  const [data, setData] = useState(initialProps);
  const [isLoading, setLoading] = useState(false);


  const router = useRouter()

  useEffect(() => {
    setLoading(true);
    fetch(`/api/positions/${router.query.id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);

      }).catch((e) => console.log(e))
  }, []);

  useEffect(() => {
    console.log("Response API: ", data);
  }, [data])

  return (
    <>
      {isLoading ? <p className="text-center text-2xl">Loading...</p> : null}
      <div className='max-w-[1440px] mx-auto flex'>
        <div className="flex flex-col max-w-[1100px] items-center">
          <div className="flex mt-10 lg:mt-20 w-full px-2 items-center flex-1">
            <div className="px-10 w-full lg:items-start text-start flex flex-col gap-5">
              <Title
                Text={data.title}
                H={"h4"}
                TitleClassProps={"w-[97%] lg:mb-3 text-start "}
              />
            </div>
          </div>
          <div className="px-12 w-full flex flex-col mb-[30px] text-start m-0">
            <p>
              {data.summary}
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

            {data?.responsabilities[0]?.children?.map(({ children }, index) => (
              <li key={index}>
                {children[0].text}
              </li>
            ))}

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

            {data?.minimunQualifications[0]?.children?.map(({ children }, index) => (
              <li key={index}>
                {children[0].text}
              </li>
            ))}

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

          {data?.desiredSkills[0]?.children?.map(({ children }, index) => (
              <li key={index}>
                {children[0].text}
              </li>
            ))}

          </div>
          <div className="flex mt-10 lg:mt-10 w-full px-2 items-center flex-1">
            <div className="px-10 w-full lg:items-start text-start flex flex-col gap-5">
              <Title
                Text={"Hours"}
                H={"h4"}
                TitleClassProps={"w-[97%] lg:mb-3 text-start "}
              />
            </div>
          </div>
          <div className="px-12 w-full flex flex-col mb-[30px] text-start m-0">

          {data?.hours[0]?.children?.map(({ children }, index) => (
              <li key={index}>
                {children[0].text}
              </li>
            ))}

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

    </>
  )
}

export default IdJob