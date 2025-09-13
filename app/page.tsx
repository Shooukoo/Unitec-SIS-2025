"use client"
import { useState, useEffect } from "react"
import {
  Users,
  MessageCircle,
  Bell,
  ExternalLink,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Instagram,
  ArrowDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const whatsappGroups = [
  {
    id: 1,
    name: "Dibujo",
    members: 32,
    description: "Concurso de dibujo",
    image: "/drawing-art-palette-brush.png",
    whatsappLink: "https://chat.whatsapp.com/JdAimyGUvccIRQeotMxTIy",
  },
  {
    id: 2,
    name: "Oratoria",
    members: 28,
    description: "Concurso de oratoria",
    image: "/microphone-public-speaking-podium.png",
    whatsappLink: "https://chat.whatsapp.com/ElD20yXuTBcBkMNoJW9lgf",
  },
  {
    id: 3,
    name: "Conocimiento General",
    members: 45,
    description: "Concurso de cultura general",
    image: "/brain-knowledge-books-lightbulb.png",
    whatsappLink: "https://chat.whatsapp.com/Jnv2JOIKVklLBu5SpX4DJy",
  },
  {
    id: 4,
    name: "Ajedrez",
    members: 24,
    description: "Concurso de ajedrez",
    image: "/chess-king-piece-board-strategy.png",
    whatsappLink: "https://chat.whatsapp.com/JpVTH6Ag0i9G0O42uCDQxi",
  },
  {
    id: 5,
    name: "Vestido Reciclado",
    members: 38,
    description: "Concurso de moda sostenible y diseño ecológico",
    image: "/recycled-fashion-sustainable-clothing-eco.png",
    whatsappLink: "https://chat.whatsapp.com/E68Bk6EUMiLCZbNB5NIhpW",
  },
  {
    id: 6,
    name: "Sketch",
    members: 29,
    description: "Concurso de Sketch cinematográfico",
    image: "/sketch-pencil-drawing-notebook-artistic.png",
    whatsappLink: "https://chat.whatsapp.com/ENgwbmSbaF6IwCUSnze4PF",
  },
  {
    id: 7,
    name: "Exatec",
    members: 67,
    description: "Competencia deportiva de ejercicios varios",
    image: "/graduation-cap-alumni-network-professional.png",
    whatsappLink: "https://chat.whatsapp.com/BCvGYm1797J8zyHNpVpJvp",
  },
  {
    id: 8,
    name: "Basquet Femenil",
    members: 22,
    description: "Equipo femenino de baloncesto",
    image: "/basketball-women-female-sports-team.png",
    whatsappLink: "https://chat.whatsapp.com/GQbD4s65VsJG5tUepJsWFQ",
  },
  {
    id: 9,
    name: "Voley Femenil",
    members: 26,
    description: "Equipo femenino de voleibol",
    image: "/volleyball-women-female-sports-net.png",
    whatsappLink: "https://chat.whatsapp.com/DLxU2S96zqkKPJoxmB2SJw",
  },
  {
    id: 10,
    name: "Futbol Femenil",
    members: 31,
    description: "Equipo femenino de fútbol",
    image: "/soccer-football-women-female-sports-ball.png",
    whatsappLink: "https://chat.whatsapp.com/LU0SwJHxo5UB9iEukarl3w",
  },
  {
    id: 11,
    name: "Voley Masculino",
    members: 28,
    description: "Equipo masculino de voleibol",
    image: "/volleyball-men-male-sports-net-team.png",
    whatsappLink: "https://chat.whatsapp.com/FxBDJByvgej7ia1lPs2jm6",
  },
  {
    id: 12,
    name: "Basquet Masculino",
    members: 25,
    description: "Equipo masculino de baloncesto",
    image: "/basketball-men-male-sports-hoop-team.png",
    whatsappLink: "https://chat.whatsapp.com/DngWLfKXLrSB5b69bIzrQS",
  },
  {
    id: 13,
    name: "Futbol Masculino",
    members: 33,
    description: "Equipo masculino de fútbol",
    image: "/soccer-football-men-male-sports-ball-field.png",
    whatsappLink: "https://chat.whatsapp.com/HIrYly7IQjt29InH4zqWkO",
  },
]

const announcements = [
  {
    id: 1,
    title: "Reunión Informativa para toda la comunidad de Sistemas y Ciberseguridad",
    date: "05 Sep 2025",
    content:
      "Sesión informativa dirigida a toda la comunidad de Sistemas y Ciberseguridad, donde se compartirán anuncios importantes, actualizaciones académicas y detalles sobre próximos proyectos y actividades.",
    type: "evento",
  },
  {
    id: 2,
    title: "Encuesta para la toma de tallas para Camisas",
    date: "05 Sep 2025",
    content:
      "Encuesta para el registro de tallas de camisas, con el fin de garantizar la correcta entrega de uniformes o prendas personalizadas para la comunidad.",
    type: "evento",
  },
  {
    id: 3,
    title: "Proximamente",
    date: "05 Sep 2025",
    content: "Ya no supe que poner aqui, AYUDAAAA!!",
    type: "evento",
  },
]

const organizationalChart = {
  coordinacionGeneral: [
    {
      name: "Emanuel Saldaña.",
      position: "Presidente",
      photo: "/encargados/mani.png",
      instagram: "@saalem_em",
    },
    {
      name: "Edgar Cortés.",
      position: "Vicepresidente",
      photo: "/encargados/edgar.png",
      instagram: "@edgar_cortes004",
    },
    {
      name: "Yatziri García.",
      position: "Secretaria",
      photo: "/encargados/yatziri.png",
      instagram: "@yatziri_garcia28",
    },
    {
      name: "Angel Canela.",
      position: "Coordinación General",
      photo: "/encargados/canela.png",
      instagram: "@angelcanelaaa",
    },
  ],
  committees: [
    {
      name: "Comité Artístico",
      description: "Escenografía, inscripciones",
      members: [
        {
          name: "Miguel Angel.",
          position: "Comité Artístico",
          photo: "/encargados/miguel.png",
          instagram: "@mickeychael.26",
        },
        {
          name: "Alondra López.",
          position: "Comité Artístico",
          photo: "/encargados/alondra.png",
          instagram: "@alondramedellin12",
        },
        {
          name: "Sergio Octavio.",
          position: "Comité Artístico",
          photo: "/encargados/usuario.png",
          instagram: "@checo.unitec",
        },
      ],
    },
    {
      name: "Comité Deportivo",
      description: "Logística de juegos",
      members: [
        {
          name: "Omar Vega.",
          position: "Comité Deportivo",
          photo: "/encargados/omar.png",
          instagram: "@omar_vl_25",
        },
        {
          name: "Isis Lizbeth.",
          position: "Comité Deportivo",
          photo: "/encargados/isis.png",
          instagram: "@isis_lizbeth15",
        },
        {
          name: "David Melgoza.",
          position: "Comité Deportivo",
          photo: "/encargados/david.png",
          instagram: "@david_mtz6",
        },
      ],
    },
    {
      name: "Comité de Logística",
      description: "Espacios, materiales, comunicación",
      members: [
        {
          name: "Maritza Santibañez.",
          position: "Comité de Logística",
          photo: "/encargados/maritza.png",
          instagram: "@maritza_garcia2004",
        },
        {
          name: "Alfonso.",
          position: "Comité de Logística",
          photo: "/encargados/poncho.png",
          instagram: "@poncho.unitec",
        },
        {
          name: "Daniel Mendez.",
          position: "Comité de Logística",
          photo: "/encargados/daniel.png",
          instagram: "@danielmendez581",
        },
        {
          name: "David Melgoza.",
          position: "Ayuda Presidencial",
          photo: "/encargados/david.png",
          instagram: "@david_mtz6",
        },
        {
          name: "Katia Paola.",
          position: "Comité de Logística",
          photo: "/encargados/katia.png",
          instagram: "@paola_victoria_58",
        },
      ],
    },
    {
      name: "Comité de Seguridad",
      description: "Control del Carnaval y actividades",
      members: [
        {
          name: "Alexis Chavez.",
          position: "Comité de Seguridad",
          photo: "/encargados/alexis.png",
          instagram: "@__alexm10__",
        },
        {
          name: "Bryan Esquivel.",
          position: "Comité de Seguridad",
          photo: "/encargados/brayan.png",
          instagram: "@_bryan_esquivel_",
        },
        {
          name: "Amado Carrillo.",
          position: "Comité de Seguridad",
          photo: "/encargados/amado.png",
          instagram: "@",
        },
      ],
    },
    {
      name: "Comité de Finanzas",
      description: "Presupuesto, patrocinadores",
      members: [
        {
          name: "Daniel Villaseñor.",
          position: "Comité de Finanzas",
          photo: "/encargados/danielV.png",
          instagram: "@",
        },
        {
          name: "Ludwig Iván.",
          position: "Comité de Finanzas",
          photo: "/encargados/ludwig.png",
          instagram: "@ludwig_ivan11",
        },
        {
          name: "Isamar Chavez.",
          position: "Comité de Finanzas",
          photo: "/encargados/isamar.png",
          instagram: "@isamarchvez",
        },
      ],
    },
  ],
}

function GroupCard({ group, index }: { group: (typeof whatsappGroups)[0]; index: number }) {
  return (
    <Card
      className="hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border-slate-200 group animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardHeader className="pb-3">
        <div className="mb-4 overflow-hidden rounded-lg">
          <img
            src={group.image || "/placeholder.svg"}
            alt={`Banner de ${group.name}`}
            className="w-full h-32 sm:h-24 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="text-lg font-semibold text-slate-800 group-hover:text-blue-700 transition-colors duration-300">
            {group.name}
          </CardTitle>
        </div>
        <CardDescription className="text-slate-600">{group.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          className="w-full bg-green-600 hover:bg-green-700 text-white transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
          onClick={() => window.open(group.whatsappLink, "_blank")}
        >
          <MessageCircle className="w-4 h-4 mr-2 animate-pulse" />
          Unirse al Grupo
        </Button>
      </CardContent>
    </Card>
  )
}

function AnnouncementCard({ announcement, index }: { announcement: (typeof announcements)[0]; index: number }) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "evento":
        return "bg-purple-100 text-purple-700"
      case "académico":
        return "bg-blue-100 text-blue-700"
      case "competencia":
        return "bg-orange-100 text-orange-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <Card
      className="border-l-4 border-l-blue-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-slide-in-left"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-slate-800">{announcement.title}</CardTitle>
          <Badge
            className={`${getTypeColor(announcement.type)} animate-bounce`}
            style={{ animationDelay: `${index * 200 + 1000}ms` }}
          >
            {announcement.type}
          </Badge>
        </div>
        <p className="text-sm text-slate-500">{announcement.date}</p>
      </CardHeader>
      <CardContent>
        <p className="text-slate-600">{announcement.content}</p>
      </CardContent>
    </Card>
  )
}

