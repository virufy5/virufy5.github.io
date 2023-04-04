import { ImageSize, ImageBorder } from "../../themes";

export default function ImageAtomURL({ imagesize, alt, border, src }) {

    return (
        <>
            <div>
                <img className={`${ImageBorder?.[border]} ${ImageSize?.[imagesize]} inline-block`} src={src} alt={alt} />
            </div>
        </>
    )
}