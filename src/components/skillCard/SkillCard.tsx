import { ReactNode } from 'react';




export const SkillsCard = ({ skill, percent, icon }: { skill: string; percent: number | string; icon: ReactNode }) => {

    return (
        <div className='mb-4  bg-white/10 backdrop:blur-md shadow-lg border border-white/30 px-3 py-3 rounded-md'>
            <div className='flex justify-start items-center space-x-1 text-xl'>
                <span>{icon}</span>
                <span className="mr-2"> {skill}</span>
            </div>

            <div className="w-full bg-white/10 h-3 rounded-full">
                <div
                    className={`h-3 rounded-full bg-gradient-to-r from-sky-200 to-sky-600`}
                    style={{ width: `${percent}%` }}
                />

            </div>
            <div className='flex justify-between items-center space-x-1 text-md'>
                <span>Proficiency</span>
                <span className="mr-2"> {percent}%</span>
            </div>


        </div>

    );
}
