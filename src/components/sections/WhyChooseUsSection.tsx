import Button from "@/components/ui/Button";
import { photos } from "@/data/photos";
import VisualSelector from "@/components/ui/VisualSelector";
import { siteConfig, whatsappHref } from "@/config/siteConfig";

export default function WhyChooseUsSection() {
  return (
    <section id="por-que-nosotros" className="editorial-section">
      <div className="site-shell">
        <div className="section-intro">
          <h2>¿Por qué elegir BREICORP CAPITAL?</h2>
          <p>Conoce cómo evaluamos y documentamos cada posible operación.</p>
        </div>
        <VisualSelector label="Cómo trabajamos" options={[
          {
            label: "Atención directa",
            title: "Conversa con el equipo comercial",
            description: "Puedes consultar tu caso directamente y conocer los pasos de la evaluación.",
            photo: photos.directAdvice,
          },
          {
            label: "Evaluación de cada caso",
            title: "Revisamos tu situación y el respaldo",
            description: "La posibilidad de financiamiento depende de la información económica y de las condiciones del inmueble ofrecido.",
            photo: photos.property,
          },
          {
            label: "Condiciones según tu proyecto",
            title: "Evaluamos el destino del financiamiento",
            description: "Las condiciones se definen tras revisar el destino de los fondos y la garantía aplicable.",
            photo: photos.business,
          },
          {
            label: "Formalización notarial",
            title: "Revisa las condiciones por escrito",
            description: "La operación puede incluir revisión de la partida en SUNARP, tasación, escritura pública e inscripción. La garantía no elimina los riesgos ni garantiza un resultado.",
            photo: photos.documents,
          },
        ]} />
        <div className="section-action">
          <p>Atención en Tingo María y Huánuco, Perú.</p>
          <Button href={whatsappHref(siteConfig.contact.whatsappDefaultMessage)} isExternal variant="outline">Iniciar consulta</Button>
        </div>
      </div>
    </section>
  );
}
