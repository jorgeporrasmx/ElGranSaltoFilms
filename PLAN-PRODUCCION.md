# Plan de Producción - El Gran Salto
## De Placeholder a Sitio Real

Este documento detalla todos los pasos necesarios para convertir el sitio de placeholder a producción con contenido real.

---

## 📋 FASE 1: RECOPILACIÓN DE INFORMACIÓN

### 1.1 Información General de la Empresa
**¿Qué necesitas proporcionar?**
- [ ] Nombre legal de la empresa
- [ ] Año de fundación
- [ ] Misión (2-3 oraciones)
- [ ] Visión (2-3 oraciones)
- [ ] Valores core (4-6 valores con descripción breve)
- [ ] Historia de la empresa (300-500 palabras)
- [ ] Ubicación exacta (ciudad, estado)
- [ ] Teléfono de contacto real
- [ ] Email de contacto real (ej: hola@elgransalto.com)

### 1.2 Equipo
**¿Qué necesitas proporcionar?**
- [ ] Fotos profesionales del equipo (6-12 personas)
  - Formato: JPG o PNG
  - Tamaño: Mínimo 800x800px
  - Fondo profesional
- [ ] Para cada persona:
  - Nombre completo
  - Cargo/Rol
  - Bio breve (50-100 palabras)
  - Links a redes sociales profesionales (LinkedIn, Instagram)

### 1.3 Estadísticas Reales
**¿Qué necesitas proporcionar?**
- [ ] Número de proyectos completados
- [ ] Número de deportes filmados
- [ ] Horas de contenido producido
- [ ] Número de atletas/clientes con los que han trabajado

---

## 🎬 FASE 2: CONTENIDO DE PROYECTOS

### 2.1 Videos de Proyectos
**¿Qué necesitas proporcionar?**

Para cada proyecto (mínimo 6, recomendado 12-20):

**Información básica:**
- [ ] Título del proyecto
- [ ] Deporte
- [ ] Categoría (Documental Completo, Evento, Marketing, etc.)
- [ ] Año de producción
- [ ] Cliente/Organización
- [ ] Descripción corta (100 palabras)
- [ ] Descripción larga (500-800 palabras)
- [ ] Duración del video
- [ ] URL del video (YouTube o Vimeo)

**Visual:**
- [ ] Thumbnail del proyecto (1920x1080px, formato JPG/WebP)
- [ ] 6-8 fotos Behind the Scenes (1920x1080px)

**Opcional pero recomendado:**
- [ ] Desafíos del proyecto
- [ ] Soluciones implementadas
- [ ] Resultados/impacto
- [ ] Testimonial del cliente
- [ ] Proyectos relacionados

### 2.2 Estructura de Carpeta de Imágenes

Organiza tus imágenes así:
```
/public/images/
├── /projects/
│   ├── project-1-thumbnail.jpg
│   ├── project-1-bts-1.jpg
│   ├── project-1-bts-2.jpg
│   ├── project-2-thumbnail.jpg
│   └── ...
├── /team/
│   ├── persona-1.jpg
│   ├── persona-2.jpg
│   └── ...
├── /testimonials/
│   ├── avatar-1.jpg
│   └── ...
├── logo.png (para header)
├── logo-white.png (versión blanca para footer)
└── og-image.jpg (1200x630px para redes sociales)
```

---

## 💼 FASE 3: SERVICIOS Y TESTIMONIOS

### 3.1 Servicios
**¿Qué necesitas revisar/ajustar?**

Para cada servicio (Documental, Eventos, Marketing):
- [ ] Revisar descripción actual
- [ ] Ajustar features/características
- [ ] Agregar casos de uso específicos
- [ ] Agregar FAQs (5-7 preguntas por servicio)
- [ ] Proceso detallado (timeline de 4-6 pasos)
- [ ] Pricing (opcional): Rangos de precios o paquetes

### 3.2 Testimonios Reales
**¿Qué necesitas proporcionar?**

Para cada testimonial (mínimo 3, recomendado 6-9):
- [ ] Quote/testimonio (2-3 oraciones)
- [ ] Nombre del cliente
- [ ] Cargo
- [ ] Organización/Empresa
- [ ] Foto del cliente (800x800px, opcional pero recomendado)
- [ ] Proyecto relacionado

---

## 📧 FASE 4: FORMULARIO DE CONTACTO FUNCIONAL

### 4.1 Configurar Servicio de Email

**Opciones recomendadas:**

#### Opción A: Resend (Recomendado - Fácil y gratis)
1. Crea cuenta en https://resend.com
2. Verifica tu dominio
3. Obtén tu API key
4. Agregar a `.env.local`:
   ```
   RESEND_API_KEY=re_xxxxxxxxxx
   RESEND_FROM_EMAIL=hola@elgransalto.com
   RESEND_TO_EMAIL=info@elgransalto.com
   ```

