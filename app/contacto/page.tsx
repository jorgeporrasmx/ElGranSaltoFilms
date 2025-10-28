import type { Metadata } from 'next'
import { Mail, Phone, MapPin } from 'lucide-react'
import ContactForm from '@/components/shared/ContactForm'

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Ponte en contacto con El Gran Salto. Cuéntanos sobre tu proyecto deportivo y trabajemos juntos.',
}

export default function ContactoPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-background-secondary">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Iniciemos tu <span className="text-accent-primary">Proyecto</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Cuéntanos tu historia y hagamos algo increíble juntos
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">
                Información de Contacto
              </h2>
              <p className="text-text-secondary mb-8 leading-relaxed">
                Estamos aquí para responder tus preguntas y ayudarte a dar vida
                a tu proyecto deportivo. Contáctanos por cualquiera de estos
                medios.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-accent-primary mt-1" />
                  <div>
                    <h3 className="font-heading font-bold mb-1">Email</h3>
                    <a
                      href="mailto:hola@sutilde.com"
                      className="text-text-secondary hover:text-accent-primary transition-colors"
                    >
                      hola@sutilde.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-accent-primary mt-1" />
                  <div>
                    <h3 className="font-heading font-bold mb-1">Teléfono</h3>
                    <a
                      href="tel:+526144273301"
                      className="text-text-secondary hover:text-accent-primary transition-colors"
                    >
                      +52 614 427 3301
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-accent-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-bold mb-1">Ubicaciones</h3>
                    <p className="text-text-secondary">
                      Ciudad de México · Querétaro · Chihuahua
                      <br />
                      Monterrey · Guadalajara · Cancún
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-heading font-bold mb-3">
                  Horario de Atención
                </h3>
                <p className="text-text-secondary">
                  Lunes a Viernes: 9:00 AM - 6:00 PM
                  <br />
                  Sábado: 10:00 AM - 2:00 PM
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
