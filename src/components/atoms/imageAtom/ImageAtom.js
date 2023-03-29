import { ImageSize, ImageBorder } from "../../themes";

export default function ImageAtom({ imagesize, route, alt, border }) {

    return (
        <>
            <img className={`${ImageBorder?.[border]} ${ImageSize?.[imagesize]} `} src={route} alt={alt} />
        </>
    )
}