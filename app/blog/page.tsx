import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Historias, técnicas y tendencias en producción documental deportiva.',
}

export default function BlogPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-background-secondary">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            <span className="text-accent-primary">Blog</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Próximamente: Historias, técnicas y tendencias en producción
            documental deportiva
          </p>
        </div>
      </section>
    </div>
  )
}
