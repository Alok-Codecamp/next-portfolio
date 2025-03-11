
import Gallery from '@/components/gallery/Gallery';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProjectDetailsPage = async ({ params }: { params: Promise<{ projectId: string }> }) => {
    const { projectId } = await params;
    const res = await fetch(`http://localhost:5000/projects/${projectId}`);
    const { data } = await res.json();
    console.log(data?.screenShots);
    return (
        <main className='flex justify-center items-center'>
            {/* gallery section  */}
            <section className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-1.5 mt-40 mx-10'>

                {
                    data?.screenShots?.map((item: string, index: number) => (
                        <Gallery item={item} />
                        //  <Image src={item} width={200} height={200} alt='project image' />
                    ))
                }
            </section>

            {/* details section  */}
            <section className='mx-10'>
                <div className="text-left">
                    <h4 className="text-2xl my-4">{data?.name}</h4>
                    <p><span className="text-[18px]">Category:</span> {data?.category}</p>
                    <p><span className="text-[18px]">Description</span>: {data?.breaf} </p>

                </div>
                <div className="flex items-center justify-between my-4">
                    <Link href={data?.link?.live} target="_blank" className=" bg-[#785888] text-white  py-1.5 px-4 rounded-3xl">Visit Online</Link>
                </div>
            </section>
        </main>
    );
}

export default ProjectDetailsPage;
