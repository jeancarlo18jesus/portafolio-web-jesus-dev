'use client'

import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { IoChevronDown , IoClose} from "react-icons/io5";
import {LinksMenusBar} from '@/seed'






export const TopMobileMenu = () => {

    const [isClosedMenus, setClosedMenu] = useState(false) ;

    
    const toggleMenu = () => {
        setClosedMenu(!isClosedMenus) ;
    }


    return (
        <nav>
        <div onClick={toggleMenu} className='flex md:hidden  md:w-[120px] md:h-[60px] w-[120px] h-[50px] dark:border-gray-700 border-slate-100 items-center bg-white justify-center gap-1 mr-2  rounded-3xl shadow-sm dark:text-gray-600  dark:bg-gray-800 border-[0.1px] '>
                <button>Menus</button>
                <IoChevronDown size={20}/>
        </div>
        {/* DIV */}
        <div className={`w-full h-[100vh] opacity-[0.5]  z-10 md:hidden  top-0 left-0 ${clsx `${isClosedMenus ? 'fixed' : 'hidden'}` }`}/>
        {/* BLUR */}
        <div className={`w-full h-full  backdrop-filter z-10 backdrop-blur-sm top-0 left-0 md:hidden  fixed ${clsx `${isClosedMenus ? 'fixed' : 'hidden'}` }` } onClick={toggleMenu}/>

            <div className= {` w-3/4 left-[50%] translate-x-[-50%] h-[300px] overflow-hidden  flex justify-end gap-4 top-5 rounded-2xl z-30 md:hidden   ${clsx `${isClosedMenus ? 'fixed' : 'hidden'}` }`} >
                <div className="w-full h-full bg-slate-300 flex flex-col p-6 dark:bg-gray-900">
                    <p className=" w-full flex justify-between text-gray-500  flex-row items-center "  >
                        <span className="float-left font-semibold">Navegacion</span>
                        <IoClose size={20} className="text-black dark:text-white"  onClick={toggleMenu} />
                    </p>
                    {
                        LinksMenusBar.map(({title,href}) => (
                            <div key={title}>
                            <Link onClick={toggleMenu}   href={href} className="dark:hover:text-emerald-500 hover:text-emerald-500 transition-colors text-black dark:text-white  py-2 font-medium">
                                {title}
                            </Link>
                            <div className=" w-full h-[0.5px] bg-gray-400 dark:bg-gray-700 rounded-2xl " />
                            </div>
                        ))
                    }


                </div>
            </div>
        </nav>
        
    );
}

