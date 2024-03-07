import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Title from '~/components/atoms/Title/Title'
import Button from '~/components/atoms/button/Button'
import LeaveAComment from '~/components/organisms/LeaveAComment/LeaveAComment'
import Text from '~/components/atoms/Text/Text'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'next-share'
import { useI18n } from '~/i18n'
import Image from 'next/image'
const IdBlog = () => {
  const [isLoading, setLoading] = useState(false)
  const router = useRouter()
  const { id } = router.query
  const idBlog = id ?? '1'
  const {
    blogDetails: { itemSelected },
  } = useI18n()
  const detailSelected = itemSelected?.find((item) => item?.id === idBlog)
  useEffect(() => {
    if (!Array.isArray(itemSelected)) {
      setLoading(true)
    }
  }, [itemSelected])

  return (
    <>
      {isLoading ? <p className="text-center text-2xl">Loading...</p> : null}

      <div className="flex flex-col items-center px-1 md:px-4">
        <div className="mt-10 flex w-full flex-1 items-center px-2 lg:mt-20 lg:max-w-[1440px]">
          <div className="flex w-full flex-col gap-5 text-start lg:items-start">
            <Title
              Text={detailSelected?.title}
              H={'h4'}
              TitleClassProps={'w-[97%] lg:mb-3 text-start '}
            />
            <div className="flex items-center gap-2 text-[1.125rem] leading-[1.75rem] text-[#3074DC] md:text-[1.3rem] md:leading-[1.70rem] lg:text-[1.6rem] lg:leading-[1.80rem] 2xl:text-[1.8rem] 2xl:leading-[1.90rem]">
              {/* <Date
                dateString={data.publishedDate} /> */}
              <Text
                Text={`${detailSelected?.date} | ${detailSelected?.autor}`}
                Style="subtitle"
                TextClassProps={'text-start'}
              />
            </div>
            <div className=" mt-4 flex flex-col gap-4 sm:flex-row">
              <div className="flex">
                <FacebookShareButton
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    backgroundColor: '#3b5998',
                    paddingRight: '9.5px',
                    color: 'white',
                  }}
                  url={'https://virufy.netlify.app/es/Blog/' + router.query.id}
                >
                  <FacebookIcon size={32} round />
                  Share
                </FacebookShareButton>
              </div>
              <div className="flex">
                <TwitterShareButton
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    backgroundColor: '#00aced',
                    paddingRight: '7px',
                    color: 'white',
                  }}
                  url={'https://virufy.netlify.app/es/Blog/' + router.query.id}
                >
                  <TwitterIcon size={32} round />
                  Tweet
                </TwitterShareButton>
              </div>
              <div className="flex">
                <LinkedinShareButton
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    backgroundColor: '#007fb1',
                    paddingRight: '9.5px',
                    color: 'white',
                  }}
                  url={'https://virufy.netlify.app/es/Blog/' + router.query.id}
                >
                  <LinkedinIcon size={32} round />
                  Share
                </LinkedinShareButton>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 mb-8 flex w-[100vw] max-w-[1440px] flex-col items-center justify-center lg:flex-row">
          <div className="flex w-full items-center justify-end lg:mb-[20px]">
            <Image
              src={detailSelected?.image}
              alt=""
              width={800}
              height={600}
              style={{ display: 'block', margin: '0 auto' }}
            />
          </div>
        </div>
        <div className="ml-2 mb-[30px] flex max-w-[1440px] flex-col">
          <Text
            key={detailSelected?.id}
            Style="normal"
            Text={detailSelected?.description}
            TextClassProps="w-[97%] lg:mb-3 text-start "
          />

          <div className=" mt-12 flex flex-col gap-4 sm:flex-row">
            <div className="flex">
              <FacebookShareButton
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  backgroundColor: '#3b5998',
                  paddingRight: '9.5px',
                  color: 'white',
                }}
                url={'https://virufy.netlify.app/es/Blog/' + router.query.id}
                title={'data.title'}
              >
                <FacebookIcon size={32} round />
                Share
              </FacebookShareButton>
            </div>
            <div className="flex">
              <TwitterShareButton
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  backgroundColor: '#00aced',
                  paddingRight: '7px',
                  color: 'white',
                }}
                url={'https://virufy.netlify.app/es/Blog/' + router.query.id}
                title={'data.title'}
              >
                <TwitterIcon size={32} round />
                Tweet
              </TwitterShareButton>
            </div>
            <div className="flex">
              <LinkedinShareButton
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  backgroundColor: '#007fb1',
                  paddingRight: '9.5px',
                  color: 'white',
                }}
                url={'https://virufy.netlify.app/es/Blog/' + router.query.id}
                title={'data.title'}
              >
                <LinkedinIcon size={32} round />
                Share
              </LinkedinShareButton>
            </div>
          </div>
        </div>

        <Title
          Text={detailSelected?.leaveAComment}
          H={'h3'}
          TitleClassProps={'w-[100%] mt-8 text-center '}
        />

        <LeaveAComment
          idBlog={`${detailSelected.id} - ${detailSelected.title}`}
        />

        <div className="flex w-full flex-col items-center bg-[#EEEEEE]">
          <div className="mt-14 flex w-[100vw] max-w-[1300px] flex-col items-center 2xl:mt-0 2xl:flex-row 2xl:justify-between">
            <div className="flex 2xl:hidden">
              <Title
                H="h6"
                Text="How Do We Ensure that Healthcare AI is Useful?"
                TitleClassProps="text-center"
              />
            </div>
            <div className="hidden 2xl:flex">
              <Title
                H="h5tepsHome"
                Text="Get the latest in Virufy’s Health Blog"
                TitleClassProps="text-center"
              />
            </div>
            <div className="mb-8 mt-7 w-full max-w-[1000px] px-7 2xl:w-1/3">
              <input
                type="name"
                id="name"
                className="text-smlock w-full border border-gray-400 bg-white p-2.5 text-gray-900 shadow-sm focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></input>
            </div>
            <div className="mb-14 flex flex-col items-center justify-center 2xl:mb-0">
              <Button size="medium" type="primary" path="#" label="Sign Up" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default IdBlog
