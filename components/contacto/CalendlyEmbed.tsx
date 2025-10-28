'use client'

import { useEffect } from 'react'

interface CalendlyEmbedProps {
  url?: string
  backgroundColor?: string
  primaryColor?: string
  textColor?: string
  hideEventTypeDetails?: boolean
}

export default function CalendlyEmbed({
  url = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/jorgeporras',
  backgroundColor = process.env.NEXT_PUBLIC_CALENDLY_BACKGROUND || '0a0a0a',
  primaryColor = process.env.NEXT_PUBLIC_CALENDLY_PRIMARY || 'ff4d00',
  textColor = 'ffffff',
  hideEventTypeDetails = true,
}: CalendlyEmbedProps) {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  const calendlyUrl = `${url}?${new URLSearchParams({
    background_color: backgroundColor,
    text_color: textColor,
    primary_color: primaryColor,
    hide_event_type_details: hideEventTypeDetails ? '1' : '0',
  }).toString()}`

  return (
    <div className="w-full">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-text-primary mb-2">
          Agenda una Llamada
        </h3>
        <p className="text-text-secondary">
          Selecciona el mejor horario para discutir tu proyecto. Nuestro equipo está listo para escucharte.
        </p>
      </div>

      <div
        className="calendly-inline-widget"
        data-url={calendlyUrl}
        style={{
          minWidth: '320px',
          height: '700px',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      />
    </div>
  )
}
