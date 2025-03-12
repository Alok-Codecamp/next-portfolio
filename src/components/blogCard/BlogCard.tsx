"use client"

import { IBlog } from "@/app/types/types";
import Image from "next/image";



// Define a type for the blog post

const BlogCard = ({ blog }: { blog: IBlog }) => {
    console.log(blog);
    return (
        <div className="max-w-lg mx-auto p-4">
            <section className="shadow-lg rounded-xl overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20">
                <Image
                    src={blog.image}
                    width={100}
                    height={100}

                    alt={blog.title}
                    className="w-full h-48 object-cover"
                />
                <section className="p-4">
                    <h2 className="text-2xl font-bold mb-2 text-white">{blog.title}</h2>
                    {/* <p className="text-gray-300 text-sm mb-2">Published on: {blog.publishDate.toString()}</p> */}
                    <p className="text-gray-200 mb-4">{blog.content.substring(0, 100)}...</p>
                    <div className="flex justify-between items-center">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                            Read More
                        </button>
                        <span className="text-gray-300">👍 {blog.like}</span>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default BlogCard;
