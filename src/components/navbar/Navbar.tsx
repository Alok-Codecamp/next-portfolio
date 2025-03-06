import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        
            <nav className='text-white py-2 px-12 fixed top-2 left-1/2 transform -translate-x-1/2  
                backdrop-blur-md bg-white/10 border border-white/20 shadow-lg 
                rounded-2xl'>
                <ul className='flex items-center justify-center'>
                    <li className='mx-4'>
                        <Link href="/home">Home</Link>
                    </li>
                    <li className='mx-4'>
                        <Link href="/projects">Projects</Link>
                    </li>
                    <li className='mx-4'>
                        <Link href="/Blogs">Blogs</Link>
                    </li>
                    <li className='mx-4'>
                    <Link href="/contact">contact</Link>
                    </li>
                </ul>
            </nav>
        
    );
}

export default Navbar;
