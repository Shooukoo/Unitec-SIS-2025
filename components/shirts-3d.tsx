"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowDown, ArrowUp, Home, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

// Declare model-viewer as a custom element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": any
    }
  }
}

const shirtsData = [
  {
    id: 2022,
    year: "2022",
    title: "Ralph el Demoledor",
    description:
      "Camisa negra con letras rojas inspirada en la película de Disney. Diseño retro arcade con elementos de demolición y píxeles clásicos.",
    color: "#000000",
    textColor: "#ff0000",
    gradientFrom: "#000000",
    gradientTo: "#4a4a4a",
    accentColor: "#ff6b35",
    theme: "demolition",
    modelPath: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
  },
  {
    id: 2023,
    year: "2023",
    title: "Gaming Universe",
    description:
      "Camisa gris con letras blancas con temática de videojuegos. Elementos pixelados y referencias a la cultura gamer moderna.",
    color: "#6b7280",
    textColor: "#ffffff",
    gradientFrom: "#374151",
    gradientTo: "#9ca3af",
    accentColor: "#10b981",
    theme: "gaming",
    modelPath: "https://modelviewer.dev/shared-assets/models/RobotExpressive.glb",
  },
  {
    id: 2024,
    year: "2024",
    title: "Un Show Más",
    description:
      "Camisa violeta con letras blancas inspirada en la serie animada. Diseño cartoon con colores vibrantes y elementos surrealistas.",
    color: "#8b5cf6",
    textColor: "#ffffff",
    gradientFrom: "#7c3aed",
    gradientTo: "#c084fc",
    accentColor: "#fbbf24",
    theme: "cartoon",
    modelPath: "https://modelviewer.dev/shared-assets/models/Horse.glb",
  },
]

function ShirtModel({ shirt }: { shirt: (typeof shirtsData)[0] }) {
  const [modelError, setModelError] = useState(false)
  const [modelLoaded, setModelLoaded] = useState(false)

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-full max-w-md max-h-96"
      >
        {!modelError ? (
          <model-viewer
            src={shirt.modelPath}
            alt={`Camisa ${shirt.title} ${shirt.year}`}
            camera-controls
            enable-pan
            auto-rotate
            auto-rotate-delay="1000"
            rotation-per-second="30deg"
            shadow-intensity="1"
            interaction-prompt="auto"
            camera-orbit="0deg 75deg 105%"
            min-camera-orbit="auto auto auto"
            max-camera-orbit="auto auto auto"
            style={{
              width: "100%",
              height: "100%",
              minHeight: "300px",
              backgroundColor: "transparent",
            }}
            loading="eager"
            reveal="auto"
            onLoad={() => {
              console.log(`[v0] Model loaded successfully: ${shirt.modelPath}`)
              setModelLoaded(true)
            }}
            onError={(e: any) => {
              console.error(`[v0] Error loading 3D model: ${shirt.modelPath}`, e)
              setModelError(true)
            }}
          />
        ) : (
          <div className="w-full h-full min-h-[300px] flex flex-col items-center justify-center bg-black/10 rounded-lg border-2 border-dashed border-white/30">
            <AlertCircle className="w-12 h-12 text-white/60 mb-4" />
            <p className="text-white/80 text-center text-sm px-4">
              Error cargando modelo 3D
              <br />
              <span className="text-xs text-white/60">
                Reemplaza {shirt.modelPath.includes("/models/") ? "tu archivo GLB" : "el modelo"} con un archivo válido
              </span>
            </p>
          </div>
        )}

        {!modelLoaded && !modelError && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
            <span className="ml-3 text-white/80 text-sm">Cargando modelo 3D...</span>
          </div>
        )}

        {modelLoaded && !modelError && (
          <div className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
            Arrastra para rotar
          </div>
        )}

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-4 right-4 w-4 h-4 rounded-full"
          style={{ backgroundColor: shirt.accentColor }}
        />
      </motion.div>
    </div>
  )
}

