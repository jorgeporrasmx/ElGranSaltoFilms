import type { Metadata } from 'next'
import Link from 'next/link'
import { Heart, Target, Award } from 'lucide-react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Nosotros',
  description:
    'Conoce al equipo detrás de El Gran Salto, nuestra historia, misión y pasión por contar historias deportivas que trascienden.',
}

export default function NosotrosPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-background-secondary">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Nosotros Somos{' '}
            <span className="text-accent-primary">El Gran Salto</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Creamos historias que trascienden el deporte
          </p>
        </div>
      </section>

      {/* Historia */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl font-heading font-bold mb-8 text-center">
            Nuestra Historia
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-6">
            El Gran Salto nació de la pasión por el deporte y el poder de las
            historias bien contadas. Creemos que cada atleta, cada equipo, cada
            competencia tiene una narrativa única que merece ser capturada con
            la más alta calidad cinematográfica.
          </p>
          <p className="text-lg text-text-secondary leading-relaxed">
            Con años de experiencia en producción audiovisual y un profundo amor
            por el deporte, nos hemos especializado en crear documentales y
            contenido que va más allá de las estadísticas y los resultados,
            capturando las emociones, los sacrificios y las victorias personales
            que definen a los verdaderos campeones.
          </p>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20 bg-background-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8">
              <Target className="h-12 w-12 text-accent-primary mb-4" />
              <h3 className="text-2xl font-heading font-bold mb-4">
                Nuestra Misión
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Crear producciones audiovisuales deportivas de la más alta
                calidad que inspiren, emocionen y trasciendan, contando
                historias que conecten con audiencias de todo el mundo.
              </p>
            </Card>
            <Card className="p-8">
              <Heart className="h-12 w-12 text-accent-primary mb-4" />
              <h3 className="text-2xl font-heading font-bold mb-4">
                Nuestra Visión
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Ser la productora líder en contenido deportivo en
                Latinoamérica, reconocidos por nuestra excelencia narrativa y
                técnica, y por impulsar el desarrollo del deporte a través de
                nuestras historias.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <Award className="h-12 w-12 text-accent-primary mx-auto mb-4" />
              <h3 className="text-xl font-heading font-bold mb-3">
                Excelencia
              </h3>
              <p className="text-text-secondary">
                Nos esforzamos por la perfección en cada toma, cada edición,
                cada proyecto
              </p>
            </div>
            <div className="text-center">
              <Heart className="h-12 w-12 text-accent-primary mx-auto mb-4" />
              <h3 className="text-xl font-heading font-bold mb-3">Pasión</h3>
              <p className="text-text-secondary">
                Amamos lo que hacemos y esa pasión se refleja en nuestro trabajo
              </p>
            </div>
            <div className="text-center">
              <Target className="h-12 w-12 text-accent-primary mx-auto mb-4" />
              <h3 className="text-xl font-heading font-bold mb-3">
                Compromiso
              </h3>
              <p className="text-text-secondary">
                Nos comprometemos con cada cliente para superar sus expectativas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background-secondary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            ¿Listo para trabajar juntos?
          </h2>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Cuéntanos tu historia y hagamos algo increíble
          </p>
          <Button size="lg" asChild>
            <Link href="/contacto">Iniciar Proyecto</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
