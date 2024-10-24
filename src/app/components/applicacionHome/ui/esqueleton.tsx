
import {ArraysImagesCarrusel} from '@/seed'
import {ArticuloArraySecciones} from '@/seed'
import Link from 'next/link';
import {
    IoLogoFacebook,
    IoLogoInstagram,
    IoLogoLinkedin,
    IoLogoYoutube,
} from 'react-icons/io5'



import { LinksPersonalWeb } from '@/seed'


const IconosWebPersonal = [
    <IoLogoFacebook key="Facebook" size={25}/>,
    <IoLogoInstagram key="Instagram"  size={25}/>,
    <IoLogoLinkedin key="Linkedin"  size={25}/>,
    <IoLogoYoutube key="Youtube" size={25}/>
]


export const EsquetonCarrusel = () => {
    return (
        <>
            <div className="max-w-[1200px] [&>:nth-child(2)]:-rotate-3 [&>:nth-child(3)]:rotate-2 [&>:nth-child(4)]:rotate-2 w-full h-fit flex flex-row justify-center gap-5 overflow-hidden md:overflow-visible mt-5 ">

                {
                    ArraysImagesCarrusel.map(({key}) => (
                        <div key={key} className={`md:w-[300px] w-[150px] h-[150px] animate-pulse  md:h-[300px] rounded-3xl flex-none overflow-hidden shadow-lg bg-slate-900 last:-rotate-3 first:rotate-3`} >
                            
                        </div>
                    ))
                }
            </div>
        </>
       
    );
}




export const EsqueletonSecciones = () => {

  return (
    <div className="w-full h-fit grid md:grid-cols-2 grid-cols-1  gap-5 md:p-5 p-0">
      {/* SECCION DE ARTICULOS */}
      <div className="w-full h-full  flex flex-col gap-1 md:p-5 p-0 ">
        {ArticuloArraySecciones.map(
          ({ key, ruta }) => (
            <Link key={key} href={ruta}>
              <div className="w-full md:h-[250px] group h-[180px] flex flex-col gap-2 justify-center rounded-xl md:p-5 p-2 transition-colors bg-slate-900 animate-pulse cursor-pointer">
                
              </div>
            </Link>
          )
        )}
      </div>

      {/* SECCION DE MENSAJES Y TRABAJO */}
      <div className="w-full h-full  flex flex-col gap-5 md:items-center  md:p-5 p-0  ">
        {/* MENSAJE A MI */}
        <div className="md:w-[400px] md:h-[200px]   w-full h-[150px] rounded-xl border-[0.5px] bg-slate-900 animate-pulse flex flex-col justify-center md:p-5 p-2 gap-2">
            
        </div>

        {/* <div className="w-[400px] h-[400px] rounded-xl border-[0.5px] dark:border-gray-700 border-slate-300 "></div> */}
      </div>
    </div>
  );
};





export const EsqueletonHeaderBodyDesktop = () => {
    return (
        <div className='gap-5 flex flex-col justify-items-start  w-full'>
            <div className='w-[70px] h-[70px] shadow-md rounded-full bg-slate-900 animate-pulse overflow-hidden '>
               
               
            </div>
            <h1 className='dark:text-white text-slate-900 font-extrabold text-[16px] max-w-[500px] text-pretty rounded-xl bg-slate-900 animate-pulse  md:text-[40px] md:min-w-[500px]  ' >Administrador de Sistema, Diseñador de sofware</h1>
            <p className='dark:text-gray-600 font-semibold text-[12px] md:text-[16px] text-slate-900 rounded-xl  bg-slate-900 animate-pulse'>
                Estudiante de Administración de Sistemas en Certus. Destacado por mi sólido dominio en bases de datos y otras tecnologías esenciales. 
                Comprometido con el constante aprendizaje y en proceso de mejora de mis habilidades en inglés. Busco convertirme en un administrador
                de sistemas competente, capaz de afrontar los desafíos tecnológicos con soluciones innovadoras    
            </p>
            <ul className='flex justify-start items-center flex-row gap-5  '>
                {LinksPersonalWeb.map(({href},index) => (
                    <Link href={href} key={index}  target='_blank' >
                    <li className='text-slate-900 rounded-full overflow-hidden  bg-slate-900 animate-pulse transition-colors'  >{IconosWebPersonal[index]}</li>
                    </Link>
                ))}
            
            </ul>
        </div>
    );
}
