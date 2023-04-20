import ImageAtomLocal from "~/components/atoms/imageAtom/ImageAtomLocal";
import VirufyLogo from "~/assets/static/images/logo/virufy.svg";
import Link from "next/link";
import LinkAtom from "~/components/atoms/LinkAtom/LinkAtom";
import Instagram from "~/assets/static/icons/footer/Instagram.svg";
import Linkedin from "~/assets/static/icons/footer/Linkedin.svg";
import Text from "~/components/atoms/Text/Text";

export default function Footer() {

    const links1 = [
        { label: 'Our Technology', route: '/es/Home' },
        { label: 'Get Involved', route: '/es/Home' },
        { label: 'About', route: '/es/Home' },
        { label: 'FAQ', route: '/es/Home' }
    ]

    const links2 = [
        { label: 'Cookie Policy', route: '/es/Home' },
        { label: 'Cookie Settings', route: '/es/Home' },
        { label: 'Privacy Policy', route: '/es/Home' },
    ]

    const links3 = [
        { label: 'Do Not Sell My Personal Information', route: '/es/Home' },
    ]
    const links4 = [
        { label: 'Code of Conduct', route: '/es/Home' },
    ]

    return (
        <>
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
                            <LinkAtom Routes={links2} Style="linkFooter" />
                        </li>
                        <li className="flex w-full items-center justify-center my-1 underline">
                            <LinkAtom Routes={links3} Style="linkFooter" />
                        </li>
                        <li className="flex w-full items-center justify-center my-1 underline">
                            <LinkAtom Routes={links4} Style="linkFooter" />
                        </li>
                    </ul>
                    <ul className="hidden flex-wrap mb-6 text-[#393939] lg:flex">
                        <li className="flex w-full items-center justify-center my-6 underline">
                            <LinkAtom Routes={links1} Style="linkFooter" />
                        </li>
                        <li className="flex w-full items-center justify-center my-6 underline">
                            <LinkAtom Routes={links2} Style="linkFooter" />
                            <LinkAtom Routes={links3} Style="linkFooter" />
                            <LinkAtom Routes={links4} Style="linkFooter" />
                        </li>
                    </ul>
                    <div className="flex justify-center gap-7">
                        <Link href="/" className="lg:hidden">
                            <ImageAtomLocal src={Instagram} imagesize="px20" alt="Virufy Logo" border="" ImageStyleProps="" />
                        </Link>
                        <Link href="/" className="lg:hidden">
                            <ImageAtomLocal src={Linkedin} imagesize="px20" alt="Virufy Logo" border="" ImageStyleProps="" />
                        </Link>
                        <Link href="/" className="hidden lg:flex">
                            <ImageAtomLocal src={Instagram} imagesize="px30" alt="Virufy Logo" border="" ImageStyleProps="" />
                        </Link>
                        <Link href="/" className="hidden lg:flex">
                            <ImageAtomLocal src={Linkedin} imagesize="px30" alt="Virufy Logo" border="" ImageStyleProps="" />
                        </Link>
                    </div>
                    <div className="flex flex-col align-center gap-7 mt-7 text-[#393939] w-full lg:hidden">
                        <div className="max-w-4xl align-center text-center m-auto">
                            <Text Text="Nonprofit Status" Style="normal" />
                        </div>
                        <div className="max-w-4xl align-center text-center m-auto">
                            <Text
                                Text="Virufy is a California nonprofit corporation recognized by the United States Internal Revenue Service (IRS) as a tax-exempt public charity under Section 501(c)(3) of the Internal Revenue Code."
                                Style="normal"
                            />
                        </div>
                        <div className="max-w-4xl align-center text-center m-auto">
                            <Text
                                Text="©2022 Virufy | VIRUFY is a trademark of The Covid Detection Foundation, a California nonprofit corporation | All rights reserved"
                                Style="normal"
                            />
                        </div>
                    </div>
                    <div className="lg:flex flex-col align-center gap-7 mt-10 text-[#393939] w-full hidden">
                        <div className="max-w-4xl align-center text-center m-auto">
                            <Text Text="Nonprofit Status" Style="subtitle" />
                        </div>
                        <div className="max-w-4xl align-center text-center m-auto">
                            <Text
                                Text="Virufy is a California nonprofit corporation recognized by the United States Internal Revenue Service (IRS) as a tax-exempt public charity under Section 501(c)(3) of the Internal Revenue Code."
                                Style="subtitle"
                            />
                        </div>
                        <div className="max-w-4xl align-center text-center m-auto">
                            <Text
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