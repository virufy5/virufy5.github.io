import Link from "next/link";
import { ButtonType, ButtonSize } from "../../themes";

export default function Button({ size, type, label, path }) {

    return (
        <>
            <button className={`${ButtonType?.[type]} ${ButtonSize?.[size]}`}><Link href={path}>{label.toUpperCase()}</Link></button>
        </>
    )
}