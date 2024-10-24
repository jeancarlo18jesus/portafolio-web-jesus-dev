'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'
import { Suspense } from "react";
import {EsqueletoUiContacto} from '@/app/components/contacto'

export  const BodyContacto = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      // Handle form submission logic here
      console.log('Form submitted:', { name, email, message })
      // Reset form fields
      setName('')
      setEmail('')
      setMessage('')
    }
  
    return (
        <Suspense fallback={<EsqueletoUiContacto />}>
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md  bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contactame</h1>
          <form onSubmit={handleSubmit} className="space-y-6" autoComplete='off'>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full border-[1px] p-1 border-gray-200 focus:border-gray-900 outline-none "
                placeholder="nombre..."
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Correo
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border-[1px] p-1 border-gray-200 focus:border-gray-900 outline-none "
                placeholder="correo..."
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mensaje
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full border-[1px] p-1 border-gray-200 focus:border-gray-900 outline-none "
                placeholder="tu mensaje aqui..."
                rows={4}
              />
            </div>
            <button type="submit" className="w-full flex justify-center items-center h-[40px]  rounded-lg bg-emerald-500  text-white ">
              <Send className="w-4 h-4 mr-2" />
              Enviar
            </button>
          </form>
        </div>
      </div>
        </Suspense>
    )
  }