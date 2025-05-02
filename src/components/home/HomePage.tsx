"use client"

import { useGetProjectsQuery } from '@/app/redux/api/projectsApi';
import { FeaturedWorks } from '../featuredWorks/FeaturedWorks';
// import { useDarkmode } from '@/app/theme-provider';
import { motion } from "framer-motion";
import Skeleton from '../skeleton/Skeleton';
import { IProject } from '@/types/types';
import Image from 'next/image';
import me from '@/asseets/me.png'
import { FaCode, FaServer } from 'react-icons/fa6';

import { useState } from 'react';
import FrontendSkills from '../mySkills/frontendSkills/FrontendSkills';
import { CiGrid42 } from 'react-icons/ci';
import BackendSkills from '../mySkills/backendSkills/BackendSkills';
import AllSkills from '../mySkills/allSkills/AllSkills';
import { RiCodeSSlashFill, RiSettings5Fill } from 'react-icons/ri';
import ProgrammingLanguage from '../mySkills/programmingLanguage/ProgrammingLanguage';
import Tools from '../mySkills/tools/Tools';



const HomePage = () => {
  const [showFrontendSkills, setShowFrontendSkills] = useState(false);
  const [showBackendSkills, setShowBackendSkills] = useState(false);
  const [showProgrammingSkills, setShowProgrammingSkills] = useState(false);
  const [showToolsSkills, setShowToolsSkills] = useState(false);
  const [showAllSkills, setShowAllSkills] = useState(false);
  const { data: projects, isLoading } = useGetProjectsQuery();

  console.log(projects);
  const handleShowFrontend = () => {
    setShowFrontendSkills(true);
    setShowBackendSkills(false);
    setShowProgrammingSkills(false);
  };

  const handleShowBackend = () => {
    setShowFrontendSkills(false);
    setShowBackendSkills(true);
    setShowProgrammingSkills(false);
  };

  const handleShowProgramming = () => {
    setShowFrontendSkills(false);
    setShowBackendSkills(false);
    setShowProgrammingSkills(true);
  };
  const handleShowTools = () => {
    setShowFrontendSkills(false);
    setShowBackendSkills(false);
    setShowProgrammingSkills(false);
    setShowToolsSkills(true)
  };
  const handleShowAllSkills = () => {
    setShowFrontendSkills(false);
    setShowBackendSkills(false);
    setShowProgrammingSkills(false);
    setShowToolsSkills(true);
    setShowAllSkills(true);
  };
  return (

    <main className=''>

      {/* header banner section  */}
      <header className="">

        <section className="mt-20 bg-white/5 backdrop-blur-md border border-white/20 rounded-xl shadow-lg md:flex justify-between items-center  md:px-20 px-4 py-6">
          <div className='rounded-full  p-2 border-2 mb-4'>
            <Image src={me} width={0} height={0} alt='me' className='rounded-full w-80 h-60 md:h-80' />
          </div>
          <div className='w-fit'>
            <h1 className='text-2 xl bg-gradient-to-r from-sky-400 to-teal-500 bg-clip-text text-transparent'>Hi, I&apos;m Alok Kumar <br /></h1>
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
        <div className='text-center w-fit mx-auto'>
          <h2 className='  text-4xl mb-8'>Skills & Expertise</h2>
          <p>A curated collection of my technical skills and proficiencies developed through <br /> education, personal projects, and hands-on experience.</p>
        </div>
        {/* Front end section  */}

        <div className='my-6 flex justify-center items-center'>
          <button onClick={handleShowFrontend} className='border border-white/20 backdrop:blur-md bg-white/10 shadow-md px-2 py-1 mx-2 rounded-4xl flex justify-center items-center'><CiGrid42 /> Frontend</button>
          <button onClick={handleShowBackend} className='border border-white/20 backdrop:blur-md bg-white/10 shadow-md px-2 py-1 mx-2 rounded-4xl flex justify-center items-center'><FaServer /> Backend</button>
          <button onClick={handleShowProgramming} className='border border-white/20 backdrop:blur-md bg-white/10 shadow-md px-2 py-1 mx-2 rounded-4xl flex justify-center items-center'><RiCodeSSlashFill />Programming Language </button>
          <button onClick={handleShowTools} className='border border-white/20 backdrop:blur-md bg-white/10 shadow-md px-2 py-1 mx-2 rounded-4xl flex justify-center items-center'><RiSettings5Fill />Tools & Ecosystem</button>
          <button onClick={handleShowAllSkills} className='border border-white/20 backdrop:blur-md bg-white/10 shadow-md px-2 py-1 mx-2 rounded-4xl flex justify-center items-center'><FaCode />All Skills </button>
        </div>

        <div className='bg-white/10 backdrop-blur-lg px-6 py-10 rounded-2xl shadow-lg border border-white/20'>
          {
            showAllSkills ? (<AllSkills />) : showFrontendSkills ? (<FrontendSkills />) : showBackendSkills ? (<BackendSkills />) : showProgrammingSkills ? (<ProgrammingLanguage />) : showToolsSkills ? (<Tools />) : <AllSkills />
          }

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
