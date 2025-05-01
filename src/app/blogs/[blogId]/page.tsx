// import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { FaThumbsUp } from 'react-icons/fa6';

export async function generateMetadata({ params }: { params: Promise<{ blogId: string }> }) {
    const { blogId } = await params;
    const res = await fetch(`https://next-portfolio-server-phi.vercel.app/blogs/${blogId}`);
    const blog = await res.json();
    return {
        title: blog.data?.title,
        description: blog?.data?.description
    }
}
const BlogDetailsPage = async ({ params }: { params: Promise<{ blogId: string }> }) => {
    const { blogId } = await params;
    const res = await fetch(`https://next-portfolio-server-phi.vercel.app/blogs/${blogId}`);
    const blog = await res.json();
    console.log(blog);
    return (
        <main>

            <section className=' my-20 w-fit ml-auto mr-auto'>
                {/* image section  */}
                <div>

                    <Image src={blog?.data?.image} alt='blog image' width={1276} height={350} style={{ height: "400px", objectFit: "cover" }} />
                </div>
                {/* details section  */}

                <div className='text-left w-fit ml-auto mr-auto mt-16'>
                    {/* author info section  */}
                    <div className='flex items-center text-sm ml-4'>
                        <p className='flex  items-center mr-4'><CgProfile /> <span className='ml-2'>by userName</span></p>
                        <span className='ml-4'>{blog?.data?.publishDate.toString()}</span>
                    </div>
                    {/* blog info section */}
                    <div className='mt-10'>
                        <h1 className='text-3xl'>{blog?.data?.title}</h1>
                        <p className='w-[800px] my-10'>{blog?.data?.content} Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti corporis totam quasi impedit odio cum dolorem maxime, eum atque, asperiores ut dolore repellendus ullam eligendi eos rem corrupti porro facilis officia quaerat? Ea placeat repudiandae laboriosam cum temporibus vel, minus porro fugit magni blanditiis dicta, saepe eaque qui natus dolore veniam obcaecati maiores odit? Delectus iure cumque dolorem asperiores deleniti, praesentium sint expedita aut odio architecto nulla! Voluptatum odio modi, necessitatibus rerum voluptate voluptates repellat numquam! Libero, doloribus vero quis ipsam fugiat animi incidunt beatae a at cumque. Corrupti eveniet ullam aut cum, incidunt repellendus deserunt eum saepe reiciendis nostrum aspernatur repudiandae quia quas facilis dignissimos voluptatem tenetur ipsa. Magni enim, unde adipisci sed vitae repudiandae aliquam est? Vel aspernatur, quos minima corporis, voluptates dolorum itaque incidunt facere culpa obcaecati architecto asperiores earum neque quod deserunt assumenda nemo dignissimos! Officia aliquam mollitia fuga natus accusamus at eos iusto enim ut ratione et distinctio itaque quis, eaque nemo eveniet quae reiciendis similique architecto, facilis perspiciatis, inventore repudiandae ipsum sapiente! Nemo possimus totam sunt eveniet? Sit, expedita quas iusto nisi unde impedit distinctio facilis, dicta provident quisquam quod cum pariatur necessitatibus sapiente aliquam fugiat corrupti porro repellat quis? Debitis voluptates aspernatur doloribus.</p>
                        <p className='flex items-center'><span className='mr-2'>Likes: </span><FaThumbsUp />  <span className='ml-2'>{blog?.data?.like}</span></p>
                    </div>
                </div>

            </section>


        </main>
    );
}

export default BlogDetailsPage;
