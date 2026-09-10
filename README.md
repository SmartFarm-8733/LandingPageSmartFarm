# ICHU — Landing Page

Landing page de **ICHU**, plataforma de tecnología para la ganadería inteligente en el Perú. Sitio estático (HTML + CSS + JS, sin frameworks ni build), con diseño editorial verde bosque / dorado inspirado en el pasto andino *ichu*.

**Repositorio:** `SmartFarm-8733/LandingPageSmartFarm`

---

## Estructura del proyecto

```
├── index.html              # Página principal (una sola página con secciones ancladas)
├── media.html              # Web y Media — videos informativos (submenú de "Quiénes somos")
├── como-funciona.html      # Cómo funciona — paso a paso (submenú de "Tecnología")
├── css/
│   └── styles.css          # Único hoja de estilos (tokens, componentes, modo noche, responsive)
├── js/
│   ├── i18n.js             # Diccionario ES/EN y lógica de alternancia de idioma
│   └── main.js             # Cabecera, menú móvil, submenús, modo día/noche, animaciones,
│                           # contadores, simulador de chat y formulario con envío por WhatsApp
├── img/                    # Imágenes optimizadas en WebP (retratos, mapa del predio, logo)
├── video/
│   └── vacas-corriendo.mp4 # Video de fondo del hero (loop)
└── ICHU_logo_pack/         # Logotipos oficiales de la marca
```

## Páginas

| Archivo | Contenido | Entrada en la cabecera |
|---|---|---|
| `index.html` | Hero con video, quiénes somos, el problema, qué es ICHU, ganaderos, veterinarios, alertas, mapa, tecnología, contacto | Inicio |
| `media.html` | Dos bloques de videos informativos ("01 · Web" y "02 · Media") | Submenú de **Quiénes somos** → Web y Media |
| `como-funciona.html` | Los 3 pasos (Registra → Supervisa → Decide) y demo en preparación | Submenú de **Tecnología** → Cómo funciona |

La cabecera es idéntica en las 3 páginas: en el inicio es transparente y se vuelve verde al hacer scroll; en las páginas internas arranca en verde sólido (clase `solid`).

## Funcionalidades

- **Modo día / noche**: botón junto al de idioma. Guarda la preferencia en `localStorage` (`ichu-theme`) y se aplica antes del primer render (sin parpadeo). La paleta vive en variables CSS de `:root`; el modo noche solo reasigna tokens (`html[data-theme='night']`).
- **Idioma ES/EN**: botón con globo. Traducción en runtime vía diccionario en `js/i18n.js` (textos, placeholders, `alt`, `aria-label` y `<title>`). Preferencia persistida (`ichu-lang`). Las cadenas sin traducción permanecen intactas.
- **Submenús de cabecera**: "Quiénes somos" y "Tecnología" despliegan sus opciones con hover, clic o teclado (aria-expanded / role menu). Soportan varios submenús por página.
- **Menú móvil**: drawer lateral accesible con overlay, cierre con Escape y enfoque administrado.
- **Formulario de contacto**: validación en vivo y envío que abre WhatsApp con la solicitud prellenada + modal de confirmación.
- **Simulador de chat**: burbujas con respuestas automáticas (ilustrativo, en el teléfono de la sección de contacto).
- **Animaciones**: aparición al hacer scroll (IntersectionObserver) y contadores de estadísticas. Con `prefers-reduced-motion` se desactivan y el video del hero se pausa.
- **Embeds / preview**: `og:image` y `twitter:image` usan el logo del encabezado con URL absoluta.

## Cómo ejecutar

Sitio estático: basta con abrir `index.html` en el navegador.

Para servirlo localmente (rutas relativas y recarga):

```bash
npx serve .
# o
python -m http.server 8080
```

## Personalización pendiente (placeholders)

| Qué | Dónde |
|---|---|
| Número real de WhatsApp | constante `WHATSAPP_NUMBER` en `js/main.js` y enlace `wa.me` de la barra superior |
| Correo real | `mailto:hola@ichu.pe` en las cabeceras |
| Links de YouTube de los videos | `<iframe src>` y enlaces "Ver en YouTube" en `media.html` |
| Cuentas reales de redes | enlaces del bloque `footer-social` (LinkedIn, X, Instagram, sitio) |
| Dominio final | URL de `og:image` / `twitter:image` y `url` del JSON-LD |

## Guía rápida de estilo

- **Paleta**: tokens en `:root` (`--forest-*`, `--gold-*`, `--cream-*`, `--ink-*`). Cambiar un token actualiza todo el sitio, modo noche incluido.
- **Tipografías**: Outfit (títulos) y Plus Jakarta Sans (texto) + Anton/Fraunces en la portada. Cargadas desde Google Fonts.
- **Iconos**: [lucide](https://lucide.dev) v1.43.0 vía CDN (`data-lucide`). Los iconos de marca (LinkedIn, X, Instagram) van como SVG inline porque lucide ya no los incluye.
- **Imágenes**: WebP con dimensiones explícitas y `loading="lazy"` (solo el logo del encabezado va sin lazy).
- **Validación**: cada cambio se verifica con un script jsdom (IDs duplicados, recursos faltantes, anclas rotas, estilos inline).

## Despliegue

Cualquier hosting estático sirve (GitHub Pages, Netlify, Vercel). Con GitHub Pages basta habilitarlo sobre la rama `main`.
