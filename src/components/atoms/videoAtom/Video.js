import ReactPlayer from 'react-player';

export default function Video({ width, route}) {

    return (
        <>
            <ReactPlayer width={width} url={route} />
        </>
    )
}