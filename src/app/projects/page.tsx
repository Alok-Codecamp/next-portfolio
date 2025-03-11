import { Metadata } from "next";
import { IProject } from "../types/types";

import { FeaturedWorks } from "@/components/featuredWorks/FeaturedWorks";
import Skeleton from "@/components/skeleton/Skeleton";


export const metadata: Metadata = {
    title: 'projects',
    description: 'This page show all of my recent work with details information and projects page screenshot',
}

const ProjectsPage = async () => {
    const res = await fetch('http://localhost:5000/projects');
    const data = await res.json();


    return (
        <main className="bg-white dark:bg-black">
            <header>
                <h1>My Recent Works</h1>
            </header>
            <section className='pb-20'>
                <h2 className='text-center text-4xl mb-8' >Featured Work</h2>
                {
                    data === undefined ? [1, 2, 3].map((item: number, index: number) => (<div key={index} className=' grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10 w-fit ml-auto mr-auto'> <Skeleton /></div>))
                        :
                        <div className=' grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10 w-fit ml-auto mr-auto'>

                            {
                                data?.data?.map((item: IProject, index: number) => (

                                    <FeaturedWorks darkmode={true} data={item} />

                                ))
                            }

                        </div>
                }
            </section>
        </main >
    );
}

export default ProjectsPage;
