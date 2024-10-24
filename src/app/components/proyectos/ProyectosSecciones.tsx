interface Proyecto {
    fecha: string
    titulo: string
    descripcion: string
    tecnologias: string[]
    enlace?: string
  }
  
  export const proyectos: Proyecto[] = [
    {
      fecha: "2023",
      titulo: "Gestor de Tareas Potenciado por IA",
      descripcion: "Desarrollé una aplicación de gestión de tareas que utiliza aprendizaje automático para priorizar y sugerir tareas basadas en el comportamiento del usuario y los plazos.",
      tecnologias: ["React", "Node.js", "TensorFlow.js", "MongoDB"],
      enlace: "https://ai-taskmanager.example.com"
    },
    {
      fecha: "2022",
      titulo: "Plataforma de Comercio Electrónico",
      descripcion: "Construí una plataforma de comercio electrónico escalable con características como gestión de inventario en tiempo real, recomendaciones personalizadas y pasarelas de pago integradas.",
      tecnologias: ["Vue.js", "Express", "PostgreSQL", "Stripe API"],
      enlace: "https://ecommerce-platform.example.com"
    },
    {
      fecha: "2021",
      titulo: "Dashboard de Análisis de Redes Sociales",
      descripcion: "Creé un dashboard de análisis integral para que los gestores de redes sociales puedan rastrear el compromiso, el crecimiento y el rendimiento de campañas en múltiples plataformas.",
      tecnologias: ["React", "D3.js", "Python", "Flask", "Redis"],
      enlace: "https://social-analytics.example.com"
    },
    {
      fecha: "2020",
      titulo: "Sistema de Automatización del Hogar IoT",
      descripcion: "Diseñé e implementé un sistema de automatización del hogar que integra varios dispositivos IoT y puede ser controlado a través de una aplicación móvil o comandos de voz.",
      tecnologias: ["React Native", "Node.js", "MQTT", "Raspberry Pi"],
    },
    {
      fecha: "2019",
      titulo: "Sistema de Votación Basado en Blockchain",
      descripcion: "Desarrollé un sistema de votación seguro y transparente utilizando tecnología blockchain para asegurar la integridad de los resultados electorales.",
      tecnologias: ["Solidity", "Ethereum", "Web3.js", "React"],
      enlace: "https://blockchain-voting.example.com"
    }
  ]

