# PROMPT — ZULE COFFEE LANDING PAGE (Next.js + Tailwind)
### Para: Claude Opus 4.6 · Workflow: Orchestration Completo

---

## 🧠 CONTEXTO DEL CLIENTE

**Empresa:** Zule Coffee  
**Fundadora:** Denys Zuleta  
**Ubicación:** Medellín, Antioquia, Colombia  
**Instagram:** @zulecoffee  
**Concepto:** Café · Repostería Artesanal · Cultura · Inclusión · Libros · Deporte · Aventura

**Historia resumida:**  
Zule Coffee nació en 2021 como un homenaje al padre caficultor de Denys, fallecido en 2016. Comenzó como café móvil ("La Manzana") y hoy opera el **Café Librería Fórum** en el Bloque 11 de la Universidad Pontificia Bolivariana (UPB), campus Laureles, Medellín. Ganó el premio al "Desempeño Empresarial Destacado" en el Famiempresario Interactuar 2025 — el evento microempresarial más importante de Colombia.

**Puntos de venta:**
1. **Café Librería Fórum** — Bloque 11, UPB Campus Laureles, Medellín (punto físico fijo, 60 m², café literario)
2. **La Manzana** — Café móvil para eventos, ferias y campus externos

**Portafolio:**
- Café de especialidad de origen colombiano (marca propia, tostado artesanal)
- Repostería artesanal (recetas de la abuela de Denys)
- Catering para eventos corporativos y universitarios
- Activaciones culturales (libros, deporte, aventura)

**Valores:** Autenticidad · Inclusión laboral (7 empleos directos: jóvenes, mayores de 45, comunidad LGTBIQM+) · Propósito social · Reciprocidad · Comunidad

**Dolor principal del cliente:**  
Zule Coffee **no tiene presencia web**. Toda su comunicación ocurre vía Instagram. El dolor se traduce en:
- Clientes que no pueden encontrar horarios, menú o ubicación fácilmente
- Sin canal de contacto para catering y eventos
- Historia de marca poderosa que no está siendo capitalizada digitalmente
- Sin forma de mostrar los dos puntos de venta diferenciados
- Sin enlace en bio funcional, sin reservas, sin catálogo digital

**Objetivo de este MVP web:**  
Una landing page que funcione como tarjeta de presentación digital premium: cuente la historia, muestre el menú, comunique los puntos de venta con horarios, invite al catering y capture leads.

---

## 🎯 OBJETIVO DEL PROYECTO

Construir una **landing page MVP** de Zule Coffee en **Next.js con Tailwind CSS** que:

1. Transmita el alma de la marca (café con historia, inclusión, calidez artesanal)
2. Resuelva los dolores digitales concretos del cliente
3. Sea responsive y mobile-first (audiencia universitaria UPB)
4. Sea visualmente bella, memorable y distinta — no genérica
5. Sirva como demo/borrador de alta calidad para presentar al cliente mañana

---

## 🔧 STACK TÉCNICO

- **Framework:** Next.js 14+ (App Router)
- **Estilos:** Tailwind CSS v4
- **Fuentes:** Google Fonts via `next/font` — usar una combinación editorial que evoque calidez artesanal y cultura literaria. Sugerencia de dirección: una serif expresiva para display (ej. Playfair Display, Cormorant Garamond, o similar) + una sans limpia para cuerpo (ej. DM Sans, Outfit, Nunito). No usar Inter, Roboto, Arial.
- **Íconos:** lucide-react
- **Imágenes:** next/image con placeholders de color cálido (no Lorem Picsum genérico — usar divs con gradientes temáticos mientras no haya fotos reales)
- **Animaciones:** CSS transitions + Tailwind animate utilities. Si agregas JS, usar solo el que ya trae React.
- **Sin dependencias innecesarias.** Nada de librerías de componentes pesadas. Tailwind puro + componentes custom.

---

## 🏛️ ARQUITECTURA — SINGLE PAGE (IMPORTANTE)

This is a **single-page landing**, NOT a multi-route app.

- There is only **one route**: `app/page.tsx`
- All sections live in that single page, assembled via imported components
- Navigation links are **anchor links** (`href="#menu"`, `href="#about"`, etc.), not Next.js `<Link>` routes
- Each section component must have a matching `id` attribute (e.g. `<section id="menu">`)
- Do NOT create `app/menu/page.tsx`, `app/about/page.tsx` or any subroutes
- File structure:

```
app/
  layout.tsx        ← root layout, fonts, metadata
  page.tsx          ← single page, imports all section components
  globals.css       ← global styles, CSS variables
components/
  Navbar.tsx
  Hero.tsx
  About.tsx
  Menu.tsx
  Locations.tsx
  Purpose.tsx
  Catering.tsx
  Footer.tsx
tailwind.config.ts
```

