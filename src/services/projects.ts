export const getAllProjects = async () => {
    const res = await fetch('https://next-portfolio-server-phi.vercel.app/projects');
    const data = await res.json();
    return data;
}