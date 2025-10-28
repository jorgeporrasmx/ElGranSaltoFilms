'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { testimonials } from '@/lib/data/testimonials'
import Card from '@/components/ui/Card'

export default function Testimonials() {
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
            Lo Que Dicen <span className="text-accent-primary">Nuestros Clientes</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestro mayor logro
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-8 h-full relative">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="h-10 w-10 text-accent-primary opacity-50" />
                </div>

                {/* Quote Text */}
                <p className="text-text-primary mb-6 leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-auto">
                  <p className="font-heading font-bold text-text-primary">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-text-secondary">
                    {testimonial.role}
                  </p>
                  <p className="text-sm text-accent-primary">
                    {testimonial.organization}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
