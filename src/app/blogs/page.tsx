import BlogCard from "@/components/blogCard/BlogCard";
import { IBlog } from "../../types/types";


const BlogPage = async () => {
    const dark = true;
    const res = await fetch('https://next-portfolio-server-phi.vercel.app/blogs')
    const blogs = await res.json()
    return (
        <div>
            <section className={`grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 ${dark && 'bg-black'}`}>
                {
                    !blogs ? <></> : blogs?.data?.map((item: IBlog, index: number) => (
                        <BlogCard key={index} blog={item} />
                    ))
                }
            </section>
        </div>
    );
}

export default BlogPage;
