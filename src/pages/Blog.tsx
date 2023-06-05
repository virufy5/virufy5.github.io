import React, { useState, useEffect } from "react"
import VirufyHealtSection from "~/components/organisms/virufyHealthSection/VirufyHealtSection"
import BlogCard from "~/components/organisms/BlogCard/blogCard"
import GetTheLatestVirufyBlog from "~/components/organisms/GetTheLatestVirufyBlog/GetTheLatestVirufyBlog";

export default function Blog() {

    interface IData {
        title: string
        id: string
        summary: string
        picture: {
            url: string
        }
    }

    const initialData: IData[] = []
    const [data, setData] = useState(initialData);
    const [isLoading, setLoading] = useState(false);

    //Función para dar formato optimo al response del API
    useEffect(() => {
        setLoading(true);
        fetch('/api/publications')
            .then((res) => res.json())
            .then((data) => {
                setData([data]);
                setLoading(false);
            }).catch((e) => console.log(e))
    }, []);

    useEffect(() => {
        console.log("Response API:", data);
    }, [data])


    return (
        <div>
            <VirufyHealtSection />
            {isLoading ? <p>Loading...</p> : null}
            {!data ? <p>No data</p> : null}
            {data.map(({ title, id, summary, picture }) => (
                <div key={id}>
                    <BlogCard
                        TitleSize="h3"
                        TitleLabel={title}
                        TextLabel={summary}
                        labelButton="read more"
                        ContainerTitleProps=""
                        ContainerTextProps=""
                        border=""
                        alt=""
                        Image={picture.url}
                    />
                </div>
            ))}
            <GetTheLatestVirufyBlog />
        </div>
    );
}