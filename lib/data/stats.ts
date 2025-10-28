export interface Stat {
  id: number
  value: number
  suffix: string
  label: string
}

export const stats: Stat[] = [
  {
    id: 1,
    value: 50,
    suffix: '+',
    label: 'Proyectos Completados',
  },
  {
    id: 2,
    value: 15,
    suffix: '+',
    label: 'Deportes Filmados',
  },
  {
    id: 3,
    value: 100,
    suffix: 'K+',
    label: 'Horas de Contenido',
  },
  {
    id: 4,
    value: 20,
    suffix: '+',
    label: 'Atletas de Élite',
  },
]
