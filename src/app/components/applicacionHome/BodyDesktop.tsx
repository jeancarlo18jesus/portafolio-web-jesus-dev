import { CarruselImages } from './CarruselImages';
import {HeaderBodyDesktop} from './HeaderBodyDesktop' 
import { SeccionesInformacion } from './SeccionesInformacion';

import { Suspense } from "react";
import { EsqueletonHeaderBodyDesktop, EsqueletonSecciones, EsquetonCarrusel } from './ui/esqueleton';

export const BodyDesktop = ()=> {
    return (
    
    <div className={`w-full  md:p-9 p-4  gap-5 flex flex-col`}>
        <Suspense fallback={<EsqueletonHeaderBodyDesktop />}>
        <HeaderBodyDesktop  />
        </Suspense>
        <Suspense fallback={<EsquetonCarrusel />}>
        <CarruselImages />
        </Suspense>
        <Suspense fallback={<EsqueletonSecciones />}>
        <SeccionesInformacion/>
        </Suspense>

    </div>
    
    );
}