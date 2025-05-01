"use client"
import Image from "next/image";
import { useState } from "react";
import { TbXboxXFilled } from "react-icons/tb";
import { motion } from 'framer-motion'

const Gallery = ({ item }: { item: string }) => {
    const [openPhoto, setOpenPhoto] = useState(false);

    return (
        <div className="m-2">
            {!openPhoto && (
                <motion.div
                    whileHover={{ scale: 1.4 }}
                    whileTap={{ scale: 1.4 }}

                >
                    <Image
                        onClick={() => setOpenPhoto(true)}
                        src={item}
                        alt="project image"
                        width={0}
                        height={0}
                        className="cursor-pointer w-[200px] h-[100px] object-cover rounded-md"
                        unoptimized
                    />
                </motion.div>
            )}

            {openPhoto && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                    <button
                        onClick={() => setOpenPhoto(false)}
                        className="absolute top-5 right-5 bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer"
                    >
                        <TbXboxXFilled />

                    </button>
                    <Image src={item} width={1000} height={400} alt="project image" />
                </div>
            )}
        </div>
    );
};

export default Gallery;
