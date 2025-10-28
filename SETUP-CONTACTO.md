# Setup: Sistema de Contacto - Calendly + Monday.com

Este documento te guía paso a paso para configurar el sistema de contacto dual (Calendly + Monday.com) en tu sitio web.

---

## 📋 Resumen

El sistema de contacto tiene dos opciones:

1. **Agendar Llamada** - Widget de Calendly integrado
2. **Enviar Proyecto** - Formulario que crea items en Monday.com

---

## 🔧 PARTE 1: Configuración de Calendly

### Paso 1: Verificar tu Cuenta Calendly

1. Ve a https://calendly.com/jorgeporras
2. Asegúrate de que tu cuenta está activa
3. Configura al menos un tipo de evento (ej: "Llamada de Consulta")

### Paso 2: Personalización del Widget (Opcional)

El widget de Calendly ya está configurado con los colores de tu marca:
- Fondo: `#0a0a0a` (negro oscuro)
- Primario: `#ff4d00` (naranja)
- Texto: `#ffffff` (blanco)

Si quieres cambiar estos colores, edita el archivo `.env.local` (ver Parte 3).

### ✅ Calendly está Listo

El widget de Calendly funcionará automáticamente sin necesidad de API keys. Solo asegúrate de que tu cuenta de Calendly esté activa.

---

## 🔧 PARTE 2: Configuración de Monday.com

### Paso 1: Crear Cuenta Monday.com

1. Ve a https://monday.com
2. Crea una cuenta (tiene plan gratuito de 14 días)
3. Inicia sesión

### Paso 2: Crear Board para Leads

1. En Monday.com, haz click en **"Add"** → **"New board"**
2. Nombra el board: **"Leads - El Gran Salto"**
3. Selecciona template **"CRM - Leads"** (o crea uno vacío)

### Paso 3: Configurar Columnas del Board

Tu board debe tener estas columnas (nombres exactos importan):

| Nombre de Columna | Tipo de Columna | ID Sugerido |
|-------------------|-----------------|-------------|
| **Nombre** | Text (default) | name |
| **Email** | Email | email |
| **Teléfono** | Phone | phone |
| **Empresa** | Text | empresa |
| **Tipo** | Dropdown | tipo |
| **Deporte** | Text | deporte |
| **Presupuesto** | Dropdown | presupuesto |
| **Ciudad** | Dropdown | ciudad |
| **Fecha Inicio** | Date | fecha_inicio |
| **Estado** | Status | status |
| **Descripción** | Long Text | descripcion |

#### Configuración de Dropdowns:

**Columna "Tipo"** - Opciones:
- Documental
- Evento
- Marketing
- Otro

**Columna "Presupuesto"** - Opciones:
- < $50K
- $50K-100K
- $100K-250K
- > $250K
- Por definir

**Columna "Ciudad"** - Opciones:
- CDMX
- Querétaro
- Chihuahua
- Monterrey
- Guadalajara
- Cancún
- Otra

### Paso 4: Crear Grupo "Nuevo"

1. En tu board, asegúrate de tener un grupo llamado **"nuevo"** (en minúsculas)
2. Este es donde se crearán los nuevos leads automáticamente
3. Puedes crear otros grupos como: "Contactado", "Propuesta", "Cerrado", etc.

### Paso 5: Obtener API Key

1. Haz click en tu foto de perfil (esquina superior derecha)
2. Ve a **"Admin"** → **"API"**
3. Click en **"Copy"** o **"Regenerate"** para obtener tu API key
4. Guarda el API key en un lugar seguro (lo necesitarás después)

**IMPORTANTE**: El API key se ve así:
```
eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjEyMzQ1Njc4OSwiaWF0IjoxNjg5...
```

### Paso 6: Obtener Board ID

1. Abre tu board "Leads - El Gran Salto"
2. Mira la URL en tu navegador:
   ```
   https://[tu-workspace].monday.com/boards/1234567890
   ```
3. El Board ID es el número al final de la URL (ej: `1234567890`)
4. Copia este número

---

## 🔧 PARTE 3: Configurar Variables de Entorno

### Opción A: Desarrollo Local

1. Crea un archivo `.env.local` en la raíz del proyecto
2. Copia el contenido de `.env.local.example`
3. Completa las variables:

