'use client'
import { useState } from 'react'
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react'
import {Suspense} from 'react'
import { EsqueletonProyectos } from './ui/esqueleto'
import { proyectos } from './ProyectosSecciones'

export const BodyProyectos = () => {
  const [proyectoExpandido, setProyectoExpandido] = useState<number | null>(null)

  const alternarProyecto = (indice: number) => {
    setProyectoExpandido(proyectoExpandido === indice ? null : indice)
  }

  return (
    <Suspense fallback={<EsqueletonProyectos/>}>
    <div className="min-h-screen p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 dark:text-white text-gray-900">Mi Línea de Tiempo de Proyectos</h1>
        <p className="text-slate-700 mb-8">
          Una muestra cronológica de mis proyectos clave y su impacto en diversas industrias.
        </p>

        <div className="space-y-8">
          {proyectos.map((proyecto, indice) => (
            <div key={indice} className="border-l-2 border-teal-400 pl-4 pb-8">
              <div className="flex flex-col sm:flex-row sm:items-center mb-2">
                <span className="text-teal-400 font-semibold mb-2 sm:mb-0">{proyecto.fecha}</span>
                <h2 className="text-xl font-bold sm:ml-4 dark:text-slate-300 text-gray-800">{proyecto.titulo}</h2>
              </div>
              <p className="text-gray-400 mb-2">{proyecto.descripcion}</p>
              <button
                onClick={() => alternarProyecto(indice)}
                className="flex items-center text-teal-400 hover:text-teal-300 transition-colors"
              >
                {proyectoExpandido === indice ? (
                  <>
                    <ChevronUp className="w-4 h-4 mr-1" />
                    Ocultar Detalles
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4 mr-1" />
                    Mostrar Detalles
                  </>
                )}
              </button>
              {proyectoExpandido === indice && (
                <div className="mt-4 dark:bg-gray-900 bg-slate-3.
                00 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 dark:text-slate-400 text-gray-900">Tecnologías Utilizadas:</h3>
                  <ul className="list-disc list-inside mb-4">
                    {proyecto.tecnologias.map((tec, indiceTec) => (
                      <li key={indiceTec} className="text-gray-900 dark:text-slate-100">{tec}</li>
                    ))}
                  </ul>
                  {proyecto.enlace && (
                    <a
                      href={proyecto.enlace}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-emerald-700 hover:text-emerald-900 transition-colors"
                    >
                      Ver Proyecto <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
      </Suspense>
  )
}