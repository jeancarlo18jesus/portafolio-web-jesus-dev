'use client'
import Img from 'next/image'
import {  Heart, MessageCircle, Share2 } from "lucide-react"

interface postType {
    id: string
    title:string
    date: string
    description: string
    content: string
    image : string
}

export const  BodyPost = ({slug}:{slug:postType}) => {

  const slides = [
    "/imgs/fiestaCarrusel.jpg",
    "/imgs/legoCarrusel.jpg",
    "/imgs/estadioCarrusel.jpg"
  ]

  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="mb-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white  underline ">{slug.title}</h1>
              <p className="text-slate-600 text-sm mb-4 dark:text-gray-400 mt-2">Publicado el {slug.date}</p>
            </div>
            <div>
              <div className="relative h-[500px] w-3/4 mb-4 rounded-xl overflow-hidden">
                {slides.map((slide, index) => (
                  <Img
                    key={index}
                    src={slug.image}
                    width={1200}
                    height={800}
                    alt={`Slide ${index + 1}`}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500`}
                  />
                ))}
               
              </div>
              <p className="text-slate-800 mb-4 dark:text-gray-500">
                    {slug.description}
              </p>
              <p className="text-slate-800 mb-4 dark:text-gray-300">
                {slug.content}
              </p>
            </div>
            <div className="flex justify-between">
              <div className="flex space-x-4">
                <button className='flex gap-1 text-slate-600 dark:text-gray-600 justify-center items-center dark:hover:text-emerald-500  hover:text-emerald-500 transition-colors' >
                  <Heart className="h-4 w-4 mr-2" />
                  Me gusta
                </button>
                <button className='flex gap-1 justify-center dark:text-gray-600 text-slate-600 items-center dark:hover:text-emerald-500  hover:text-emerald-500 transition-colors'  >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Comentar
                </button>
                <button className='flex gap-1 justify-center dark:text-gray-600 text-slate-600 items-center dark:hover:text-emerald-500  hover:text-emerald-500 transition-colors' >
                  <Share2 className="h-4 w-4 mr-2" />
                  Compartir
                </button>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div>
              <h1 className="text-xl font-semibold dark:text-gray-400 text-slate-700 mb-2">Comentarios</h1>
            </div>
            <div>
              <div className="space-y-4">
                {[1, 2].map((comment) => (
                  <div key={comment} className="flex space-x-4">
                    <div className='h-8 w-8 rounded-full overflow-hidden'>
                      <Img width={30} height={30} src={'/imgs/fiestaCarrusel.jpg'} className='w-full h-full object-cover' alt={`Usuario ${comment}`} />
                      
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-gray-600">Usuario {comment}</p>
                      <p className="text-sm text-gray-500">Hace 2 horas</p>
                      <p className="mt-1 text-slate-800 dark:text-gray-100">Gran artículo, me encantó leerlo!</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-col items-start">
                <textarea className="mb-2 border-[0.8px] bg-slate-200 dark:border-gray-800 dark:text-gray-100 dark:bg-gray-900 text-slate-800 border-slate-400 rounded-xl p-2 outline-none focus:border-slate-600 w-full h-24" placeholder="Escribe un comentario..." />
                <button className="bg-emerald-500  text-white  p-3 rounded-xl  active:text-slate-800 font-semibold">Publicar comentario</button>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}