```bash
# Monday.com API Configuration
MONDAY_API_KEY=eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjEyMzQ1Njc4OSwiaWF0Ij...
MONDAY_BOARD_ID=1234567890

# Calendly Configuration
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/jorgeporras

# Opcional: Personalización Calendly
NEXT_PUBLIC_CALENDLY_BACKGROUND=0a0a0a
NEXT_PUBLIC_CALENDLY_PRIMARY=ff4d00
NEXT_PUBLIC_CALENDLY_TEXT=ffffff
```

4. Guarda el archivo
5. **NUNCA** hagas commit de `.env.local` (ya está en `.gitignore`)

### Opción B: Vercel (Producción)

1. Ve a tu proyecto en Vercel: https://vercel.com/dashboard
2. Selecciona el proyecto "el-gran-salto-films"
3. Ve a **"Settings"** → **"Environment Variables"**
4. Agrega cada variable una por una:

| Name | Value | Environment |
|------|-------|-------------|
| `MONDAY_API_KEY` | Tu API key de Monday.com | Production, Preview, Development |
| `MONDAY_BOARD_ID` | Tu Board ID | Production, Preview, Development |
| `NEXT_PUBLIC_CALENDLY_URL` | https://calendly.com/jorgeporras | Production, Preview, Development |
| `NEXT_PUBLIC_CALENDLY_BACKGROUND` | 0a0a0a | Production, Preview, Development |
| `NEXT_PUBLIC_CALENDLY_PRIMARY` | ff4d00 | Production, Preview, Development |

5. Click **"Save"** en cada una
6. **Redeploy** tu proyecto para que tome las nuevas variables:
   - Ve a **"Deployments"**
   - Click en los 3 puntos del último deployment
   - Click **"Redeploy"**

---

## ✅ PARTE 4: Probar la Integración

### Test 1: Calendly Widget

1. Ve a tu sitio: https://el-gran-salto-films.vercel.app/contacto
2. Asegúrate de que el widget de Calendly carga
3. Intenta agendar una cita de prueba
4. Verifica que aparece en tu calendario de Calendly

### Test 2: Formulario Monday.com

1. Ve a la tab **"Enviar Proyecto"**
2. Completa todos los campos del formulario
3. Click en **"Enviar Solicitud"**
4. Deberías ver un mensaje de éxito verde
5. Ve a Monday.com y verifica que el lead aparece en el grupo "nuevo"

### Test 3: Verificar Configuración

Visita esta URL para verificar que Monday.com está configurado:
```
https://el-gran-salto-films.vercel.app/api/monday
```

Deberías ver:
```json
{
  "configured": true,
  "message": "Monday.com está configurado correctamente"
}
```

Si ves `"configured": false`, las variables de entorno no están configuradas correctamente.

---

## 🐛 Solución de Problemas

### Problema: Calendly no carga

**Síntomas:**
- Widget de Calendly no aparece
- Área en blanco donde debería estar el calendario

**Solución:**
1. Verifica que tu URL de Calendly es correcta
2. Asegúrate de que tu cuenta de Calendly está activa
3. Revisa la consola del navegador (F12) para errores

### Problema: Formulario no envía a Monday.com

**Síntomas:**
- Mensaje de error al enviar formulario
- Datos no aparecen en Monday.com

**Solución:**
1. Verifica que las variables de entorno están configuradas en Vercel
2. Ve a `/api/monday` para verificar configuración
3. Revisa que el Board ID es correcto
4. Verifica que el API key es válido (regenera si es necesario)

### Problema: Error de columnas en Monday.com

**Síntomas:**
- Error: "Column not found" o similar
- Datos parciales en Monday.com

**Solución:**
1. Verifica que todas las columnas existen en tu board
2. Revisa que los nombres de las columnas son exactos (case-sensitive)
3. Si cambiaste nombres de columnas, actualiza `app/api/monday/route.ts`

### Problema: Variables de entorno no funcionan

**Síntomas:**
- API key no se reconoce
- Configuración aparece como `false`

**Solución:**
1. En Vercel, asegúrate de seleccionar **todos** los environments (Production, Preview, Development)
2. **Redeploy** después de agregar variables
3. Espera 2-3 minutos para que el deployment complete
4. Limpia cache del navegador (Ctrl+Shift+R)

