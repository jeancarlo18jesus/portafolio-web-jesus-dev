import { EsqueletonHeaderBodyDesktop, EsqueletonSecciones, EsquetonCarrusel } from "./components/applicacionHome";



export default function LoadindPage() {

     return (

       <div className={`w-full  md:p-9 p-4  gap-5 flex flex-col`}>
        <EsqueletonHeaderBodyDesktop  />
        <EsquetonCarrusel />
        <EsqueletonSecciones/>
       </div>
    )
       
}