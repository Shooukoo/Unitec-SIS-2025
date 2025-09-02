"use client"

import { Shield, Users, MessageCircle, Bell, ExternalLink, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const whatsappGroups = [
  {
    id: 1,
    name: "Dibujo",
    members: 32,
    description: "Técnicas artísticas y creatividad visual",
    image: "/drawing-art-palette-brush.png",
    whatsappLink: "https://chat.whatsapp.com/JdAimyGUvccIRQeotMxTIy",
  },
  {
    id: 2,
    name: "Oratoria",
    members: 28,
    description: "Desarrollo de habilidades de comunicación",
    image: "/microphone-public-speaking-podium.png",
    whatsappLink: "https://chat.whatsapp.com/ElD20yXuTBcBkMNoJW9lgf",
  },
  {
    id: 3,
    name: "Conocimiento General",
    members: 45,
    description: "Cultura general y debates académicos",
    image: "/brain-knowledge-books-lightbulb.png",
    whatsappLink: "https://chat.whatsapp.com/Jnv2JOIKVklLBu5SpX4DJy",
  },
  {
    id: 4,
    name: "Ajedrez",
    members: 24,
    description: "Estrategia y torneos de ajedrez",
    image: "/chess-king-piece-board-strategy.png",
    whatsappLink: "https://chat.whatsapp.com/JpVTH6Ag0i9G0O42uCDQxi",
  },
  {
    id: 5,
    name: "Vestido Reciclado",
    members: 38,
    description: "Moda sostenible y diseño ecológico",
    image: "/recycled-fashion-sustainable-clothing-eco.png",
    whatsappLink: "https://chat.whatsapp.com/E68Bk6EUMiLCZbNB5NIhpW",
  },
  {
    id: 6,
    name: "Sketch",
    members: 29,
    description: "Dibujo rápido y técnicas de bocetaje",
    image: "/sketch-pencil-drawing-notebook-artistic.png",
    whatsappLink: "https://chat.whatsapp.com/ENgwbmSbaF6IwCUSnze4PF",
  },
  {
    id: 7,
    name: "Exatec",
    members: 67,
    description: "Red de egresados y networking profesional",
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
    content: "Sesión informativa dirigida a toda la comunidad de Sistemas y Ciberseguridad, donde se compartirán anuncios importantes, actualizaciones académicas y detalles sobre próximos proyectos y actividades.",
    type: "evento",
  },
  {
    id: 2,
    title: "Encuesta para la toma de tallas para Camisas",
    date: "05 Sep 2025",
    content: "Encuesta para el registro de tallas de camisas, con el fin de garantizar la correcta entrega de uniformes o prendas personalizadas para la comunidad.",
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

function GroupCard({ group, index }: { group: (typeof whatsappGroups)[0]; index: number }) {
  return (
    <Card
      className="hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border-slate-200 group animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-4">
          <CardTitle className="text-lg font-semibold text-slate-800 group-hover:text-blue-700 transition-colors duration-300">
            {group.name}
          </CardTitle>
        </div>
        <div className="flex justify-center mb-4">
          <div className="p-4 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors duration-300 shadow-sm">
            <img
              src={group.image || "/placeholder.svg"}
              alt={`Icono de ${group.name}`}
              className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
        <CardDescription className="text-slate-600 text-center">{group.description}</CardDescription>
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

export default function UnitecLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-slate-900 text-white shadow-lg animate-slide-down">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div>
                <h1 className="text-2xl font-bold animate-fade-in">Unitec de Sistemas y Ciberseguridad</h1>
                <p className="text-slate-300 text-sm animate-fade-in" style={{ animationDelay: "200ms" }}>
                  Comunidad Estudiantil - Actividades Académicas, Deportivas y Culturales
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div
                className="flex items-center space-x-2 text-slate-300 animate-fade-in"
                style={{ animationDelay: "600ms" }}
              >
                <MessageCircle className="w-5 h-5" />
                <span>13 Grupos Activos</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 animate-fade-in-up">
            Bienvenido a la <span className="text-blue-600 animate-pulse">Comunidad Unitec</span>
          </h2>
          <p
            className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "300ms" }}
          >
            Únete a la comunidad de Sistemas y Ciberseguridad de UNITEC. Participa en nuestras actividades culturales, académicas y deportivas. Conéctate a nuestros 13 grupos de WhatsApp y encuentra tu espacio ideal.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "600ms" }}
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => document.getElementById("grupos")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explorar Grupos
              <ExternalLink className="w-5 h-5 ml-2 animate-bounce" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 bg-transparent transform hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById("avisos")?.scrollIntoView({ behavior: "smooth" })}
            >
              Ver Avisos
              <Bell className="w-5 h-5 ml-2 animate-swing" />
            </Button>
          </div>
        </div>
      </section>

      {/* Groups Section */}
      <section id="grupos" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-4 animate-fade-in-up">Nuestros Grupos de WhatsApp</h3>
            <p
              className="text-lg text-slate-600 max-w-2xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              Únete a cualquiera de nuestros 13 grupos especializados. Desde actividades deportivas y culturales hasta
              desarrollo artístico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatsappGroups.map((group, index) => (
              <GroupCard key={group.id} group={group} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section id="avisos" className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-4 animate-fade-in-up">Avisos y Noticias</h3>
            <p
              className="text-lg text-slate-600 max-w-2xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              Mantente al día con los eventos y competencias en nuestra comunidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {announcements.map((announcement, index) => (
              <AnnouncementCard key={announcement.id} announcement={announcement} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 animate-fade-in">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <h4 className="text-lg font-semibold">Unitec Sistemas y Ciberseguridad</h4>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                UNITEC 2025: Un evento que reúne talento, creatividad y deporte.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 text-slate-300 text-sm">
                <p>unitec_sis_cib2025@gmail.com</p>
                <p>WhatsApp: +52 353 137 3007</p>
                <p>TECNM Campus Jiquilpan</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-300 hover:text-white hover:bg-slate-800 transform hover:scale-110 transition-all duration-300"
                >
                  Instagram
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-slate-400 text-sm">© 2025 Unitec Sistemas y Ciberseguridad. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <Button
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white rounded-full w-14 h-14 shadow-lg z-50 animate-bounce hover:animate-pulse transform hover:scale-110 transition-all duration-300"
        onClick={() => window.open("https://wa.me/523531373007", "_blank")}
      >
        <Phone className="w-6 h-6" />
      </Button>
    </div>
  )
}
