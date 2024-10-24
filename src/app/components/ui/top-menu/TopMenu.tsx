
'use client'

import clsx from 'clsx'


import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
    IoSunny,
    IoMoonSharp,
} from 'react-icons/io5'

import { TopMobileMenu } from './TopMobileMenu'
import {LinksMenusBar, ArrayImageTypePath} from '@/seed'
import { useDarkMode } from '../UseDark'
import Image from 'next/image'



export const TopMenu = () => {

    const [darkMode, toggleDarkMode] = useDarkMode();
    const PathName = usePathname() ;

    return (    
        <main className="w-full h-[80px] flex md:flex-row md:justify-around md:items-center items-center flex-row-reverse relative " >
            {ArrayImageTypePath.includes(PathName)? 
            <h1></h1>:<div className='w-[50px] h-[50px] shadow-md rounded-full overflow-hidden absolute left-5'>
               <Link href={'/'}>
               <Image
                    width={200}
                    height={200}
                    src="/imgs/LogoJesus.png"
                    alt="Logo"
                   
                />
               </Link>
            </div>
            }
            {/* MENU DESKTOP */}
            <nav className='w-[500px] h-1/2 hidden md:block order-1 '>   
               <ul className='w-full h-full   flex justify-center items-center gap-5 rounded-3xl shadow-sm  border-slate-300 dark:border-gray-700  border-[0.1px] '>
                {
                    LinksMenusBar.map(({ title, href }) => (
                        <li key={title} 
                        className={` 
                             hover:text-emerald-500 dark:hover:text-emerald-500 transition-colors font-semibold 
                            ${clsx `${PathName === href ? 'text-emerald-500  dark:text-emerald-500' : 'dark:text-white text-black' }` }
                            `}
                            
                        >
                            <Link href={href} >{title}</Link>
                        </li>
                    ))
                }
               </ul>
            </nav>
            {/* MENU DE MOBILE RESPONSIVE */}
            <TopMobileMenu   />
                
            {/* ICONO DE MODO DARK MODE */}
            <button onClick={toggleDarkMode} className='md:w-[60px] md:h-[60px] h-[50px] w-[50px] rounded-full md:m-0 mr-2 shadow-sm  dark:border-gray-700 border-slate-100 border-[0.1px] dark:text-gray-600 text-emerald-500 dark:bg-gray-800  flex items-center justify-center bg-white md:order-1 '>
                {darkMode ? <IoMoonSharp size={30} /> : <IoSunny size={30} />}  
            </button>
        </main>
    );
}
