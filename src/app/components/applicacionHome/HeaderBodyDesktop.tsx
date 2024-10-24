
import Link from 'next/link'
import {
    IoLogoFacebook,
    IoLogoInstagram,
    IoLogoLinkedin,
    IoLogoYoutube,
} from 'react-icons/io5'



import Image from 'next/image'
import { LinksPersonalWeb } from '@/seed'


const IconosWebPersonal = [
    <IoLogoFacebook key="Facebook" size={25}/>,
    <IoLogoInstagram key="Instagram"  size={25}/>,
    <IoLogoLinkedin key="Linkedin"  size={25}/>,
    <IoLogoYoutube key="Youtube" size={25}/>
]


export const HeaderBodyDesktop = () => {
    return (
        <div className='gap-5 flex flex-col justify-items-start  w-full'>
            <div className='w-[70px] h-[70px] shadow-md rounded-full overflow-hidden'>
                {/* <Image/> */}
                
                <Link href={'/'}>
                <Image
                    width={300}
                    height={300}
                    src="/imgs/LogoJesus.png"
                    alt="Logo"    
                />
                </Link>
               
            </div>
            <h1 className='dark:text-white text-black font-extrabold text-[16px] max-w-[500px] text-pretty  md:text-[40px] md:min-w-[500px]  ' >Administrador de Sistema, Diseñador de sofware</h1>
            <p className='dark:text-gray-600 font-semibold text-[12px] md:text-[16px] text-gray-800  '>
            Estudiante de Administración de Sistemas en Certus. Destacado por mi sólido dominio en bases de datos y otras tecnologías esenciales. 
            Comprometido con el constante aprendizaje y en proceso de mejora de mis habilidades en inglés. Busco convertirme en un administrador
             de sistemas competente, capaz de afrontar los desafíos tecnológicos con soluciones innovadoras en el area de trabajo    
            </p>
            <ul className='flex justify-start items-center flex-row gap-5  '>
                {LinksPersonalWeb.map(({href},index) => (
                    <Link href={href} key={index}  target='_blank' >
                    <li className='text-gray-500 dark:hover:text-slate-700 transition-colors'  >{IconosWebPersonal[index]}</li>
                    </Link>
                ))}
            
            </ul>
        </div>
    );
}
