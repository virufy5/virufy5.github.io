import VirufyHealtSection from "~/components/organisms/virufyHealthSection/VirufyHealtSection"
import BlogCard from "~/components/organisms/BlogCard/blogCard"
import GetTheLatestVirufyBlog from "~/components/organisms/GetTheLatestVirufyBlog/GetTheLatestVirufyBlog";

export default function Blog() {


    return (
        <div>
            <VirufyHealtSection />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <GetTheLatestVirufyBlog />
        </div>
    );
}