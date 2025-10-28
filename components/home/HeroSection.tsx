'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image/Video */}
      <div className="absolute inset-0 z-0">
        {/* Placeholder for hero background - in production, use video or high-quality image */}
        <div className="absolute inset-0 bg-gradient-to-br from-background-primary via-background-secondary to-background-primary" />
        {/* Overlay */}
        <div className="absolute inset-0 gradient-overlay" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6">
            EL GRAN <span className="text-accent-primary">SALTO</span>
          </h1>

          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-12">
            Documentales que Cuentan Historias Deportivas que Trascienden
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/portafolio">Ver Portafolio</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contacto">Iniciar Proyecto</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown className="h-8 w-8 text-text-secondary" />
      </motion.div>
    </section>
  )
}
