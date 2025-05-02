import { IProject } from "@/types/types"
import Image from "next/image"
import Link from "next/link";

export const FeaturedWorks = ({ data }: { data: IProject }) => {
    return (
        <div className={` backdrop-blur-lg bg-white/10 p-2 rounded-2xl shadow-lg border border-white/20 text-center`}>
            <div className="w-fit ml-auto mr-auto">
                <Image
                    src={data?.banner}
                    alt="image"
                    width={0}
                    height={0}
                    unoptimized
                    className="w-96 rounded-2xl"
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