function OrganizationalCard({ person }: { person: any }) {
  return (
    <div className="bg-[#0B1120] rounded-2xl p-4 sm:p-6 text-white w-full sm:min-w-[280px] sm:max-w-[320px] mx-auto transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
      {/* Name at top */}
      <h3 className="text-base sm:text-lg font-bold text-left mb-3 sm:mb-4 font-sans">{person.name}</h3>

      {/* Photo placeholder in center */}
      <div className="flex justify-center mb-3 sm:mb-4">
        <div className="w-48 sm:w-60 aspect-[3/4] flex items-center justify-center overflow-hidden rounded-lg">
          <img
            src={person.photo || "/placeholder.svg"}
            alt={`Foto de ${person.name}`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Position below photo */}
      <p className="text-white font-bold text-left mb-3 sm:mb-4 text-sm sm:text-base">{person.position}</p>

      {/* Instagram button at bottom */}
      <button
        className="w-full bg-white text-[#0B1120] rounded-lg py-2 px-4 flex items-center justify-center hover:bg-gray-100 transition-colors duration-300"
        onClick={() => window.open(`https://instagram.com/${person.instagram.replace("@", "")}`, "_blank")}
        title={`Abrir Instagram de ${person.name}`}
      >
        <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </div>
  )
}

function OrganizationalChart() {
  const [expandedCommittees, setExpandedCommittees] = useState<string[]>([])

  const toggleCommittee = (committeeName: string) => {
    setExpandedCommittees((prev) =>
      prev.includes(committeeName) ? prev.filter((name) => name !== committeeName) : [...prev, committeeName],
    )
  }

  return (
    <div className="space-y-8">
      {/* Coordinación General */}
      <div className="text-center">
        <h4 className="text-xl font-semibold text-slate-800 mb-6">Coordinación General</h4>
        <p className="text-slate-600 mb-6 text-sm">Supervisión y toma de decisiones</p>
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 sm:gap-6">
          {organizationalChart.coordinacionGeneral.map((person, index) => (
            <OrganizationalCard key={index} person={person} />
          ))}
        </div>
      </div>

      {/* Committees */}
      <div className="space-y-6">
        <h4 className="text-xl font-semibold text-slate-800 text-center mb-6">Comités</h4>
        {organizationalChart.committees.map((committee, index) => (
          <div key={committee.name} className="border border-slate-200 rounded-lg overflow-hidden">
            {/* Committee Header */}
            <button
              className="w-full p-4 bg-slate-100 hover:bg-slate-200 transition-colors duration-300 flex items-center justify-between"
              onClick={() => toggleCommittee(committee.name)}
            >
              <div className="text-left">
                <span className="font-semibold text-slate-800 block">{committee.name}</span>
                <span className="text-sm text-slate-600">{committee.description}</span>
              </div>
              {expandedCommittees.includes(committee.name) ? (
                <ChevronDown className="w-5 h-5 text-slate-600" />
              ) : (
                <ChevronRight className="w-5 h-5 text-slate-600" />
              )}
            </button>

            {/* Committee Content */}
            {expandedCommittees.includes(committee.name) && (
              <div className="p-4 sm:p-6 bg-white animate-fade-in-up">
                <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 sm:gap-6">
                  {committee.members.map((member, memberIndex) => (
                    <OrganizationalCard key={memberIndex} person={member} />
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function UnitecLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [iframeError, setIframeError] = useState(false)
  const [iframeLoading, setIframeLoading] = useState(true)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2025-09-17T23:59:59").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const sections = ["encuesta", "avisos", "organigrama", "grupos"]

  const scrollToNextSection = () => {
    const currentScrollY = window.scrollY
    const windowHeight = window.innerHeight

    // Determine current section based on scroll position
    let currentSectionIndex = 0

    if (currentScrollY < windowHeight * 0.8) {
      currentSectionIndex = 0 // encuesta
    } else {
      const avisosEl = document.getElementById("avisos")
      const organigramaEl = document.getElementById("organigrama")
      const gruposEl = document.getElementById("grupos")

      if (avisosEl && currentScrollY < avisosEl.offsetTop + avisosEl.offsetHeight * 0.5) {
        currentSectionIndex = 1 // avisos
      } else if (organigramaEl && currentScrollY < organigramaEl.offsetTop + organigramaEl.offsetHeight * 0.5) {
        currentSectionIndex = 2 // organigrama
      } else {
        currentSectionIndex = 3 // grupos
      }
    }

    // Navigate to next section
    const nextSectionIndex = (currentSectionIndex + 1) % sections.length
    const nextSection = sections[nextSectionIndex]

    document.getElementById(nextSection)?.scrollIntoView({ behavior: "smooth" })
  }

  const handleIframeLoad = () => {
    setIframeLoading(false)
    try {
      // Try to access iframe content to detect if it loaded properly
      const iframe = document.querySelector('iframe[title="Encuesta para el UNITEC"]') as HTMLIFrameElement
      if (iframe) {
        // Set a timeout to check if iframe content loaded
        setTimeout(() => {
          try {
            // If we can't access the iframe or it redirected to login, show fallback
            if (
              iframe.contentWindow?.location.href.includes("login.microsoftonline.com") ||
              iframe.contentWindow?.location.href.includes("login.live.com")
            ) {
              setIframeError(true)
            }
          } catch (e) {
            // Cross-origin error means iframe loaded external content (likely login page)
            if (e instanceof DOMException && e.name === "SecurityError") {
              setIframeError(true)
            }
          }
        }, 3000)
      }
    } catch (error) {
      console.log("[v0] Iframe access error:", error)
      setIframeError(true)
    }
  }

  const handleIframeError = () => {
    console.log("[v0] Iframe failed to load")
    setIframeLoading(false)
    setIframeError(true)
  }

  const openFormInNewTab = () => {
    window.open("https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=cx1fwilK2kKhcqQ8YxCP1vnTKfvXAoRIukUwUeO3x0FUQ05JQkZVNjhSNVFIOVkxUENKSFpRSzg3VS4u", "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-slate-900 text-white shadow-lg animate-slide-down w-full">
        <div className="w-full px-2 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div>
                <h1 className="text-lg sm:text-2xl font-bold animate-fade-in">Unitec de Sistemas y Ciberseguridad</h1>
                <p className="text-slate-300 text-xs sm:text-sm animate-fade-in" style={{ animationDelay: "200ms" }}>
                  Actividades Académicas, Deportivas y Culturales.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-6">
                <div
                  className="flex items-center space-x-2 text-slate-300 animate-fade-in"
                  style={{ animationDelay: "600ms" }}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>13 Grupos Activos</span>
                </div>
              </div>

              {/* Hamburger Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-slate-800 p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="mt-4 py-4 border-t border-slate-700 animate-fade-in-up max-w-7xl mx-auto">
              <nav className="flex flex-col space-y-3">
                <button
                  className="flex items-center space-x-2 text-slate-300 hover:text-white hover:bg-slate-800 px-3 py-2 rounded-lg transition-all duration-300 text-left"
                  onClick={() => {
                    window.location.href = "/camisas"
                    setIsMenuOpen(false)
                  }}
                >
                  <Users className="w-4 h-4" />
                  <span>Ver Camisas 3D</span>
                </button>
                <button
                  className="flex items-center space-x-2 text-slate-300 hover:text-white hover:bg-slate-800 px-3 py-2 rounded-lg transition-all duration-300 text-left"
                  onClick={() => {
                    document.getElementById("avisos")?.scrollIntoView({ behavior: "smooth" })
                    setIsMenuOpen(false)
                  }}
                >
                  <Bell className="w-4 h-4" />
                  <span>Ver Avisos</span>
                </button>
                <button
                  className="flex items-center space-x-2 text-slate-300 hover:text-white hover:bg-slate-800 px-3 py-2 rounded-lg transition-all duration-300 text-left"
                  onClick={() => {
                    document.getElementById("grupos")?.scrollIntoView({ behavior: "smooth" })
                    setIsMenuOpen(false)
                  }}
                >
                  <Users className="w-4 h-4" />
                  <span>Ver Grupos</span>
                </button>
                <button
                  className="flex items-center space-x-2 text-slate-300 hover:text-white hover:bg-slate-800 px-3 py-2 rounded-lg transition-all duration-300 text-left"
                  onClick={() => {
                    document.getElementById("organigrama")?.scrollIntoView({ behavior: "smooth" })
                    setIsMenuOpen(false)
                  }}
                >
                  <Users className="w-4 h-4" />
                  <span>Ver Organigrama</span>
                </button>
                <div className="md:hidden pt-2 border-t border-slate-700">
                  <div className="flex items-center space-x-2 text-slate-400 px-3 py-1 text-sm">
                    <MessageCircle className="w-4 h-4" />
                    <span>13 Grupos Activos</span>
                  </div>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <section
        id="encuesta"
        className="min-h-screen flex items-center py-8 sm:py-12 px-2 sm:px-4 lg:px-6 bg-gradient-to-br from-purple-50 to-blue-50"
      >
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4 sm:mb-6 animate-fade-in-up">
              <span className="text-purple-600 animate-pulse">Encuesta</span> para el UNITEC
            </h2>
            <p
              className="text-base sm:text-lg md:text-xl text-slate-600 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up px-4"
              style={{ animationDelay: "300ms" }}
            >
              Completa la encuesta para registrar tus datos. Nos ayudaría mucho si la completas :D
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-8">
            <Card className="border-l-4 border-l-red-500 bg-red-50 border-red-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold text-red-800 flex items-center">
                  <Bell className="w-5 h-5 mr-2" />
                  Tiempo Restante para Completar la Encuesta
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-4 text-center mb-4">
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="text-2xl font-bold text-red-600">{timeLeft.days}</div>
                    <div className="text-sm text-red-500">Días</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="text-2xl font-bold text-red-600">{timeLeft.hours}</div>
                    <div className="text-sm text-red-500">Horas</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="text-2xl font-bold text-red-600">{timeLeft.minutes}</div>
                    <div className="text-sm text-red-500">Minutos</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="text-2xl font-bold text-red-600">{timeLeft.seconds}</div>
                    <div className="text-sm text-red-500">Segundos</div>
                  </div>
                </div>
                <p className="text-red-700 text-center font-semibold">
                  La encuesta finaliza el <strong>Miércoles 17 de Septiembre a las 23:59</strong>
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Survey Requirements */}
          <div className="max-w-4xl mx-auto mb-8">
            <Card className="border-l-4 border-l-orange-500 bg-orange-50 border-orange-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold text-orange-800 flex items-center">
                  <Bell className="w-5 h-5 mr-2" />
                  Consideraciones Importantes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-orange-700">
                  <p className="flex items-start">
                    <span className="font-semibold mr-2">•</span>
                    Para poder contestar debe estar la sesión iniciada en el correo institucional por temas de seguridad
                  </p>
                  <p className="flex items-start">
                    <span className="font-semibold mr-2">•</span>
                    La encuesta finaliza el Miércoles 17 de Septiembre a las 23:59
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Embedded Survey */}
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-white rounded-lg">
                  {!iframeError ? (
                    <>
                      {iframeLoading && (
                        <div className="flex items-center justify-center h-96 bg-gray-50 rounded-lg">
                          <div className="text-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
                            <p className="text-gray-600">Cargando encuesta...</p>
                          </div>
                        </div>
                      )}
                      <iframe
                        src="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=cx1fwilK2kKhcqQ8YxCP1vnTKfvXAoRIukUwUeO3x0FUQ05JQkZVNjhSNVFIOVkxUENKSFpRSzg3VS4u"
                        width="100%"
                        height="800"
                        frameBorder="0"
                        marginHeight={0}
                        marginWidth={0}
                        className={`rounded-lg ${iframeLoading ? "hidden" : "block"}`}
                        title="Encuesta para el UNITEC"
                        onLoad={handleIframeLoad}
                        onError={handleIframeError}
                      >
                        Cargando…
                      </iframe>
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-96 bg-gray-50 rounded-lg p-8 text-center">
                      <div className="mb-6">
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Bell className="w-8 h-8 text-orange-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Autenticación Requerida</h3>
                        <p className="text-gray-600 mb-4 max-w-md">
                          Para acceder a la encuesta, necesitas iniciar sesión con tu cuenta institucional. Por
                          seguridad, esto debe hacerse en una nueva pestaña.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <Button
                          onClick={openFormInNewTab}
                          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                        >
                          <ExternalLink className="w-5 h-5 mr-2" />
                          Abrir Encuesta en Nueva Pestaña
                        </Button>

                        <p className="text-sm text-gray-500">
                          Asegúrate de estar conectado con tu correo institucional
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Alternative QR Code Section */}
          <div className="max-w-2xl mx-auto mt-8 text-center">
            <Card className="bg-slate-100 border-slate-200">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-800">¿Prefieres usar tu móvil?</CardTitle>
                <CardDescription>
                  Escanea el código QR para acceder a la encuesta desde tu dispositivo móvil
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-4">
                <div className="w-32 h-32 bg-white border-2 border-slate-300 rounded-lg flex items-center justify-center">
                  <img src="/qr-encuesta.png" alt="Código QR para la encuesta" className="w-28 h-28" />
                </div>
                <Button
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                  onClick={() =>
                    window.open("https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=cx1fwilK2kKhcqQ8YxCP1vnTKfvXAoRIukUwUeO3x0FUQ05JQkZVNjhSNVFIOVkxUENKSFpRSzg3VS4u", "_blank")
                  }
                >
                  Abrir Encuesta en Nueva Pestaña
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up px-4 mt-8"
            style={{ animationDelay: "600ms" }}
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
              onClick={() => document.getElementById("grupos")?.scrollIntoView({ behavior: "smooth" })}
            >
              Ver Grupos de WhatsApp
              <ExternalLink className="w-5 h-5 ml-2 animate-bounce" />
            </Button>
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-3 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
              onClick={() => (window.location.href = "/camisas")}
            >
              Ver Camisas 3D
              <ExternalLink className="w-5 h-5 ml-2 animate-bounce" />
            </Button>
          </div>
        </div>
      </section>

      <section id="avisos" className="min-h-screen flex items-center py-8 sm:py-12 px-2 sm:px-4 lg:px-6 bg-slate-50">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-3 sm:mb-4 animate-fade-in-up">
              Avisos y Noticias
            </h3>
            <p
              className="text-sm sm:text-base md:text-lg text-slate-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up px-4"
              style={{ animationDelay: "200ms" }}
            >
              Mantente al día con los eventos, competencias y oportunidades de nuestra UNITEC.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 px-2 sm:px-0">
            {announcements.map((announcement, index) => (
              <AnnouncementCard key={announcement.id} announcement={announcement} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="organigrama"
        className="min-h-screen flex items-center py-8 sm:py-12 px-2 sm:px-4 lg:px-6 bg-gradient-to-br from-blue-50 to-slate-50"
      >
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-3 sm:mb-4 animate-fade-in-up">
              Organigrama de la Comunidad
            </h3>
            <p
              className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl mx-auto animate-fade-in-up px-4"
              style={{ animationDelay: "200ms" }}
            >
              Conoce a los líderes y coordinadores que hacen posible este UNITEC.
            </p>
          </div>

          <OrganizationalChart />
        </div>
      </section>

      <section id="grupos" className="min-h-screen flex items-center py-8 sm:py-12 px-2 sm:px-4 lg:px-6 bg-white">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-3 sm:mb-4 animate-fade-in-up">
              Nuestros Grupos de WhatsApp
            </h3>
            <p
              className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl mx-auto animate-fade-in-up px-4"
              style={{ animationDelay: "200ms" }}
            >
              Únete a cualquiera de nuestros 13 grupos especializados. Desde actividades deportivas y culturales hasta
              desarrollo artístico.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 px-2 sm:px-0">
            {whatsappGroups.map((group, index) => (
              <GroupCard key={group.id} group={group} index={index} />
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-6 sm:py-8 lg:py-12 px-2 sm:px-4 lg:px-6 animate-fade-in w-full">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <h4 className="text-lg font-semibold">Unitec Sistemas y Ciberseguridad</h4>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Pagina oficial deL UNITEC de Sistemas y Ciberseguridad.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 text-slate-300 text-sm">
                <p>unitec.sis.cib2025@gmail.com</p>
                <p>WhatsApp: +52 353 137 3007</p>
                <p>Instituto Tecnológico Nacional de México Campus Jiquilpan</p>
              </div>
            </div>

            <div className="sm:col-span-2 md:col-span-1">
              <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-300 hover:text-white hover:bg-slate-800 transform hover:scale-110 transition-all duration-300 justify-start sm:justify-center"
                >
                  Facebook
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-300 hover:text-white hover:bg-slate-800 transform hover:scale-110 transition-all duration-300 justify-start sm:justify-center"
                >
                  Instagram
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-4 sm:mt-6 lg:mt-8 pt-4 sm:pt-6 lg:pt-8 text-center">
            <p className="text-slate-400 text-xs sm:text-sm">© 2024 Comunidad Unitec. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      <Button
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 shadow-lg z-50 animate-bounce hover:animate-pulse transform hover:scale-110 transition-all duration-300"
        onClick={scrollToNextSection}
        title="Navegar a siguiente sección"
      >
        <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6" />
      </Button>
    </div>
  )
}
