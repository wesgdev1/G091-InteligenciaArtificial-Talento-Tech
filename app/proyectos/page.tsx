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
      titulo: "ChatBot Educativo con NLP",
      descripcion:
        "Asistente virtual para responder preguntas sobre IA usando procesamiento de lenguaje natural",
      estudiantes: ["María González", "Carlos Rodríguez", "Ana Pérez"],
      tecnologias: ["Python", "NLTK", "Flask", "SQLite"],
      estado: "Completado",
      fechaEntrega: "2024-11-15",
      calificacion: 9.5,
      imagen:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=250&fit=crop",
      githubUrl: "https://github.com/g091-ia/chatbot-educativo",
      demoUrl: "https://chatbot-demo.vercel.app",
      categoria: "NLP",
    },
    {
      id: 2,
      titulo: "Clasificador de Imágenes Médicas",
      descripcion:
        "Sistema de IA para detectar anomalías en radiografías usando redes neuronales convolucionales",
      estudiantes: ["Luis Martínez", "Sofia López", "David Torres"],
      tecnologias: ["TensorFlow", "Keras", "OpenCV", "React"],
      estado: "En desarrollo",
      fechaEntrega: "2024-12-01",
      calificacion: null,
      imagen:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
      githubUrl: "https://github.com/g091-ia/clasificador-medico",
      demoUrl: null,
      categoria: "Computer Vision",
    },
    {
      id: 3,
      titulo: "Predictor de Precios de Vivienda",
      descripcion:
        "Modelo de machine learning para predecir precios inmobiliarios basado en características de la propiedad",
      estudiantes: ["Carmen Silva", "Roberto Díaz"],
      tecnologias: ["Scikit-learn", "Pandas", "NumPy", "Streamlit"],
      estado: "Completado",
      fechaEntrega: "2024-10-30",
      calificacion: 8.8,
      imagen:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop",
      githubUrl: "https://github.com/g091-ia/predictor-vivienda",
      demoUrl: "https://predictor-vivienda.streamlit.app",
      categoria: "Machine Learning",
    },
    {
      id: 4,
      titulo: "Análisis de Sentimientos en Redes Sociales",
      descripcion:
        "Herramienta para analizar la opinión pública sobre temas específicos en redes sociales",
      estudiantes: ["Andrea Morales", "Javier Hernández", "Isabel Castro"],
      tecnologias: ["Python", "TextBlob", "Twitter API", "Matplotlib"],
      estado: "Completado",
      fechaEntrega: "2024-11-08",
      calificacion: 9.2,
      imagen:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      githubUrl: "https://github.com/g091-ia/sentiment-analysis",
      demoUrl: "https://sentiment-analyzer.herokuapp.com",
      categoria: "NLP",
    },
    {
      id: 5,
      titulo: "Sistema de Recomendación Musical",
      descripcion:
        "Algoritmo que recomienda música basado en preferencias del usuario y análisis de audio",
      estudiantes: ["Miguel Vargas", "Lucía Ramos"],
      tecnologias: [
        "Python",
        "Spotify API",
        "Collaborative Filtering",
        "FastAPI",
      ],
      estado: "En desarrollo",
      fechaEntrega: "2024-12-15",
      calificacion: null,
      imagen:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop",
      githubUrl: "https://github.com/g091-ia/music-recommender",
      demoUrl: null,
      categoria: "Recommender Systems",
    },
    {
      id: 6,
      titulo: "Detector de Objetos en Tiempo Real",
      descripcion:
        "Aplicación que identifica y clasifica objetos usando la cámara web en tiempo real",
      estudiantes: ["Fernando Ospina", "Valentina Cruz", "Sebastián Mejía"],
      tecnologias: ["YOLO", "OpenCV", "PyTorch", "WebRTC"],
      estado: "En desarrollo",
      fechaEntrega: "2024-12-20",
      calificacion: null,
      imagen:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
      githubUrl: "https://github.com/g091-ia/object-detector",
      demoUrl: null,
      categoria: "Computer Vision",
    },
  ];

  const estadisticas = {
    totalProyectos: proyectos.length,
    completados: proyectos.filter((p) => p.estado === "Completado").length,
    enDesarrollo: proyectos.filter((p) => p.estado === "En desarrollo").length,
    promedioCalificacion:
      proyectos
        .filter((p) => p.calificacion)
        .reduce((acc, p) => acc + p.calificacion, 0) /
      proyectos.filter((p) => p.calificacion).length,
  };

  const categorias = [...new Set(proyectos.map((p) => p.categoria))];

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
                Proyectos Presentados
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Descubre los increíbles proyectos desarrollados por nuestros
              estudiantes aplicando IA
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

      {/* Filtros por categoría */}
      <section className="py-8 bg-tech-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-4 py-2 bg-gradient-to-r from-tech-purple-600 to-tech-pink-500 text-white font-semibold rounded-lg">
              Todos
            </button>
            {categorias.map((categoria) => (
              <button
                key={categoria}
                className="px-4 py-2 border border-tech-purple-500 text-tech-purple-300 font-semibold rounded-lg hover:bg-tech-purple-500 hover:text-white transition-colors"
              >
                {categoria}
              </button>
            ))}
          </div>
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

                    {/* Estudiantes */}
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-400">
                          Estudiantes:
                        </span>
                      </div>
                      <div className="text-sm text-tech-cyan-400">
                        {proyecto.estudiantes.join(", ")}
                      </div>
                    </div>

                    {/* Tecnologías */}
                    <div className="flex flex-wrap gap-2">
                      {proyecto.tecnologias.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-tech-dark text-tech-cyan-400 text-xs rounded border border-tech-cyan-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Información adicional */}
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {new Date(proyecto.fechaEntrega).toLocaleDateString(
                            "es-ES"
                          )}
                        </span>
                      </div>
                      {proyecto.calificacion && (
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span className="text-yellow-400">
                            {proyecto.calificacion}/10
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Botones de acción */}
                    <div className="pt-4 border-t border-gray-700 space-y-2">
                      <div className="flex space-x-2">
                        <a
                          href={proyecto.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          <span>Código</span>
                        </a>
                        {proyecto.demoUrl && (
                          <a
                            href={proyecto.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 bg-gradient-to-r from-tech-purple-600 to-tech-pink-500 text-white font-semibold rounded-lg hover:from-tech-purple-700 hover:to-tech-pink-600 transition-colors"
                          >
                            <Eye className="w-4 h-4" />
                            <span>Demo</span>
                          </a>
                        )}
                      </div>
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
