import Image from 'next/image';
import backendIcon from '../../asseets/skills/backend.png';
import frontendIcon from '../../asseets/skills/frontend.png';
import androidIcon from '../../asseets/skills/android.png';
import { FaCss3, FaHtml5, FaReact } from 'react-icons/fa';
import { RiJavascriptLine, RiNextjsLine, RiNodejsLine, RiTailwindCssLine } from 'react-icons/ri';
import { TbBrandReactNative, TbBrandRedux, TbBrandTypescript, TbLetterM } from 'react-icons/tb';
import { SiExpress, SiJsonwebtokens, SiMongodb } from 'react-icons/si';

type TProps = {
    darkMood: boolean
}

export const FrontEndSkillsCard = ({ darkmode }: { darkmode: boolean }) => {

    return (

        <div className={`${darkmode ? 'bg-white/10 backdrop-blur-lg' : 'bg-[#f0e5f8]'} w-60 p-2 rounded-2xl shadow-lg border border-white/20 text-center my-8 py-6 h-[40em]`}>

            <Image
                className='ml-auto mr-auto '
                src={frontendIcon}
                alt='frontend'
                width={100} />

            <h2 className="text-xl my-4">Frontend Tools & technology</h2>
            <div className="  space-y-3 flex justify-start items-center ml-8 ">
                <RiJavascriptLine className='mt-2 mr-2' size={30} /><span className='text-xl'>Javascript</span>
            </div>
            <div className=" space-y-3 flex justify-start items-center ml-8 ">
                <TbBrandTypescript className='mt-2 mr-2' size={30} /><span className='text-xl'>Typescript</span>
            </div>
            <div className=" space-y-3 flex justify-start items-center ml-8  ">
                <FaReact className='mt-2 mr-2' size={30} /><span className='text-xl'>React</span>
            </div>
            <div className=" space-y-3 flex justify-start items-center ml-8  ">
                <TbBrandRedux className='mt-2 mr-2' size={30} /><span className='text-xl'>Rdux</span>
            </div>
            <div className=" space-y-3 flex justify-start items-center ml-8 ">
                <RiNextjsLine className='mt-2 mr-2' size={30} /><span className='text-xl'>Next js</span>
            </div>

            <div className=" space-y-3 flex justify-start items-center ml-8 ">
                <FaHtml5 className='mt-2 mr-2' size={30} /><span className='text-xl'>Html</span>
            </div>
            <div className=" space-y-3 flex justify-start items-center ml-8 ">
                <FaCss3 className='mt-2 mr-2' size={30} /><span className='text-xl'>Css</span>
            </div>
            <div className=" space-y-3 flex justify-start items-center ml-8">
                <RiTailwindCssLine className='mt-2 mr-2' size={30} /><span className='text-xl'>Tailwind Css</span>
            </div>

        </div>

    );
}
export const BackEndSkillsCard = ({ darkmode }: { darkmode: boolean }) => {

    return (

        <div className={`${darkmode ? 'bg-white/10 backdrop-blur-lg' : 'bg-[#f0e5f8]'} w-60 p-2 rounded-2xl shadow-lg border border-white/20 text-center my-8 py-6 h-[40em]`}>
            <Image
                className='ml-auto mr-auto '
                src={backendIcon}
                alt='frontend'
                width={100} />
            <h2 className="text-xl my-4">Frontend Tools & technology</h2>

            <div className="  space-y-3 flex justify-start items-center ml-8 ">
                <RiJavascriptLine className='mt-2 mr-2' size={30} /><span className='text-xl'>Javascript</span>
            </div>
            <div className=" space-y-3 flex justify-start items-center ml-8 ">
                <TbBrandTypescript className='mt-2 mr-2' size={30} /><span className='text-xl'>Typescript</span>
            </div>
            <div className=" space-y-3 flex justify-start items-center ml-8 ">
                <RiNodejsLine className='mt-2 mr-2' size={30} /><span className='text-xl'>Node js</span>
            </div>
            <div className=" space-y-3 flex justify-start items-center ml-8 ">
                <SiExpress className='mt-2 mr-2' size={30} /><span className='text-xl'>Express js</span>
            </div>
            <div className=" space-y-3 flex justify-start items-center ml-8 ">
                <SiJsonwebtokens className='mt-2 mr-2' size={30} /><span className='text-xl'>Json Web Token</span>
            </div>
            <div className=" space-y-3 flex justify-start items-center ml-8 ">
                <SiMongodb className='mt-2 mr-2' size={30} /><span className='text-xl'>MongoDb</span>
            </div>
            <div className=" space-y-3 flex justify-start items-center ml-8 ">
                <TbLetterM className='mt-2 mr-2' size={30} /><span className='text-xl'>Mongoose</span>
            </div>
        </div>

    );
}
export const AndroidSkillsCard = ({ darkmode }: { darkmode: boolean }) => {

    return (

        <div className={`${darkmode ? 'bg-white/10 backdrop-blur-lg' : 'bg-[#f0e5f8]'} w-60 p-2 rounded-2xl shadow-lg border border-white/20 text-center my-8 py-6 h-[40em]`}>
            <Image
                className='ml-auto mr-auto '
                src={androidIcon}
                alt='frontend'
                width={100}
            />
            <h2 className="text-xl my-4">Frontend Tools & technology</h2>
            <div className="  space-y-3 flex justify-start items-center ml-8 ">
                <RiJavascriptLine className='mt-2 mr-2' size={30} /><span className='text-xl'>Javascript</span>
            </div>
            <div className=" space-y-3 flex justify-start items-center ml-8 ">
                <TbBrandTypescript className='mt-2 mr-2' size={30} /><span className='text-xl'>Typescript</span>
            </div>
            <div className=" space-y-3 flex justify-start items-center ml-8 ">
                <TbBrandReactNative className='mt-2 mr-2' size={30} /><span className='text-xl'>React Native</span>
            </div>
            <div className=" space-y-3 flex justify-start items-center ml-8  ">
                <TbBrandRedux className='mt-2 mr-2' size={30} /><span className='text-xl'>Rdux</span>
            </div>
        </div>

    );
}

