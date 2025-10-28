# Plan de Integración: Calendly + Monday.com
## Sistema de Contacto Profesional - El Gran Salto

---

## 🎯 OBJETIVO

Crear un sistema de contacto dual que permita:
1. **Agendar llamadas** directamente con Calendly
2. **Enviar solicitudes de proyecto** a Monday.com para gestión

---

## 📋 PLAN ESTRUCTURADO

### FASE 1: Análisis y Diseño ✅

#### Flujo de Usuario

```
Cliente llega a /contacto
         |
         v
    Ve 2 opciones:
         |
    ┌────┴────┐
    v         v
Agendar    Enviar
Llamada    Proyecto
    |         |
Calendly   Monday.com
Widget     Formulario
```

#### Decisión de Diseño

**Opción A: Tabs (Pestañas)** ⭐ Recomendado
```
┌─────────────────────────────────────┐
│ [Agendar Llamada] [Enviar Proyecto] │
├─────────────────────────────────────┤
│                                     │
│     [Contenido de tab activa]       │
│                                     │
└─────────────────────────────────────┘
```

**Opción B: Side by Side (Lado a lado)**
```
┌──────────────┬──────────────┐
│   Calendly   │   Monday.com │
│   Widget     │   Formulario │
└──────────────┴──────────────┘
```

**Elección:** Opción A (Tabs) - Mejor UX en mobile

---

### FASE 2: Integración Calendly ✅

#### Implementación

**Tipo:** Embed Widget (iframe)

**Opciones disponibles:**

1. **Inline Embed** (Recomendado)
```html
<div class="calendly-inline-widget"
     data-url="https://calendly.com/jorgeporras"
     style="min-width:320px;height:700px;">
</div>
```

2. **Popup Widget**
```html
<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
<script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript"></script>
<a href="" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/jorgeporras'});return false;">
  Agendar Llamada
</a>
```

3. **Popup Text**
```html
<div class="calendly-badge-widget"
     data-url="https://calendly.com/jorgeporras">
  <a>Agendar una llamada</a>
</div>
```

**Decisión:** Inline Embed - Mejor integración visual

**Personalización disponible:**
- `hide_event_type_details=1` - Ocultar detalles
- `background_color=0a0a0a` - Color de fondo
- `text_color=ffffff` - Color de texto
- `primary_color=ff4d00` - Color de marca

---

### FASE 3: Integración Monday.com ✅

#### Arquitectura

```
Formulario (Frontend)
       ↓
Validación Zod
       ↓
API Route (/api/monday)
       ↓
Monday.com API
       ↓
Board/Item creado
```

#### Requisitos Monday.com

**1. API Key**
- Obtener en: Monday.com → Profile → Admin → API
- Guardar en: `.env.local` como `MONDAY_API_KEY`

**2. Board ID**
- ID del tablero donde crear items
- Guardar en: `.env.local` como `MONDAY_BOARD_ID`

**3. GraphQL API**
```graphql
mutation {
  create_item (
    board_id: BOARD_ID,
    group_id: "nuevo",
    item_name: "Proyecto: NOMBRE",
    column_values: "{...}"
  ) {
    id
  }
}
```

#### Campos del Formulario → Monday.com

| Campo Formulario | Columna Monday | Tipo |
|------------------|----------------|------|
| Nombre | Nombre del Item | Text |
| Email | Email | Email |
| Teléfono | Teléfono | Phone |
| Empresa | Empresa | Text |
| Tipo de Proyecto | Tipo | Dropdown |
| Deporte | Deporte | Text |
| Presupuesto | Presupuesto | Dropdown |
| Fecha Tentativa | Fecha Inicio | Date |
| Mensaje | Descripción | Long Text |
| Ubicación | Ciudad | Dropdown |

---

### FASE 4: Estructura de Archivos

```
/app
├── /contacto
│   └── page.tsx (Rediseñado con tabs)
├── /api
│   └── /monday
│       └── route.ts (Nuevo - API para Monday)
/components
├── /contacto (Nuevo)
│   ├── CalendlyEmbed.tsx (Widget Calendly)
│   ├── MondayForm.tsx (Formulario Monday)
│   └── ContactTabs.tsx (Tabs container)
└── /shared
    └── ContactForm.tsx (Deprecado - reemplazar)
```

---

### FASE 5: Variables de Entorno

**.env.local**
```bash
# Monday.com API
MONDAY_API_KEY=eyJhbGciOiJIUzI1NiJ9...
MONDAY_BOARD_ID=1234567890

# Calendly (público - no necesita env)
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/jorgeporras

# Opcional: Personalización
NEXT_PUBLIC_CALENDLY_BACKGROUND=0a0a0a
NEXT_PUBLIC_CALENDLY_PRIMARY=ff4d00
```

