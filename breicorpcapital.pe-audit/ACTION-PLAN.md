# Plan de acción SEO

## 1. Publicar y verificar el dominio canónico — prioridad alta

Desplegar los cambios locales ya preparados de `siteConfig.domain`, canonical y metadatos sociales, conservando los cambios existentes sin confirmar. Después comprobar en producción: redirección a `https://www.breicorpcapital.pe/`, canonical propio en portada e inversionistas, `og:url` e imagen social bajo ese host, `robots.txt` anunciando el sitemap del dominio y cuatro `<loc>` del mismo host. **Fallo observable:** cualquier referencia de producción a `breicorp-capital.vercel.app` en estos elementos.

## 2. Alinear sitemap e indexabilidad — prioridad alta

Retirar del sitemap privacidad y términos mientras mantengan `noindex, nofollow` y sigan como borradores. Conservar sus rutas accesibles para usuarios. Revisar el `<lastmod>` fijo: usar una fecha respaldada por cambios sustanciales o eliminarlo. **Fallo observable:** sitemap con URLs no indexables o fechas sin relación con el contenido.

## 3. Confirmar señales de confianza — prioridad alta, requiere datos de la empresa

Confirmar razón social y datos de identificación, teléfono, correos, horario, cobertura y si existe un local visitable o solo área de servicio. Tras revisión legal, alinear las páginas comerciales, legales y cualquier Perfil de Empresa administrado. Añadir información verificable sobre el equipo y el proceso sin prometer aprobación ni rentabilidad. **Fallo observable:** datos distintos entre web, documentos empresariales y perfil; afirmaciones sin respaldo.

## 4. Mejorar contenido y marcado — prioridad media

Con datos confirmados, añadir JSON-LD `Organization` y `WebSite`; para inversionistas, evaluar `WebPage` y `BreadcrumbList`. Validar el marcado en el HTML publicado. Revisar el título de portada por claridad, no solo por longitud. Ampliar las respuestas sobre requisitos, evaluación y condiciones comunicadas antes de contratar. Investigar consultas reales antes de crear páginas separadas para cada producto. **Fallo observable:** marcado con datos no verificables, contenido que no responde a preguntas del público o páginas nuevas sin demanda comprobada.

## 5. Medir lo que falta — antes de cambios de rendimiento

Repetir PageSpeed Insights con cuota propia o Lighthouse local para móvil y escritorio; registrar LCP, INP y CLS. Verificar visualmente la estabilidad de imágenes antes de actuar sobre el aviso de dimensiones. Si existe acceso autorizado, consultar Search Console para indexación y consultas; revisar GBP solo si la empresa administra uno. **Fallo observable:** cambios de rendimiento basados únicamente en heurísticas o puntuaciones sin datos de campo.
