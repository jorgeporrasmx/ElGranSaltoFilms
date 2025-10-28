import type { Metadata } from 'next'
import Link from 'next/link'
import { projects } from '@/lib/data/projects'
import Card from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Portafolio',
  description:
    'Explora nuestro portafolio de documentales deportivos y proyectos audiovisuales completados.',
}

export default function PortfolioPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-background-secondary">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Nuestro <span className="text-accent-primary">Portafolio</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Explora los proyectos que hemos creado con pasión y dedicación
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link key={project.id} href={`/portafolio/${project.slug}`}>
                <Card hover className="group overflow-hidden">
                  <div className="relative aspect-video overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20" />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-300" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                      <span className="text-accent-primary text-sm font-medium mb-2">
                        {project.sport} • {project.year}
                      </span>
                      <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-accent-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-text-secondary text-sm line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
