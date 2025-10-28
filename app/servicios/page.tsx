import type { Metadata } from 'next'
import Link from 'next/link'
import { Film, Camera, Sparkles } from 'lucide-react'
import { services } from '@/lib/data/services'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Servicios',
  description:
    'Ofrecemos servicios integrales de producción audiovisual deportiva: documentales, cobertura de eventos y video marketing.',
}

const iconMap = {
  Film,
  Camera,
  Sparkles,
}

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-background-secondary">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Nuestros <span className="text-accent-primary">Servicios</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Soluciones integrales de producción audiovisual deportiva adaptadas
            a tus necesidades
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap]

              return (
                <Link key={service.id} href={`/servicios/${service.slug}`}>
                  <Card hover className="p-8 h-full group">
                    <div className="mb-6 inline-flex p-4 rounded-lg bg-accent-primary/10 text-accent-primary group-hover:bg-accent-primary group-hover:text-white transition-all duration-300">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold mb-4 group-hover:text-accent-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-text-secondary mb-6 leading-relaxed">
                      {service.shortDescription}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-text-secondary"
                        >
                          <span className="text-accent-primary mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <span className="text-accent-primary font-medium group-hover:underline">
                      Conocer Más →
                    </span>
                  </Card>
                </Link>
              )
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-heading font-bold mb-4">
              ¿No encuentras lo que buscas?
            </h3>
            <p className="text-text-secondary mb-8">
              Cuéntanos sobre tu proyecto y crearemos una solución personalizada
            </p>
            <Button size="lg" asChild>
              <Link href="/contacto">Iniciar Conversación</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
