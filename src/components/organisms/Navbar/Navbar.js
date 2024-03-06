import React from 'react'
import Link from 'next/link'
import Title from '~/components/atoms/Title/Title'
import ImageAtomLocal from '~/components/atoms/imageAtom/ImageAtomLocal'
import VirufyLogo from '~/assets/static/images/logo/virufy.svg'
import DonateModalImg from '~/assets/static/images/Modals/DonateHero.png'
import Paypal from '~/assets/static/images/Modals/Paypal.png'
import GoFundMe from '~/assets/static/images/Modals/GoFundMe.png'
import BarsMenu from '~/assets/static/icons/navbar/barsIconMenu.svg'
import CloseMenu from '~/assets/static/icons/navbar/closeIconMenu.svg'
import Select from '~/components/atoms/Select/Select'
import Button from '~/components/atoms/button/Button'
import { useState } from 'react'
import { useI18n } from '~/i18n'

//Flags
import ENG from '~/assets/static/icons/navbar/flags/Eng.png'
import SPA from '~/assets/static/icons/navbar/flags/Spa.png'
import JPN from '~/assets/static/icons/navbar/flags/Jpn.png'
import POR from '~/assets/static/icons/navbar/flags/Por.png'
import LocaleSelector from '~/components/atoms/Select/LocaleSelector'

