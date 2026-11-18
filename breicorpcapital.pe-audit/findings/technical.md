# Hallazgos técnicos — 18 de noviembre de 2026

## Alcance y evidencia

Claude SEO (`sitemap_discovery.py --expand --json`, `page_checks.py --url --json`, `transport_check.py --json`) analizó `https://www.breicorpcapital.pe/`, `/inversionistas` y las dos páginas legales. Las cuatro páginas devolvieron HTTP 200. El certificado TLS del host `www` fue válido y HTTP redirigió a HTTPS en un salto. Se comparó con la compilación local mediante `page_checks.py --file` y los archivos generados `robots.txt.body` y `sitemap.xml.body`. No se midieron Core Web Vitals en esta parte.

## Alta prioridad

- **Sitemap publicado con host incorrecto.** `https://www.breicorpcapital.pe/robots.txt` declara `https://breicorp-capital.vercel.app/sitemap.xml`. El sitemap del dominio propio responde 200, pero sus cuatro `<loc>` también apuntan al host de Vercel. El descubrimiento halló ambos sitemaps y cuatro URLs duplicadas entre archivos. Publicar la versión local ya preparada, donde `robots.txt` y los cuatro `<loc>` usan `www.breicorpcapital.pe`; después repetir el descubrimiento. Indicador: una declaración válida y cuatro URLs del host canónico.
- **Páginas legales no indexables dentro del sitemap.** `/politica-de-privacidad` y `/terminos-y-condiciones` devuelven `robots: noindex, nofollow`, mientras ambos aparecen en el sitemap publicado y local. El `noindex` es intencional en el código por su estado de borrador; el detector lo llama “Critical” sin conocer ese contexto. Retirar estas dos rutas del sitemap mientras sigan en borrador y noindex. Indicador: el sitemap contiene solo URLs indexables.

## Prioridad media

- **Canónicas ausentes en producción.** Portada e inversionistas no presentan `<link rel="canonical">`, aunque ambas son indexables. El código local ya incluye canónicas propias; verificar tras publicar que la portada apunta al host `www` y `/inversionistas` a su ruta. No atribuir esta corrección al sitio publicado hasta comprobarla.
- **Metadatos sociales aún apuntan a Vercel.** `og:url` y `og:image` de portada e inversionistas usan `breicorp-capital.vercel.app` en producción. La compilación local ya produce el dominio correcto. Confirmar ambos en el HTML publicado después del despliegue.
- **Fecha `<lastmod>` sin relación comprobada con cambios reales.** Las cuatro entradas publicadas y locales tienen `2026-01-01T00:00:00Z`; el código fija esa fecha en `src/app/sitemap.ts`. Sustituirla por fechas verificables de cambios sustanciales o omitirla; no usar una fecha inventada. `changefreq` y `priority` pueden retirarse porque no constituyen señales útiles para Google.
- **Dimensiones de imágenes: revisar antes de corregir.** `page_checks.py` marca 4 de 6 imágenes de la portada sin atributos `width`/`height`; corresponden a URLs `/_next/image`. Next.js puede reservar espacio mediante `fill` y CSS, por lo que esto es un indicio, no una medición de CLS. Verificar estabilidad visual móvil y desktop antes de cambiar componentes.

## Prioridad baja / seguridad

`transport_check.py` confirmó TLS 1.3, certificado válido hasta el 9 de febrero de 2027, redirección HTTP→HTTPS permanente de un salto y convergencia de `www`/sin `www`. HSTS está presente (`max-age=63072000`). Faltan CSP, `X-Content-Type-Options` y una restricción de enmarcado; también faltan `Referrer-Policy` y `Permissions-Policy`. Son mejoras de seguridad, no afirmar una mejora directa de ranking. HSTS sin `includeSubDomains` no justifica activar preload sin verificar todos los subdominios y certificados.

## Límites

No se comprobó indexación efectiva en Search Console, velocidad de campo, accesibilidad visual ni CLS real. No se modificó código del sitio ni base de datos durante esta auditoría.
