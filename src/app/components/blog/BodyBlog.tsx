'use client'
import Link from 'next/link'
import Img from 'next/image'
import { useState, useEffect, useCallback } from 'react'

import { Heart, MessageCircle, Share2 , Search} from "lucide-react"
import InitialDataPost from '@/app/schema/InitialDataPost.json'

export const BodyBlog = () => {
  const [visiblePosts, setVisiblePosts] = useState(3)
  const [isLoading, setIsLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState(InitialDataPost)
  const [isSearching, setIsSearching] = useState(false)

  const handleLoadMore = () => {
    setIsLoading(true)
    setTimeout(() => {
      setVisiblePosts(prevVisible => Math.min(prevVisible + 3, searchResults.length))
      setIsLoading(false)
    }, 1000)
  }

  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term)
    setIsSearching(true)
    
    setTimeout(() => {
      const results = InitialDataPost.filter(post => 
        post.title.toLowerCase().includes(term.toLowerCase()) ||
        post.description.toLowerCase().includes(term.toLowerCase())
      )
      setSearchResults(results)
      setVisiblePosts(Math.min(3, results.length))
      setIsSearching(false)
    }, 500)
  }, [])

  useEffect(() => {
    handleSearch(searchTerm)
  }, [searchTerm, handleSearch])

  return (
    <div className="min-h-screen">
      <header className=" ">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-slate-900  dark:text-white">Mi Blog Personal</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="mb-8 flex justify-center items-center gap-9 ">
            <input 
              type="search" 
              placeholder="Buscar en el blog..." 
              className=" w-[320px] h-9 text-slate-500 p-4 rounded-xl outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="  text-slate-400" />
          </div>

          {isSearching ? (
            <div className="text-center py-10">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-400 "></div>
              <p className="mt-2 text-gray-600">Buscando post...</p>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-600">No se encontraron resultados para {searchTerm}</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {searchResults.slice(0, visiblePosts).map((post) => (
                <Link href={`/blog/${post.id}`} key={post.id} className="flex flex-col shadow-sm hover:bg-slate-300 group dark:hover:bg-gray-950 transition-colors  shadow-slate-400 dark:shadow-gray-950 rounded-xl overflow-hidden">
                  <section className='w-full h-[200px]'>
                    <Img
                      width={500}
                      height={200} 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  </section>
                  <section className="flex-grow p-5">
                    <article className="text-xl font-bold mb-2">
                      <span className="text-slate-900 dark:text-gray-400">
                        {post.title}
                      </span>
                    </article>
                    <p className="text-slate-500 text-sm mb-2 dark:text-gray-200 ">{post.date}</p>
                    <p className="text-gray-950 dark:text-gray-500">{post.description}</p>
                  </section>
                  <section className="flex justify-between p-5 bg-slate-300 dark:bg-gray-950">
                    <p className="flex space-x-2">
                      <button className='hover:text-emerald-500 text-slate-500 transition-colors'>
                        <Heart className="h-4 w-4 mr-1" />
                        <span className="sr-only">Me gusta</span>
                      </button>
                      <button className='hover:text-emerald-500 text-slate-500 transition-colors'>
                        <MessageCircle className="h-4 w-4 mr-1" />
                        <span className="sr-only">Comentar</span>
                      </button>
                      <button className='hover:text-emerald-500 text-slate-500 transition-colors'>
                        <Share2 className="h-4 w-4 mr-1" />
                        <span className="sr-only">Compartir</span>
                      </button>
                    </p>
                    <button className='hover:text-emerald-500 text-slate-500 transition-colors'>
                      <Link href={`/blog/${post.id}`} className='group-hover:text-emerald-500'>
                        Leer Articulo
                      </Link>
                    </button>
                  </section>
                </Link>
              ))}
            </div>
          )}

          {visiblePosts < searchResults.length && !isSearching && (
            <div className="mt-12 text-center">
              <button onClick={handleLoadMore} disabled={isLoading} className='bg-emerald-500  text-white p-4   rounded-xl'>
                {isLoading ? 'Cargando...' : 'Cargar más posts'}
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
