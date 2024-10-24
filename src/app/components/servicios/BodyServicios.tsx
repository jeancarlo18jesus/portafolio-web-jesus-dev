
import { ServicesSecciones } from './ServicesSecciones'
import {Suspense} from 'react'
import { EsqueletonServicios } from './ui/esqueleton'


export const BodyServicios = () => {
  return (
    <Suspense fallback={<EsqueletonServicios />}>
    <div className="min-h-screen  text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 dark:text-white text-slate-950">Mis Servicios de Programacion</h1>
        <p className="text-slate-700 mb-12">
        Aprovechando las tecnologías de vanguardia para hacer realidad sus ideas. Desde desarrollo web y móvil hasta aprendizaje automático y soluciones en la nube, lo tengo cubierto.        </p>
        
        <ServicesSecciones/>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">¿Listo para comenzar tu proyecto?</h2>
          <p className="text-gray-400 mb-8">
          Analicemos cómo puedo ayudarle a hacer realidad su visión.</p>
          <a 
            href="/contacto" 
            className="bg-emerald-500  hover:bg-emerald-500  text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Ponte en contacto
          </a>
        </div>
      </div>
    </div>
    </Suspense>
  )
}