---

## 🇺🇸 CODE LANGUAGE RULE (MANDATORY)

**All code must be written in English.** This includes:
- Component names (`Hero`, `Navbar`, `Locations`, not `Inicio`, `Navegacion`, `Ubicaciones`)
- Variable and function names (`isScrolled`, `activeTab`, `handleSubmit`)
- TypeScript types and interfaces (`MenuCategory`, `LocationCardProps`)
- Tailwind config keys (`coffeeBrown`, `creamBase`, `leafGreen`)
- File names (`Hero.tsx`, not `Inicio.tsx`)
- Code comments (`// Sticky navbar with blur on scroll`)
- CSS custom properties (`--color-primary`, `--font-display`)
- HTML `id` attributes used as anchor targets (`id="about"`, `id="menu"`, `id="locations"`)

**User-facing copy (visible text in the UI) stays in Spanish**, as this is content for Colombian users.

---

## 🎨 DIRECCIÓN ESTÉTICA

**Paleta de color (propuesta temática — ajusta si encuentras algo más auténtico):**
- Primario: tonos tierra cálidos — café tostado (`#4A2C2A`), crema suave (`#FAF3E0`), ámbar dorado (`#C8872B`)
- Acento: verde hoja de cafeto (`#4A6741`) para toques de frescura y naturaleza
- Fondo: crema casi blanco (`#FDF8F0`) — nunca blanco puro
- Texto principal: marrón oscuro profundo, no negro puro

**Estética general:**
- Editorial artesanal: como una revista de cultura + café de tercera ola
- Espaciado generoso, tipografía protagonista, imágenes que "respiran"
- Elementos que evocan textura, calidez, origen (sin ser kitsch ni folclórico)
- Asimetría controlada: no todo alineado al centro
- Mobile: navegación hamburguesa elegante, secciones apiladas limpiamente

**Lo que hay que EVITAR:**
- Gradientes genéricos de IA (morado/azul sobre blanco)
- Layouts de cafetería predictables con foto de latte art arriba a la derecha
- Fuentes genéricas del sistema
- Componentes que parezcan Bootstrap o Material UI
- Botones con sombras excesivas o bordes redondeados extremos genéricos

---

## 📐 SECTION ARCHITECTURE

The landing must have these sections in order, all assembled in `app/page.tsx` with separate components in `components/`. Remember: **single page, anchor links, no subroutes.**

### 1. `<Navbar />` — `id` not needed (fixed/sticky)
- Logo text "Zule Coffee" with display typeface
- Anchor links: `href="#menu"` · `href="#about"` · `href="#locations"` · `href="#catering"` · `href="#contact"`
- Label text in Spanish: Menú · Nuestra Historia · Dónde Estamos · Catering · Contacto
- Right CTA button: "Visítanos" → `href="#locations"`
- Sticky with translucent background + blur on scroll (`isScrolled` state)
- Hamburger menu on mobile (`isMenuOpen` state)

### 2. `<Hero />` — `id="home"`
- Frase principal: **"Un café para permitirte soñar."** (cita directa de Denys Zuleta)
- Subfrase: "Café de especialidad, repostería artesanal y cultura — en el corazón de la UPB, Medellín."
- Placeholder visual: un div grande con gradiente de tonos café, simulando fotografía
- CTA principal: "Ver Menú" · CTA secundario: "Nuestra historia"
- Elemento visual: badge o chip con "Premio Famiempresario Interactuar 2025" (sin ostentación, elegante)

### 3. `<About />` — `id="about"`
- Título: "Una taza con historia"
- Narración en 2 bloques de texto:
  - Bloque 1: El sueño del padre caficultor, el legado, el comienzo
  - Bloque 2: De café móvil a café literario universitario
- Cita destacada en tipografía grande: "Somos parte del café colombiano que conecta personas con sus sueños."
- Indicadores visuales: pequeña línea de tiempo (2016 → 2021 → 2022 → 2025) con hitos clave
- Foto placeholder: gradiente marrón-crema con ícono de café o libro superpuesto

### 4. `<Menu />` — `id="menu"`
- Título: "Lo que preparamos con amor"
- Dividido en 3 categorías con tabs o secciones visuales:
  - **☕ Café de Especialidad:** Espresso, filtrados, bebidas frías, origen colombiano
  - **🥐 Repostería Artesanal:** Panes, tortas y postres de recetas familiares
  - **🎉 Catering & Eventos:** Servicio externo para eventos corporativos y universitarios
