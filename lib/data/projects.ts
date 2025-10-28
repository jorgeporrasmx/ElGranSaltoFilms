export interface Project {
  id: number
  slug: string
  title: string
  sport: string
  category:
    | 'Documental Completo'
    | 'Evento'
    | 'Marketing'
    | 'Recap'
    | 'Behind the Scenes'
  thumbnail: string
  videoUrl: string
  description: string
  year: number
  client: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'detras-del-titulo-liga-mx',
    title: 'Detrás del Título: Liga MX 2024',
    sport: 'Fútbol',
    category: 'Documental Completo',
    thumbnail: '/images/projects/project-1.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description:
      'Un viaje íntimo por la temporada más emocionante de la Liga MX, siguiendo a jugadores y entrenadores en su búsqueda del campeonato.',
    year: 2024,
    client: 'Liga MX',
    featured: true,
  },
  {
    id: 2,
    slug: 'campeones-del-ring',
    title: 'Campeones del Ring',
    sport: 'Boxeo',
    category: 'Documental Completo',
    thumbnail: '/images/projects/project-2.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description:
      'La historia de tres boxeadores mexicanos que luchan por alcanzar el título mundial, mostrando su disciplina, sacrificio y determinación.',
    year: 2023,
    client: 'Boxing Association',
    featured: true,
  },
  {
    id: 3,
    slug: 'maratón-cdmx-2024',
    title: 'Maratón CDMX 2024: Corazones en Movimiento',
    sport: 'Atletismo',
    category: 'Evento',
    thumbnail: '/images/projects/project-3.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description:
      'Cobertura completa del Maratón de la Ciudad de México, capturando la emoción de 30,000 corredores persiguiendo sus sueños.',
    year: 2024,
    client: 'Maratón CDMX',
    featured: true,
  },
  {
    id: 4,
    slug: 'basquetbol-femenil-ascenso',
    title: 'El Ascenso: Basquetbol Femenil',
    sport: 'Basquetbol',
    category: 'Documental Completo',
    thumbnail: '/images/projects/project-4.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description:
      'Un documental que celebra el crecimiento del basquetbol femenil en México, destacando a las atletas que están cambiando el juego.',
    year: 2023,
    client: 'LNBP',
    featured: true,
  },
  {
    id: 5,
    slug: 'surf-oaxaca',
    title: 'Olas de Cambio: Surf en Oaxaca',
    sport: 'Surf',
    category: 'Documental Completo',
    thumbnail: '/images/projects/project-5.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description:
      'Exploramos la comunidad surfista de Puerto Escondido y su impacto en el desarrollo deportivo y turístico de la región.',
    year: 2024,
    client: 'Federación Mexicana de Surf',
    featured: true,
  },
  {
    id: 6,
    slug: 'champions-league-recap',
    title: 'Champions League: Recap Histórico',
    sport: 'Fútbol',
    category: 'Recap',
    thumbnail: '/images/projects/project-6.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description:
      'Recap cinematográfico de la final de Champions League, capturando cada momento de tensión y gloria.',
    year: 2023,
    client: 'ESPN México',
    featured: true,
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured).slice(0, 6)
}

export function getProjectsBySport(sport: string): Project[] {
  return projects.filter((project) => project.sport === sport)
}
