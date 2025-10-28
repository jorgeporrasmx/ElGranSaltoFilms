import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getProjectBySlug, projects } from '@/lib/data/projects'
import VideoPlayer from '@/components/ui/VideoPlayer'
import Button from '@/components/ui/Button'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return {
      title: 'Proyecto no encontrado',
    }
  }

  return {
    title: project.title,
    description: project.description,
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-background-secondary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <VideoPlayer
                videoUrl={project.videoUrl}
                title={project.title}
                aspectRatio="16/9"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-text-secondary mb-6">
              <span>{project.sport}</span>
              <span>•</span>
              <span>{project.year}</span>
              <span>•</span>
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.client}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert max-w-none">
              <h2>Sobre el Proyecto</h2>
              <p className="text-text-secondary leading-relaxed text-lg">
                {project.description}
              </p>
            </div>

            <div className="mt-12">
              <Button asChild>
                <Link href="/contacto">Iniciar un Proyecto Similar</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
