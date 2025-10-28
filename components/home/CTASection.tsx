'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* Placeholder for impactful sports image */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20" />
        <div className="absolute inset-0 bg-background-primary/80" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            ¿Listo para Contar tu{' '}
            <span className="text-accent-primary">Historia?</span>
          </h2>
          <p className="text-xl text-text-secondary mb-10">
            Trabajemos juntos para crear un documental deportivo que inspire y
            trascienda
          </p>
          <Button size="lg" asChild>
            <Link href="/contacto">Iniciar Proyecto</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
