'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Button from '@/components/ui/Button'
import { motion } from 'framer-motion'

// Validation schema
const mondayFormSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(10, 'Teléfono debe tener al menos 10 dígitos').optional().or(z.literal('')),
  company: z.string().min(2, 'Nombre de empresa requerido').optional().or(z.literal('')),
  projectType: z.enum(['Documental', 'Evento', 'Marketing', 'Otro'], {
    errorMap: () => ({ message: 'Selecciona un tipo de proyecto' }),
  }),
  sport: z.string().min(2, 'Especifica el deporte o actividad'),
  budget: z.enum(['< $50K', '$50K-100K', '$100K-250K', '> $250K', 'Por definir'], {
    errorMap: () => ({ message: 'Selecciona un rango de presupuesto' }),
  }),
  tentativeDate: z.string().optional().or(z.literal('')),
  location: z.enum(['CDMX', 'Querétaro', 'Chihuahua', 'Monterrey', 'Guadalajara', 'Cancún', 'Otra'], {
    errorMap: () => ({ message: 'Selecciona una ubicación' }),
  }),
  message: z.string().min(20, 'El mensaje debe tener al menos 20 caracteres'),
})

type MondayFormData = z.infer<typeof mondayFormSchema>

export default function MondayForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<MondayFormData>({
    resolver: zodResolver(mondayFormSchema),
  })

  const onSubmit = async (data: MondayFormData) => {
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/monday', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Error al enviar el formulario')
      }

      setSubmitStatus({
        type: 'success',
        message: '¡Gracias! Tu solicitud ha sido enviada. Nos pondremos en contacto pronto.',
      })
      reset()
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Error al enviar el formulario. Por favor, intenta de nuevo.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-text-primary mb-2">
          Envía tu Solicitud de Proyecto
        </h3>
        <p className="text-text-secondary">
          Completa este formulario y nuestro equipo se pondrá en contacto contigo para discutir los detalles de tu proyecto.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Nombre */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
            Nombre Completo <span className="text-accent-primary">*</span>
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            className="w-full px-4 py-3 rounded-lg bg-background-primary border border-border text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent-primary transition-colors"
            placeholder="Tu nombre completo"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
              Email <span className="text-accent-primary">*</span>
            </label>
            <input
              {...register('email')}
              type="email"
              id="email"
              className="w-full px-4 py-3 rounded-lg bg-background-primary border border-border text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent-primary transition-colors"
              placeholder="tu@email.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
              Teléfono
            </label>
            <input
              {...register('phone')}
              type="tel"
              id="phone"
              className="w-full px-4 py-3 rounded-lg bg-background-primary border border-border text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent-primary transition-colors"
              placeholder="+52 123 456 7890"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Empresa */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">
            Empresa / Organización
          </label>
          <input
            {...register('company')}
            type="text"
            id="company"
            className="w-full px-4 py-3 rounded-lg bg-background-primary border border-border text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent-primary transition-colors"
            placeholder="Nombre de tu empresa"
          />
          {errors.company && (
            <p className="mt-1 text-sm text-red-500">{errors.company.message}</p>
          )}
        </div>

        {/* Tipo de Proyecto & Deporte */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="projectType" className="block text-sm font-medium text-text-primary mb-2">
              Tipo de Proyecto <span className="text-accent-primary">*</span>
            </label>
            <select
              {...register('projectType')}
              id="projectType"
              className="w-full px-4 py-3 rounded-lg bg-background-primary border border-border text-text-primary focus:outline-none focus:border-accent-primary transition-colors"
            >
              <option value="">Selecciona un tipo</option>
              <option value="Documental">Documental Completo</option>
              <option value="Evento">Cobertura de Evento</option>
              <option value="Marketing">Video Marketing</option>
              <option value="Otro">Otro</option>
            </select>
            {errors.projectType && (
              <p className="mt-1 text-sm text-red-500">{errors.projectType.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="sport" className="block text-sm font-medium text-text-primary mb-2">
              Deporte / Actividad <span className="text-accent-primary">*</span>
            </label>
            <input
              {...register('sport')}
              type="text"
              id="sport"
              className="w-full px-4 py-3 rounded-lg bg-background-primary border border-border text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent-primary transition-colors"
              placeholder="Ej: Fútbol, Boxeo, Ciclismo"
            />
            {errors.sport && (
              <p className="mt-1 text-sm text-red-500">{errors.sport.message}</p>
            )}
          </div>
        </div>

        {/* Presupuesto & Ubicación */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-text-primary mb-2">
              Presupuesto Estimado <span className="text-accent-primary">*</span>
            </label>
            <select
              {...register('budget')}
              id="budget"
              className="w-full px-4 py-3 rounded-lg bg-background-primary border border-border text-text-primary focus:outline-none focus:border-accent-primary transition-colors"
            >
              <option value="">Selecciona un rango</option>
              <option value="< $50K">&lt; $50,000 MXN</option>
              <option value="$50K-100K">$50,000 - $100,000 MXN</option>
              <option value="$100K-250K">$100,000 - $250,000 MXN</option>
              <option value="> $250K">&gt; $250,000 MXN</option>
              <option value="Por definir">Por definir</option>
            </select>
            {errors.budget && (
              <p className="mt-1 text-sm text-red-500">{errors.budget.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-text-primary mb-2">
              Ubicación del Proyecto <span className="text-accent-primary">*</span>
            </label>
            <select
              {...register('location')}
              id="location"
              className="w-full px-4 py-3 rounded-lg bg-background-primary border border-border text-text-primary focus:outline-none focus:border-accent-primary transition-colors"
            >
              <option value="">Selecciona una ciudad</option>
              <option value="CDMX">Ciudad de México</option>
              <option value="Querétaro">Querétaro</option>
              <option value="Chihuahua">Chihuahua</option>
              <option value="Monterrey">Monterrey</option>
              <option value="Guadalajara">Guadalajara</option>
              <option value="Cancún">Cancún</option>
              <option value="Otra">Otra ubicación</option>
            </select>
            {errors.location && (
              <p className="mt-1 text-sm text-red-500">{errors.location.message}</p>
            )}
          </div>
        </div>

        {/* Fecha Tentativa */}
        <div>
          <label htmlFor="tentativeDate" className="block text-sm font-medium text-text-primary mb-2">
            Fecha Tentativa del Proyecto
          </label>
          <input
            {...register('tentativeDate')}
            type="date"
            id="tentativeDate"
            className="w-full px-4 py-3 rounded-lg bg-background-primary border border-border text-text-primary focus:outline-none focus:border-accent-primary transition-colors"
          />
          {errors.tentativeDate && (
            <p className="mt-1 text-sm text-red-500">{errors.tentativeDate.message}</p>
          )}
        </div>

        {/* Mensaje */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
            Mensaje / Detalles del Proyecto <span className="text-accent-primary">*</span>
          </label>
          <textarea
            {...register('message')}
            id="message"
            rows={6}
            className="w-full px-4 py-3 rounded-lg bg-background-primary border border-border text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent-primary transition-colors resize-none"
            placeholder="Cuéntanos más sobre tu proyecto: objetivos, audiencia, entregables esperados, etc."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Status */}
        {submitStatus.type && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-lg ${
              submitStatus.type === 'success'
                ? 'bg-green-500/10 border border-green-500/20 text-green-500'
                : 'bg-red-500/10 border border-red-500/20 text-red-500'
            }`}
          >
            {submitStatus.message}
          </motion.div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
        </Button>
      </form>
    </div>
  )
}
