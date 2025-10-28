# Deployment Instructions

Este proyecto está listo para ser desplegado en múltiples plataformas.

## 🚀 Deployment en Vercel (RECOMENDADO)

Vercel es la plataforma creada por el equipo de Next.js y ofrece la mejor integración.

### Pasos:

1. **Crea una cuenta en Vercel** (si no tienes una)
   - Ve a https://vercel.com/signup
   - Conecta tu cuenta de GitHub

2. **Importa el proyecto**
   - Click en "Add New..." → "Project"
   - Selecciona el repositorio: `jorgeporrasmx/ElGranSaltoFilms`
   - Click en "Import"

3. **Configuración del proyecto**
   - Framework Preset: Next.js (detectado automáticamente)
   - Root Directory: `./` (dejar por defecto)
   - Build Command: `npm run build` (automático)
   - Output Directory: `.next` (automático)

4. **Variables de entorno** (opcional por ahora)
   - Por ahora no son necesarias
   - Más adelante puedes agregar:
     - `SMTP_HOST`, `SMTP_USER`, etc. para el formulario de contacto

5. **Deploy**
   - Click en "Deploy"
   - Espera 2-3 minutos
   - ¡Tu sitio estará en línea!

6. **URL**
   - Vercel te dará una URL como: `el-gran-salto.vercel.app`
   - Puedes configurar un dominio personalizado después

### Deploy automático
Cada vez que hagas push a la rama, Vercel automáticamente re-desplegará el sitio.

---

## 🌐 Otras Opciones de Deployment

### Netlify
1. Ve a https://netlify.com
2. Click en "Add new site" → "Import an existing project"
3. Conecta tu repositorio de GitHub
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Click "Deploy"

### Railway
1. Ve a https://railway.app
2. Click en "New Project" → "Deploy from GitHub repo"
3. Selecciona el repositorio
4. Railway detectará Next.js automáticamente
5. Click "Deploy"

### DigitalOcean App Platform
1. Ve a https://cloud.digitalocean.com/apps
2. Click "Create App"
3. Conecta tu repositorio de GitHub
4. Selecciona la rama `claude/session-011CUYkdT8TLPgGZ3AWWZa5b`
5. DigitalOcean detectará Next.js automáticamente
6. Click "Deploy"

---

## 📝 Notas Importantes

- **Build time**: El primer build puede tomar 2-3 minutos
- **Gratuito**: Vercel, Netlify y Railway tienen planes gratuitos generosos
- **SSL/HTTPS**: Todas estas plataformas incluyen HTTPS gratis automáticamente
- **Custom Domain**: Puedes conectar un dominio personalizado después

---

## 🔧 Troubleshooting

### Si el build falla:
1. Verifica que todas las dependencias estén en `package.json`
2. Asegúrate de que `npm run build` funciona localmente
3. Revisa los logs del deployment

### Para ver los logs:
- En Vercel: Ve a la pestaña "Deployments" → Click en el deployment → "View Build Logs"

---

## ✅ Checklist Post-Deployment

- [ ] Verifica que todas las páginas cargan correctamente
- [ ] Prueba el menú de navegación
- [ ] Verifica que el formulario de contacto funciona (necesitará configuración de email)
- [ ] Prueba en mobile
- [ ] Configura un dominio personalizado (opcional)
- [ ] Habilita Analytics (Vercel Analytics está incluido)

---

¿Necesitas ayuda? Consulta la documentación:
- Vercel: https://vercel.com/docs
- Next.js: https://nextjs.org/docs/deployment
