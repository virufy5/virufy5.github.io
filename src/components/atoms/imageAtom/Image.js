import { ImageSize, ImageBorder } from "../../themes";

function Image({ size, route, alt, border }) {

    return (
        <img className={`${ImageBorder?.[border]} ${ImageSize?.[size]} `} src={route} alt={alt} />
    )
}
export default Image;