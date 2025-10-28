export interface Service {
  id: number
  slug: string
  title: string
  shortDescription: string
  icon: string
  features: string[]
}

export const services: Service[] = [
  {
    id: 1,
    slug: 'documental-deportivo',
    title: 'Producción Documental Deportiva',
    shortDescription:
      'Creamos documentales que cuentan historias profundas y emotivas sobre atletas, equipos y el espíritu del deporte.',
    icon: 'Film',
    features: [
      'Concepto y guion narrativo',
      'Producción completa multi-cámara',
      'Entrevistas a profundidad',
      'Post-producción cinematográfica',
      'Color grading profesional',
      'Distribución y promoción',
    ],
  },
  {
    id: 2,
    slug: 'eventos-deportivos',
    title: 'Cobertura de Eventos Deportivos',
    shortDescription:
      'Filmamos eventos deportivos con calidad broadcast, capturando cada momento importante con un equipo profesional.',
    icon: 'Camera',
    features: [
      'Multi-cámara setup (4K)',
      'Slow motion y acción',
      'Audio profesional ambiente',
      'Highlights y recaps',
      'Entrega rápida 24-48hrs',
      'Live streaming (opcional)',
    ],
  },
  {
    id: 3,
    slug: 'video-marketing-deportivo',
    title: 'Video Marketing Deportivo',
    shortDescription:
      'Contenido visual impactante para redes sociales, campañas de marca y promoción de atletas o equipos.',
    icon: 'Sparkles',
    features: [
      'Videos promocionales cortos',
      'Contenido para redes sociales',
      'Reels y TikToks optimizados',
      'Campañas de marca deportiva',
      'Motion graphics y animación',
      'Estrategia de contenido',
    ],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}