**.env.local.example**
```bash
# Monday.com API
MONDAY_API_KEY=your_monday_api_key_here
MONDAY_BOARD_ID=your_board_id_here

# Calendly
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-username
```

---

### FASE 6: Seguridad

**Consideraciones:**

1. **API Keys**
   - ❌ NUNCA exponer en frontend
   - ✅ Solo usar en API routes (server-side)
   - ✅ Validar en servidor antes de enviar

2. **Rate Limiting**
   - Prevenir spam
   - Implementar captcha (opcional)

3. **Validación**
   - Frontend: Zod validation
   - Backend: Double validation
   - Sanitización de inputs

---

### FASE 7: Testing

**Checklist:**

- [ ] Calendly widget carga correctamente
- [ ] Calendly responsive en mobile
- [ ] Formulario Monday valida campos
- [ ] API Monday envía correctamente
- [ ] Error handling funciona
- [ ] Success messages se muestran
- [ ] Loading states visibles
- [ ] Tabs funcionan en mobile
- [ ] Todo funciona sin JS (progressive enhancement)

---

## 🚀 IMPLEMENTACIÓN

### Lo que YO puedo hacer (sin configuración):

✅ Crear componente CalendlyEmbed
✅ Crear componente MondayForm
✅ Crear sistema de Tabs
✅ Rediseñar página de contacto
✅ Crear API route para Monday
✅ Implementar validación completa
✅ Agregar loading states
✅ Error handling
✅ Success messages
✅ Responsive design
✅ Documentación completa

### Lo que TÚ necesitas configurar:

⏳ Obtener Monday.com API Key
⏳ Crear Board en Monday.com
⏳ Obtener Board ID
⏳ Configurar columnas en Monday
⏳ Agregar variables a .env.local en Vercel

---

## 📊 VENTAJAS vs Formulario Simple

| Característica | Formulario Email | Calendly + Monday |
|----------------|------------------|-------------------|
| Agendar citas | ❌ Manual | ✅ Automático |
| Gestión de leads | ❌ Email | ✅ CRM (Monday) |
| Recordatorios | ❌ No | ✅ Automático |
| Calendario sync | ❌ No | ✅ Google/Outlook |
| Pipeline de ventas | ❌ No | ✅ Sí (Monday) |
| Métricas | ❌ No | ✅ Completo |
| Profesionalismo | ⭐⭐ | ⭐⭐⭐⭐⭐ |

---

## 💰 Costos

| Servicio | Plan Gratuito | Límites |
|----------|---------------|---------|
| **Calendly** | Sí | 1 tipo de evento |
| **Monday.com** | Sí (14 días) | 2 usuarios |
| **Vercel** | Sí | Ilimitado |

**Costo Total:** $0 para empezar

---

## 📅 Timeline de Implementación

| Fase | Tiempo | Responsable |
|------|--------|-------------|
| Desarrollo código | 2 horas | Claude (YO) |
| Testing local | 30 min | Claude |
| Documentación | 30 min | Claude |
| Configurar Monday | 30 min | TÚ |
| Obtener API keys | 15 min | TÚ |
| Deploy y testing | 30 min | Ambos |
| **TOTAL** | **4 horas** | - |

---

## 🎯 PRÓXIMOS PASOS INMEDIATOS

### AHORA (Yo lo hago):
1. Crear componentes de Calendly
2. Crear formulario Monday
3. Crear sistema de tabs
4. API route para Monday
5. Rediseñar página contacto
6. Documentación de setup

### DESPUÉS (Tú lo haces):
1. Crear cuenta Monday.com (si no tienes)
2. Crear Board "Leads - El Gran Salto"
3. Configurar columnas
4. Obtener API Key
5. Obtener Board ID
6. Agregar a Vercel env vars

---

## 📝 NOTAS IMPORTANTES

### Monday.com Setup

**Columnas recomendadas para el Board:**

1. **Nombre** (default)
2. **Email** (Email)
3. **Teléfono** (Phone)
4. **Empresa** (Text)
5. **Tipo de Proyecto** (Dropdown)
   - Opciones: Documental, Evento, Marketing, Otro
6. **Deporte** (Text)
7. **Presupuesto** (Dropdown)
   - Opciones: < $50K, $50K-100K, $100K-250K, > $250K, Por definir
8. **Ubicación** (Dropdown)
   - Opciones: CDMX, Querétaro, Chihuahua, Monterrey, Guadalajara, Cancún
9. **Fecha Inicio** (Date)
10. **Estado** (Status)
    - Nuevo, Contactado, Propuesta, Cerrado, Perdido
11. **Descripción** (Long Text)

---

¿Procedo con la implementación completa?