function ShirtSection({ shirt, index }: { shirt: (typeof shirtsData)[0]; index: number }) {
  const getContrastColors = () => {
    switch (shirt.theme) {
      case "demolition":
        return {
          primaryText: "#ffffff",
          secondaryText: "#f1f5f9",
          yearText: "#ffffff40",
        }
      case "gaming":
        return {
          primaryText: "#ffffff",
          secondaryText: "#e2e8f0",
          yearText: "#ffffff30",
        }
      case "cartoon":
        return {
          primaryText: "#ffffff",
          secondaryText: "#f8fafc",
          yearText: "#ffffff35",
        }
      default:
        return {
          primaryText: "#ffffff",
          secondaryText: "#f1f5f9",
          yearText: "#ffffff40",
        }
    }
  }

  const contrastColors = getContrastColors()

  return (
    <section
      id={`section-${index}`}
      className="h-screen w-full relative flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${shirt.gradientFrom} 0%, ${shirt.gradientTo} 100%)`,
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: Math.random() * 20 + 10,
              height: Math.random() * 20 + 10,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: shirt.accentColor,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 lg:space-y-6 text-center lg:text-left order-2 lg:order-1 w-full"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span
                className="inline-block px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4"
                style={{ backgroundColor: shirt.accentColor, color: shirt.color }}
              >
                Edición {shirt.year}
              </span>
              <h2
                className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 leading-tight"
                style={{ color: contrastColors.primaryText }}
              >
                {shirt.title}
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm sm:text-base lg:text-lg leading-relaxed max-w-md mx-auto lg:mx-0"
              style={{ color: contrastColors.secondaryText }}
            >
              {shirt.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <button
                className="px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                style={{
                  backgroundColor: shirt.accentColor,
                  color: shirt.color,
                  boxShadow: `0 8px 25px ${shirt.accentColor}40`,
                }}
              >
                Ver Detalles
              </button>
              <button
                className="px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-sm sm:text-base lg:text-lg border-2 transition-all duration-300 transform hover:scale-105 bg-black/30 hover:bg-black/50"
                style={{
                  borderColor: contrastColors.primaryText + "80",
                  color: contrastColors.primaryText,
                }}
              >
                Galería
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2 h-48 sm:h-64 lg:h-96 w-full flex items-center justify-center"
          >
            <ShirtModel shirt={shirt} />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 text-4xl sm:text-6xl lg:text-8xl xl:text-9xl font-black pointer-events-none select-none"
        style={{
          fontFamily: "monospace",
          color: contrastColors.yearText,
        }}
      >
        {shirt.year}
      </motion.div>
    </section>
  )
}

export default function Shirts3D() {
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [currentSection, setCurrentSection] = useState(0)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const script = document.createElement("script")
    script.type = "module"
    script.src = "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
    document.head.appendChild(script)

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsNavVisible(false)
      } else {
        setIsNavVisible(true)
      }

      const sections = document.querySelectorAll('section[id^="section-"]')
      let newSection = 0

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          newSection = index
        }
      })

      setCurrentSection(newSection)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const scrollToSection = (index: number) => {
    const section = document.getElementById(`section-${index}`)
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  const scrollToNextSection = () => {
    const nextSection = (currentSection + 1) % shirtsData.length
    scrollToSection(nextSection)
  }

  const scrollToPrevSection = () => {
    const prevSection = currentSection === 0 ? shirtsData.length - 1 : currentSection - 1
    scrollToSection(prevSection)
  }

  return (
    <div className="relative">
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isNavVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm text-white shadow-lg"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <h1 className="text-lg sm:text-xl font-bold">Camisas Unitec</h1>
              <span className="text-slate-300 text-xs sm:text-sm">
                {currentSection + 1} / {shirtsData.length}
              </span>
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-slate-800 text-xs sm:text-sm px-2 sm:px-4"
              onClick={() => (window.location.href = "/")}
            >
              <Home className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Inicio
            </Button>
          </div>
        </div>
      </motion.header>

      <div className="relative">
        {shirtsData.map((shirt, index) => (
          <ShirtSection key={shirt.id} shirt={shirt} index={index} />
        ))}
      </div>

      <div className="fixed right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-40 flex flex-col space-y-2">
        <Button
          className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 shadow-lg transition-all duration-300"
          onClick={scrollToPrevSection}
          title="Sección anterior"
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </Button>

        <Button
          className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 shadow-lg transition-all duration-300"
          onClick={scrollToNextSection}
          title="Siguiente sección"
        >
          <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
        </Button>
      </div>

      <div className="fixed left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-40 flex flex-col space-y-2">
        {shirtsData.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              currentSection === index ? "bg-white shadow-lg scale-125" : "bg-white/40 hover:bg-white/60"
            }`}
            onClick={() => scrollToSection(index)}
            title={`Ir a sección ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
