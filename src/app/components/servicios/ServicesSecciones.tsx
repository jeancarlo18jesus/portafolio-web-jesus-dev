import { Code, Database, Globe, Smartphone, Cpu, Cloud } from 'lucide-react'

interface Service {
  icon: React.ReactNode
  title: string
  description: string
}

export const services: Service[] = [
  {
    icon: <Code className="w-8 h-8 text-emerald-400 " />,
    title: "Desarrollo Web",
    description: "Aplicaciones web personalizadas construidas con frameworks modernos como React, Vue y Angular."
  },
  {
    icon: <Smartphone className="w-8 h-8 text-emerald-400 " />,
    title: "Desarrollo de Aplicaciones Móviles",
    description: "Aplicaciones móviles nativas y multiplataforma para iOS y Android utilizando React Native o Flutter."
  },
  {
    icon: <Database className="w-8 h-8 text-emerald-400 " />,
    title: "Diseño de Bases de Datos",
    description: "Soluciones de bases de datos eficientes y escalables usando tecnologías SQL y NoSQL."
  },
  {
    icon: <Globe className="w-8 h-8 text-emerald-400 " />,
    title: "Desarrollo de API",
    description: "APIs RESTful y GraphQL para impulsar tus aplicaciones web y móviles."
  },
  {
    icon: <Cpu className="w-8 h-8 text-emerald-400 " />,
    title: "Integración de Machine Learning",
    description: "Implementa modelos de ML en tus aplicaciones para características inteligentes y análisis de datos."
  },
  {
    icon: <Cloud className="w-8 h-8 text-emerald-400 " />,
    title: "Soluciones en la Nube",
    description: "Despliega y gestiona tus aplicaciones en AWS, Google Cloud o Azure para un rendimiento óptimo."
  }
]

export const ServicesSecciones = () => {
   return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {services.map((service, index) => (
      <div key={index} className=" rounded-lg p-6 dark:hover:bg-gray-950 hover:bg-slate-300 transition-colors">
        <div className="flex items-center mb-4">
          {service.icon}
          <h2 className="text-2xl font-semibold ml-4 dark:text-white text-slate-700">{service.title}</h2>
        </div>
        <p className="text-gray-400">{service.description}</p>
      </div>
    ))}
</div>
   )
}