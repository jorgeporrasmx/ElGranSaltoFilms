import type { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import ContactTabs from '@/components/contacto/ContactTabs'

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Ponte en contacto con El Gran Salto. Agenda una llamada o envía los detalles de tu proyecto deportivo.',
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
            Agenda una llamada o envía los detalles de tu proyecto. Estamos listos para trabajar contigo.
          </p>
        </div>
      </section>

      {/* Contact Tabs Section */}
      <section className="py-20">
        <div className="container-custom max-w-4xl mx-auto">
          <ContactTabs />
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-background-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Información de Contacto
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              También puedes contactarnos directamente por cualquiera de estos medios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {/* Email */}
            <div className="text-center p-6 bg-background-primary rounded-lg border border-border hover:border-accent-primary transition-colors">
              <Mail className="h-8 w-8 text-accent-primary mx-auto mb-4" />
              <h3 className="font-heading font-bold mb-2">Email</h3>
              <a
                href="mailto:hola@sutilde.com"
                className="text-text-secondary hover:text-accent-primary transition-colors text-sm"
              >
                hola@sutilde.com
              </a>
            </div>

            {/* Phone */}
            <div className="text-center p-6 bg-background-primary rounded-lg border border-border hover:border-accent-primary transition-colors">
              <Phone className="h-8 w-8 text-accent-primary mx-auto mb-4" />
              <h3 className="font-heading font-bold mb-2">Teléfono</h3>
              <a
                href="tel:+526144273301"
                className="text-text-secondary hover:text-accent-primary transition-colors text-sm"
              >
                +52 614 427 3301
              </a>
            </div>

            {/* Locations */}
            <div className="text-center p-6 bg-background-primary rounded-lg border border-border hover:border-accent-primary transition-colors">
              <MapPin className="h-8 w-8 text-accent-primary mx-auto mb-4" />
              <h3 className="font-heading font-bold mb-2">Ubicaciones</h3>
              <p className="text-text-secondary text-sm">
                CDMX · Querétaro
                <br />
                Chihuahua · Monterrey
                <br />
                Guadalajara · Cancún
              </p>
            </div>

            {/* Hours */}
            <div className="text-center p-6 bg-background-primary rounded-lg border border-border hover:border-accent-primary transition-colors">
              <Clock className="h-8 w-8 text-accent-primary mx-auto mb-4" />
              <h3 className="font-heading font-bold mb-2">Horario</h3>
              <p className="text-text-secondary text-sm">
                Lun - Vie: 9:00 AM - 6:00 PM
                <br />
                Sábado: 10:00 AM - 2:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
