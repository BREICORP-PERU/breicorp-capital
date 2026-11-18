# Contenido y señales de confianza

Fecha de revisión: 18 de noviembre de 2026. Alcance: portada e inversionistas publicados en `https://www.breicorpcapital.pe/`, contrastados con el código local. Se utilizó Claude SEO (`render_page.py`, `page_checks.py` y `content_quality.py`).

## Lo que funciona

- La portada y la página de inversionistas entregan texto principal en el HTML inicial. `page_checks.py` midió aproximadamente 664 y 410 palabras, respectivamente; ambas tienen un solo H1 y ninguna ruptura de jerarquía de encabezados.
- El contenido distingue financiamiento e inversión, explica el contacto por WhatsApp y evita publicar tasas fijas o retornos garantizados. La página de inversionistas incluye una advertencia expresa sobre la ausencia de rentabilidad garantizada.
- Hay nombre comercial, razón social, teléfono, correo, política de privacidad y términos. El formulario indica que abrir WhatsApp no equivale a enviar el mensaje.

## Hallazgos

| Prioridad | Hallazgo y evidencia | Acción propuesta | Cómo comprobarlo |
| --- | --- | --- | --- |
| Alta | La confianza institucional queda incompleta para una decisión financiera: la política local dice que el domicilio y otros datos de identificación están pendientes de confirmación (`src/app/politica-de-privacidad/page.tsx`); `siteConfig.contact.verificationNotice` declara correo, horario y cobertura referenciales. En las dos páginas comerciales revisadas no se identifica a una persona responsable ni sus credenciales. | Confirmar y publicar los datos empresariales y de contacto que correspondan; añadir una descripción verificable del equipo responsable y de las comprobaciones realizadas para cada operación, sin prometer resultados. Someter el texto legal a revisión competente antes de presentarlo como definitivo. | Comprobar que los datos mostrados y las páginas legales coinciden con documentación empresarial y que cualquier experiencia o credencial citada tiene respaldo. |
| Media | Las secciones de la portada usan formulaciones amplias como «soluciones de financiamiento» y «atención personalizada» sin desarrollar en la propia página qué documentos, costos y plazos se informan antes de contratar. La información contractual se remite a cada operación. | Añadir respuestas concretas y prudentes a las dudas frecuentes sobre requisitos, evaluación, costos que se comunicarán y etapas; publicar solo condiciones confirmadas. | Revisar con el equipo comercial que cada respuesta permite tomar el siguiente paso y coincide con el proceso real. |

Google recomienda evaluar si el contenido aporta información original y ofrece contexto sobre quién lo creó y su experiencia; estas son preguntas de calidad, no una garantía de posicionamiento: [guía oficial de Google Search Central](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).

## Límites de la medición

`content_quality.py` aplicado directamente al HTML prerenderizado devolvió 91/100 en portada y 92/100 en inversionistas, pero contó también la serialización de Next.js (`17 034` y `9 888` tokens). Esos valores **no se usan como puntuación editorial**. No se verificaron testimonios, credenciales, registros empresariales, tráfico orgánico ni conversiones.
