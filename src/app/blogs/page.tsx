import BlogCard from "@/components/blogCard/BlogCard";
import { IBlog } from "../types/types";


const BlogPage = async () => {
    const res = await fetch('http://localhost:5000/blogs')
    const blogs = await res.json()
    return (
        <div>
            {
                !blogs ? <></> : blogs?.data?.map((item: IBlog, index: number) => (
                    <BlogCard key={index} blog={item} />
                ))
            }
        </div>
    );
}

export default BlogPage;
