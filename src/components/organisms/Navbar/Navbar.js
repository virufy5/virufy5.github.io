import Link from "next/link";
import ImageAtomLocal from "~/components/atoms/imageAtom/ImageAtomLocal";
import VirufyLogo from "~/assets/static/images/logo/virufy.svg";
import BarsMenu from "~/assets/static/icons/navbar/barsIconMenu.svg";
import CloseMenu from "~/assets/static/icons/navbar/closeIconMenu.svg";
import LinkAtom from "~/components/atoms/LinkAtom/LinkAtom";
import Select from "~/components/atoms/Select/Select";
import Button from "~/components/atoms/button/Button";
import { useState } from "react";

export default function Navbar() {

    const links = [
        { label: 'Our Technology', route: '/es/Home' },
        { label: 'Get Involved', route: '/es/Home' },
        { label: 'About', route: '/es/Home' },
        { label: 'FAQ', route: '/es/Home' }
    ]

    const options = [
        { label: 'ENG', value: '1' },
        { label: 'ESP', value: '2' },
        { label: 'JPN', value: '3' },
        { label: 'POR', value: '4' },
    ];

    const [navbar, setNavbar] = useState(false);

    return (
        <div>
            <nav className="w-full bg-white fixed top-0 left-0 right-0 z-10"
                style={{
                    height: "88px",
                }}>
                <input style={{ display: "none" }} type="checkbox" id="check" />
                <label style={{ display: "flex", alignItems: "center", height: "88px", float: "right", lineHeight: "88px", cursor: "pointer" }} htmlFor="check">
                    <button onClick={() => setNavbar(!navbar)} className="lg:hidden" style={{ lineHeight: "88px" }}>
                        {navbar ? (<ImageAtomLocal imagesize="px30" border="none" src={CloseMenu} alt="bars menu" />) : (<ImageAtomLocal imagesize="px30" border="none" src={BarsMenu} alt="bars menu" />)}
                    </button>
                </label>
                <Link style={{ position: "absolute", padding: "20px 50px" }} href="/"><ImageAtomLocal imagesize="px160" border="none" src={VirufyLogo} alt="Logo Virufy" /></Link>
                <div className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${navbar ? 'p-12 lg:p-0 block' : 'hidden'
                    }`}>
                    <ul className="h-screen lg:w-4/5 lg:h-auto items-center justify-center " style={{
                        display: "flex",
                        alignItems: "center",
                        float: "right",
                        height: "88px",
                    }}>
                        <li className="flex lg:w-4/5 pb-1 text-xl text-black py-2 border-b-2 lg:border-b-0">
                            <LinkAtom Routes={links} Style="link" />
                        </li>
                        <div className="flex items-center lg:w-2/6">
                            <Select Text="" Options={options} />
                            <Button size="small" type="secondary" path="#" label="Join us" />
                            <Button size="small" type="primary" path="#" label="Donate" />
                        </div>
                    </ul>

                </div>
            </nav >
        </div>
    );
}