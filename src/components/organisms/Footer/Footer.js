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
                                                    <summary className="bg-white text-dark flex justify-between px-4 py-3 after:content-['+'] mt-3 font-bold">General</summary>
                                                    <hr className="border-1 border-gray-400 mt-3" />
                                                    <p className="px-4 py-3  mt-3">
                                                        The Covid Detection Foundation (“Virufy”, “we”, “us” or “our”), a California nonprofit corporation located at 4546, El Camino Real, B10 #614, Los Altos, código postal 94022, United States of America respects your privacy and is committed to processing your personal information in accordance with the law. This Cookie Policy (“Policy”) explains how Virufy uses cookies and similar technologies to process your personal information that you provide to us when you visit our website (www.virufy.org) (“Website”) or participate in our research survey for the compilation of a dataset needed for the development of artificial intelligence (AI) algorithms for device-based COVID-19 detection.
                                                        For users located in Europe:
                                                        - This cookie policy will be treated under Recital 30 of the European General Data Protection Regulation 2016/679 (the “GDPR”)
                                                        For users located in Spain:
                                                        - This cookie policy will be treated under Recital 30 of the European General Data Protection Regulation 2016/679 (the “GDPR”) and under Article 22 of Law 34/2002, of July 11, on information society services and electronic commerce (LSSICE).
                                                        For users located in Argentina:
                                                        - This cookie policy will be treated under Argentinian Law 25.326 on Protection of Personal Data.
                                                        For users located in Brazil:
                                                        - This cookie policy will be treated under the General Personal Data Protection Law, number 13.709 / 2018 of Brazil (the “LGPD”).
                                                        For users located in Colombia:
                                                        - This cookie policy will be treated under Colombian law 1581 of 2012.
                                                        For users located in the United Mexican States:
                                                        - This cookie policy will be considered part of the Virufy Privacy Notice and will be treated under the Federal Law on Protection of Personal Data Held by Private Parties. Whenever reference is made to  in the present, the term  is understood interchangeably.
                                                        For users located in Bolivia:
                                                        - This cookie policy will be treated under Bolivian Law
                                                        For users located in Peru:
                                                        - This cookie policy will be treated under Peruvian Law.
                                                        Virufy is the “data controller” of, and responsible for, your personal information collected in accordance with this Cookie Policy. For further information about how we use, store, disclose and process personal data that we obtain through or in connection with the use of our Website, please visit our Privacy Policy.
                                                        When you first access our Website, you will receive a message advising you that cookies and similar technologies are in use. By clicking “Use necessary cookies only” or “Allow all cookies”, you signify that you understand and agree to the use of these technologies, as described in this Cookie Policy
                                                        If you have any inquiries or complaints regarding our Cookie Policy, please contact us by email at study@virufy.org Our team will reply you within 30 business days upon receipt of your request.
                                                    </p>
                                                </details>

                                                <hr className="border-1 border-gray-400" />
                                                <details className="w-full  bg-white cursor-pointer mb-3">
                                                    <summary className="bg-white text-dark flex justify-between px-4 py-3 after:content-['+'] mt-3 font-bold">What are cookies?</summary>
                                                    <hr className="border-1 border-gray-400 mt-3" />
                                                    <p className="px-4 py-3  mt-3">
                                                        The Covid Detection Foundation (“Virufy”, “we”, “us” or “our”), a California nonprofit corporation located at 4546, El Camino Real, B10 #614, Los Altos, código postal 94022, United States of America respects your privacy and is committed to processing your personal information in accordance with the law. This Cookie Policy (“Policy”) explains how Virufy uses cookies and similar technologies to process your personal information that you provide to us when you visit our website (www.virufy.org) (“Website”) or participate in our research survey for the compilation of a dataset needed for the development of artificial intelligence (AI) algorithms for device-based COVID-19 detection.
                                                        For users located in Europe:
                                                        - This cookie policy will be treated under Recital 30 of the European General Data Protection Regulation 2016/679 (the “GDPR”)
                                                        For users located in Spain:
                                                        - This cookie policy will be treated under Recital 30 of the European General Data Protection Regulation 2016/679 (the “GDPR”) and under Article 22 of Law 34/2002, of July 11, on information society services and electronic commerce (LSSICE).
                                                        For users located in Argentina:
                                                        - This cookie policy will be treated under Argentinian Law 25.326 on Protection of Personal Data.
                                                        For users located in Brazil:
                                                        - This cookie policy will be treated under the General Personal Data Protection Law, number 13.709 / 2018 of Brazil (the “LGPD”).
                                                        For users located in Colombia:
                                                        - This cookie policy will be treated under Colombian law 1581 of 2012.
                                                        For users located in the United Mexican States:
                                                        - This cookie policy will be considered part of the Virufy Privacy Notice and will be treated under the Federal Law on Protection of Personal Data Held by Private Parties. Whenever reference is made to  in the present, the term  is understood interchangeably.
                                                        For users located in Bolivia:
                                                        - This cookie policy will be treated under Bolivian Law
                                                        For users located in Peru:
                                                        - This cookie policy will be treated under Peruvian Law.
                                                        Virufy is the “data controller” of, and responsible for, your personal information collected in accordance with this Cookie Policy. For further information about how we use, store, disclose and process personal data that we obtain through or in connection with the use of our Website, please visit our Privacy Policy.
                                                        When you first access our Website, you will receive a message advising you that cookies and similar technologies are in use. By clicking “Use necessary cookies only” or “Allow all cookies”, you signify that you understand and agree to the use of these technologies, as described in this Cookie Policy
                                                        If you have any inquiries or complaints regarding our Cookie Policy, please contact us by email at study@virufy.org Our team will reply you within 30 business days upon receipt of your request.
                                                    </p>
                                                </details>

                                                <hr className="border-1 border-gray-400" />
                                                <details className="w-full  bg-white cursor-pointer mb-3">
                                                    <summary className="bg-white text-dark flex justify-between px-4 py-3 after:content-['+'] mt-3 font-bold">How do we use cookies?</summary>
                                                    <hr className="border-1 border-gray-400 mt-3" />
                                                    <p className="px-4 py-3  mt-3">
                                                        The Covid Detection Foundation (“Virufy”, “we”, “us” or “our”), a California nonprofit corporation located at 4546, El Camino Real, B10 #614, Los Altos, código postal 94022, United States of America respects your privacy and is committed to processing your personal information in accordance with the law. This Cookie Policy (“Policy”) explains how Virufy uses cookies and similar technologies to process your personal information that you provide to us when you visit our website (www.virufy.org) (“Website”) or participate in our research survey for the compilation of a dataset needed for the development of artificial intelligence (AI) algorithms for device-based COVID-19 detection.
                                                        For users located in Europe:
                                                        - This cookie policy will be treated under Recital 30 of the European General Data Protection Regulation 2016/679 (the “GDPR”)
                                                        For users located in Spain:
                                                        - This cookie policy will be treated under Recital 30 of the European General Data Protection Regulation 2016/679 (the “GDPR”) and under Article 22 of Law 34/2002, of July 11, on information society services and electronic commerce (LSSICE).
                                                        For users located in Argentina:
                                                        - This cookie policy will be treated under Argentinian Law 25.326 on Protection of Personal Data.
                                                        For users located in Brazil:
                                                        - This cookie policy will be treated under the General Personal Data Protection Law, number 13.709 / 2018 of Brazil (the “LGPD”).
                                                        For users located in Colombia:
                                                        - This cookie policy will be treated under Colombian law 1581 of 2012.
                                                        For users located in the United Mexican States:
                                                        - This cookie policy will be considered part of the Virufy Privacy Notice and will be treated under the Federal Law on Protection of Personal Data Held by Private Parties. Whenever reference is made to  in the present, the term  is understood interchangeably.
                                                        For users located in Bolivia:
                                                        - This cookie policy will be treated under Bolivian Law
                                                        For users located in Peru:
                                                        - This cookie policy will be treated under Peruvian Law.
                                                        Virufy is the “data controller” of, and responsible for, your personal information collected in accordance with this Cookie Policy. For further information about how we use, store, disclose and process personal data that we obtain through or in connection with the use of our Website, please visit our Privacy Policy.
                                                        When you first access our Website, you will receive a message advising you that cookies and similar technologies are in use. By clicking “Use necessary cookies only” or “Allow all cookies”, you signify that you understand and agree to the use of these technologies, as described in this Cookie Policy
                                                        If you have any inquiries or complaints regarding our Cookie Policy, please contact us by email at study@virufy.org Our team will reply you within 30 business days upon receipt of your request.
                                                    </p>
                                                </details>

                                                <hr className="border-1 border-gray-400" />

                                                <details className="w-full  bg-white cursor-pointer mb-3">
                                                    <summary className="bg-white text-dark flex justify-between px-4 py-3 after:content-['+'] mt-3 font-bold">How can you control cookies?</summary>
                                                    <hr className="border-1 border-gray-400 mt-3" />
                                                    <p className="px-4 py-3  mt-3">
                                                        The Covid Detection Foundation (“Virufy”, “we”, “us” or “our”), a California nonprofit corporation located at 4546, El Camino Real, B10 #614, Los Altos, código postal 94022, United States of America respects your privacy and is committed to processing your personal information in accordance with the law. This Cookie Policy (“Policy”) explains how Virufy uses cookies and similar technologies to process your personal information that you provide to us when you visit our website (www.virufy.org) (“Website”) or participate in our research survey for the compilation of a dataset needed for the development of artificial intelligence (AI) algorithms for device-based COVID-19 detection.
                                                        For users located in Europe:
                                                        - This cookie policy will be treated under Recital 30 of the European General Data Protection Regulation 2016/679 (the “GDPR”)
                                                        For users located in Spain:
                                                        - This cookie policy will be treated under Recital 30 of the European General Data Protection Regulation 2016/679 (the “GDPR”) and under Article 22 of Law 34/2002, of July 11, on information society services and electronic commerce (LSSICE).
                                                        For users located in Argentina:
                                                        - This cookie policy will be treated under Argentinian Law 25.326 on Protection of Personal Data.
                                                        For users located in Brazil:
                                                        - This cookie policy will be treated under the General Personal Data Protection Law, number 13.709 / 2018 of Brazil (the “LGPD”).
                                                        For users located in Colombia:
                                                        - This cookie policy will be treated under Colombian law 1581 of 2012.
                                                        For users located in the United Mexican States:
                                                        - This cookie policy will be considered part of the Virufy Privacy Notice and will be treated under the Federal Law on Protection of Personal Data Held by Private Parties. Whenever reference is made to  in the present, the term  is understood interchangeably.
                                                        For users located in Bolivia:
                                                        - This cookie policy will be treated under Bolivian Law
                                                        For users located in Peru:
                                                        - This cookie policy will be treated under Peruvian Law.
                                                        Virufy is the “data controller” of, and responsible for, your personal information collected in accordance with this Cookie Policy. For further information about how we use, store, disclose and process personal data that we obtain through or in connection with the use of our Website, please visit our Privacy Policy.
                                                        When you first access our Website, you will receive a message advising you that cookies and similar technologies are in use. By clicking “Use necessary cookies only” or “Allow all cookies”, you signify that you understand and agree to the use of these technologies, as described in this Cookie Policy
                                                        If you have any inquiries or complaints regarding our Cookie Policy, please contact us by email at study@virufy.org Our team will reply you within 30 business days upon receipt of your request.
                                                    </p>
                                                </details>

                                                <hr className="border-1 border-gray-400" />


                                                <details className="w-full  bg-white cursor-pointer mb-3">
                                                    <summary className="bg-white text-dark flex justify-between px-4 py-3 after:content-['+'] mt-3 font-bold">Amendments to this cookie policy?</summary>
                                                    <hr className="border-1 border-gray-400 mt-3" />
                                                    <p className="px-4 py-3  mt-3">
                                                        The Covid Detection Foundation (“Virufy”, “we”, “us” or “our”), a California nonprofit corporation located at 4546, El Camino Real, B10 #614, Los Altos, código postal 94022, United States of America respects your privacy and is committed to processing your personal information in accordance with the law. This Cookie Policy (“Policy”) explains how Virufy uses cookies and similar technologies to process your personal information that you provide to us when you visit our website (www.virufy.org) (“Website”) or participate in our research survey for the compilation of a dataset needed for the development of artificial intelligence (AI) algorithms for device-based COVID-19 detection.
                                                        For users located in Europe:
                                                        - This cookie policy will be treated under Recital 30 of the European General Data Protection Regulation 2016/679 (the “GDPR”)
                                                        For users located in Spain:
                                                        - This cookie policy will be treated under Recital 30 of the European General Data Protection Regulation 2016/679 (the “GDPR”) and under Article 22 of Law 34/2002, of July 11, on information society services and electronic commerce (LSSICE).
                                                        For users located in Argentina:
                                                        - This cookie policy will be treated under Argentinian Law 25.326 on Protection of Personal Data.
                                                        For users located in Brazil:
                                                        - This cookie policy will be treated under the General Personal Data Protection Law, number 13.709 / 2018 of Brazil (the “LGPD”).
                                                        For users located in Colombia:
                                                        - This cookie policy will be treated under Colombian law 1581 of 2012.
                                                        For users located in the United Mexican States:
                                                        - This cookie policy will be considered part of the Virufy Privacy Notice and will be treated under the Federal Law on Protection of Personal Data Held by Private Parties. Whenever reference is made to  in the present, the term  is understood interchangeably.
                                                        For users located in Bolivia:
                                                        - This cookie policy will be treated under Bolivian Law
                                                        For users located in Peru:
                                                        - This cookie policy will be treated under Peruvian Law.
                                                        Virufy is the “data controller” of, and responsible for, your personal information collected in accordance with this Cookie Policy. For further information about how we use, store, disclose and process personal data that we obtain through or in connection with the use of our Website, please visit our Privacy Policy.
                                                        When you first access our Website, you will receive a message advising you that cookies and similar technologies are in use. By clicking “Use necessary cookies only” or “Allow all cookies”, you signify that you understand and agree to the use of these technologies, as described in this Cookie Policy
                                                        If you have any inquiries or complaints regarding our Cookie Policy, please contact us by email at study@virufy.org Our team will reply you within 30 business days upon receipt of your request.
                                                    </p>
                                                </details>

                                                <hr className="border-1 border-gray-400" />


                                                <details className="w-full  bg-white cursor-pointer mb-3">
                                                    <summary className="bg-white text-dark flex justify-between px-4 py-3 after:content-['+'] mt-3 font-bold">How can you contact us with questions?</summary>
                                                    <hr className="border-1 border-gray-400 mt-3" />
                                                    <p className="px-4 py-3  mt-3">
                                                        The Covid Detection Foundation (“Virufy”, “we”, “us” or “our”), a California nonprofit corporation located at 4546, El Camino Real, B10 #614, Los Altos, código postal 94022, United States of America respects your privacy and is committed to processing your personal information in accordance with the law. This Cookie Policy (“Policy”) explains how Virufy uses cookies and similar technologies to process your personal information that you provide to us when you visit our website (www.virufy.org) (“Website”) or participate in our research survey for the compilation of a dataset needed for the development of artificial intelligence (AI) algorithms for device-based COVID-19 detection.
                                                        For users located in Europe:
                                                        - This cookie policy will be treated under Recital 30 of the European General Data Protection Regulation 2016/679 (the “GDPR”)
                                                        For users located in Spain:
                                                        - This cookie policy will be treated under Recital 30 of the European General Data Protection Regulation 2016/679 (the “GDPR”) and under Article 22 of Law 34/2002, of July 11, on information society services and electronic commerce (LSSICE).
                                                        For users located in Argentina:
                                                        - This cookie policy will be treated under Argentinian Law 25.326 on Protection of Personal Data.
                                                        For users located in Brazil:
                                                        - This cookie policy will be treated under the General Personal Data Protection Law, number 13.709 / 2018 of Brazil (the “LGPD”).
                                                        For users located in Colombia:
                                                        - This cookie policy will be treated under Colombian law 1581 of 2012.
                                                        For users located in the United Mexican States:
                                                        - This cookie policy will be considered part of the Virufy Privacy Notice and will be treated under the Federal Law on Protection of Personal Data Held by Private Parties. Whenever reference is made to in the present, the term  is understood interchangeably.
                                                        For users located in Bolivia:
                                                        - This cookie policy will be treated under Bolivian Law
                                                        For users located in Peru:
                                                        - This cookie policy will be treated under Peruvian Law.
                                                        Virufy is the “data controller” of, and responsible for, your personal information collected in accordance with this Cookie Policy. For further information about how we use, store, disclose and process personal data that we obtain through or in connection with the use of our Website, please visit our Privacy Policy.
                                                        When you first access our Website, you will receive a message advising you that cookies and similar technologies are in use. By clicking “Use necessary cookies only” or “Allow all cookies”, you signify that you understand and agree to the use of these technologies, as described in this Cookie Policy
                                                        If you have any inquiries or complaints regarding our Cookie Policy, please contact us by email at study@virufy.org Our team will reply you within 30 business days upon receipt of your request.
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