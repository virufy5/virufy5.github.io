import { useRouter } from "next/router"
import React, { useEffect, useState } from 'react'
import Title from '~/components/atoms/Title/Title'
import Button from '~/components/atoms/button/Button'
import ImageAtomLocal from "~/components/atoms/imageAtom/ImageAtomLocal"
import LeaveAComment from "~/components/organisms/LeaveAComment/LeaveAComment"
import Text from "~/components/atoms/Text/Text";

const IdBlog = () => {

  const initialProps = {
    id: "",
    title: "",
    publishedDate: "",
    picture: {
      id: "",
      alt: "",
      filename: "",
      mimeType: "",
      filesize: "",
      width: "",
      height: "",
      createdAt: "",
      updatedAt: "",
      url: "",
    },
    summary: "",
    content: [
      {
        children: [
          {
            text: "",
          }
        ]
      },
      {
        children: [
          {
            text: "",
          }
        ]
      },
      {
        children: [
          {
            text: "",
          }
        ]
      },
      {
        children: [
          {
            text: "",
          }
        ]
      },
      {
        children: [
          {
            text: "",
          }
        ]
      },
      {
        children: [
          {
            text: "",
          }
        ]
      },
      {
        children: [
          {
            text: "",
          }
        ]
      },
      {
        children: [
          {
            text: "",
          }
        ]
      },
      {
        children: [
          {
            text: "",
          }
        ]
      },
      {
        children: [
          {
            text: "",
          }
        ]
      },
    ],
    file: {
      id: "",
      alt: "",
      filename: "",
      mimeType: "",
      filesize: "",
      createdAt: "",
      updatedAt: "",
      url: "",
    },
    slug: "",
    meta: {
      title: "",
      description: "",
    },
    _status: "",
    createdAt: "",
    updatedAt: "",
  }

  const [data, setData] = useState(initialProps);
  const [isLoading, setLoading] = useState(false);


  const router = useRouter()

  useEffect(() => {
    setLoading(true);
    fetch(`/api/publications/${router.query.id}`)
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
      <div className="flex flex-col items-center">
        <div className="flex mt-10 lg:mt-20 w-full lg:max-w-[1440px] px-2 items-center flex-1">
          <div className="w-full lg:items-start text-start flex flex-col gap-5">
            <Title
              Text={data.title}
              H={"h4"}
              TitleClassProps={"w-[97%] lg:mb-3 text-start "}
            />
            <div className="flex gap-2">
              <Text
                Text={data.publishedDate.slice(0, 10)}
                Style="subtitle"
                TextClassProps={"lg:mb-7 text-start text-blue-600"}
              />
              <p className="text-blue-600">|</p>
              <Text
                Text={data.slug}
                Style="subtitle"
                TextClassProps={"lg:mb-7 text-start text-blue-600"}
              />
            </div>

          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center max-w-[1440px] w-[100vw] mt-12 mb-8">
          <div className="w-full flex items-center justify-end lg:mb-[20px]">
            <ImageAtomLocal
              imagesize="pr100"
              border=""
              src={data.picture.url}
              alt=""
              ImageStyleProps=""
            />
          </div>
        </div>
        <div className="flex flex-col ml-2 max-w-[1440px] mb-[30px]">
          {/* {data?.content[0]?.children[0]?.map(({ children }, index) => (
            <Text key={index}
              Style="subtitle"
              Text={children.text}
              TextClassProps="w-[97%] lg:mb-3 text-start "
            />
          ))} */}
        </div>

        <Title
          Text="Leave a comment"
          H={"h3"}
          TitleClassProps={"w-[100%] mt-8 text-center "}
        />
        <LeaveAComment />


        <div className="w-full flex flex-col items-center bg-[#EEEEEE]">
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


    </>
  )
}

export default IdBlog