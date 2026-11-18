# Búsqueda local y preparación para agentes de IA

Fecha de revisión: 18 de noviembre de 2026. Claude SEO ejecutado contra la portada pública: `agentic_check.py`, `agent_ux_check.py` y `lighthouse_agentic.py`. Se contrastó con `src/config/siteConfig.ts` y el pie de página local.

## Evidencia favorable

- `agentic_check.py`: portada HTTP 200, `robots.txt` HTTP 200, 883 palabras disponibles sin JavaScript y ninguna señal de aplicación vacía. Los rastreadores examinados caen en el grupo `User-agent: *` y pueden acceder a la raíz. Una URL inexistente devuelve HTTP 404.
- `agent_ux_check.py`: 100/100 en su heurística local, 38 nodos interactivos y ninguno sin nombre accesible; 12 regiones semánticas. Esta cifra mide solo los criterios de la herramienta, no visibilidad en buscadores con IA.
- La portada publicada describe a BREICORP E.I.R.L. y menciona Tingo María y Huánuco; el código local mantiene un teléfono de WhatsApp y correo visibles.

## Hallazgos y dependencias

| Prioridad | Hallazgo y evidencia | Acción propuesta | Cómo comprobarlo |
| --- | --- | --- | --- |
| Alta, condicionada a datos empresariales | El sitio comunica cobertura local, pero la configuración local marca horario y cobertura como referenciales y la política dice que el domicilio está pendiente. No se observó una dirección física confirmada en las páginas revisadas. | Confirmar si la empresa atiende en un local visitable o como negocio de área de servicio; después alinear nombre, teléfono, horarios y área publicada con la documentación y, si existe, con su Perfil de Empresa en Google. No inventar dirección, coordenadas ni horario. | Comparar datos confirmados con web y perfil administrado. La existencia y estado del perfil no se verificaron en esta auditoría. |
| Informativa | `agentic_check.py` obtuvo HTTP 404 en `/llms.txt`; tampoco detectó entrega Markdown ni WebMCP. Son formatos o mecanismos opcionales, no evidencia de bloqueo ni de un problema de posicionamiento. | Mantener como mejora opcional de distribución de contenido, solo si aparece un caso de uso concreto. Priorizar información verificable y acceso HTML antes de añadir archivos o APIs. | Si se implementan, validar equivalencia con el HTML y acceso HTTP; no atribuirles mejoras de ranking sin medición. |

El `robots.txt` publicado todavía referencia un sitemap en `breicorp-capital.vercel.app`; el código local ya usa `www.breicorpcapital.pe`. Este hallazgo depende del despliegue y se consolida en el informe técnico para evitar duplicarlo.

Google exige que los datos de un Perfil de Empresa representen fielmente el negocio, la dirección o área de servicio y los horarios: [directrices oficiales](https://support.google.com/business/answer/3038177).

## No medido

- `lighthouse_agentic.py` consultó PSI móvil y escritorio, pero ambos devolvieron HTTP 429 por cuota anónima; por tanto no hay fracción Lighthouse X/N. No se dispone de clave propia de PSI.
- No se verificaron Perfil de Empresa, mapas, reseñas, citaciones, presencia de marca en respuestas de IA ni comportamiento de firewall con identidades de bots verificadas. No se ejecutó una matriz de User-Agent.
