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

    <main className='dark:bg-red-900'>

      {/* header banner section  */}
      <header className="">

        <section className="mt-20">
          <div className='md:flex shadow-lg justify-between items-center  shadow-gray-600 md:px-20 px-4'>
            <div className='rounded-full  p-2 border-2'>
              <Image src={me} width={0} height={0} alt='me' className='rounded-full w-80 h-80' />
            </div>
            <div className='w-fit'>
              <h1 className='text-4xl text-[#785888]'>Hi, I'm Alok Kumar <br />MERN Stack web developer</h1>
              <p className='text-lg my-4 text-[#52385E]'> I specialize in building responsive, scalable, <br /> and high-performance web applications <br />using MongoDB, Express.js, React.js, and Node.js.</p>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.2 }}
                className="bg-[#785888] w-44 py-2 rounded-3xl text-center text-white"
              >
                <a href="/resume.pdf" download>Download Resume</a>
              </motion.div>
            </div>
          </div>
        </section>
      </header>

      {/* skill section  */}
      <section className={`${styles.skillLight} py-10 `}>
        <h2 className='text-center text-4xl mb-8'>Skills & Expertise</h2>
        {/* Front end section  */}
        <div className={`py-10 bg-[#D8D7D8] shadow-lg rounded-md text-center`}>


          <div className='text-center grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2  gap-12 w-fit ml-auto mr-auto'>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.2 }}
            >
              <FrontEndSkillsCard darkmode={false} />
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
