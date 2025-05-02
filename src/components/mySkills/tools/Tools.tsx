import { motion } from "framer-motion";
import { SkillsCard } from '../../skillCard/SkillCard';
import { FaGithub } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { SiJira } from "react-icons/si";
import { LiaGit } from "react-icons/lia";

const Tools = () => {
    return (
        <div className={` grid md:grid-cols-3 grid-cols-1 gap-10`}>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1.05 }}>
                <SkillsCard skill='Git' percent={80} icon={<LiaGit />} />
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

export default Tools;
