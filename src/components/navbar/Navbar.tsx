"use client"

import { useDarkmode } from '@/app/theme-provider';
import Link from 'next/link';
import React, { useState } from 'react';
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';

const Navbar = ({ }) => {
    const { darkmode, setDarkmode } = useDarkmode()
    return (

        <nav className={`${darkmode ? 'text-white' : 'text-black'} py-2 px-12 fixed top-2 left-1/2 transform -translate-x-1/2  
                backdrop-blur-md bg-white/10 border border-white/20 shadow-lg 
                rounded-2xl`}>
            <ul className='flex items-center justify-center'>
                <li className='lg:mx-4 mx-2'>
                    <Link href="/home">Home</Link>
                </li>
                <li className='lg:mx-4 mx-2'>
                    <Link href="/projects">Projects</Link>
                </li>
                <li className='lg:mx-4 mx-2'>
                    <Link href="/Blogs">Blogs</Link>
                </li>
                <li className='lg:mx-4 mx-2'>
                    <Link href="/contact">contact</Link>
                </li>
                <li>
                    <button onClick={() => setDarkmode(!darkmode)} className='line-clamp-1 ml-4 flex items-center justify-center cursor-pointer' >{darkmode ? <MdOutlineDarkMode size={24} /> :
                        <MdOutlineLightMode color={darkmode ? "white" : "black"} size={24} />}<span className='ml-2'>{darkmode ? "Dark" : "Light"}</span>
                    </button>
                </li>
            </ul>
        </nav>

    );
}

export default Navbar;
