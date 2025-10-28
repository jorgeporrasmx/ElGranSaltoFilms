'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { getFeaturedProjects } from '@/lib/data/projects'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

export default function FeaturedProjects() {
  const projects = getFeaturedProjects()

  return (
    <section className="py-20 md:py-32">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Proyectos <span className="text-accent-primary">Destacados</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Descubre algunos de nuestros trabajos más recientes y significativos
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/portafolio/${project.slug}`}>
                <Card hover className="group overflow-hidden">
                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20" />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-300" />

                    {/* Overlay Content */}
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
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button size="lg" variant="outline" asChild>
            <Link href="/portafolio">Ver Portfolio Completo</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