#### Opción B: SendGrid
1. Crea cuenta en https://sendgrid.com
2. Verifica email sender
3. Obtén API key
4. Agregar a `.env.local`:
   ```
   SENDGRID_API_KEY=SG.xxxxxxxxxx
   SENDGRID_FROM_EMAIL=hola@elgransalto.com
   SENDGRID_TO_EMAIL=info@elgransalto.com
   ```

#### Opción C: Gmail SMTP (Básico)
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tu-email@gmail.com
SMTP_PASSWORD=tu-app-password
SMTP_FROM=hola@elgransalto.com
```

**Nota**: Yo te ayudo a implementar el código una vez que elijas el servicio.

---

## 🎨 FASE 5: IDENTIDAD VISUAL

### 5.1 Logo y Branding
**¿Qué necesitas proporcionar?**
- [ ] Logo principal (PNG con transparencia, 500x200px aprox)
- [ ] Logo versión blanca (para header/footer oscuro)
- [ ] Logo versión compacta/icono (para favicon, 512x512px)
- [ ] Favicon generado (16x16, 32x32, 180x180px)

### 5.2 Colores de Marca
**Revisar si los colores actuales funcionan:**
- Naranja primario: `#FF4D00`
- Naranja secundario: `#FF6B35`
- Fondo oscuro: `#0A0A0A`
- Fondo secundario: `#1A1A1A`

**¿Necesitas cambiar algún color?** Indícame el código hexadecimal.

### 5.3 Video Hero (Opcional pero impactante)
**¿Qué necesitas proporcionar?**
- [ ] Video loop de 15-20 segundos
- [ ] Formato: MP4, WebM
- [ ] Resolución: 1920x1080 (Full HD)
- [ ] Peso: Máximo 5MB (altamente comprimido)
- [ ] Contenido: Tomas cinematográficas de deportes, producción, etc.

---

## 🌐 FASE 6: SEO Y ANALYTICS

### 6.1 Google Analytics
**Pasos:**
1. Crea cuenta en https://analytics.google.com
2. Crea una propiedad "El Gran Salto"
3. Obtén tu Measurement ID (formato: G-XXXXXXXXXX)
4. Agregar a `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
5. Yo implemento el código de tracking

### 6.2 Google Search Console
**Pasos:**
1. Ve a https://search.google.com/search-console
2. Agrega tu sitio (una vez deployado)
3. Verifica propiedad
4. Envía sitemap: `https://tudominio.com/sitemap.xml`

### 6.3 Keywords y SEO
**¿Qué necesitas definir?**
- [ ] 5-10 keywords principales (ej: "producción documental deportivo México")
- [ ] Keywords por servicio (3-5 por servicio)
- [ ] Keywords por ubicación (si aplica)

---

## 📱 FASE 7: REDES SOCIALES

### 7.1 Cuentas de Redes Sociales
**¿Qué necesitas proporcionar?**
- [ ] URL de Instagram (o crear cuenta)
- [ ] URL de Facebook (o crear cuenta)
- [ ] URL de YouTube (o crear cuenta)
- [ ] URL de LinkedIn (o crear cuenta)
- [ ] URL de TikTok (opcional)

**Actualmente en el código:**
- Instagram: https://instagram.com/elgransalto
- Facebook: https://facebook.com/elgransalto
- YouTube: https://youtube.com/@elgransalto
- LinkedIn: https://linkedin.com/company/elgransalto

¿Son correctas o necesitas cambiarlas?

### 7.2 Open Graph Image
**¿Qué necesitas crear?**
- [ ] Imagen para compartir en redes sociales
- [ ] Tamaño: 1200x630px
- [ ] Formato: JPG o PNG
- [ ] Contenido: Logo + tagline + visual atractivo
- [ ] Sin texto pequeño (se verá diminuto)

---

## 🔒 FASE 8: LEGAL Y PRIVACIDAD

### 8.1 Páginas Legales
**¿Qué necesitas proporcionar?**
- [ ] Política de Privacidad (puedo crear template base)
- [ ] Términos de Servicio (puedo crear template base)
- [ ] Aviso legal (nombre legal de empresa, RFC, etc.)

---

## 🌍 FASE 9: DOMINIO PERSONALIZADO (OPCIONAL)

### 9.1 Si ya tienes dominio
**¿Qué necesitas hacer?**
1. Proporcionar el dominio (ej: elgransalto.com)
2. Configurar DNS records en tu proveedor
3. Conectar a Vercel (te guío paso a paso)

