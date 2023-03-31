import { ImageSize, ImageBorder } from "../../themes";
import Image from "next/image";

export default function ImageAtomLocal({ imagesize, alt, border, src }) {

    return (
        <>
            <Image className={`${ImageBorder?.[border]} ${ImageSize?.[imagesize]}`} src={src} alt={alt} />
        </>
    )
}