"use client"

import { useGetProjectsQuery } from '@/app/redux/api/projectsApi';
import { FeaturedWorks } from '../featuredWorks/FeaturedWorks';
import { AndroidSkillsCard, BackEndSkillsCard, FrontEndSkillsCard } from '../skillCard/SkillCard';
import styles from './homePage.module.css'
import { useDarkmode } from '@/app/theme-provider';
import { motion } from "framer-motion";
import Skeleton from '../skeleton/Skeleton';
import { IProject } from '@/app/types/types';



const HomePage = () => {
  const { darkmode } = useDarkmode()
  const { data: projects, isLoading } = useGetProjectsQuery([]);

  // console.log(projects);
  return (

    <main className='dark:bg-red-900'>

      {/* header banner section  */}
      <header className="">

        <section className={darkmode ? styles.bannerDark : styles.bannerLight}>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.2 }}
            className={styles.resume}
          >
            <a href="/resume.pdf" download>Download Resume</a>
          </motion.div>

        </section>
      </header>

      {/* skill section  */}
      <section className={`${darkmode ? styles.skillDark : styles.skillLight} py-10 `}>
        <h2 className='text-center text-4xl mb-8'>Skills & Expertise</h2>
        {/* Front end section  */}
        <div className={`py-10 ${!darkmode ? 'bg-[#D8D7D8] ' : 'bg-black'} shadow-lg rounded-md text-center`}>


          <div className='text-center grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2  gap-12 w-fit ml-auto mr-auto'>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.2 }}
            >
              <FrontEndSkillsCard darkmode={darkmode} />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.2 }}
            >
              <BackEndSkillsCard darkmode={darkmode} />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.2 }}
            >
              <AndroidSkillsCard darkmode={darkmode} />
            </motion.div>
          </div>

        </div>

      </section>
      {/* fetured word section  */}
      <section className={`${darkmode ? styles.featuredWorksDark : styles.featuredWorksLight} pb-20`}>
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
                    <FeaturedWorks darkmode={darkmode} data={item} />
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
