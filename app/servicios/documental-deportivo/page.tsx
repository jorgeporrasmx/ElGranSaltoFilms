import type { Metadata } from 'next'
import Link from 'next/link'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Producción Documental Deportiva',
  description:
    'Creamos documentales deportivos profesionales que cuentan historias profundas y emotivas sobre atletas, equipos y el espíritu del deporte.',
  keywords: [
    'producción documental deportivo',
    'crear documental deportivo profesional',
    'documentales deportivos México',
  ],
}

export default function DocumentalDeportivoPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-background-secondary">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Producción{' '}
            <span className="text-accent-primary">Documental Deportiva</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Historias que trascienden el juego y conectan con el corazón
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              Creamos documentales deportivos que van más allá de los resultados
              y las estadísticas. Capturamos las emociones, los sacrificios y
              las victorias personales que definen a los verdaderos campeones.
            </p>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">
              ¿Para quién es este servicio?
            </h2>
            <ul className="space-y-2 text-text-secondary">
              <li>Equipos deportivos profesionales</li>
              <li>Federaciones y asociaciones deportivas</li>
              <li>Atletas de élite que quieren contar su historia</li>
              <li>Marcas deportivas buscando contenido de alto impacto</li>
              <li>Organizadores de eventos deportivos</li>
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
