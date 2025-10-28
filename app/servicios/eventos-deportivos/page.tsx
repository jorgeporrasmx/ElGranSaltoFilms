import type { Metadata } from 'next'
import Link from 'next/link'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Cobertura de Eventos Deportivos',
  description:
    'Filmación profesional de eventos deportivos con calidad broadcast. Capturamos cada momento importante con nuestro equipo multi-cámara.',
  keywords: [
    'cobertura eventos deportivos',
    'filmación eventos deportivos profesional',
    'video producción eventos México',
  ],
}

export default function EventosDeportivosPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-background-secondary">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Cobertura de{' '}
            <span className="text-accent-primary">Eventos Deportivos</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Capturamos la emoción y la acción con calidad profesional
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              Nuestro equipo especializado filma eventos deportivos con calidad
              broadcast, utilizando tecnología de punta y un enfoque narrativo
              que convierte cada evento en una experiencia memorable.
            </p>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">
              Lo que incluye
            </h2>
            <ul className="space-y-2 text-text-secondary">
              <li>Setup multi-cámara 4K</li>
              <li>Slow motion y acción de alta velocidad</li>
              <li>Audio profesional ambiente y comentarios</li>
              <li>Highlights y recaps editados</li>
              <li>Entrega rápida en 24-48 horas</li>
              <li>Transmisión en vivo (opcional)</li>
            </ul>

            <div className="mt-12">
              <Button size="lg" asChild>
                <Link href="/contacto">Solicitar Cotización</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
