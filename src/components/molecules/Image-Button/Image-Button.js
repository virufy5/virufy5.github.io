import Button from "../../atoms/button/Button";
import ImageAtom from "../../atoms/imageAtom/ImageAtom";

export default function ButtonGroup({ size, type, path, label, border, imagesize, route, alt }) {

    return (
        <>
            <div>
                <ImageAtom border={border} size={imagesize} route={route} alt={alt}></ImageAtom>
            </div>
            <div>
                <Button type={type} size={size} path={path} label={label} />
            </div>
        </>
    );
}
