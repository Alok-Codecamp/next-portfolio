import { FaCss3, FaHtml5, FaReact, } from 'react-icons/fa6';
import { RiNextjsFill } from 'react-icons/ri';
import { SiRedux, SiTailwindcss } from 'react-icons/si';
import { motion } from "framer-motion";
import { SkillsCard } from '../../skillCard/SkillCard';
const FrontendSkills = () => {
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
        </div>
    );
}

export default FrontendSkills;
