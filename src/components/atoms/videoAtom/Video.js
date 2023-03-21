import ReactPlayer from 'react-player';

function Video({ width, route}) {

    return (
        <>
            <ReactPlayer width={width} url={route} />
        </>
    )
}
export default Video;