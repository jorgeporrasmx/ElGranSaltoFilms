import type { Metadata } from 'next'
import Link from 'next/link'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Video Marketing Deportivo',
  description:
    'Contenido visual impactante para redes sociales, campañas de marca y promoción de atletas o equipos deportivos.',
  keywords: [
    'video marketing deportivo',
    'contenido deportivo redes sociales',
    'producción video comercial deportes',
  ],
}

export default function VideoMarketingDeportivoPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-background-secondary">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Video Marketing{' '}
            <span className="text-accent-primary">Deportivo</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Contenido que impulsa tu marca deportiva
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              Creamos contenido visual impactante optimizado para plataformas
              digitales. Desde reels virales hasta campañas completas de marca,
              ayudamos a atletas, equipos y marcas deportivas a conectar con su
              audiencia.
            </p>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">
              Nuestros servicios incluyen
            </h2>
            <ul className="space-y-2 text-text-secondary">
              <li>Videos promocionales cortos y dinámicos</li>
              <li>Contenido optimizado para redes sociales</li>
              <li>Reels y TikToks de alto impacto</li>
              <li>Campañas de marca deportiva</li>
              <li>Motion graphics y animación</li>
              <li>Estrategia de contenido personalizada</li>
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
