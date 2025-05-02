
import { FaNodeJs, } from 'react-icons/fa6';

import { SiExpress, SiMongodb, SiMongoose } from 'react-icons/si';
import { motion } from "framer-motion";
import { SkillsCard } from '../../skillCard/SkillCard';
const BackendSkills = () => {
    return (
        <div className={` grid md:grid-cols-3 grid-cols-1 gap-10`}>
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

        </div>
    );
}

export default BackendSkills;
