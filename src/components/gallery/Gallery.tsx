"use client"
import Image from "next/image";
import { useState } from "react";
import { FaCross } from "react-icons/fa";
import { TbXboxXFilled } from "react-icons/tb";

const Gallery = ({ item }: { item: string }) => {
    const [openPhoto, setOpenPhoto] = useState(false);

    return (
        <div className="border border-amber-500">
            {!openPhoto && (
                <Image
                    onClick={() => setOpenPhoto(true)}
                    src={item}
                    width={200}
                    height={200}
                    alt="project image"
                    className="cursor-pointer"
                />
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
