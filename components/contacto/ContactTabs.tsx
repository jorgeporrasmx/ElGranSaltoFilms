'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, FileText } from 'lucide-react'
import CalendlyEmbed from './CalendlyEmbed'
import MondayForm from './MondayForm'

type TabType = 'schedule' | 'project'

export default function ContactTabs() {
  const [activeTab, setActiveTab] = useState<TabType>('schedule')

  const tabs = [
    {
      id: 'schedule' as TabType,
      label: 'Agendar Llamada',
      icon: Calendar,
      description: 'Reserva una llamada para hablar en vivo',
    },
    {
      id: 'project' as TabType,
      label: 'Enviar Proyecto',
      icon: FileText,
      description: 'Envía los detalles de tu proyecto',
    },
  ]

  return (
    <div className="w-full">
      {/* Tab Headers */}
      <div className="border-b border-border mb-8">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-3 px-6 py-4 text-left transition-all ${
                  activeTab === tab.id
                    ? 'text-accent-primary'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {/* Icon */}
                <Icon
                  className={`w-5 h-5 flex-shrink-0 ${
                    activeTab === tab.id ? 'text-accent-primary' : 'text-text-secondary'
                  }`}
                />

                {/* Label and Description */}
                <div className="flex-1">
                  <div className="font-semibold">{tab.label}</div>
                  <div className="text-sm text-text-secondary hidden sm:block">
                    {tab.description}
                  </div>
                </div>

                {/* Active Indicator */}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-primary"
                    initial={false}
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Tab Content */}
      <div className="relative">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'schedule' ? <CalendlyEmbed /> : <MondayForm />}
        </motion.div>
      </div>

      {/* Help Text */}
      <div className="mt-8 p-6 bg-background-secondary rounded-lg border border-border">
        <h4 className="text-lg font-semibold text-text-primary mb-2">
          ¿No estás seguro cuál opción elegir?
        </h4>
        <div className="space-y-3 text-text-secondary">
          <div className="flex gap-3">
            <Calendar className="w-5 h-5 text-accent-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-text-primary">Agendar Llamada</p>
              <p className="text-sm">
                Ideal si quieres hablar directamente con nuestro equipo para discutir tu idea en tiempo real.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <FileText className="w-5 h-5 text-accent-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-text-primary">Enviar Proyecto</p>
              <p className="text-sm">
                Perfecto si ya tienes los detalles de tu proyecto y prefieres que revisemos la información antes de hablar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
