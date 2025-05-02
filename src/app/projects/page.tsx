import { Metadata } from "next";
import { IProject } from "../../types/types";

import { FeaturedWorks } from "@/components/featuredWorks/FeaturedWorks";
import Skeleton from "@/components/skeleton/Skeleton";
import { getAllProjects } from "@/services/projects";


export const metadata: Metadata = {
    title: 'projects',
    description: 'This page show all of my recent work with details information and projects page screenshot',
}

const ProjectsPage = async () => {

    const data = await getAllProjects();


    return (
        <main className=" text-center">
            <header>
                <h1 className="text-2xl mb-12">My Recent Works</h1>
            </header>
            <section className='pb-20'>

                {
                    data === undefined ? [1, 2, 3].map((item: number, index: number) => (<div key={index} className=' grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10 w-fit ml-auto mr-auto'> <Skeleton key={index} /></div>))
                        :
                        <div className=' grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10 w-fit ml-auto mr-auto'>

                            {
                                data?.data?.map((item: IProject, index: number) => (

                                    <FeaturedWorks key={index} data={item} />

                                ))
                            }

                        </div>
                }
            </section>
        </main >
    );
}

export default ProjectsPage;
