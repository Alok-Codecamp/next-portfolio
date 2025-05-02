"use client"

import { useGetProjectsQuery } from '@/app/redux/api/projectsApi';
import { FeaturedWorks } from '../featuredWorks/FeaturedWorks';
import { AndroidSkillsCard, BackEndSkillsCard, FrontEndSkillsCard } from '../skillCard/SkillCard';
import styles from './homePage.module.css'
// import { useDarkmode } from '@/app/theme-provider';
import { motion } from "framer-motion";
import Skeleton from '../skeleton/Skeleton';
import { IProject } from '@/types/types';
import Image from 'next/image';
import me from '@/asseets/me.png'


const HomePage = () => {

  const { data: projects, isLoading } = useGetProjectsQuery([]);

  // console.log(projects);
  return (

    <main className=''>

      {/* header banner section  */}
      <header className="">

        <section className="mt-20 bg-white/5 backdrop-blur-md border border-white/20 rounded-xl shadow-lg md:flex justify-between items-center  md:px-20 px-4 py-6">
          <div className='rounded-full  p-2 border-2 mb-4'>
            <Image src={me} width={0} height={0} alt='me' className='rounded-full w-80 h-60 md:h-80' />
          </div>
          <div className='w-fit'>
            <h1 className='text-2 xl bg-gradient-to-r from-sky-400 to-teal-500 bg-clip-text text-transparent'>Hi, I'm Alok Kumar <br /></h1>
            <h2 className='text-3xl md:text-4xl bg-gradient-to-r from-sky-400 to-teal-500 bg-clip-text text-transparent'>MERN Stack web developer</h2>
            <p className='text-lg my-4'> I specialize in building responsive, scalable, <br /> and high-performance web applications <br />using MongoDB, Express.js, React.js, and Node.js.</p>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.2 }}
              className="bg-sky-600 w-44 py-2 rounded-3xl text-center"
            >
              <a href="/resume.pdf" download>Download Resume</a>
            </motion.div>
          </div>

        </section>
      </header>

      {/* skill section  */}
      <section className={` py-10 `}>
        <h2 className='text-center text-white text-4xl mb-8'>Skills & Expertise</h2>
        {/* Front end section  */}
        <div className={`py-10 shadow-lg rounded-md text-center`}>


          <div className='text-center grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2  gap-12 w-fit ml-auto mr-auto'>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.2 }}
            >
              <FrontEndSkillsCard />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.2 }}
            >
              <BackEndSkillsCard darkmode={false} />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.2 }}
            >
              <AndroidSkillsCard darkmode={false} />
            </motion.div>
          </div>

        </div>

      </section>
      {/* fetured word section  */}
      <section className={`pb-20`}>
        <h2 className='text-center text-4xl mb-8' >Featured Work</h2>
        {
          isLoading ? [1, 2, 3].map((item: number, index: number) => (<div key={index} className=' grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10 w-fit ml-auto mr-auto'> <Skeleton /></div>))
            :
            <div className=' grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10 w-fit ml-auto mr-auto'>

              {
                projects?.data.map((item: IProject, index: number) => (
                  <motion.div key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1.1 }}
                  >
                    <FeaturedWorks data={item} />
                  </motion.div>
                ))
              }

            </div>
        }
      </section>
    </main>

  );
}

export default HomePage;
