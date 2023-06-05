import React from "react";
import Link from "next/link";
import Title from "~/components/atoms/Title/Title";
import ImageAtomLocal from "~/components/atoms/imageAtom/ImageAtomLocal";
import VirufyLogo from "~/assets/static/images/logo/virufy.svg";
import DonateModalImg from "~/assets/static/images/Modals/DonateHero.png";
import Paypal from "~/assets/static/images/Modals/Paypal.png";
import Gofoundme from "~/assets/static/images/Modals/Gofoundme.png";
import BarsMenu from "~/assets/static/icons/navbar/barsIconMenu.svg";
import CloseMenu from "~/assets/static/icons/navbar/closeIconMenu.svg";
import Select from "~/components/atoms/Select/Select";
import Button from "~/components/atoms/button/Button";
import { useState } from 'react';

//Flags
import ENG from "~/assets/static/icons/navbar/flags/Eng.png"
import SPA from "~/assets/static/icons/navbar/flags/Spa.png"
import JPN from "~/assets/static/icons/navbar/flags/Jpn.png"
import POR from "~/assets/static/icons/navbar/flags/Por.png"

export default function Navbar() {

    const options = [
        { label: 'ENG', value: '1' },
        { label: 'ESP', value: '2' },
        { label: 'JPN', value: '3' },
        { label: 'POR', value: '4' },
    ];

    const optionsIcons = {
        1: ENG,
        2: SPA,
        3: JPN,
        4: POR,
    }

    const [navbar, setNavbar] = useState(false);

    const [showModal, setShowModal] = React.useState(false);

    return (

        <nav className="w-full bg-white shadow sticky z-[100]" >
            <div>
                {showModal ? (
                    <>
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative mx-auto md:w-[500px] h-[500px] w-[300px]">
                                {/*content*/}
                                <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex w-full border-b border-solid border-slate-200 rounded-t">

                                        <ImageAtomLocal imagesize="pr100" border="none" src={DonateModalImg} alt="Logo Virufy" ImageStyleProps="" />

                                    </div>
                                    {/*body*/}
                                    <div className="relative p-6 flex flex-col items-center">
                                        <p className=" mt-2 mb-6 text-lg leading-relaxed">
                                            <Title
                                                Text={"Donate Options"}
                                                H={"h5tepsHome"}
                                                TitleClassProps={"text-center color-black"}
                                            />
                                        </p>
                                        <button
                                            className="bg-gray-200 px-6 py-2 rounded hover:bg-gray-300 outline-none mr-1 ease-linear transition-all duration-150 w-[270px] md:w-[450px] flex justify-center mb-3"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <ImageAtomLocal imagesize="px110x27" border="none" src={Paypal} alt="Logo Virufy" ImageStyleProps="" />
                                        </button>
                                        <button
                                            className="bg-gray-200 px-6 py-2 rounded hover:bg-gray-300 outline-none mr-1 mb-1 ease-linear transition-all duration-150 w-[270px] md:w-[450px] flex justify-center"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <ImageAtomLocal imagesize="px103x30" border="none" src={Gofoundme} alt="Logo Virufy" ImageStyleProps="" />
                                        </button>
                                    </div>
                                    {/*footer*/}

                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
            </div>
            <div className="justify-between px-3 xl:mx-9 lg:mx-4 lg:max-w-8lg lg:items-center lg:flex lg:px-2">
                <div>
                    <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
                        <Link href="/Home" className="flex lg:hidden">
                            <ImageAtomLocal imagesize="px100x48" border="none" src={VirufyLogo} alt="Logo Virufy" ImageStyleProps="" />
                        </Link>
                        <Link href="/Home" className="hidden lg:flex">
                            <ImageAtomLocal imagesize="px160" border="none" src={VirufyLogo} alt="Logo Virufy" ImageStyleProps="" />
                        </Link>
                        <li className="text-[#393939] flex lg:hidden">
                            <Button size="small" type="primary" path="#" label="Join us" />
                        </li>
                        <div className="lg:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-lg outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <ImageAtomLocal imagesize="px30" border="none" src={CloseMenu} alt="bars menu" ImageStyleProps="" />
                                ) : (
                                    <ImageAtomLocal imagesize="px30" border="none" src={BarsMenu} alt="bars menu" ImageStyleProps="" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${navbar ? 'block' : 'hidden'
                            }`}
                    >
                        <ul className="items-center justify-center space-y-8 lg:flex lg:space-x-5 xl:space-x-9 lg:space-y-0">
                            <li className="text-[#393939]">
                                <div>
                                    <a className="peer py-2 text-[#393939]" href="#">Our Technology</a>
                                    <div className="hidden peer-hover:flex hover:flex w-[200px] flex-col bg-white drop-shadow-lg fixed">
                                        <a className="px-5 py-3 hover:bg-gray-200 text-[#393939]" href="/es/HowItWorks">How It Works</a>
                                        <a className="px-5 py-3 hover:bg-gray-200 text-[#393939]" href="https://virufy.org/study/welcome">Share Your Cough</a>
                                        <a className="px-5 py-3 hover:bg-gray-200 text-[#393939]" href="/es/Home">Our Data</a>
                                        <a className="px-5 py-3 hover:bg-gray-200 text-[#393939]" href="/es/OurResearch">Our Research</a>
                                    </div>
                                </div>
                            </li>
                            <li className="text-[#393939]">
                                <div>
                                    <a className="peer py-2 text-[#393939]" href="/es/GetInvolved">Get Involved</a>
                                    <div className="hidden peer-hover:flex hover:flex w-[200px] flex-col bg-white drop-shadow-lg fixed">
                                        <a className="px-5 py-3 hover:bg-gray-200 text-[#393939]" href="/es/Home">Donate</a>
                                        <a className="px-5 py-3 hover:bg-gray-200 text-[#393939]" href="/es/JobListing">Join Our Team</a>
                                        <a className="px-5 py-3 hover:bg-gray-200 text-[#393939]" href="/es/TellYourStory">Tell Your Story</a>
                                    </div>
                                </div>
                            </li>
                            <li className="text-[#393939]">
                                <div>
                                    <a className="peer py-2 text-[#393939]" href="/es/AboutUs">About Us</a>
                                    <div className="hidden peer-hover:flex hover:flex w-[200px] flex-col bg-white drop-shadow-lg fixed">
                                        <a className="px-5 py-3 hover:bg-gray-200 text-[#393939]" href="/es/OurPeople1">Our people</a>
                                        <a className="px-5 py-3 hover:bg-gray-200 text-[#393939]" href="/es/OurSupporters">Our Supporters</a>
                                        <a className="px-5 py-3 hover:bg-gray-200 text-[#393939]" href="/es/Blog">Blog</a>
                                        <a className="px-5 py-3 hover:bg-gray-200 text-[#393939]" href="/es/Home">Publications</a>
                                    </div>
                                </div>
                            </li>
                            <li className="text-[#393939]">
                                <div>
                                    <a className="peer py-2 text-[#393939]" href="/es/FAQ">FAQ</a>
                                </div>
                            </li>

                            <li className="text-[#393939]">
                                <Select Text="" Options={options} optionsIcons={optionsIcons} />
                            </li>
                            <li className="text-[#393939] hidden lg:flex">
                                <Button size="small" type="secondary" path="#" label="Join us" />
                            </li>
                            <li className="text-[#393939]">
                                <a onClick={() => setShowModal(true)} ><Button size="small" type="primary" path="#" label="Donate" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}