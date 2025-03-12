import { IProject } from "@/app/types/types"
import { div } from "framer-motion/client"
import Image from "next/image"
import Link from "next/link";

export const FeaturedWorks = ({ darkmode, data }: { darkmode: boolean, data: IProject }) => {

    return (
        <div className={`dark:bg-white/10 backdrop-blur-lg bg-[#f0e5f8] w-96 p-4 rounded-2xl shadow-lg border border-white/20 text-center`}>
            <div className="w-fit ml-auto mr-auto">
                <Image
                    src={data?.banner}
                    alt="image"
                    width={350}
                    height={168}
                />
            </div>
            <div className="text-left">
                <h4 className="text-2xl my-4">{data?.name}</h4>
                <p><span className="text-[18px]">Category:</span> {data?.category}</p>
                <p><span className="text-[18px]">Description</span>: {data?.breaf} </p>
            </div>
            <div className="flex items-center justify-between my-4">
                <Link href={`/projects/${data?._id}`} className=" bg-[#785888] text-white py-1.5 px-4 rounded-3xl ">Learn More</Link>
                <Link href={data?.link?.live} target="_blank" className=" bg-[#785888] text-white  py-1.5 px-4 rounded-3xl">Visit Online</Link>
            </div>
        </div>
    )
}