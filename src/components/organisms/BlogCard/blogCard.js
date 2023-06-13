import { useEffect, useState } from "react";
import TitleText from "~/components/molecules/TitleText/TitleText"
import ImageAtomLocal from "~/components/atoms/imageAtom/ImageAtomLocal"
import LinkAtom from "~/components/atoms/LinkAtom/LinkAtom"

export default function BlogCard() {

    const link1 = [
        { label: 'Read Here', route: '/es/Home' }
    ]

    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);

    //Función para dar formato optimo al response del API
    useEffect(() => {
        /* setLoading(true); */
        fetch('/api/publications')
            .then((res) => res.json())
            .then((data) => {
                setData(data.docs);
                setLoading(false);
            }).catch((e) => console.log(e))
    }, []);

    useEffect(() => {
        console.log("Response API:", data);
    }, [data])

    return (
        <div className="flex flex-col items-center">
            {isLoading ? <p className="text-center text-2xl">Loading...</p> : null}
            {!data ? <p>No data</p> : null}
            {data.map(({ id, title, summary, picture }) => (
                <div key={id} className="flex flex-col lg:flex-row items-center justify-center max-w-[1300px] w-[100vw] mt-12 mb-8">
                    <div className="w-full lg:w-1/2 flex items-center justify-end mb-[20px]">
                        <ImageAtomLocal
                            imagesize="pr100"
                            border=""
                            src={picture.url}
                            alt=""
                            ImageStyleProps=""
                        />
                    </div>
                    <div className="flex mt-2 lg:mt-0 w-full lg:w-2/5 px-[20px] lg:px-[0px] items-center flex-1">
                        <div className="w-full lg:items-start text-start flex flex-col gap-5 md:pl-7">
                            <TitleText
                                TitleSize="h1"
                                TitleLabel={title}
                                TextSize="normal"
                                TextLabel={summary}
                                ContainerTitleProps=""
                                ContainerTextProps=""
                                TitleClassProps=""
                                TextClassProps=""
                            />
                            <LinkAtom Routes={link1} Style="linkBlog" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
