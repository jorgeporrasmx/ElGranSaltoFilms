export interface Testimonial {
  id: number
  quote: string
  author: string
  role: string
  organization: string
  avatar?: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      'El Gran Salto capturó la esencia de nuestro equipo de una manera que nunca habíamos visto. Su atención al detalle y pasión por contar historias es incomparable.',
    author: 'Carlos Rodríguez',
    role: 'Director Deportivo',
    organization: 'Club Deportivo Premier',
    avatar: '/images/testimonials/avatar-1.jpg',
  },
  {
    id: 2,
    quote:
      'Trabajar con El Gran Salto fue una experiencia increíble. No solo produjeron un documental excepcional, sino que se convirtieron en parte de nuestro equipo.',
    author: 'María Fernández',
    role: 'Atleta Olímpica',
    organization: 'Federación Mexicana de Atletismo',
    avatar: '/images/testimonials/avatar-2.jpg',
  },
  {
    id: 3,
    quote:
      'La calidad cinematográfica y la narrativa que El Gran Salto aportó a nuestro evento superó todas las expectativas. Altamente recomendados.',
    author: 'Roberto Sánchez',
    role: 'Organizador',
    organization: 'Maratón Internacional CDMX',
    avatar: '/images/testimonials/avatar-3.jpg',
  },
]
