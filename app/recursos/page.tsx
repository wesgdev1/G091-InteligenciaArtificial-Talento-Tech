import {
  FileText,
  Video,
  Link as LinkIcon,
  Download,
  ExternalLink,
  BookOpen,
  Code,
  Globe,
} from "lucide-react";
import Link from "next/link";

export default function Recursos() {
  const categorias = [
    {
      id: "documentos",
      titulo: "Documentos y PDFs",
      icono: FileText,
      color: "from-blue-500 to-indigo-600",
      recursos: [
        {
          titulo: "Guía Completa de Machine Learning",
          descripcion: "Documento comprehensive sobre algoritmos de ML",
          tipo: "PDF",
          tamaño: "2.5 MB",
          url: "#",
        },
        {
          titulo: "Introducción a Redes Neuronales",
          descripcion: "Conceptos básicos y arquitecturas fundamentales",
          tipo: "PDF",
          tamaño: "1.8 MB",
          url: "#",
        },
        {
          titulo: "Ética en Inteligencia Artificial",
          descripcion: "Marco ético y consideraciones importantes",
          tipo: "PDF",
          tamaño: "950 KB",
          url: "#",
        },
      ],
    },
    {
      id: "videos",
      titulo: "Videos y Tutoriales",
      icono: Video,
      color: "from-red-500 to-pink-600",
      recursos: [
        {
          titulo: "Fundamentos de IA - Clase 1",
          descripcion: "Introducción teórica a la Inteligencia Artificial",
          tipo: "Video",
          duracion: "45 min",
          url: "#",
        },
        {
          titulo: "Python para IA - Tutorial Práctico",
          descripcion: "Configuración del entorno y primeros pasos",
          tipo: "Video",
          duracion: "1h 20min",
          url: "#",
        },
        {
          titulo: "Implementando tu primera Red Neuronal",
          descripcion: "Ejercicio práctico paso a paso",
          tipo: "Video",
          duracion: "55 min",
          url: "#",
        },
      ],
    },
    {
      id: "codigo",
      titulo: "Código y Ejercicios",
      icono: Code,
      color: "from-green-500 to-emerald-600",
      recursos: [
        {
          titulo: "Repositorio de Ejercicios - GitHub",
          descripcion: "Colección completa de ejercicios prácticos",
          tipo: "Repositorio",
          lenguaje: "Python",
          url: "https://github.com/g091-ia-basico/ejercicios",
        },
        {
          titulo: "Plantillas de Proyectos",
          descripcion: "Templates para iniciar proyectos de IA",
          tipo: "Código",
          lenguaje: "Jupyter",
          url: "#",
        },
        {
          titulo: "Datasets de Práctica",
          descripcion: "Conjuntos de datos para experimentar",
          tipo: "Datos",
          formato: "CSV/JSON",
          url: "#",
        },
      ],
    },
    {
      id: "enlaces",
      titulo: "Enlaces Externos",
      icono: Globe,
      color: "from-purple-500 to-pink-600",
      recursos: [
        {
          titulo: "Coursera - Machine Learning Course",
          descripcion: "Curso de Andrew Ng (Stanford)",
          tipo: "Curso Online",
          plataforma: "Coursera",
          url: "https://coursera.org/learn/machine-learning",
        },
        {
          titulo: "Kaggle Learn",
          descripcion: "Micro-cursos gratuitos de ciencia de datos",
          tipo: "Plataforma",
          plataforma: "Kaggle",
          url: "https://kaggle.com/learn",
        },
        {
          titulo: "TensorFlow Documentation",
          descripcion: "Documentación oficial de TensorFlow",
          tipo: "Documentación",
          plataforma: "Google",
          url: "https://tensorflow.org",
        },
      ],
    },
  ];

  const herramientas = [
    {
      nombre: "Python",
      descripcion: "Lenguaje principal para IA",
      logo: "🐍",
      url: "https://python.org",
    },
    {
      nombre: "Jupyter Notebook",
      descripcion: "Entorno interactivo de desarrollo",
      logo: "📓",
      url: "https://jupyter.org",
    },
    {
      nombre: "TensorFlow",
      descripcion: "Framework de deep learning",
      logo: "🧠",
      url: "https://tensorflow.org",
    },
    {
      nombre: "Scikit-learn",
      descripcion: "Biblioteca de machine learning",
      logo: "🤖",
      url: "https://scikit-learn.org",
    },
    {
      nombre: "Pandas",
      descripcion: "Manipulación de datos",
      logo: "🐼",
      url: "https://pandas.pydata.org",
    },
    {
      nombre: "Google Colab",
      descripcion: "Notebooks en la nube",
      logo: "☁️",
      url: "https://colab.research.google.com",
    },
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-tech-dark via-tech-green-900 to-tech-cyan-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-600 to-cyan-500 rounded-2xl mb-6">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Recursos de Aprendizaje
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Materiales, herramientas y enlaces útiles para potenciar tu
              aprendizaje en Inteligencia Artificial
            </p>
          </div>
        </div>
      </section>

      {/* Herramientas esenciales */}
      <section className="py-16 bg-tech-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Herramientas Esenciales
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Software y plataformas que utilizamos en el curso
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {herramientas.map((herramienta, index) => (
              <a
                key={index}
                href={herramienta.url}
                target="_blank"
                rel="noopener noreferrer"
                className="tech-card group hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{herramienta.logo}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">
                      {herramienta.nombre}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {herramienta.descripcion}
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Categorías de recursos */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Biblioteca de Recursos
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explora nuestra colección organizada de materiales de estudio
            </p>
          </div>

          <div className="space-y-16">
            {categorias.map((categoria) => {
              const IconoCategoria = categoria.icono;
              return (
                <div key={categoria.id} className="space-y-8">
                  {/* Título de categoría */}
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${categoria.color} rounded-lg flex items-center justify-center`}
                    >
                      <IconoCategoria className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {categoria.titulo}
                    </h3>
                  </div>

                  {/* Grid de recursos */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoria.recursos.map((recurso, index) => (
                      <div key={index} className="tech-card group">
                        <div className="space-y-4">
                          <div className="flex items-start justify-between">
                            <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                              {recurso.titulo}
                            </h4>
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${categoria.color} text-white`}
                            >
                              {recurso.tipo}
                            </span>
                          </div>

                          <p className="text-gray-400 text-sm">
                            {recurso.descripcion}
                          </p>

                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <div className="space-y-1">
                              {recurso.tamaño && <div>📁 {recurso.tamaño}</div>}
                              {recurso.duracion && (
                                <div>⏱️ {recurso.duracion}</div>
                              )}
                              {recurso.lenguaje && (
                                <div>💻 {recurso.lenguaje}</div>
                              )}
                              {recurso.formato && (
                                <div>📊 {recurso.formato}</div>
                              )}
                              {recurso.plataforma && (
                                <div>🌐 {recurso.plataforma}</div>
                              )}
                            </div>
                          </div>

                          <div className="pt-4 border-t border-gray-700">
                            <a
                              href={recurso.url}
                              target={
                                recurso.url.startsWith("http")
                                  ? "_blank"
                                  : "_self"
                              }
                              rel={
                                recurso.url.startsWith("http")
                                  ? "noopener noreferrer"
                                  : ""
                              }
                              className="w-full flex items-center justify-center space-x-2 py-2 px-4 bg-gradient-to-r from-green-600 to-cyan-500 text-white font-semibold rounded-lg hover:from-green-700 hover:to-cyan-600 transition-all duration-300"
                            >
                              <Download className="w-4 h-4" />
                              <span>Acceder</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sección de apoyo */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Necesitas más recursos?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Si no encuentras lo que buscas, no dudes en contactarnos o revisar
            nuestro glosario
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/glosario"
              className="bg-white text-green-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Ver Glosario
            </Link>
            <Link
              href="/quiz"
              className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-green-600 transition-colors"
            >
              Practicar con Quiz
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