export default function Navbar() {
  const options = [
    { label: 'ENG', value: '1' },
    { label: 'ESP', value: '2' },
    { label: 'JPN', value: '3' },
    { label: 'POR', value: '4' },
  ]

  const optionsIcons = {
    en: ENG,
    es: SPA,
    // TODO: Ajustar
    pt: JPN,
    jp: POR,
  }
  const {
    navbar: { ourTechnology, getInvolved, aboutUs, faq, joinUs, donate },
  } = useI18n()
  const [navbar, setNavbar] = useState(false)

  const [showModal, setShowModal] = React.useState(false)

  return (
    <nav className="sticky z-[100] w-full bg-white shadow">
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
                        onClick={() => setShowModal(false)}
                      >
                        X
                      </button>
                    </div>
                  </div>
                  {/*body*/}
                  <div className="relative flex flex-col items-center p-6">
                    <p className=" mt-2 mb-6 text-lg leading-relaxed">
                      <Title
                        as="span"
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
      <div className="justify-between px-3 xl:mx-4 xl:flex xl:items-center xl:px-2 2xl:mx-9">
        <div>
          <div className="flex items-center justify-between py-3 xl:block xl:py-5">
            <Link href="/home" className="flex xl:min-[1140px]:hidden">
              <ImageAtomLocal
                imagesize="px100x48"
                border="none"
                src={VirufyLogo}
                alt="Logo Virufy"
                ImageStyleProps=""
              />
            </Link>
            <Link href="/home" className="hidden xl:min-[1140px]:flex">
              <ImageAtomLocal
                imagesize="px160"
                border="none"
                src={VirufyLogo}
                alt="Logo Virufy"
                ImageStyleProps=""
              />
            </Link>
            <li className="flex text-[#393939] xl:hidden">
              <Button size="small" type="primary" path="#" label="Join us" />
            </li>
            <div className="xl:hidden">
              <button
                className="rounded-lg p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <ImageAtomLocal
                    imagesize="px30"
                    border="none"
                    src={CloseMenu}
                    alt="bars menu"
                    ImageStyleProps=""
                  />
                ) : (
                  <ImageAtomLocal
                    imagesize="px30"
                    border="none"
                    src={BarsMenu}
                    alt="bars menu"
                    ImageStyleProps=""
                  />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`mt-8 flex-1 justify-self-center pb-3 xl:mt-0 xl:block xl:pb-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <ul className="items-center justify-center space-y-8 xl:flex xl:space-x-5 xl:space-y-0 2xl:space-x-9">
              <li className="text-[#393939]">
                <div>
                  <Link
                    className="peer whitespace-nowrap py-2 text-[#393939]"
                    href="/OurTechnology"
                  >
                    {ourTechnology?.section}
                  </Link>
                  <div className="fixed hidden w-[200px] flex-col bg-white drop-shadow-lg hover:flex peer-hover:flex">
                    <Link
                      className="px-5 py-3 text-[#393939] hover:bg-gray-200"
                      href="/HowItWorks"
                    >
                      {ourTechnology?.howItWorks}
                    </Link>
                    <Link
                      className="px-5 py-3 text-[#393939] hover:bg-gray-200"
                      href="https://virufy.org/study/welcome"
                    >
                      {ourTechnology?.shareYourCough}
                    </Link>
                    <Link
                      className="px-5 py-3 text-[#393939] hover:bg-gray-200"
                      href="/Dashboard"
                    >
                      {ourTechnology?.OurData}
                    </Link>
                    <Link
                      className="px-5 py-3 text-[#393939] hover:bg-gray-200"
                      href="/OurResearch"
                    >
                      {ourTechnology?.OurResearch}
                    </Link>
                  </div>
                </div>
              </li>
              <li className="text-[#393939]">
                <div>
                  <Link
                    className="peer whitespace-nowrap py-2 text-[#393939]"
                    href="/GetInvolved"
                  >
                    {getInvolved?.section}
                  </Link>
                  <div className="fixed hidden w-[200px] flex-col bg-white drop-shadow-lg hover:flex peer-hover:flex">
                    <Link
                      onClick={() => setShowModal(true)}
                      className="px-5 py-3 text-[#393939] hover:bg-gray-200"
                      href="#"
                    >
                      {getInvolved?.donate}
                    </Link>
                    <Link
                      className="px-5 py-3 text-[#393939] hover:bg-gray-200"
                      href="/JobListing"
                    >
                      {getInvolved?.joinOurTeam}
                    </Link>
                    <Link
                      className="px-5 py-3 text-[#393939] hover:bg-gray-200"
                      href="/TellYourStory"
                    >
                      {getInvolved?.tellYourStory}
                    </Link>
                  </div>
                </div>
              </li>
              <li className="text-[#393939]">
                <div>
                  <Link
                    className="peer whitespace-nowrap py-2 text-[#393939]"
                    href="/AboutUs"
                  >
                    {aboutUs?.section}
                  </Link>
                  <div className="fixed hidden w-[200px] flex-col bg-white drop-shadow-lg hover:flex peer-hover:flex">
                    <Link
                      className="px-5 py-3 text-[#393939] hover:bg-gray-200"
                      href="/OurPeople1"
                    >
                      {aboutUs?.ourPeople}
                    </Link>
                    <Link
                      className="px-5 py-3 text-[#393939] hover:bg-gray-200"
                      href="/OurSupporters"
                    >
                      {aboutUs?.ourSupporters}
                    </Link>
                    <Link
                      className="px-5 py-3 text-[#393939] hover:bg-gray-200"
                      href="/Blog"
                    >
                      {aboutUs?.blog}
                    </Link>
                    <Link
                      className="px-5 py-3 text-[#393939] hover:bg-gray-200"
                      href="/OurPublications"
                    >
                      {aboutUs?.publications}
                    </Link>
                  </div>
                </div>
              </li>
              <li className="text-[#393939]">
                <div>
                  <Link
                    className="peer whitespace-nowrap py-2 text-[#393939]"
                    href="/FAQ"
                  >
                    {faq}
                  </Link>
                </div>
              </li>

              <li className="text-[#393939]">
                {/* <Select Text="" Options={options} optionsIcons={optionsIcons} /> */}
                <LocaleSelector optionsIcons={optionsIcons}></LocaleSelector>
              </li>
              <li className="hidden text-[#393939] lg:flex">
                <Button
                  size="small"
                  type="secondary"
                  path="/JobListing"
                  label={joinUs}
                />
              </li>
              <li className="text-[#393939]">
                <Button
                  onClick={() => setShowModal(true)}
                  size="small"
                  type="primary"
                  path="#"
                  label={donate}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
