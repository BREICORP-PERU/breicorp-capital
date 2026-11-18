# Datos estructurados — 18 de noviembre de 2026

Claude SEO `page_checks.py --url --json` informó `jsonld_blocks: 0` en las cuatro páginas públicas analizadas: portada, inversionistas, privacidad y términos. La búsqueda de `application/ld+json`, `itemscope` e `itemprop` en el código local tampoco encontró marcado de entidad. No hay bloques JSON-LD inválidos que reparar.

**Prioridad media, oportunidad de claridad semántica:** añadir JSON-LD `Organization` y `WebSite` en la portada, con nombre legal y URL canónica verificados. Para inversionistas, considerar `WebPage` y, si la ruta de navegación se mantiene visible, `BreadcrumbList`; describir el servicio sin prometer rentabilidad ni garantías. No publicar `LocalBusiness` con domicilio, horario o coordenadas hasta confirmar esos datos con la empresa. No crear reseñas, valoraciones o retornos ficticios. Estas entidades no garantizan resultados enriquecidos ni posiciones.

**Verificación propuesta:** comprobar que el JSON-LD aparece en el HTML inicial, que cada entidad tiene `@context`, `@type` y URLs del host `www.breicorpcapital.pe`, y validarlo con la herramienta de Google apropiada después del despliegue. La implementación de schema queda fuera de esta auditoría.