---

## 📊 Flujo de Datos Completo

```
Usuario visita /contacto
         ↓
    Ve 2 opciones
    ┌─────┴──────┐
    │            │
Calendly      Monday.com
    │            │
    ↓            ↓
Agenda      Completa
Cita        Formulario
    │            │
    ↓            ↓
Confirma    Envía a
en Email    /api/monday
    │            │
    ↓            ↓
Aparece en  Valida con Zod
Calendario       │
                 ↓
            Llama Monday API
                 │
                 ↓
            Crea Item en Board
                 │
                 ↓
            Notificación en Monday
                 │
                 ↓
            Email de confirmación
```

---

## 🎯 Checklist Final

Antes de considerar el setup completo, verifica:

- [ ] Cuenta de Calendly activa con al menos 1 tipo de evento
- [ ] Board "Leads - El Gran Salto" creado en Monday.com
- [ ] Todas las columnas configuradas en Monday.com
- [ ] Grupo "nuevo" existe en el board
- [ ] API key obtenido y guardado
- [ ] Board ID obtenido y guardado
- [ ] Variables de entorno agregadas en Vercel
- [ ] Proyecto re-deployado en Vercel
- [ ] Widget de Calendly carga correctamente
- [ ] Formulario envía datos a Monday.com
- [ ] Items aparecen en Monday.com board
- [ ] `/api/monday` muestra `"configured": true`

---

## 📞 Siguiente Paso: Automatizaciones (Opcional)

Una vez que el sistema básico funcione, puedes agregar automatizaciones en Monday.com:

### Automatización 1: Notificación por Email
```
When item is created → Send email to info@sutilde.com
```

### Automatización 2: Cambiar Estado Automáticamente
```
When item is created → Set status to "Nuevo"
```

### Automatización 3: Asignar a Persona
```
When item is created and budget is > $100K → Assign to Sales Manager
```

### Automatización 4: Crear Tarea de Seguimiento
```
When item is created → Create item in "Tareas" board
```

Para configurar automatizaciones:
1. En tu board, click en **"Automate"**
2. Selecciona un template o crea uno custom
3. Configura los triggers y acciones
4. Activa la automatización

---

## 🔒 Seguridad

**IMPORTANTE:**

✅ **SÍ hacer:**
- Guardar API keys en variables de entorno
- Usar `.env.local` para desarrollo local
- Nunca hacer commit de `.env.local`
- Regenerar API key si se expone accidentalmente

❌ **NO hacer:**
- Compartir tu API key públicamente
- Hacer commit de archivos con API keys
- Usar el API key en código frontend
- Compartir capturas de pantalla con API keys visibles

---

## 📝 Notas Adicionales

### Personalización de Columnas

Si necesitas agregar o cambiar columnas en Monday.com:

1. Agrega la columna en tu board de Monday.com
2. Actualiza el schema de validación en `components/contacto/MondayForm.tsx`
3. Actualiza la función `prepareColumnValues()` en `app/api/monday/route.ts`
4. Agrega el campo al formulario en `MondayForm.tsx`

### Límites del Plan Gratuito

**Monday.com (Free Trial):**
- 14 días gratis
- 2 usuarios
- Boards ilimitados
- 1000 items por board
- Automatizaciones básicas

**Calendly (Free):**
- 1 tipo de evento activo
- Integraciones limitadas
- Sin recordatorios automáticos

Después del trial, Monday.com cuesta ~$8-12/mes por usuario.

---

## ✨ Mejoras Futuras

Posibles mejoras para implementar después:

1. **Email de Confirmación Automático**
   - Enviar email al cliente cuando envía formulario
   - Implementar con Resend o SendGrid

2. **Webhook de Monday.com**
   - Recibir notificaciones cuando cambia el estado del lead
   - Actualizar dashboard en tiempo real

3. **Google Analytics Events**
   - Trackear cuando alguien agenda cita
   - Trackear envíos de formulario
   - Medir tasa de conversión

4. **CRM Dashboard**
   - Página interna para ver leads
   - Estadísticas de conversión
   - Pipeline visual

---

¿Tienes problemas? Revisa la sección de **Solución de Problemas** arriba o contacta al equipo de desarrollo.
