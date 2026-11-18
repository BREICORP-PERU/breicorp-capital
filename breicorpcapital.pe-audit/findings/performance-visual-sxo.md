# Rendimiento, imágenes, revisión visual y SXO

Fecha: 2026-11-18. Objetivo: `https://www.breicorpcapital.pe/`. Método: herramientas `pagespeed_check.py`, `parse_html.py --probe-images` y `capture_screenshot.py` de Claude SEO; contraste con `src/components/sections/HeroSection.tsx`, `ServicesSection.tsx` y las rutas de `src/app/`.

## Rendimiento: sin medición de Core Web Vitals

PageSpeed Insights para móvil y escritorio respondió **“PSI rate limit exceeded”** sin clave API. No produjo Lighthouse ni datos de campo CrUX. Por ello **no se asignan valores ni puntuaciones de LCP, INP, CLS o velocidad**. Reintentar con una clave propia de PageSpeed Insights o medir con Lighthouse local antes de priorizar cambios por rendimiento.

## Imágenes: buen formato; aviso de dimensiones no confirmado como defecto

El análisis de la portada encontró **6 imágenes, todas con texto alternativo**. `--probe-images` confirmó que las seis se sirven en **WebP** y ninguna dio error de sondeo. Tamaños de las variantes consultadas: logos 2.056 bytes cada uno, hero 136.284, tarjetas 77.496, 116.674 y 30.398 bytes. La imagen hero no usa carga diferida; las tres tarjetas sí.

`page_checks.py` señala cuatro imágenes sin atributos HTML `width`/`height`. Es una **heurística potencialmente falsa para este proyecto**: esas cuatro imágenes usan `next/image` con `fill`, `sizes` y contenedores que reservan espacio (`aspect-[4/4.5]` para hero; `h-48` para tarjetas). No hay evidencia de CLS real; no recomendar añadir dimensiones a ciegas ni reconvertir archivos `.jpg` cuyo formato servido ya es WebP. Verificar CLS con una medición de navegador antes de tratar el aviso como incidencia.

## Revisión visual

Claude SEO capturó correctamente la portada completa en escritorio, laptop, tablet y móvil; también una captura del primer viewport móvil. Al inspeccionarlas, el titular y las acciones principales son visibles, las tarjetas se apilan en móvil y no se aprecia desbordamiento horizontal. La barra móvil fija y el botón flotante de WhatsApp aparecen separados; el botón cubre una pequeña parte del contenido inferior del primer viewport, comportamiento esperable de un control flotante. No se hizo una prueba interactiva de teclado ni de envío de formularios.

Capturas conservadas con el informe: [`desktop.png`](../screenshots/desktop.png), [`tablet.png`](../screenshots/tablet.png) y [`mobile.png`](../screenshots/mobile.png).

## SXO: oportunidad editorial, sin consenso SERP medido

La portada agrupa tres intenciones comerciales (crédito MYPE, crédito con garantía hipotecaria e inversión). La inversión tiene página propia, pero las dos ofertas de crédito solo tienen tarjetas en la portada y CTA hacia WhatsApp; `src/app/` no contiene páginas individuales para ellas. **Oportunidad de prioridad media, condicionada a investigación de búsquedas:** estudiar consultas reales y páginas que aparecen para cada oferta en Tingo María y Huánuco. Si existe demanda diferenciada, crear páginas informativas específicas con requisitos, proceso y CTA; medir impresiones y consultas en Search Console. No se obtuvo una muestra SERP localizada ni datos de Search Console, por lo que no se afirma desajuste de intención ni se calcula una puntuación SXO.
