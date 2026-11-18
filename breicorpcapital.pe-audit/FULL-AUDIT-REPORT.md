# Auditoría SEO de BREICORP CAPITAL

**Fecha:** 18 de noviembre de 2026  
**Dominio analizado:** https://www.breicorpcapital.pe/  
**Herramienta:** Claude SEO 2.6.2, runtime `doctor` listo.

## Resumen ejecutivo

Se analizaron las cuatro URLs del sitemap público: portada, inversionistas, privacidad y términos. Todas devolvieron HTTP 200. La portada y la página de inversionistas son indexables; las dos páginas legales declaran `noindex, nofollow`. Se contrastó producción con la compilación local y se revisaron capturas de escritorio, tablet y móvil.

**No se asigna una puntuación SEO global:** PageSpeed Insights devolvió HTTP 429 sin datos de Lighthouse ni Core Web Vitals; tampoco hay acceso verificado a Search Console, analítica, Perfil de Empresa o datos de conversiones. Una cifra agregada sería engañosa.

### Hallazgos prioritarios

| Prioridad | Hallazgo verificado | Estado local |
| --- | --- | --- |
| Alta | `robots.txt` publicado anuncia el sitemap de `breicorp-capital.vercel.app`; el sitemap servido en el dominio propio contiene cuatro URLs de ese host. | La configuración local ya genera el host `www.breicorpcapital.pe`; falta desplegar y comprobar. |
| Alta | Privacidad y términos, marcados `noindex`, siguen en el sitemap. | También ocurre en el código local; retirarlos mientras permanezcan como borradores. |
| Alta, dependiente de datos empresariales | Contacto, horarios, cobertura y domicilio requieren confirmación; las páginas legales son borradores. | Confirmar con la empresa antes de ampliar señales de confianza o SEO local. |
| Media | Las páginas comerciales publicadas carecen de canonical y sus `og:url`/`og:image` apuntan a Vercel. | Canonical y dominio social ya están corregidos localmente; verificar tras despliegue. |
| Media | No hay JSON-LD de entidad; puede añadirse `Organization` y `WebSite` con datos confirmados. | Aún no implementado; no inventar dirección, reseñas ni condiciones financieras. |
| Media | El título de portada mide 62 caracteres; es una heurística de visualización, no un límite de Google. | Pendiente de evaluación editorial; no bloquea indexación. |

## Lo que funciona

- HTTPS responde; TLS y certificado válidos, HSTS presente y redirección al host `www` en un salto.
- Las páginas comerciales entregan contenido en el HTML inicial, tienen un H1, estructura de encabezados sin saltos y texto alternativo en todas las imágenes analizadas.
- Las seis imágenes son servidas en WebP. La primera imagen visible no usa carga diferida.
- La herramienta `agent_ux_check.py` obtuvo 100/100 en **su propia heurística**: 38 controles con nombre accesible y 12 regiones semánticas. No equivale a una auditoría WCAG completa.
- Las capturas de escritorio, tablet y móvil no mostraron desbordamiento horizontal aparente.

## Hallazgos que requieren contexto

- Cuatro imágenes carecen de atributos HTML `width`/`height`, pero usan `next/image` con `fill` dentro de contenedores que reservan espacio. No se midió CLS; tratar el aviso como **posible falso positivo**, no cambiar las imágenes a ciegas.
- Todas las entradas del sitemap usan el mismo `<lastmod>` fijo (`2026-01-01`). Usar fechas verificables de cambios sustanciales u omitir el campo.
- El contenido comercial puede responder con mayor precisión a dudas sobre requisitos, evaluación y condiciones que se comunicarán antes de contratar. Publicar solo información confirmada.
- Hay una oportunidad **condicional** de páginas informativas para las ofertas de crédito MYPE y con garantía hipotecaria. Validar primero demanda y consultas reales; no se midieron SERP locales ni Search Console.
- `/llms.txt`, Markdown y WebMCP no están presentes. Son opcionales; su ausencia no se califica como problema de ranking.
- Faltan varias cabeceras de seguridad. Son mejoras de seguridad, sin atribuirles un efecto SEO directo.

## Límites y evidencia

PSI móvil y escritorio devolvió HTTP 429; no hay LCP, INP, CLS, Lighthouse ni CrUX verificados. No se verificaron indexación real, tráfico, conversiones, GBP, reseñas ni menciones en respuestas de IA. No se probó el envío de formularios.

Los detalles y métodos están en [`findings/`](findings/). Los resultados JSON de `page_checks.py` están en [`raw/`](raw/) y las capturas en [`screenshots/`](screenshots/). El [plan de acción](ACTION-PLAN.md) ordena las correcciones y su verificación. Esta auditoría no modificó el código fuente ni la base de datos.
