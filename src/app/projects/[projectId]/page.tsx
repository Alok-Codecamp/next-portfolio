
import Gallery from '@/components/gallery/Gallery';
import Link from 'next/link';
import React from 'react';

const ProjectDetailsPage = async ({ params }: { params: Promise<{ projectId: string }> }) => {
    const { projectId } = await params;
    const res = await fetch(`http://localhost:5000/projects/${projectId}`);
    const { data } = await res.json();
    console.log(data?.screenShots);
    return (
        <main className='py-28'>
            <h1 className='text-center text-2xl mb-10'>Project Details</h1>
            <div className='xl:flex lg:flex justify-center '>

                {/* gallery section  */}
                <section className='bg-[#785888] p-10 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-1.5 ml-10'>

                    {
                        data?.screenShots?.map((item: string, index: number) => (
                            <Gallery key={index} item={item} />

                        ))
                    }
                </section>

                {/* details section  */}
                <section className='mx-5'>
                    <div className="text-left">
                        <h4 className="text-xl mb-4">{data?.name}</h4>
                        <p><span className="text-xl">Category:</span> {data?.category}</p>
                        <p className='text-xl'>key Features:</p>
                        {data?.keyFeatures.map((item: string, index: number) => (
                            <div className='text-wrap my-2'>
                                <span className='text-[18px] inline'>{item.split(':')[0]}:</span><p key={index}>{item.split(':')[1]}</p>
                            </div>
                        ))}
                        <p><span className="text-[18px]">Description</span>: {data?.description} </p>

                        <p><span className="text-[18px]">Status </span>: {data?.status} </p>
                    </div>
                    <div className="flex items-center justify-between my-4">
                        <Link href={data?.link?.live} target="_blank" className=" bg-[#785888] text-white  py-1.5 px-4 rounded-3xl">Visit Online</Link>
                    </div>
                </section>

            </div>
        </main>
    );
}

export default ProjectDetailsPage;
