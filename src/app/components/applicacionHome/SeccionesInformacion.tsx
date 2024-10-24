
import { IoChevronForward,    IoMailOutline, } from "react-icons/io5";

import Link from "next/link";
// import {ArticuloArraySecciones} from '@/seed'
import InitialDataPost from '@/app/schema/InitialDataPost.json'


export const SeccionesInformacion = () => {

  const postBlog = InitialDataPost

  return (
    <div className="w-full h-fit grid md:grid-cols-2 grid-cols-1  gap-5 md:p-5 p-0">
      {/* SECCION DE ARTICULOS */}
      <div className="w-full h-full  flex flex-col gap-1 md:p-5 p-0 ">
        {
          
          postBlog.slice(0, 3).map((post, index) => (
            <Link key={`${index}${post.id}`}   href={`/blog/${post.id}`}>
              <div className="w-full md:h-[250px] group h-[180px] flex flex-col gap-2 justify-center rounded-xl md:p-5 p-2 transition-colors dark:hover:bg-gray-950 hover:bg-slate-300 cursor-pointer">
                <h1 className="font-light dark:text-gray-700 md:text-[14px] text-[10px]">
                  {post.date}
                </h1>
                <p className="font-semibold dark:text-slate-300">{post.title}</p>
                <article className="dark:text-gray-400 text-[12px] md:text-[16px]">
                  {post.description}
                </article>
                <span className="text-emerald-500 flex items-center gap-1 md:text-[16px] text-[12px]">
                  Leer Articulo
                  <IoChevronForward className="group-hover:translate-x-2 transition-transform" />
                </span>
              </div>
            </Link>
          ))
}
        {/* {ArticuloArraySecciones.map(
          ({ key,fecha, titulo, descripcion, ruta, articulo }) => (
            <Link key={key} href={ruta}>
              <div className="w-full md:h-[250px] group h-[180px] flex flex-col gap-2 justify-center rounded-xl md:p-5 p-2 transition-colors dark:hover:bg-gray-950 hover:bg-slate-300 cursor-pointer">
                <h1 className="font-light dark:text-gray-700 md:text-[14px] text-[10px]">
                  {fecha}
                </h1>
                <p className="font-semibold dark:text-slate-300">{titulo}</p>
                <article className="dark:text-gray-400 text-[12px] md:text-[16px] ">
                  {descripcion}
                </article>
                <span className="text-emerald-500 flex  items-center  gap-1 md:text-[16px] text-[12px]">
                  {articulo}
                  <IoChevronForward className="group-hover:translate-x-2 transition-transform" />
                </span>
              </div>
            </Link>
          )
        )} */}
      </div>

      {/* SECCION DE MENSAJES Y TRABAJO */}
      <div className="w-full h-full  flex flex-col gap-5 md:items-center  md:p-5 p-0  ">
        {/* MENSAJE A MI */}
        <div className="md:w-[400px] md:h-[200px]  w-full h-[150px] rounded-xl border-[0.5px] dark:border-gray-700 border-slate-300 flex flex-col justify-center md:p-5 p-2 gap-2">
            <span className="flex gap-2 items-center"><IoMailOutline className="dark:text-gray-500" size={20}/><h1 className="dark:text-slate-300 font-semibold text-[12px] md:text-[16px]">Contactame</h1></span>
            <p className="dark:text-gray-600 text-[14px] md:text-[16px] ">Recibe notificaciones cuando publique algo nuevo y cancela tu suscripción en cualquier momento.</p>
            <form action=""  className="flex gap-2">
                <input className="dark:focus:border-slate-500 shadow-sm dark:focus:shadow-emerald-500 md:h-[40px] h-[35px]  dark:bg-gray-950 rounded-sm md:w-3/4 w-[350px] p-2 placeholder:text-[12px] outline-none border-[0.3px] dark:border-gray-700 placeholder:font-bold dark:text-slate-200 dark:font-light  " type="email" placeholder="Direccion de correo electronico" required/>
                <button type="submit" className="dark:bg-gray-600 bg-gray-500 md:w-[95px] w-[75px] text-[12px] md:text-[18px] rounded-sm dark:text-white font-medium ">Enviar</button>
            </form>
        </div>

        {/* <div className="w-[400px] h-[400px] rounded-xl border-[0.5px] dark:border-gray-700 border-slate-300 "></div> */}
      </div>
    </div>
  );
};
