import { VideoSize, VideoBorder } from "../../themes";

function Video({ size, route, width, height alt, border }) {

    const classNames = VideoSize[size] + " " + VideoBorder[border];

    return (
        <video src={route} width={width}  height={height} poster={posterRoute}></video>
    )
}
export default Video;