### 9.2 Si NO tienes dominio
**Opciones:**
- Usar dominio gratuito de Vercel: `elgransalto.vercel.app`
- Comprar dominio en:
  - Namecheap ($10-15/año)
  - Google Domains ($12/año)
  - GoDaddy ($15-20/año)

---

## ✅ FASE 10: TESTING Y LANZAMIENTO

### 10.1 Testing Checklist
- [ ] Todas las páginas cargan correctamente
- [ ] Navegación funciona (todas las rutas)
- [ ] Formulario de contacto envía emails
- [ ] Responsive en mobile (iPhone, Android)
- [ ] Responsive en tablet
- [ ] Links de redes sociales funcionan
- [ ] Videos se reproducen correctamente
- [ ] Animaciones se ven smooth
- [ ] Performance Lighthouse >85
- [ ] No hay errores en consola

### 10.2 Pre-Launch Checklist
- [ ] Sitio deployado en Vercel
- [ ] Dominio configurado (si aplica)
- [ ] Google Analytics funcionando
- [ ] Formulario de contacto probado
- [ ] Redes sociales conectadas
- [ ] Favicon visible
- [ ] Open Graph image funcionando (prueba compartiendo en WhatsApp)
- [ ] SSL/HTTPS activo (automático en Vercel)

---

## 📊 RESUMEN DE ENTREGABLES

### Contenido Textual
- ✍️ Información de empresa (misión, visión, historia)
- ✍️ Descripciones de proyectos (6-20 proyectos)
- ✍️ Testimonios de clientes (3-6 testimonios)
- ✍️ Información del equipo (6-12 personas)

### Assets Visuales
- 🖼️ Logo (3 versiones: color, blanco, icono)
- 🖼️ Thumbnails de proyectos (6-20 imágenes, 1920x1080)
- 🖼️ Fotos BTS (6-8 por proyecto)
- 🖼️ Fotos del equipo (6-12 fotos, 800x800)
- 🖼️ Open Graph image (1200x630)
- 🖼️ Favicon (512x512)
- 🎥 Video hero (opcional, 15-20s, 5MB max)

### Configuración Técnica
- 🔧 URLs de videos (YouTube/Vimeo)
- 🔧 API keys (email service, Analytics)
- 🔧 Información de contacto real
- 🔧 URLs de redes sociales
- 🔧 Dominio (si aplica)

---

## 📞 SIGUIENTE PASO

**Prioridad Alta (Para que funcione básicamente):**
1. 6 proyectos con thumbnails y videos
2. Información de contacto real
3. Configurar servicio de email
4. 3 testimonios reales

**Prioridad Media (Para verse profesional):**
5. Logo y favicon
6. Open Graph image
7. Fotos del equipo
8. Actualizar página Nosotros

**Prioridad Baja (Para optimización):**
9. Google Analytics
10. Dominio personalizado
11. Video hero
12. Más proyectos (12-20 total)

---

## 🚀 ¿Cómo Continuamos?

**Opción 1: Paso a Paso**
Trabajamos cada sección en orden. Me proporcionas la información y yo la implemento.

**Opción 2: Bulk Update**
Me proporcionas todo el contenido junto (Excel/Google Doc) y yo lo implemento de una vez.

**Opción 3: Híbrido**
Implementamos lo básico primero (prioridad alta) para lanzar rápido, y luego vamos agregando el resto.

---

## 📝 PLANTILLAS

### Template: Información de Proyecto
```
Título: [Nombre del proyecto]
Deporte: [Fútbol, Boxeo, etc.]
Categoría: [Documental Completo, Evento, Marketing]
Año: [2024]
Cliente: [Nombre del cliente]
Duración: [45 minutos]
Video URL: [https://youtube.com/watch?v=xxx]

Descripción Corta (100 palabras):
[Tu descripción aquí]

Descripción Larga (500 palabras):
[Tu descripción aquí]

Desafíos:
[Los retos que enfrentaron]

Soluciones:
[Cómo los resolvieron]

Resultados:
[El impacto del proyecto]
```

### Template: Testimonial
```
Quote: "[El testimonio de 2-3 oraciones]"
Nombre: [Juan Pérez]
Cargo: [Director Deportivo]
Organización: [Club Deportivo XYZ]
Proyecto relacionado: [ID o nombre del proyecto]
```

### Template: Miembro del Equipo
```
Nombre: [María García]
Cargo: [Directora de Fotografía]
Bio: [50-100 palabras sobre su experiencia]
LinkedIn: [URL]
Instagram: [URL]
```

---

¿Con cuál fase quieres empezar? ¿Qué información tienes lista para compartir?
