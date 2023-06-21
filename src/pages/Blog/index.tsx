import VirufyHealtSection from "~/components/organisms/virufyHealthSection/VirufyHealtSection";
import GetTheLatestVirufyBlog from "~/components/organisms/GetTheLatestVirufyBlog/GetTheLatestVirufyBlog";
import BlogCard from "~/components/organisms/BlogCard/blogCard";

export default function Blog() {

    return (
        <div>
            <VirufyHealtSection />
            
                <div>
                    <BlogCard/>
                </div>

            <GetTheLatestVirufyBlog />
        </div>
    );
}