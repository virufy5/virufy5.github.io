import ReactPlayer from 'react-player';

export default function Video({ width, height, url}) {

    return (
        <>
            <ReactPlayer width={width} height={height} url={url} />
        </>
    )
}