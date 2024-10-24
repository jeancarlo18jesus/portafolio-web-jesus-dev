import { LinksMenusBar } from "@/seed";
import Link  from 'next/link'



export const FooterGlobalApp = () =>  {
    return (
       
        <div className="w-full max-w-[1200px] h-[80px]  flex md:flex-row items-center flex-col md:justify-between md:items-center md:p-5 p-2 border-t-2 dark:border-gray-700 border-slate-300">
          <ul className="flex md:gap-7 gap-2  md:p-5 p-1">
            {
                LinksMenusBar.map(({title , href}) => (
                  <li key={title} className=" dark:text-white hover:text-emerald-500 dark:hover:text-emerald-500 transition-colors font-semibold text-[12px] md:text-[16px] ">
                    <Link href={href}>{title}</Link>
                  </li>
                ))

  
            }
          </ul>
          <p className="dark:text-gray-700 font-semibold text-slate-500 md:text-[18px] text-[8px]   ">
            © 2024 Jesus Gonzales. Todos los derechos reservados.
          </p>
        </div>
       
    );
}

