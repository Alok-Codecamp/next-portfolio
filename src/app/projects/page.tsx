import { Metadata } from "next";



export const metadata: Metadata = {
    title: 'all projects',
    description: 'This page show all of my projects with details information and projects page screenshot',
}

const ProjectsPage = () => {
    return (
        <main>
            <header>
                <h1>My Recent works</h1>
            </header>
            <section className="flex justify-center items-center">

            </section>
        </main>
    );
}

export default ProjectsPage;
