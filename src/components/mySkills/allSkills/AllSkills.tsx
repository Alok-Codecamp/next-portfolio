import { FaNodeJs, } from 'react-icons/fa6';
import { SiExpress, SiMongodb, SiMongoose } from 'react-icons/si';
import { FaCss3, FaHtml5, FaReact, } from 'react-icons/fa6';
import { RiNextjsFill } from 'react-icons/ri';
import { SiRedux, SiTailwindcss } from 'react-icons/si';
import { FaC, FaJs, FaPython } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { FaGit, FaGithub } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { SiJira } from "react-icons/si";
import { motion } from "framer-motion";
import { SkillsCard } from '../../skillCard/SkillCard';



const AllSkills = () => {
    return (
        <div className={` grid md:grid-cols-3 grid-cols-1 gap-10`}>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1.05 }}>
                <SkillsCard skill='React' percent={85} icon={<FaReact />} />
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1.05 }}>
                <SkillsCard skill='Next.js' percent={80} icon={<RiNextjsFill />} />
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1.05 }}>
                <SkillsCard skill='Tailwind' percent={80} icon={<SiTailwindcss />} />
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1.05 }}>
                <SkillsCard skill='HTML5' percent={95} icon={<FaHtml5 />} />
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1.05 }}>
                <SkillsCard skill='CSS3' percent={95} icon={<FaCss3 />} />
            </motion.div>


            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1.05 }}>
                <SkillsCard skill='Redux Toolkit' percent={80} icon={<SiRedux />} />
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1.05 }}>
                <SkillsCard skill='RTK Query' percent={85} icon={<SiRedux />} />
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1.05 }}>
                <SkillsCard skill='Node.js' percent={75} icon={<FaNodeJs />} />
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1.05 }}>
                <SkillsCard skill='Express.js' percent={80} icon={<SiExpress />} />
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1.05 }}>
                <SkillsCard skill='MongoDB' percent={85} icon={<SiMongodb />} />
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1.05 }}>
                <SkillsCard skill='Mongoose' percent={90} icon={<SiMongoose />} />
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1.05 }}>
                <SkillsCard skill='JavaScript' percent={80} icon={<FaJs />} />
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1.05 }}>
                <SkillsCard skill='TypeScript' percent={85} icon={<SiTypescript />} />
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1.05 }}>
                <SkillsCard skill='C' percent={75} icon={<FaC />} />
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1.05 }}>
                <SkillsCard skill='Python' percent={75} icon={<FaPython />} />
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1.05 }}>
                <SkillsCard skill='Git' percent={80} icon={<FaGit />} />
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1.05 }}>
                <SkillsCard skill='GitHub' percent={80} icon={<FaGithub />} />
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1.05 }}>
                <SkillsCard skill='VS Code' percent={85} icon={<VscVscode />} />
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1.05 }}>
                <SkillsCard skill='Jira' percent={75} icon={<SiJira />} />
            </motion.div>

        </div>
    );
}

export default AllSkills;
