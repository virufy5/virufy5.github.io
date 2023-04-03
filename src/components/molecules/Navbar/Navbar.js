import Link from "next/link";
import ImageAtomLocal from "~/components/atoms/imageAtom/ImageAtomLocal";
import VirufyLogo from "~/assets/static/images/logo/virufy.svg";
import BarsMenu from "~/assets/static/icons/barsIconMenu.svg";
import LinkAtom from "~/components/atoms/LinkAtom/LinkAtom";
import Select from "~/components/atoms/Select/Select";
import Button from "~/components/atoms/button/Button";
import EngFlag from "~/assets/static/icons/flags/eng.png";

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

    return (
        <>
            <nav className="navbar"
                style={{
                    width: "100%",
                    height: "88px",
                    background: "#FFFFFF"
                }}>
                <input style={{ display: "none" }} type="checkbox" id="check" />
                <label style={{ display: "flex", alignItems: "center", height: "88px", float: "right", lineHeight: "88px", cursor: "pointer" }} htmlFor="check">
                    <i style={{ lineHeight: "88px" }}><ImageAtomLocal imagesize="px30" border="none" src={BarsMenu} alt="bars menu" /></i>
                </label>
                <Link style={{ position: "absolute", padding: "20px 50px" }} href="/"><ImageAtomLocal imagesize="px160" border="none" src={VirufyLogo} alt="Logo Virufy" /></Link>
                <div style={{ display: "flex", alignItems: "center", padding: "20px 50px", float: "right", height: "88px" }}>
                    <LinkAtom Routes={links} Style="link" />
                    <Select Text="" Options={options} />
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        float: "right",
                        height: "88px",
                        gap: "5%"
                    }}>
                        <Button size="small" type="secondary" path="#" label="Join us" />
                        <Button size="small" type="primary" path="#" label="Donate" />
                    </div>
                </div>

            </nav >
        </>
    );
}