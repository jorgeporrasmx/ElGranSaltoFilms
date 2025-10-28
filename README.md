# El Gran Salto - Producción Documental Deportiva

Sitio web profesional para productora especializada en documentales deportivos en México.

## Stack Tecnológico

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Formularios**: React Hook Form + Zod
- **SEO**: Metadata API de Next.js
- **Analytics**: Vercel Analytics
- **TypeScript**: Strict mode

## Características

- 🎨 Dark theme con acentos vibrantes
- 📱 Mobile-first y completamente responsive
- ⚡ Optimizado para performance (Lighthouse >85)
- 🔍 SEO optimizado con metadata dinámica
- ♿ Accesible (WCAG AA)
- 🎬 Animaciones fluidas con Framer Motion
- 📧 Formulario de contacto con validación

## Getting Started

### Prerrequisitos

- Node.js 18.x o superior
- npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/ElGranSaltoFilms.git
cd ElGranSaltoFilms
```

2. Instala las dependencias:
```bash
npm install
```

3. Copia el archivo de variables de entorno:
```bash
cp .env.local.example .env.local
```

4. Edita `.env.local` con tus credenciales (opcional para desarrollo local).

### Desarrollo

Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build

Crea una build de producción:

```bash
npm run build
```

Inicia el servidor de producción:

```bash
npm start
```

## Estructura del Proyecto

```
/el-gran-salto
├── /app                    # App Router de Next.js
│   ├── layout.tsx         # Layout principal con SEO
│   ├── page.tsx           # Homepage
│   ├── /portafolio        # Páginas de portfolio
│   ├── /servicios         # Páginas de servicios
│   ├── /nosotros          # Página sobre nosotros
│   ├── /blog              # Blog (preparado)
│   ├── /contacto          # Página de contacto
│   └── /api               # API routes
├── /components            # Componentes React
│   ├── /layout           # Header, Footer, Navigation
│   ├── /home             # Secciones de homepage
│   ├── /ui               # Componentes UI base
│   └── /shared           # Componentes compartidos
├── /lib                   # Utilities y datos
│   ├── /data             # Datos placeholder
│   └── utils.ts          # Funciones helper
├── /public               # Archivos estáticos
└── /styles               # Estilos globales
```

## Customización

### Colores

Edita los colores en `tailwind.config.ts`:

```typescript
colors: {
  background: {
    primary: '#0A0A0A',
    secondary: '#1A1A1A',
  },
  accent: {
    primary: '#FF4D00',
    secondary: '#FF6B35',
  },
  // ...
}
```

### Fuentes

Las fuentes se configuran en `app/layout.tsx` usando `next/font/google`:
- Headings: Montserrat (700-900)
- Body: Inter (400-500)

### Datos

Los datos placeholder están en `/lib/data/`:
- `projects.ts` - Proyectos del portfolio
- `services.ts` - Servicios ofrecidos
- `testimonials.ts` - Testimonios de clientes
- `stats.ts` - Estadísticas del negocio

## Scripts Disponibles

- `npm run dev` - Inicia servidor de desarrollo
- `npm run build` - Crea build de producción
- `npm start` - Inicia servidor de producción
- `npm run lint` - Ejecuta ESLint

## SEO

Cada página tiene metadata optimizada. Para personalizar:

```typescript
export const metadata: Metadata = {
  title: 'Tu Título',
  description: 'Tu descripción',
  keywords: ['keyword1', 'keyword2'],
}
```

## Formulario de Contacto

El formulario está conectado a `/app/api/contact/route.ts`. Para habilitarlo en producción:

1. Configura un servicio de email (SendGrid, Resend, etc.)
2. Añade las credenciales en `.env.local`
3. Implementa el envío en `route.ts`

## Deployment

### Vercel (Recomendado)

1. Sube tu código a GitHub
2. Importa el proyecto en [Vercel](https://vercel.com)
3. Configura las variables de entorno
4. Deploy automático

### Otros Hosts

El sitio es compatible con cualquier plataforma que soporte Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Performance

El sitio está optimizado para:
- Lighthouse Score > 85
- Core Web Vitals optimizados
- Lazy loading de imágenes
- Code splitting automático
- Compresión gzip/brotli

## Soporte de Navegadores

- Chrome (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Edge (últimas 2 versiones)

## Licencia

© 2024 El Gran Salto. Todos los derechos reservados.

## Contacto

Para consultas sobre el proyecto:
- Email: hola@elgransalto.com
- Sitio: [elgransalto.com](https://elgransalto.com)
