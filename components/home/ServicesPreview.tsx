'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Film, Camera, Sparkles } from 'lucide-react'
import { services } from '@/lib/data/services'
import Card from '@/components/ui/Card'

const iconMap = {
  Film,
  Camera,
  Sparkles,
}

export default function ServicesPreview() {
  return (
    <section className="py-20 md:py-32 bg-background-secondary">
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
            Nuestros <span className="text-accent-primary">Servicios</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Soluciones integrales de producción audiovisual deportiva
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/servicios/${service.slug}`}>
                  <Card hover className="p-8 h-full group">
                    {/* Icon */}
                    <div className="mb-6 inline-flex p-4 rounded-lg bg-accent-primary/10 text-accent-primary group-hover:bg-accent-primary group-hover:text-white transition-all duration-300">
                      <Icon className="h-8 w-8" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-heading font-bold mb-4 group-hover:text-accent-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-text-secondary mb-6 leading-relaxed">
                      {service.shortDescription}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-text-secondary"
                        >
                          <span className="text-accent-primary mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Link */}
                    <span className="text-accent-primary font-medium group-hover:underline">
                      Conocer Más →
                    </span>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
