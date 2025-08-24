import {
  Award,
  Github,
  ExternalLink,
  Calendar,
  Users,
  Star,
  Code,
  Eye,
} from "lucide-react";
import Image from "next/image";

export default function Proyectos() {
  const proyectos = [
    {
      id: 1,
      titulo: "Análisis de Rendimiento de Estudiantes",
      descripcion:
        "Dashboard interactivo con análisis estadístico avanzado y visualizaciones dinámicas para el rendimiento académico. Incluye correlaciones, histogramas y métricas de desempeño educativo.",
      grupo: "Grupo 1",
      destacados: [
        "Dashboard Interactivo",
        "Análisis Estadístico",
        "Visualizaciones Dinámicas",
      ],
      estado: "Completado",
      calificacion: 9.3,
      imagen:
        "https://res.cloudinary.com/djrdozcdw/image/upload/v1756054199/DIAPOS/project1_bhbjyk.png",
      demoUrl: "https://danianclasesia-sys.github.io/analisis_datos/",
      categoria: "Análisis de Datos",
    },
    {
      id: 2,
      titulo: "CompuGamers - Venta de Videojuegos",
      descripcion:
        "Plataforma de e-commerce especializada en gaming con chat en vivo, catálogo completo de productos gaming, combos especiales y sistema de contacto integrado.",
      grupo: "Grupo 2",
      destacados: ["E-commerce Gaming", "Chat en Vivo", "Combos Especiales"],
      estado: "Completado",
      calificacion: 9.1,
      imagen:
        "https://res.cloudinary.com/djrdozcdw/image/upload/v1756054215/DIAPOS/Project_5_vcplva.png",
      demoUrl: "https://carlosch30.github.io/paginaweb/",
      categoria: "E-commerce",
    },
    {
      id: 3,
      titulo: "Analítica de Tutelas y Derechos de Petición",
      descripcion:
        "Sistema completo de análisis de tutelas en salud con dashboard avanzado, filtros dinámicos, visualizaciones por departamento y seguimiento de evolución temporal.",
      grupo: "Grupo 3",
      destacados: [
        "Dashboard Avanzado",
        "Filtros Dinámicos",
        "Análisis Temporal",
      ],
      estado: "Completado",
      calificacion: 9.5,
      imagen:
        "https://res.cloudinary.com/djrdozcdw/image/upload/v1756054193/DIAPOS/project2_gx3o6u.png",
      demoUrl: "https://alanalisisia.github.io/tutela3/",
      categoria: "Análisis de Datos",
    },
    {
      id: 4,
      titulo: "UniClass - Universidad Virtual",
      descripcion:
        "Plataforma educativa moderna con sistema de cursos, profesores, recursos digitales, biblioteca virtual y asistente virtual integrado para estudiantes universitarios.",
      grupo: "Grupo 4",
      destacados: [
        "Plataforma Educativa",
        "Asistente Virtual",
        "Biblioteca Digital",
      ],
      estado: "Completado",
      calificacion: 9.7,
      imagen:
        "https://res.cloudinary.com/djrdozcdw/image/upload/v1756054195/DIAPOS/Project_4_s8x5uh.png",
      demoUrl:
        "https://alvaros1705-cloud.github.io/sistemasoperativosconalvarito/",
      categoria: "Educación",
    },
    {
      id: 5,
      titulo: "Luis Arturo - Asesor Virtual de Autos",
      descripcion:
        "Plataforma personalizada de venta de autos con inventario dinámico, sistema de contacto WhatsApp, testimonios de clientes y servicios de financiamiento.",
      grupo: "Grupo 5",
      destacados: [
        "Inventario Dinámico",
        "WhatsApp Integration",
        "Sistema de Testimonios",
      ],
      estado: "Completado",
      calificacion: 9.4,
      imagen:
        "https://res.cloudinary.com/djrdozcdw/image/upload/v1756054198/DIAPOS/project_3_r676zi.png",
      demoUrl:
        "https://becerraflorezluisarturo-art.github.io/VENTADECARROSLUISARTURO/",
      categoria: "Comercio",
    },
  ];

  const estadisticas = {
    totalProyectos: proyectos.length,
    completados: proyectos.filter((p) => p.estado === "Completado").length,
    enDesarrollo: proyectos.filter((p) => p.estado === "En desarrollo").length,
    promedioCalificacion:
      proyectos
        .filter((p) => p.calificacion !== null)
        .reduce((acc, p) => acc + (p.calificacion || 0), 0) /
      proyectos.filter((p) => p.calificacion !== null).length,
  };

  const categorias = Array.from(new Set(proyectos.map((p) => p.categoria)));

  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-tech-dark via-tech-purple-900 to-tech-pink-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-tech-purple-600 to-tech-pink-500 rounded-2xl mb-6">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-tech-purple-400 to-tech-pink-400 bg-clip-text text-transparent">
                Proyectos Misión 1
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proyectos de análisis de datos con Python, Pandas y frontends con
              IA desarrollados por nuestros campistas
            </p>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-12 bg-tech-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="tech-card text-center">
              <Award className="w-8 h-8 text-tech-purple-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">
                {estadisticas.totalProyectos}
              </div>
              <div className="text-sm text-gray-400">Total Proyectos</div>
            </div>
            <div className="tech-card text-center">
              <Star className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">
                {estadisticas.completados}
              </div>
              <div className="text-sm text-gray-400">Completados</div>
            </div>
            <div className="tech-card text-center">
              <Code className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">
                {estadisticas.enDesarrollo}
              </div>
              <div className="text-sm text-gray-400">En Desarrollo</div>
            </div>
            <div className="tech-card text-center">
              <Star className="w-8 h-8 text-tech-cyan-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">
                {estadisticas.promedioCalificacion.toFixed(1)}
              </div>
              <div className="text-sm text-gray-400">Promedio General</div>
            </div>
          </div>
        </div>
      </section>

      {/* Resumen de la misión */}
      <section className="py-12 bg-tech-dark/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-tech-purple-400 to-tech-pink-400 bg-clip-text text-transparent">
              Misión 1: Análisis de Datos y Frontend con IA
            </span>
          </h2>
          <p className="text-gray-300 text-lg">
            Los campistas desarrollaron proyectos utilizando Python y Pandas
            para análisis de datos, creando frontends interactivos con
            herramientas de IA para consultar información de manera inteligente.
          </p>
        </div>
      </section>

      {/* Grid de proyectos */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proyectos.map((proyecto) => (
              <div key={proyecto.id} className="tech-card group">
                <div className="space-y-4">
                  {/* Imagen del proyecto */}
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src={proyecto.imagen}
                      alt={proyecto.titulo}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-3 right-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          proyecto.estado === "Completado"
                            ? "bg-green-500 text-white"
                            : "bg-yellow-500 text-black"
                        }`}
                      >
                        {proyecto.estado}
                      </span>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-tech-purple-600 text-white text-xs font-semibold rounded">
                        {proyecto.categoria}
                      </span>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-white group-hover:text-tech-purple-400 transition-colors">
                      {proyecto.titulo}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {proyecto.descripcion}
                    </p>

                    {/* Grupo */}
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-tech-purple-400" />
                      <span className="text-sm font-semibold text-tech-purple-400">
                        {proyecto.grupo}
                      </span>
                    </div>

                    {/* Características destacadas */}
                    <div className="flex flex-wrap gap-2">
                      {proyecto.destacados.map((destacado, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gradient-to-r from-tech-purple-600/20 to-tech-pink-600/20 text-tech-cyan-400 text-xs rounded-full border border-tech-cyan-500/30"
                        >
                          ✨ {destacado}
                        </span>
                      ))}
                    </div>

                    {/* Calificación */}
                    {proyecto.calificacion && (
                      <div className="flex items-center justify-center space-x-2 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg p-3">
                        <Star className="w-5 h-5 text-yellow-400" />
                        <span className="text-lg font-bold text-yellow-400">
                          {proyecto.calificacion}/10
                        </span>
                        <span className="text-sm text-gray-400">Excelente</span>
                      </div>
                    )}

                    {/* Botón de Demo */}
                    <div className="pt-4 border-t border-gray-700">
                      <a
                        href={proyecto.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center space-x-3 py-3 px-6 bg-gradient-to-r from-tech-purple-600 via-tech-pink-500 to-tech-cyan-500 text-white font-bold rounded-xl hover:from-tech-purple-700 hover:via-tech-pink-600 hover:to-tech-cyan-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                      >
                        <Eye className="w-5 h-5" />
                        <span>Ver Demo en Vivo</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 bg-gradient-to-r from-tech-purple-600 to-tech-pink-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Tienes una idea para tu proyecto?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            ¡Es tu turno de crear algo increíble! Revisa los recursos y comienza
            tu propio proyecto de IA
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="/recursos"
              className="bg-white text-tech-purple-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Ver Recursos
            </a>
            <a
              href="/quiz"
              className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-tech-purple-600 transition-colors"
            >
              Practicar con Quiz
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
