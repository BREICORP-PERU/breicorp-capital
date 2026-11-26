import Button from "@/components/ui/Button";
import { photos } from "@/data/photos";
import VisualSelector from "@/components/ui/VisualSelector";
import { siteConfig, whatsappHref } from "@/config/siteConfig";

export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="editorial-section tone-sand">
      <div className="site-shell">
        <div className="section-intro">
          <h2>¿Cómo funciona?</h2>
          <p>Explora las etapas desde la primera consulta hasta la formalización.</p>
        </div>
        <VisualSelector label="Etapas del financiamiento" sequence options={[
          {
            label: "Consulta inicial",
            title: "Cuéntanos qué financiamiento buscas",
            description: "El equipo te indicará qué información necesita para revisar la viabilidad preliminar de tu caso.",
            detail: "Primer contacto por WhatsApp",
            photo: photos.initialConsultation,
          },
          {
            label: "Evaluación y tasación",
            title: "Revisamos el inmueble y tu solicitud",
            description: "Se revisan los títulos registrales y, cuando corresponda, la situación legal y el valor comercial del inmueble antes de estructurar una propuesta.",
            detail: "El plazo depende de cada caso",
            photo: photos.property,
          },
          {
            label: "Formalización y desembolso",
            title: "Revisa y formaliza las condiciones",
            description: "Si ambas partes aceptan las condiciones y se cumplen los requisitos, se formalizan los documentos contractuales y notariales aplicables antes del desembolso acordado.",
            detail: "Inscripción registral cuando corresponda",
            photo: photos.documents,
          },
        ]} />
        <div className="section-action">
          <p>La consulta inicial está sujeta a evaluación.</p>
          <Button href={whatsappHref(siteConfig.contact.whatsappDefaultMessage)} isExternal>Iniciar consulta</Button>
        </div>
      </div>
    </section>
  );
}
