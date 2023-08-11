import React from "react";
import Title from "~/components/atoms/Title/Title";
import ImageAtomLocal from "~/components/atoms/imageAtom/ImageAtomLocal";
import VirufyLogo from "~/assets/static/images/logo/virufy.svg";
import Link from "next/link";
import LinkAtom from "~/components/atoms/LinkAtom/LinkAtom";
import Instagram from "~/assets/static/icons/footer/Instagram.svg";
import Linkedin from "~/assets/static/icons/footer/Linkedin.svg";
import Text from "~/components/atoms/Text/Text";

export default function Footer() {

    const links1 = [
        { label: 'Our Technology', route: '/OurTechnology' },
        { label: 'Get Involved', route: '/GetInvolved' },
        { label: 'About', route: '/AboutUs' },
        { label: 'FAQ', route: '/FAQ' }
    ]

    const links2 = [
        { label: 'Cookie Policy', route: '#' },
    ]

    const links3 = [
        { label: 'Cookie Settings', route: '#' },
    ]

    const links4 = [
        { label: 'Privacy Policy', route: '#' },
    ]

    const links5 = [
        { label: 'Do Not Sell My Personal Information', route: '#' },
    ]

    const links6 = [
        { label: 'Code of Conduct', route: '#' },
    ]

    const [showModalCookiesSetting, setShowModalCookiesSetting] = React.useState(false);

    const [showModalCookiesPolicy, setShowModalCookiesPolicy] = React.useState(false);

    const [showModalMyInformation, setShowModalMyInformation] = React.useState(false);

    const [showModalPrivacyPolicy, setShowModalPrivacyPolicy] = React.useState(false);

    return (
        <>

            <div>
                {showModalCookiesSetting ? (
                    <>
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative mx-auto md:w-[500px] h-[500px] w-[300px] lg:w-[1000px]">
                                {/*content*/}
                                <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex w-full border-b border-solid border-slate-200 rounded-t">
                                        <Title
                                            H="h5Modals"
                                            Text=""
                                            TitleClassProps={"mt-[30px] mx-auto mb-[30px]"}
                                        />
                                        <div className="absolute p-6 flex flex-col items-end w-full">

                                            <button
                                                className="bg-gray-300 rounded-full text-black px-1 py-2 hover:bg-gray-400 outline-none ease-linear transition-all duration-150 w-[35px] h-[35px] flex justify-center shadow-xl font-bold"
                                                type="button"
                                                onClick={() => setShowModalCookiesSetting(false)}
                                            >X</button>
                                        </div>

                                    </div>
                                    {/*body*/}

                                    <div className='w-full flex items-center justify-center'>

                                        <div className='w-full px-0 '>
                                            <div>
                                                <details className="w-full  bg-white cursor-pointer mb-3">
                                                    <summary className="bg-white text-dark flex justify-between px-4 py-3 after:content-['+'] mt-3 font-bold">Argentina</summary>
                                                    <hr className="border-1 border-gray-400 mt-3" />
                                                    <p className="px-4 py-3  mt-3">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elit ipsum, fermentum a risus at, varius luctus nisl. Curabitur semper.
                                                    </p>
                                                </details>

                                                <hr className="border-1 border-gray-400" />
                                                <details className="w-full  bg-white cursor-pointer mb-3">
                                                    <summary className="bg-white text-dark flex justify-between px-4 py-3 after:content-['+'] mt-3 font-bold">Bolivia</summary>
                                                    <hr className="border-1 border-gray-400 mt-3" />
                                                    <p className="px-4 py-3  mt-3">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elit ipsum, fermentum a risus at, varius luctus nisl. Curabitur semper.
                                                    </p>
                                                </details>

                                                <hr className="border-1 border-gray-400" />
                                                <details className="w-full  bg-white cursor-pointer mb-3">
                                                    <summary className="bg-white text-dark flex justify-between px-4 py-3 after:content-['+'] mt-3 font-bold">Brazil</summary>
                                                    <hr className="border-1 border-gray-400 mt-3" />
                                                    <p className="px-4 py-3  mt-3">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elit ipsum, fermentum a risus at, varius luctus nisl. Curabitur semper.
                                                    </p>
                                                </details>

                                                <hr className="border-1 border-gray-400" />
                                                <details className="w-full  bg-white cursor-pointer mb-3">
                                                    <summary className="bg-white text-dark flex justify-between px-4 py-3 after:content-['+'] mt-3 font-bold">Columbia</summary>
                                                    <hr className="border-1 border-gray-400 mt-3" />
                                                    <p className="px-4 py-3  mt-3">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elit ipsum, fermentum a risus at, varius luctus nisl. Curabitur semper.
                                                    </p>
                                                </details>

                                                <hr className="border-1 border-gray-400" />
                                                <details className="w-full  bg-white cursor-pointer mb-3">
                                                    <summary className="bg-white text-dark flex justify-between px-4 py-3 after:content-['+'] mt-3 font-bold">Greece</summary>
                                                    <hr className="border-1 border-gray-400 mt-3" />
                                                    <p className="px-4 py-3  mt-3">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elit ipsum, fermentum a risus at, varius luctus nisl. Curabitur semper.
                                                    </p>
                                                </details>

                                                <hr className="border-1 border-gray-400" />
                                                <details className="w-full  bg-white cursor-pointer mb-3">
                                                    <summary className="bg-white text-dark flex justify-between px-4 py-3 after:content-['+'] mt-3 font-bold">Mexico</summary>
                                                    <hr className="border-1 border-gray-400 mt-3" />
                                                    <p className="px-4 py-3  mt-3">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elit ipsum, fermentum a risus at, varius luctus nisl. Curabitur semper.
                                                    </p>
                                                </details>

                                                <hr className="border-1 border-gray-400" />
                                                <details className="w-full  bg-white cursor-pointer mb-3">
                                                    <summary className="bg-white text-dark flex justify-between px-4 py-3 after:content-['+'] mt-3 font-bold">Peru</summary>
                                                    <hr className="border-1 border-gray-400 mt-3" />
                                                    <p className="px-4 py-3  mt-3">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elit ipsum, fermentum a risus at, varius luctus nisl. Curabitur semper.
                                                    </p>
                                                </details>

                                                <hr className="border-1 border-gray-400" />
                                                <details className="w-full  bg-white cursor-pointer mb-3">
                                                    <summary className="bg-white text-dark flex justify-between px-4 py-3 after:content-['+'] mt-3 font-bold">United States</summary>
                                                    <hr className="border-1 border-gray-400 mt-3" />
                                                    <p className="px-4 py-3  mt-3">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elit ipsum, fermentum a risus at, varius luctus nisl. Curabitur semper.
                                                    </p>
                                                </details>

                                                <hr className="border-1 border-gray-400" />
                                                <details className="w-full  bg-white cursor-pointer mb-3">
                                                    <summary className="bg-white text-dark flex justify-between px-4 py-3 after:content-['+'] mt-3 font-bold">Europe</summary>
                                                    <hr className="border-1 border-gray-400 mt-3" />
                                                    <p className="px-4 py-3  mt-3">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elit ipsum, fermentum a risus at, varius luctus nisl. Curabitur semper.
                                                    </p>
                                                </details>

                                                <hr className="border-1 border-gray-400" />
                                                <details className="w-full  bg-white cursor-pointer mb-3">
                                                    <summary className="bg-white text-dark flex justify-between px-4 py-3 after:content-['+'] mt-3 font-bold">Japan</summary>
                                                    <hr className="border-1 border-gray-400 mt-3" />
                                                    <p className="px-4 py-3  mt-3">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elit ipsum, fermentum a risus at, varius luctus nisl. Curabitur semper.
                                                    </p>
                                                </details>

                                                <hr className="border-1 border-gray-400" />
                                                <details className="w-full  bg-white cursor-pointer mb-3">
                                                    <summary className="bg-white text-dark flex justify-between px-4 py-3 after:content-['+'] mt-3 font-bold">Other Countries</summary>
                                                    <hr className="border-1 border-gray-400 mt-3" />
                                                    <p className="px-4 py-3  mt-3">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elit ipsum, fermentum a risus at, varius luctus nisl. Curabitur semper.
                                                    </p>
                                                </details>

                                                <hr className="border-1 border-gray-400" />

                                            </div>
                                        </div>
                                    </div>
                                    {/*footer*/}

                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
            </div>

            {/* _____________________ */}

            <div>
                {showModalPrivacyPolicy ? (
                    <>
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative mx-auto md:w-[500px] h-[500px] w-[300px] lg:w-[1000px]">
                                {/*content*/}
                                <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex w-full border-b border-solid border-slate-200 rounded-t">
                                        <Title
                                            H="h5Modals"
                                            Text="Privacy Policy"
                                            TitleClassProps={"mt-[30px] mx-auto mb-[30px]"}
                                        />
                                        <div className="absolute p-6 flex flex-col items-end w-full">

                                            <button
                                                className="bg-gray-300 rounded-full text-black px-1 py-2 hover:bg-gray-400 outline-none ease-linear transition-all duration-150 w-[35px] h-[35px] flex justify-center shadow-xl font-bold"
                                                type="button"
                                                onClick={() => setShowModalPrivacyPolicy(false)}
                                            >X</button>
                                        </div>

                                    </div>
                                    {/*body*/}

                                    <div className='w-full flex items-center justify-center'>

                                        <div className='w-full px-0 '>
                                            <div>
                                                <details className="w-full  bg-white cursor-pointer mb-3">
                                                    <summary className="bg-white text-dark flex justify-between px-4 py-3 after:content-['+'] mt-3 font-bold">Argentina</summary>
                                                    <hr className="border-1 border-gray-400 mt-3" />
                                                    <p className="px-4 py-3  mt-3">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elit ipsum, fermentum a risus at, varius luctus nisl. Curabitur semper.
                                                    </p>
                                                </details>

                                                <hr className="border-1 border-gray-400" />
                                                <details className="w-full  bg-white cursor-pointer mb-3">
                                                    <summary className="bg-white text-dark flex justify-between px-4 py-3 after:content-['+'] mt-3 font-bold">Bolivia</summary>
                                                    <hr className="border-1 border-gray-400 mt-3" />
                                                    <p className="px-4 py-3  mt-3">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elit ipsum, fermentum a risus at, varius luctus nisl. Curabitur semper.
                                                    </p>
                                                </details>

                                                <hr className="border-1 border-gray-400" />
                                                <details className="w-full  bg-white cursor-pointer mb-3">
                                                    <summary className="bg-white text-dark flex justify-between px-4 py-3 after:content-['+'] mt-3 font-bold">Brazil</summary>
                                                    <hr className="border-1 border-gray-400 mt-3" />
                                                    <p className="px-4 py-3  mt-3">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elit ipsum, fermentum a risus at, varius luctus nisl. Curabitur semper.
                                                    </p>
                                                </details>

                                                <hr className="border-1 border-gray-400" />
                                                <details className="w-full  bg-white cursor-pointer mb-3">
                                                    <summary className="bg-white text-dark flex justify-between px-4 py-3 after:content-['+'] mt-3 font-bold">Columbia</summary>
                                                    <hr className="border-1 border-gray-400 mt-3" />
                                                    <p className="px-4 py-3  mt-3">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elit ipsum, fermentum a risus at, varius luctus nisl. Curabitur semper.
                                                    </p>
                                                </details>

                                                <hr className="border-1 border-gray-400" />
                                                <details className="w-full  bg-white cursor-pointer mb-3">
                                                    <summary className="bg-white text-dark flex justify-between px-4 py-3 after:content-['+'] mt-3 font-bold">Greece</summary>
                                                    <hr className="border-1 border-gray-400 mt-3" />
                                                    <p className="px-4 py-3  mt-3">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elit ipsum, fermentum a risus at, varius luctus nisl. Curabitur semper.
                                                    </p>
                                                </details>

                                                <hr className="border-1 border-gray-400" />
                                                <details className="w-full  bg-white cursor-pointer mb-3">
                                                    <summary className="bg-white text-dark flex justify-between px-4 py-3 after:content-['+'] mt-3 font-bold">Mexico</summary>
                                                    <hr className="border-1 border-gray-400 mt-3" />
                                                    <p className="px-4 py-3  mt-3">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elit ipsum, fermentum a risus at, varius luctus nisl. Curabitur semper.
                                                    </p>
                                                </details>

                                                <hr className="border-1 border-gray-400" />
                                                <details className="w-full  bg-white cursor-pointer mb-3">
                                                    <summary className="bg-white text-dark flex justify-between px-4 py-3 after:content-['+'] mt-3 font-bold">Peru</summary>
                                                    <hr className="border-1 border-gray-400 mt-3" />
                                                    <p className="px-4 py-3  mt-3">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elit ipsum, fermentum a risus at, varius luctus nisl. Curabitur semper.
                                                    </p>
                                                </details>

                                                <hr className="border-1 border-gray-400" />
                                                <details className="w-full  bg-white cursor-pointer mb-3">
                                                    <summary className="bg-white text-dark flex justify-between px-4 py-3 after:content-['+'] mt-3 font-bold">United States</summary>
                                                    <hr className="border-1 border-gray-400 mt-3" />
                                                    <p className="px-4 py-3  mt-3">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elit ipsum, fermentum a risus at, varius luctus nisl. Curabitur semper.
                                                    </p>
                                                </details>

                                                <hr className="border-1 border-gray-400" />
                                                <details className="w-full  bg-white cursor-pointer mb-3">
                                                    <summary className="bg-white text-dark flex justify-between px-4 py-3 after:content-['+'] mt-3 font-bold">Europe</summary>
                                                    <hr className="border-1 border-gray-400 mt-3" />
                                                    <p className="px-4 py-3  mt-3">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elit ipsum, fermentum a risus at, varius luctus nisl. Curabitur semper.
                                                    </p>
                                                </details>

                                                <hr className="border-1 border-gray-400" />
                                                <details className="w-full  bg-white cursor-pointer mb-3">
                                                    <summary className="bg-white text-dark flex justify-between px-4 py-3 after:content-['+'] mt-3 font-bold">Japan</summary>
                                                    <hr className="border-1 border-gray-400 mt-3" />
                                                    <p className="px-4 py-3  mt-3">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elit ipsum, fermentum a risus at, varius luctus nisl. Curabitur semper.
                                                    </p>
                                                </details>

                                                <hr className="border-1 border-gray-400" />
                                                <details className="w-full  bg-white cursor-pointer mb-3">
                                                    <summary className="bg-white text-dark flex justify-between px-4 py-3 after:content-['+'] mt-3 font-bold">Other Countries</summary>
                                                    <hr className="border-1 border-gray-400 mt-3" />
                                                    <p className="px-4 py-3  mt-3">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elit ipsum, fermentum a risus at, varius luctus nisl. Curabitur semper.
                                                    </p>
                                                </details>

                                                <hr className="border-1 border-gray-400" />

                                            </div>
                                        </div>
                                    </div>
                                    {/*footer*/}

                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
            </div>

            {/* _____________________ */}

            <div>
                {showModalMyInformation ? (
                    <>
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative mx-auto md:w-[500px] h-[500px] w-[300px] lg:w-[1000px]">
                                {/*content*/}
                                <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex w-full border-b border-solid border-slate-200 rounded-t">
                                        <Title
                                            H="h5Modals"
                                            Text="Do not sell my personal information "
                                            TitleClassProps={"mt-[80px] text-center md:mt-[30px] md:mx-auto mb-[30px]"}
                                        />
                                        <div className="absolute p-6 flex flex-col items-end w-full">

                                            <button
                                                className="bg-gray-300 rounded-full text-black px-1 py-2 hover:bg-gray-400 outline-none ease-linear transition-all duration-150 w-[35px] h-[35px] flex justify-center shadow-xl font-bold"
                                                type="button"
                                                onClick={() => setShowModalMyInformation(false)}
                                            >X</button>
                                        </div>

                                    </div>
                                    {/*body*/}

                                    <div className='w-full flex items-center justify-center'>

                                        <div className='w-full px-0 '>
                                            <div>
                                                <details className="w-full  bg-white cursor-pointer mb-3">
                                                    <summary className="bg-white text-dark flex justify-between px-4 py-3 after:content-['+'] mt-3 font-bold">California Consumer Privacy Act Rights</summary>
                                                    <hr className="border-1 border-gray-400 mt-3" />
                                                    <p className="px-4 py-3  mt-3">
                                                        California consumers have a right to knowledge, access, and deletion of their personal information under the California Consumer Privacy Act. California consumers also have a right to opt out of the sale of their personal information by a business and a right not to be discriminated against for exercising one of their California privacy rights. Virufy does not sell the personal information of California consumers and does not discriminate in response to privacy rights requests.
                                                    </p>
                                                </details>

                                                <hr className="border-1 border-gray-400" />
                                                <details className="w-full  bg-white cursor-pointer mb-3">
                                                    <summary className="bg-white text-dark flex justify-between px-4 py-3 after:content-['+'] mt-3 font-bold">Virufy provides notice of our privacy practices in our Privacy Policy</summary>
                                                    <hr className="border-1 border-gray-400 mt-3" />
                                                    <p className="px-4 py-3  mt-3">
                                                        California consumers have a right to knowledge, access, and deletion of their personal information under the California Consumer Privacy Act. California consumers also have a right to opt out of the sale of their personal information by a business and a right not to be discriminated against for exercising one of their California privacy rights. Virufy does not sell the personal information of California consumers and does not discriminate in response to privacy rights requests.
                                                    </p>
                                                </details>

                                                <hr className="border-1 border-gray-400" />
                                                <details className="w-full  bg-white cursor-pointer mb-3">
                                                    <summary className="bg-white text-dark flex justify-between px-4 py-3 after:content-['+'] mt-3 font-bold">How to Exercise the Above Rights</summary>
                                                    <hr className="border-1 border-gray-400 mt-3" />
                                                    <p className="px-4 py-3  mt-3">
                                                        California consumers have a right to knowledge, access, and deletion of their personal information under the California Consumer Privacy Act. California consumers also have a right to opt out of the sale of their personal information by a business and a right not to be discriminated against for exercising one of their California privacy rights. Virufy does not sell the personal information of California consumers and does not discriminate in response to privacy rights requests.
                                                    </p>
                                                </details>

                                                <hr className="border-1 border-gray-400" />

                                                <details className="w-full  bg-white cursor-pointer mb-3">
                                                    <summary className="bg-white text-dark flex justify-between px-4 py-3 after:content-['+'] mt-3 font-bold">Direct Marketing and Do Not Track</summary>
                                                    <hr className="border-1 border-gray-400 mt-3" />
                                                    <p className="px-4 py-3  mt-3">
                                                        California consumers have a right to knowledge, access, and deletion of their personal information under the California Consumer Privacy Act. California consumers also have a right to opt out of the sale of their personal information by a business and a right not to be discriminated against for exercising one of their California privacy rights. Virufy does not sell the personal information of California consumers and does not discriminate in response to privacy rights requests.
                                                    </p>
                                                </details>

                                                <hr className="border-1 border-gray-400" />


                                                <details className="w-full  bg-white cursor-pointer mb-3">
                                                    <summary className="bg-white text-dark flex justify-between px-4 py-3 after:content-['+'] mt-3 font-bold">Notice for Minors</summary>
                                                    <hr className="border-1 border-gray-400 mt-3" />
                                                    <p className="px-4 py-3  mt-3">
                                                        California consumers have a right to knowledge, access, and deletion of their personal information under the California Consumer Privacy Act. California consumers also have a right to opt out of the sale of their personal information by a business and a right not to be discriminated against for exercising one of their California privacy rights. Virufy does not sell the personal information of California consumers and does not discriminate in response to privacy rights requests.
                                                    </p>
                                                </details>

                                                <hr className="border-1 border-gray-400" />

                                            </div>
                                        </div>
                                    </div>
                                    {/*footer*/}

                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
            </div>

            {/* _____________________ */}

            <div>
                {showModalCookiesPolicy ? (
                    <>
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative mx-auto md:w-[500px] h-[500px] w-[300px] lg:w-[1000px]">
                                {/*content*/}
                                <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex w-full border-b border-solid border-slate-200 rounded-t">
                                        <Title
                                            H="h5Modals"
                                            Text="Cookie Policy"
                                            TitleClassProps={"mt-[30px] mx-auto mb-[30px]"}
                                        />
                                        <div className="absolute p-6 flex flex-col items-end w-full">

                                            <button
                                                className="bg-gray-300 rounded-full text-black px-1 py-2 hover:bg-gray-400 outline-none ease-linear transition-all duration-150 w-[35px] h-[35px] flex justify-center shadow-xl font-bold"
                                                type="button"
                                                onClick={() => setShowModalCookiesPolicy(false)}
                                            >X</button>
                                        </div>

                                    </div>
                                    {/*body*/}

                                    <div className='w-full flex items-center justify-center'>

                                        <div className='w-full px-0 '>
                                            <div>
                                                <details className="w-full  bg-white cursor-pointer mb-3">
                                                    <summary className="bg-white text-dark flex justify-between px-4 py-3 after:content-['+'] mt-3 font-bold">1. General</summary>
                                                    <hr className="border-1 border-gray-400 mt-3" />
                                                    <p className="px-4 py-3  mt-3">
                                                        The Covid Detection Foundation (“Virufy”, “we”, “us” or “our”), a California nonprofit corporation located at 4546, El Camino Real, B10 #614, Los Altos, código postal 94022, United States of America respects your privacy and is committed to processing your personal information in accordance with the law. This Cookie Policy (“Policy”) explains how Virufy uses cookies and similar technologies to process your personal information that you provide to us when you visit our website (www.virufy.org) (“Website”) or participate in our research survey for the compilation of a dataset needed for the development of artificial intelligence (AI) algorithms for device-based COVID-19 detection.
                                                        For users located in Europe:
                                                        <div className="mt-4">
                                                            <li> This cookie policy will be treated under Recital 30 of the European General Data Protection Regulation 2016/679 (the “GDPR”)
                                                                For users located in Spain:
                                                            </li>
                                                            <li>
                                                                This cookie policy will be treated under Recital 30 of the European General Data Protection Regulation 2016/679 (the “GDPR”) and under Article 22 of Law 34/2002, of July 11, on information society services and electronic commerce (LSSICE).
                                                                For users located in Argentina:
                                                            </li>
                                                            <li>
                                                                This cookie policy will be treated under Argentinian Law 25.326 on Protection of Personal Data.
                                                                For users located in Brazil:
                                                            </li>
                                                            <li>
                                                                This cookie policy will be treated under the General Personal Data Protection Law, number 13.709 / 2018 of Brazil (the “LGPD”).
                                                                For users located in Colombia:
                                                            </li>
                                                            <li>
                                                                This cookie policy will be treated under Colombian law 1581 of 2012.
                                                                For users located in the United Mexican States:
                                                            </li>
                                                            <li>
                                                                This cookie policy will be considered part of the Virufy Privacy Notice and will be treated under the Federal Law on Protection of Personal Data Held by Private Parties. Whenever reference is made to “Privacy Policy” in the present, the term “Privacy Notice” is understood interchangeably.
                                                                For users located in Bolivia:
                                                            </li>
                                                            <li>
                                                                This cookie policy will be treated under Bolivian Law
                                                                For users located in Peru:
                                                            </li>
                                                            <li>
                                                                This cookie policy will be treated under Peruvian Law.
                                                                Virufy is the “data controller” of, and responsible for, your personal information collected in accordance with this Cookie Policy. For further information about how we use, store, disclose and process personal data that we obtain through or in connection with the use of our Website, please visit our Privacy Policy.
                                                            </li>
                                                            <li>
                                                                When you first access our Website, you will receive a message advising you that cookies and similar technologies are in use. By clicking “Use necessary cookies only” or “Allow all cookies”, you signify that you understand and agree to the use of these technologies, as described in this Cookie Policy
                                                            </li>
                                                            <li>
                                                                If you have any inquiries or complaints regarding our Cookie Policy, please contact us by email at study@virufy.org Our team will reply you within 30 business days upon receipt of your request.
                                                            </li>
                                                        </div>
                                                    </p>
                                                </details>

                                                <hr className="border-1 border-gray-400" />
                                                <details className="w-full  bg-white cursor-pointer mb-3">
                                                    <summary className="bg-white text-dark flex justify-between px-4 py-3 after:content-['+'] mt-3 font-bold">2. What are Cookies?</summary>
                                                    <hr className="border-1 border-gray-400 mt-3" />
                                                    <p className="px-4 py-3  mt-3">
                                                        Cookies are text files containing small pieces of data that are stored on your computer or mobile device whenever you access a website. They are used to make websites operate or function more efficiently, as well as to provide information to the owners of the website. Cookies enhance user experience by allowing websites to read and write them, enabling them to recognize visitors and remember important information that makes the visitor’s use of the website more convenient.
                                                        <div className="mt-4">
                                                            Cookies set by a website owner (in this case, Virufy) are called “first party cookies”. Cookies set by parties other than the website owner are called “third party cookies”. Third party cookies enable third party features or functionality to be provided on or through the Website (e.g. analytics).
                                                        </div>
                                                    </p>
                                                </details>

                                                <hr className="border-1 border-gray-400" />
                                                <details className="w-full  bg-white cursor-pointer mb-3">
                                                    <summary className="bg-white text-dark flex justify-between px-4 py-3 after:content-['+'] mt-3 font-bold">3. How do we use Cookies</summary>
                                                    <hr className="border-1 border-gray-400 mt-3" />
                                                    <p className="px-4 py-3  mt-3">
                                                        Cookies are messages that web servers pass to web browsers when you visit websites. Cookies are most commonly used to track website activity, to track online shopping, remembering your preferences, and improving your user experience through personalized web pages.
                                                        <div className="mt-4">
                                                            We may use the following types of Cookies* to make the website user-friendly:
                                                        </div>
                                                        <div className="mt-4"><li>
                                                            Essential Cookies
                                                        </li>
                                                            The Website may use technical cookies to carry out activities that are strictly necessary for the operation or delivery of services. They include, for example, cookies that allow you to access secure areas of the website. We use this cookie to obtain the required consent to process data.
                                                        </div>
                                                        <div className="mt-4"><li>
                                                            Preference Cookies
                                                        </li>
                                                            These cookies enable a website to remember information that changes the way the website behaves or looks, like preferred language or the region that you are in.
                                                        </div>
                                                        <div className="mt-4"><li>
                                                            Performance Cookies
                                                        </li>
                                                            Also known as analytics cookies, these cookies may be used to collect information about your use of the Website and make the Website more user-friendly. Usage of analytic cookies includes but is not limited to distinguishing users and understanding overall patterns of usage of the Website. We use this information in aggregate form to improve the way our Website works.                                                        </div>
                                                        <div className="mt-4">
                                                            <li>
                                                                Marketing Cookies
                                                            </li>
                                                            These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.
                                                            <hr className="border-0" />
                                                            These cookies can be deleted or blocked by adjusting your browser settings (see Section 4, How can you control Cookies, below).
                                                            Alternatively, please follow the links below to opt-out: Google Analytics: https://tools.google.com/dlpage/gaoptout
                                                        </div>
                                                    </p>
                                                </details>

                                                <hr className="border-1 border-gray-400" />

                                                <details className="w-full  bg-white cursor-pointer mb-3">
                                                    <summary className="bg-white text-dark flex justify-between px-4 py-3 after:content-['+'] mt-3 font-bold">4. How can you control Cookies?</summary>
                                                    <hr className="border-1 border-gray-400 mt-3" />
                                                    <p className="px-4 py-3  mt-3">
                                                        You have the right to decide whether to accept or reject cookies. You do not have to accept cookies and consent can be withdrawn at any time. Please note that essential cookies cannot be rejected as they are strictly necessary to provide you with services of our Website.
                                                        <div className="mt-4">
                                                            By using our Cookie Consent Banner, you can select the categories of cookies which you choose to accept or reject. The Cookie Consent Banner can be found in the notification banner and on our Website. You can change or revoke consent for your cookie policies directly from the website by clicking “Cookie settings” at the bottom of the page.
                                                        </div>
                                                        <div className="mt-4">
                                                            If you choose not to click on “Got it!”, or do not close the message, you may still use our Website. You may also refuse to accept cookies from this Website at any time by activating the setting on your browser which allows you to refuse cookies.
                                                        </div>
                                                        <div className="mt-4">
                                                            Please follow the links below to helpful information for the most popular browsers:
                                                        </div>
                                                        <div className="mt-4">
                                                            Apple Safari
                                                            <hr className="border-0" />
                                                            Google Chrome
                                                            <hr className="border-0" />
                                                            Microsoft Edge
                                                            <hr className="border-0" />
                                                            Microsoft Internet Explorer
                                                            <hr className="border-0" />
                                                            Mozilla Firefox
                                                            <hr className="border-0" />
                                                            Opera
                                                        </div>
                                                    </p>
                                                </details>

                                                <hr className="border-1 border-gray-400" />


                                                <details className="w-full  bg-white cursor-pointer mb-3">
                                                    <summary className="bg-white text-dark flex justify-between px-4 py-3 after:content-['+'] mt-3 font-bold">5. Amendments to this Cookie Policy</summary>
                                                    <hr className="border-1 border-gray-400 mt-3" />
                                                    <p className="px-4 py-3  mt-3">
                                                        We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Since we do not collect personal data such as your IP address, email or any other form of contact, thus having no means to reach you for your safety, please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
                                                        <div className="mt-4">
                                                            The date at the top of this Cookie Policy indicates when it was last updated.
                                                        </div>
                                                    </p>
                                                </details>

                                                <hr className="border-1 border-gray-400" />


                                                <details className="w-full  bg-white cursor-pointer mb-3">
                                                    <summary className="bg-white text-dark flex justify-between px-4 py-3 after:content-['+'] mt-3 font-bold">6. How can you contact us with questions?</summary>
                                                    <hr className="border-1 border-gray-400 mt-3" />
                                                    <p className="px-4 py-3  mt-3">
                                                        If you have any concerns relating to our use of cookies or other technologies, please contact us at
                                                        <hr className="border-0" />
                                                        study@virufy.org
                                                    </p>
                                                </details>

                                                <hr className="border-1 border-gray-400" />


                                            </div>
                                        </div>
                                    </div>
                                    {/*footer*/}

                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
            </div >



            <footer className="bg-gray-200">

                <div className="w-full max-w-screen-xl mx-auto p-4 py-10 flex flex-col">
                    <Link href="/" className="flex justify-center lg:hidden">
                        <ImageAtomLocal ImageStyleProps="lg:h-12" src={VirufyLogo} alt="Virufy Logo" imagesize="" border="" />
                    </Link>
                    <div className="flex w-full">
                        <hr className="w-11/12 h-px mx-auto my-4 border-0 rounded bg-gray-700" />
                    </div>
                    <div className="absolute mx-12 lg:flex justify-start hidden w-56 mt-12">
                        <Link href="/">
                            <ImageAtomLocal src={VirufyLogo} imagesize="px160" alt="Virufy Logo" border="" ImageStyleProps="" />
                        </Link>
                    </div>
                    <ul className="flex flex-wrap mb-6 text-[#393939] lg:hidden">
                        <li className="flex w-full items-center justify-center my-1 underline">
                            <LinkAtom Routes={links1} Style="linkFooter" />
                        </li>
                        <li className="flex w-full items-center justify-center my-1 underline">
                            <Link onClick={() => setShowModalCookiesPolicy(true)} href="">
                                <LinkAtom Routes={links2} Style="linkFooter" />
                            </Link>
                        </li>
                        <li className="flex w-full items-center justify-center my-1 underline">
                            <LinkAtom Routes={links3} Style="linkFooter" />
                        </li>
                        <li className="flex w-full items-center justify-center my-1 underline">
                            <Link onClick={() => setShowModalPrivacyPolicy(true)} href="">
                                <LinkAtom Routes={links4} Style="linkFooter" />
                            </Link>
                        </li>
                        <li className="flex w-full items-center justify-center my-1 underline">
                            <Link onClick={() => setShowModalMyInformation(true)} href="">
                                <LinkAtom Routes={links5} Style="linkFooter" />
                            </Link>
                        </li>
                        <li className="flex w-full items-center justify-center my-1 underline">

                            <LinkAtom Routes={links6} Style="linkFooter" />

                        </li>
                    </ul>
                    <ul className="hidden flex-wrap mb-6 text-[#393939] lg:flex">
                        <li className="flex w-full items-center justify-center my-6 underline">
                            <LinkAtom Routes={links1} Style="linkFooter" />
                        </li>

                        <li className="flex w-full items-center justify-center my-6 underline">
                            <Link onClick={() => setShowModalCookiesPolicy(true)} href="">
                                <LinkAtom Routes={links2} Style="linkFooter" />
                            </Link>
                            <Link onClick={() => setShowModalPrivacyPolicy(true)} href="">
                                <LinkAtom Routes={links4} Style="linkFooter" />
                            </Link>

                            <Link onClick={() => setShowModalMyInformation(true)} href="">
                                <LinkAtom Routes={links5} Style="linkFooter" />
                            </Link>

                            <LinkAtom Routes={links6} Style="linkFooter" />
                        </li>
                    </ul>
                    <div className="flex justify-center gap-7">
                        <Link href="https://www.instagram.com/virufy/" className="lg:hidden">
                            <ImageAtomLocal src={Instagram} imagesize="px20" alt="Virufy Logo" border="" ImageStyleProps="" />
                        </Link>
                        <Link href="https://www.linkedin.com/company/virufy/" className="lg:hidden">
                            <ImageAtomLocal src={Linkedin} imagesize="px20" alt="Virufy Logo" border="" ImageStyleProps="" />
                        </Link>
                        <Link href="https://www.instagram.com/virufy/" className="hidden lg:flex">
                            <ImageAtomLocal src={Instagram} imagesize="px30" alt="Virufy Logo" border="" ImageStyleProps="" />
                        </Link>
                        <Link href="https://www.linkedin.com/company/virufy/" className="hidden lg:flex">
                            <ImageAtomLocal src={Linkedin} imagesize="px30" alt="Virufy Logo" border="" ImageStyleProps="" />
                        </Link>
                    </div>
                    <div className="flex flex-col align-center gap-7 mt-7 text-[#393939] w-full lg:hidden">
                        <div className="max-w-4xl align-center text-center m-auto">
                            <Text Text="Nonprofit Status" Style="normal" TextClassProps="" />
                        </div>
                        <div className="max-w-4xl align-center text-center m-auto">
                            <Text TextClassProps=""
                                Text="Virufy is a California nonprofit corporation recognized by the United States Internal Revenue Service (IRS) as a tax-exempt public charity under Section 501(c)(3) of the Internal Revenue Code."
                                Style="normal"
                            />
                        </div>
                        <div className="max-w-4xl align-center text-center m-auto">
                            <Text TextClassProps=""
                                Text="©2022 Virufy | VIRUFY is a trademark of The Covid Detection Foundation, a California nonprofit corporation | All rights reserved"
                                Style="normal"
                            />
                        </div>
                    </div>
                    <div className="lg:flex flex-col align-center gap-7 mt-10 text-[#393939] w-full hidden">
                        <div className="max-w-4xl align-center text-center m-auto">
                            <Text Text="Nonprofit Status" Style="subtitle" TextClassProps="" />
                        </div>
                        <div className="max-w-4xl align-center text-center m-auto">
                            <Text TextClassProps=""
                                Text="Virufy is a California nonprofit corporation recognized by the United States Internal Revenue Service (IRS) as a tax-exempt public charity under Section 501(c)(3) of the Internal Revenue Code."
                                Style="subtitle"
                            />
                        </div>
                        <div className="max-w-4xl align-center text-center m-auto">
                            <Text TextClassProps=""
                                Text="©2022 Virufy | VIRUFY is a trademark of The Covid Detection Foundation, a California nonprofit corporation | All rights reserved"
                                Style="subtitle"
                            />
                        </div>
                    </div>
                </div >
            </footer >
        </>
    );
}