- Cada ítem: nombre + descripción breve (1 línea) + precio placeholder "Desde $X.XXX COP" o sin precio si prefieres
- Nota al pie: "Menú sujeto a disponibilidad. Pregunta por las preparaciones del día."

### 5. `<Locations />` — `id="locations"`
- Título: "¿Dónde encontrarnos?"
- Dos tarjetas lado a lado (en mobile, apiladas):
  
  **Tarjeta 1 — Café Librería Fórum (UPB)**
  - 📍 Bloque 11, Campus Laureles, UPB, Medellín
  - 🕐 Horarios: Lunes a Viernes 7:00 am – 6:00 pm · Sábados 9:00 am – 1:00 pm *(placeholder — ajustar con horario real)*
  - Descripción: "Nuestro espacio de 60 m² donde convergen el café, los libros y la comunidad universitaria."
  - CTA: "Cómo llegar →" (link a Google Maps con coordenadas UPB Laureles)

  **Tarjeta 2 — La Manzana (Café Móvil)**
  - 📍 Eventos, ferias y campus en Medellín
  - Descripción: "Donde comenzó todo. Nos llevamos a tu evento el mismo café con el que soñamos."
  - CTA: "Contáctanos para eventos →" (ancla a sección contacto)

### 6. `<Purpose />` — `id="purpose"`
- Sección de impacto: "Más que café — un proyecto con alma"
- 3 columnas de íconos + texto:
  - 🌱 **Origen local:** Café colombiano de productores seleccionados, tostado en alianza con microtostadora antioqueña
  - 🤝 **Inclusión:** 7 empleos directos para jóvenes, adultos mayores de 45 años y comunidad LGTBIQM+
  - 📚 **Cultura:** Un espacio para soñar, leer, conectar y hacer comunidad en la UPB
- Fondo diferenciado: sección con fondo oscuro (marrón profundo) y texto claro — contraste visual elegante

### 7. `<Catering />` — `id="catering"`
- Título: "Llevamos Zule Coffee a tu evento"
- Copy breve que destaque: catering corporativo, eventos universitarios, ferias
- Formulario simple de contacto:
  - Nombre
  - Correo electrónico
  - Tipo de evento (select: Corporativo / Universitario / Social / Otro)
  - Número de personas (input)
  - Mensaje
  - Botón: "Solicitar cotización"
- Nota: formulario estático por ahora (sin backend) — `onSubmit` puede mostrar mensaje de confirmación visual

### 8. `<Footer />` — `id="contact"`
- Logo + tagline "Café · Deporte · Libros · Aventura"
- Links rápidos
- Instagram: @zulecoffee
- Dirección UPB
- Copyright: "© 2025 Zule Coffee — Hecho con ❤️ en Medellín"

---

## ⚙️ WORKFLOW DE ORQUESTACIÓN (MANDATORIO — NO SALTARSE NINGUNA FASE)

Debes seguir este flujo completo antes de escribir la primera línea de código:

---

### FASE 1 — PLANIFICACIÓN 🗺️
*(Piensa en voz alta antes de codear)*

Antes de escribir código, responde por escrito en un bloque de comentario o sección separada:

1. **Estructura de archivos:** Lista completa de archivos que vas a crear (`app/page.tsx`, `components/Navbar.tsx`, etc.)
2. **Decisiones de diseño:** ¿Qué fuentes elegiste y por qué? ¿Cuál es la paleta exacta? ¿Hay algo del brief que cambiaste y por qué?
3. **Decisiones técnicas:** ¿Cómo manejas el estado del menú (tabs)? ¿Cómo el navbar sticky? ¿El formulario?
4. **Riesgos identificados:** ¿Qué partes podrían quedar genéricas o flojas si no se cuidan?

---

### FASE 2 — DISEÑO & TOKENS 🎨
*(Define el sistema visual antes de los componentes)*

Crea primero:
- `tailwind.config.ts`: extiende colores con la paleta de Zule Coffee, tipografías custom, y cualquier valor de spacing o breakpoints no estándar
- `app/globals.css`: importa fuentes, define variables CSS base, estilos globales (scrollbar, selección de texto, etc.)
- `app/layout.tsx`: fuentes vía `next/font`, metadata completa (title, description, og tags de Zule Coffee), estructura base

---

### FASE 3 — COMPONENTES (de mayor a menor impacto) 🏗️

Build in this exact order — each component must be visually complete before moving to the next:

1. `components/Navbar.tsx` — scroll state (`isScrolled`), mobile hamburger state (`isMenuOpen`), anchor links
2. `components/Hero.tsx` — must be striking. This is the first thing Denys sees. Do not hold back.
3. `components/About.tsx` — maximum emotional weight. Typography and spacing do the heavy lifting.
4. `components/Menu.tsx` — functional tabs (`activeTab` state), well-organized categories
5. `components/Locations.tsx` — two differentiated cards with full operational info
6. `components/Purpose.tsx` — dark background section, clean and impactful
7. `components/Catering.tsx` — form with clear UX and visual success confirmation (`isSubmitted` state)
8. `components/Footer.tsx` — elegant close

Finally:
9. `app/page.tsx` — imports and assembles all components in order

---

### FASE 4 — VALIDACIÓN 🔍
*(Antes de entregar, chequea activamente)*

Revisa cada uno de estos puntos y corrígelos si no se cumplen:

**Visual:**
- [ ] ¿El Hero impacta y comunica la historia de la marca en 3 segundos?
- [ ] ¿La paleta es coherente en todos los componentes? ¿No hay colores "fugados"?
- [ ] ¿Las fuentes se ven correctas en todos los tamaños de texto?
- [ ] ¿Los placeholders visuales (gradientes) tienen el color correcto? ¿No hay fondos blancos genéricos?
- [ ] ¿La sección oscura (Propósito) contrasta bien y no se ve rota?

**Funcional:**
- [ ] ¿El Navbar se vuelve opaco/blur al hacer scroll?
- [ ] ¿El hamburger menu funciona en mobile?
- [ ] ¿Los tabs del Menú cambian de categoría correctamente?
- [ ] ¿El formulario de Catering muestra mensaje de confirmación al enviar?
- [ ] ¿Los links de ancla (`#menu`, `#historia`, etc.) funcionan?
- [ ] ¿El link de Google Maps en la tarjeta de Fórum abre correctamente?

**Código:**
- [ ] ¿Todos los imports son correctos y no hay módulos faltantes?
- [ ] ¿Los tipos TypeScript son correctos? ¿No hay `any` innecesarios?
- [ ] ¿`next/image` está usado correctamente donde haya imágenes?
- [ ] ¿El `tailwind.config.ts` extiende (no reemplaza) el tema base?
- [ ] ¿`app/layout.tsx` tiene el metadata correcto de Zule Coffee?

**Responsive:**
- [ ] ¿Todas las secciones se ven bien en 375px (iPhone SE)?
- [ ] ¿Las dos tarjetas de Ubicaciones se apilan en mobile?
- [ ] ¿El menú de navegación colapsa correctamente?
- [ ] ¿Los tamaños de fuente del Hero no se salen del viewport en mobile?

---

### FASE 5 — IMPLEMENTACIÓN FINAL 🚀
*(Entrega limpia y completa)*

- Entrega **todos los archivos completos**, sin truncar, sin "// ... resto del código"
- Orden de entrega: `tailwind.config.ts` → `globals.css` → `layout.tsx` → componentes (en orden de construcción) → `page.tsx`
- Al final de cada archivo, incluye un comentario de una línea con el propósito del archivo
- Incluye al final del prompt un resumen de **decisiones de diseño tomadas** y **qué ajustar cuando el cliente provea fotos reales**

---

## 📌 NOTAS ADICIONALES PARA EL MODELO

- **No uses imágenes externas de placeholder** (Lorem Picsum, etc.). Usa divs con gradientes de la paleta Zule Coffee. Esto es un borrador y debe verse como una decisión de diseño, no como un error.
- **El copy ya está dado en este prompt.** Úsalo textual en los componentes — no lo inventes ni lo parafrasees con IA genérica.
- **La historia de Denys y su padre es el corazón de la marca.** La sección Historia debe tener el mayor cuidado tipográfico y emocional de toda la página.
- **El cliente verá esto mañana.** Debe verse como una propuesta profesional real, no como un template de cafetería de tutorial de YouTube.
- **Mobile-first.** El 90% de los usuarios del campus UPB navegan desde el celular.
- **No hay backend.** El formulario de catering es estático y muestra un mensaje de éxito al submit.
- Si hay algo del brief que es ambiguo o que puedes mejorar creativamente, **hazlo y explica por qué** en la Fase 1.

---

## ✅ CRITERIO DE ÉXITO

Este proyecto está bien hecho si al abrirlo:
1. Denys Zuleta **reconoce su marca** y **siente que alguien entendió su historia**
2. Un estudiante de la UPB **encuentra horarios, menú y ubicación en menos de 10 segundos**
3. Una empresa que busca catering **sabe exactamente cómo contactarlos**
4. Cualquier persona que no conoce Zule Coffee **quiere visitarlo después de ver la landing**

---

*Prompt elaborado para presentación de propuesta web — Makers Fellowship · Marzo 2026*