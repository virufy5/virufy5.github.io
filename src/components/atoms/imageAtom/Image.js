import { ImageSize, ImageBorder } from "../../themes";

function Image({ size, route, alt, border }) {

    const classNames = ImageSize[size] + " " + ImageBorder[border];

    return (
        <img className={classNames} src={route} alt={alt} />
    )
}
export default Image;