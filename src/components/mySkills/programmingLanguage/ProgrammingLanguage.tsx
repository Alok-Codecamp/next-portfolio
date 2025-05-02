import { motion } from "framer-motion";
import { SkillsCard } from '../../skillCard/SkillCard';
import { FaC, FaJs, FaPython } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";

const ProgrammingLanguage = () => {
    return (

        <div className={` grid md:grid-cols-3 grid-cols-1 gap-10`}>
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

        </div>
    );
}

export default ProgrammingLanguage;
