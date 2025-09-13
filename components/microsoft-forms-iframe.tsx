"use client"

import { useState, useEffect, useRef } from "react"
import { ExternalLink, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MicrosoftFormsIframeProps {
  src: string
  title?: string
  className?: string
}

export default function MicrosoftFormsIframe({ src, title = "Formulario", className = "" }: MicrosoftFormsIframeProps) {
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    const handleLoad = () => {
      setIsLoading(false)
      try {
        // Intentar acceder al contenido del iframe para detectar errores
        const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document
        if (iframeDoc) {
          // Si podemos acceder al documento, verificar si hay errores de Microsoft
          const bodyText = iframeDoc.body?.textContent || ""
          if (
            bodyText.includes("login.microsoftonline.com") ||
            bodyText.includes("refused to connect") ||
            bodyText.includes("X-Frame-Options")
          ) {
            setHasError(true)
          }
        }
      } catch (error) {
        // Si no podemos acceder al contenido del iframe, probablemente hay un error de CORS/X-Frame-Options
        console.log("[v0] Iframe access blocked, likely authentication required")
        setHasError(true)
      }
    }

    const handleError = () => {
      console.log("[v0] Iframe failed to load")
      setIsLoading(false)
      setHasError(true)
    }

    // Timeout para detectar si el iframe no carga en un tiempo razonable
    const timeout = setTimeout(() => {
      if (isLoading) {
        console.log("[v0] Iframe loading timeout, assuming authentication required")
        setIsLoading(false)
        setHasError(true)
      }
    }, 10000) // 10 segundos

    iframe.addEventListener("load", handleLoad)
    iframe.addEventListener("error", handleError)

    return () => {
      iframe.removeEventListener("load", handleLoad)
      iframe.removeEventListener("error", handleError)
      clearTimeout(timeout)
    }
  }, [src, isLoading])

  const openInNewTab = () => {
    window.open(src, "_blank", "noopener,noreferrer")
  }

  if (isLoading) {
    return (
      <div className={`flex items-center justify-center min-h-[600px] bg-gray-50 rounded-lg ${className}`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando formulario...</p>
        </div>
      </div>
    )
  }

  if (hasError) {
    return (
      <div className={`flex items-center justify-center min-h-[600px] bg-gray-50 rounded-lg p-8 ${className}`}>
        <div className="text-center max-w-md">
          <AlertCircle className="h-16 w-16 text-amber-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Autenticación Requerida</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Para acceder al formulario, necesitas iniciar sesión con tu cuenta institucional. Por seguridad, Microsoft
            no permite mostrar su página de login dentro de esta página.
          </p>
          <Button
            onClick={openInNewTab}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 inline-flex items-center gap-2"
          >
            <ExternalLink className="h-4 w-4" />
            Abrir Formulario en Nueva Pestaña
          </Button>
          <p className="text-sm text-gray-500 mt-4">
            El formulario se abrirá en una nueva pestaña donde podrás iniciar sesión normalmente.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      <iframe
        ref={iframeRef}
        src={src}
        title={title}
        className="w-full h-[600px] border-0 rounded-lg shadow-sm"
        allow="camera; microphone; geolocation"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
      />
    </div>
  )
}
