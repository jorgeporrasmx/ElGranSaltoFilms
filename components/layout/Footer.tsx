import Link from 'next/link'
import { Instagram, Facebook, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  servicios: [
    { label: 'Documental Deportivo', href: '/servicios/documental-deportivo' },
    { label: 'Eventos Deportivos', href: '/servicios/eventos-deportivos' },
    {
      label: 'Video Marketing',
      href: '/servicios/video-marketing-deportivo',
    },
  ],
  empresa: [
    { label: 'Portafolio', href: '/portafolio' },
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contacto', href: '/contacto' },
  ],
  legal: [
    { label: 'Privacidad', href: '/privacidad' },
    { label: 'Términos de Servicio', href: '/terminos' },
  ],
}

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/elgransalto', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com/elgransalto', label: 'Facebook' },
  { icon: Youtube, href: 'https://youtube.com/@elgransalto', label: 'YouTube' },
  { icon: Linkedin, href: 'https://linkedin.com/company/elgransalto', label: 'LinkedIn' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background-secondary border-t border-border">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Brand */}
          <div>
            <Link
              href="/"
              className="text-2xl font-heading font-bold text-text-primary hover:text-accent-primary transition-colors inline-block mb-4"
            >
              EL GRAN <span className="text-accent-primary">SALTO</span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              Productora especializada en documentales deportivos. Creamos
              historias que trascienden el juego.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-accent-primary transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-text-primary font-heading font-bold mb-4">
              Servicios
            </h3>
            <ul className="space-y-2">
              {footerLinks.servicios.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary text-sm hover:text-accent-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-text-primary font-heading font-bold mb-4">
              Empresa
            </h3>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary text-sm hover:text-accent-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-text-primary font-heading font-bold mb-4">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hola@elgransalto.com"
                  className="flex items-center gap-2 text-text-secondary text-sm hover:text-accent-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  hola@elgransalto.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+525512345678"
                  className="flex items-center gap-2 text-text-secondary text-sm hover:text-accent-primary transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  +52 55 1234 5678
                </a>
              </li>
              <li className="flex items-start gap-2 text-text-secondary text-sm">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Ciudad de México, México</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary text-sm">
            &copy; {currentYear} El Gran Salto. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-secondary text-sm hover:text-accent-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
