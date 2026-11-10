# BREICORP CAPITAL

Sitio comercial Next.js 16 para consultas sobre crédito y oportunidades de inversión. Los formularios preparan un mensaje de WhatsApp; el visitante decide si lo envía desde esa aplicación. Abrir WhatsApp **no confirma** que la empresa haya recibido el mensaje.

## Desarrollo

```powershell
npm.cmd install
npm.cmd run dev
```

## Captación comercial

- El formulario de crédito prepara nombre, celular, ciudad, monto aproximado, tipo de financiamiento y finalidad.
- El formulario de inversionistas prepara nombre, celular, correo opcional y monto aproximado de inversión.
- `whatsappHref` en `src/config/siteConfig.ts` usa el número comercial centralizado y codifica el mensaje con `encodeURIComponent`.
- Los datos permanecen en el estado temporal de la página. No hay endpoint de recepción, base de datos, webhook, CRM, `localStorage` ni confirmación automática.
- Al abrir el enlace, el mensaje está incluido en la URL de WhatsApp y puede ser tratado por ese servicio incluso antes de que el visitante pulse Enviar. La política de privacidad describe este comportamiento.

El número de WhatsApp, dominio, correos, horarios y cobertura publicados siguen pendientes de confirmación empresarial. La política de privacidad y los términos requieren revisión jurídica antes de su publicación definitiva.

## Verificación

```powershell
npm.cmd run lint
npx.cmd tsc --noEmit --incremental false
npm.cmd run build
```
