import React from 'react'
import Title from '~/components/atoms/Title/Title'
import Link from 'next/link'
import TitleText from '~/components/molecules/TitleText/TitleText'
import ImageAtomLocal from '~/components/atoms/imageAtom/ImageAtomLocal'
import Button from '~/components/atoms/button/Button'
import Donate from '~/assets/static/images/section-donate/donate.jpg'
import DonateModalImg from '~/assets/static/images/Modals/DonateHero.png'
import Paypal from '~/assets/static/images/Modals/Paypal.png'
import GoFundMe from '~/assets/static/images/Modals/GoFundMe.png'

export default function SectionDonate({
  ContainerTitleProps,
  ContainerTextProps,
  border,
  alt,
  TextProps,
}) {
  const [showModal, setShowModal] = React.useState(false)

  return (
    <div className="mb-[40px] flex flex-col text-center md:mt-[70px] md:mb-[70px] md:ml-[5vw] md:mr-[5vw]">
      <div>
        {showModal ? (
          <>
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
              <div className="relative mx-auto h-[500px] w-[300px] md:w-[500px]">
                {/*content*/}
                <div className="relative flex w-full flex-col rounded-xl border-0 bg-white shadow-lg outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex w-full rounded-t border-b border-solid border-slate-200">
                    <ImageAtomLocal
                      imagesize="pr100"
                      border="none"
                      src={DonateModalImg}
                      alt="Logo Virufy"
                      ImageStyleProps=""
                    />
                    <div className="absolute flex w-full flex-col items-end p-6">
                      <button
                        className="flex h-[35px] w-[35px] justify-center rounded-full bg-white px-1 py-2 font-bold text-black shadow-xl outline-none transition-all duration-150 ease-linear hover:bg-gray-300"
                        type="button"
                        /* onClick={() => setShowModal(false)} */
                      >
                        X{' '}
                      </button>
                    </div>
                  </div>
                  {/*body*/}
                  <div className="relative flex flex-col items-center p-6">
                    <p className=" mt-2 mb-6 text-lg leading-relaxed">
                      <Title
                        Text={'Donate Options'}
                        H={'h5tepsHome'}
                        TitleClassProps={'text-center color-black'}
                      />
                    </p>
                    <a
                      href="https://www.paypal.com/us/fundraiser/charity/4348461"
                      target="_blank"
                    >
                      <button
                        className="mr-1 mb-3 flex w-[270px] justify-center rounded bg-gray-200 px-6 py-2 outline-none transition-all duration-150 ease-linear hover:bg-gray-300 md:w-[450px]"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        <ImageAtomLocal
                          imagesize="px110x27"
                          border="none"
                          src={Paypal}
                          alt="Logo Virufy"
                          ImageStyleProps=""
                        />
                      </button>
                    </a>
                    <a
                      href="https://www.gofundme.com/f/virufy-covid19"
                      target="_blank"
                    >
                      <button
                        className="mr-1 mb-1 flex w-[270px] justify-center rounded bg-gray-200 px-6 py-2 outline-none transition-all duration-150 ease-linear hover:bg-gray-300 md:w-[450px]"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        <ImageAtomLocal
                          imagesize="px103x30"
                          border="none"
                          src={GoFundMe}
                          alt="Logo Virufy"
                          ImageStyleProps=""
                        />
                      </button>
                    </a>
                  </div>
                  {/*footer*/}
                </div>
              </div>
            </div>
            <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
          </>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col items-center md:flex-row-reverse">
        <div className="flex w-full items-center justify-end md:w-1/2 md:pl-[40px]">
          <ImageAtomLocal
            imagesize="pr100"
            border={border}
            src={Donate}
            alt={alt}
            ImageStyleProps=""
          />
        </div>
        <div className="mt-14 flex w-full flex-1 items-center px-[20px] md:mt-0 md:hidden md:w-2/5 md:px-[0px]">
          <div className="flex w-full flex-col items-center gap-5 md:items-start md:text-left">
            <TitleText
              TitleSize="h2"
              TitleLabel={TextProps?.title}
              TextSize="normal"
              TextLabel={TextProps?.textLabel}
              ContainerTitleProps={ContainerTitleProps}
              ContainerTextProps={ContainerTextProps}
              TextClassProps=""
              TitleClassProps=""
            />
            <div className="flex flex-col justify-center md:hidden">
              <Button
                size="medium"
                type="primary"
                path="#"
                label={TextProps?.button}
              />
            </div>
          </div>
        </div>
        <div className="mt-14 hidden w-full flex-1 flex-row items-center px-[20px] md:mt-0 md:flex md:w-2/5 md:px-[0px]">
          <div className="flex w-full flex-col items-center gap-5 md:items-start md:text-left">
            <TitleText
              TitleSize="h2"
              TitleLabel={TextProps?.title}
              TextSize="subtitulo"
              TextLabel={TextProps?.textLabel}
              ContainerTitleProps={ContainerTitleProps}
              ContainerTextProps={ContainerTextProps}
              TextClassProps=""
              TitleClassProps=""
            />
            <div className="hidden flex-col justify-center md:flex">
              <Link onClick={() => setShowModal(true)} href="#">
                <Button
                  size="medium"
                  type="primary"
                  path="#"
                  label={TextProps?.button}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
