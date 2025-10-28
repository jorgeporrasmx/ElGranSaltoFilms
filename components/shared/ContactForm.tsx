'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Loader2 } from 'lucide-react'
import Button from '@/components/ui/Button'

const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().optional(),
  projectType: z.enum([
    'Documental Completo',
    'Cobertura de Evento',
    'Video Marketing',
    'Otro',
  ]),
  sport: z.string().min(2, 'Por favor indica el deporte o categoría'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-text-primary mb-2"
        >
          Nombre completo *
        </label>
        <input
          id="name"
          type="text"
          {...register('name')}
          className="w-full px-4 py-3 bg-background-secondary border border-border rounded-md text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary"
          placeholder="Juan Pérez"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-text-primary mb-2"
        >
          Email *
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className="w-full px-4 py-3 bg-background-secondary border border-border rounded-md text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary"
          placeholder="juan@ejemplo.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-text-primary mb-2"
        >
          Teléfono
        </label>
        <input
          id="phone"
          type="tel"
          {...register('phone')}
          className="w-full px-4 py-3 bg-background-secondary border border-border rounded-md text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary"
          placeholder="+52 55 1234 5678"
        />
      </div>

      {/* Project Type */}
      <div>
        <label
          htmlFor="projectType"
          className="block text-sm font-medium text-text-primary mb-2"
        >
          Tipo de Proyecto *
        </label>
        <select
          id="projectType"
          {...register('projectType')}
          className="w-full px-4 py-3 bg-background-secondary border border-border rounded-md text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary"
        >
          <option value="">Selecciona una opción</option>
          <option value="Documental Completo">Documental Completo</option>
          <option value="Cobertura de Evento">Cobertura de Evento</option>
          <option value="Video Marketing">Video Marketing</option>
          <option value="Otro">Otro</option>
        </select>
        {errors.projectType && (
          <p className="mt-1 text-sm text-red-500">
            {errors.projectType.message}
          </p>
        )}
      </div>

      {/* Sport */}
      <div>
        <label
          htmlFor="sport"
          className="block text-sm font-medium text-text-primary mb-2"
        >
          Deporte / Categoría *
        </label>
        <input
          id="sport"
          type="text"
          {...register('sport')}
          className="w-full px-4 py-3 bg-background-secondary border border-border rounded-md text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary"
          placeholder="Fútbol, Boxeo, Atletismo, etc."
        />
        {errors.sport && (
          <p className="mt-1 text-sm text-red-500">{errors.sport.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-text-primary mb-2"
        >
          Mensaje *
        </label>
        <textarea
          id="message"
          {...register('message')}
          rows={6}
          className="w-full px-4 py-3 bg-background-secondary border border-border rounded-md text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary resize-none"
          placeholder="Cuéntanos sobre tu proyecto..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : (
          'Enviar Solicitud'
        )}
      </Button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-500/10 border border-green-500 rounded-md">
          <p className="text-green-500">
            ¡Gracias! Hemos recibido tu mensaje y te contactaremos pronto.
          </p>
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="p-4 bg-red-500/10 border border-red-500 rounded-md">
          <p className="text-red-500">
            Hubo un error al enviar tu mensaje. Por favor intenta de nuevo.
          </p>
        </div>
      )}
    </form>
  )
}
