import VirufyHealtSection from "~/components/organisms/virufyHealthSection/VirufyHealtSection"
import BlogCard from "~/components/organisms/BlogCard/BlogCard"
import GetTheLatestVirufyBlog from "~/components/organisms/GetTheLatestVirufyBlog/GetTheLatestVirufyBlog";

export default function Blog() {

    return (
        <div>
            <VirufyHealtSection />
            
                <div>
                    <BlogCard />
                </div>

            <GetTheLatestVirufyBlog />
        </div>
    );
}