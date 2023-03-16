import Link from "next/link";
import { ButtonType, ButtonSize } from "../../themes";

function Button({ size, type, label, path }) {

    const classNames = ButtonType[type] + " " + ButtonSize[size];

    return (
        <button className={classNames}><Link href={path}>{label.toUpperCase()}</Link></button>
    )
}
export default Button;