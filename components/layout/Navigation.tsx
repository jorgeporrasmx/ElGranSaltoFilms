'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import Button from '@/components/ui/Button'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/portafolio', label: 'Portafolio' },
  {
    href: '/servicios',
    label: 'Servicios',
    submenu: [
      {
        href: '/servicios/documental-deportivo',
        label: 'Documental Deportivo',
      },
      { href: '/servicios/eventos-deportivos', label: 'Eventos Deportivos' },
      {
        href: '/servicios/video-marketing-deportivo',
        label: 'Video Marketing',
      },
    ],
  },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/blog', label: 'Blog' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const pathname = usePathname()

  return (
    <nav className="flex items-center gap-8">
      {/* Desktop Navigation */}
      <ul className="hidden items-center gap-8 lg:flex">
        {navLinks.map((link) => (
          <li key={link.href} className="relative group">
            {link.submenu ? (
              <>
                <button
                  className={cn(
                    'flex items-center gap-1 text-text-primary transition-colors hover:text-accent-primary',
                    pathname.startsWith(link.href) && 'text-accent-primary'
                  )}
                  onMouseEnter={() => setActiveSubmenu(link.href)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  {link.label}
                  <ChevronDown className="h-4 w-4" />
                </button>
                {/* Submenu Dropdown */}
                <div
                  className={cn(
                    'absolute left-0 top-full mt-2 w-56 rounded-lg bg-background-secondary border border-border shadow-lg transition-all duration-200',
                    activeSubmenu === link.href
                      ? 'opacity-100 visible translate-y-0'
                      : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                  )}
                  onMouseEnter={() => setActiveSubmenu(link.href)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <ul className="py-2">
                    {link.submenu.map((sublink) => (
                      <li key={sublink.href}>
                        <Link
                          href={sublink.href}
                          className={cn(
                            'block px-4 py-2 text-sm text-text-primary transition-colors hover:bg-accent-primary/10 hover:text-accent-primary',
                            pathname === sublink.href && 'text-accent-primary'
                          )}
                        >
                          {sublink.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <Link
                href={link.href}
                className={cn(
                  'text-text-primary transition-colors hover:text-accent-primary',
                  pathname === link.href && 'text-accent-primary'
                )}
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* CTA Button (Desktop) */}
      <div className="hidden lg:block">
        <Button asChild>
          <Link href="/contacto">Iniciar Proyecto</Link>
        </Button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-text-primary"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-x-0 top-[73px] bg-background-primary/95 backdrop-blur-lg lg:hidden z-50 border-t border-border">
          <ul className="container-custom py-6 space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                {link.submenu ? (
                  <div>
                    <button
                      className="flex w-full items-center justify-between text-lg text-text-primary"
                      onClick={() =>
                        setActiveSubmenu(
                          activeSubmenu === link.href ? null : link.href
                        )
                      }
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          'h-5 w-5 transition-transform',
                          activeSubmenu === link.href && 'rotate-180'
                        )}
                      />
                    </button>
                    {activeSubmenu === link.href && (
                      <ul className="mt-2 space-y-2 pl-4">
                        {link.submenu.map((sublink) => (
                          <li key={sublink.href}>
                            <Link
                              href={sublink.href}
                              className="block text-text-secondary hover:text-accent-primary"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {sublink.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      'block text-lg text-text-primary hover:text-accent-primary',
                      pathname === link.href && 'text-accent-primary'
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="pt-4">
              <Button asChild className="w-full">
                <Link
                  href="/contacto"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Iniciar Proyecto
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
