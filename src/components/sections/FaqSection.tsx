import Accordion, { type AccordionItemData } from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import EditorialImage from "@/components/ui/EditorialImage";
import FAQStructuredData from "@/components/seo/FAQStructuredData";
import { photos } from "@/data/photos";
import { siteConfig, whatsappHref } from "@/config/siteConfig";

export default function FaqSection() {
  const faqData: AccordionItemData[] = [
    {
      id: "faq-1",
      question: "¿Qué monto puedo solicitar?",
      answer:
        "El monto se determina tras evaluar la capacidad de pago y, cuando corresponda, la valoración del inmueble ofrecido.",
    },
    {
      id: "faq-2",
      question: "¿Puedo solicitar evaluación si estoy reportado en INFOCORP?",
      answer:
        "Sí. Estar reportado en centrales de riesgo no impide solicitar una evaluación. Analizamos integralmente tu actividad económica actual y el respaldo inmobiliario.",
    },
    {
      id: "faq-3",
      question: "¿Qué tipo de inmuebles son admitidos para evaluación?",
      answer:
        "Se evalúan casas, departamentos, locales comerciales y terrenos con partida registral inscrita en SUNARP a nombre del solicitante o garante en la región.",
    },
    {
      id: "faq-4",
      question: "¿Cuánto tiempo toma la respuesta de evaluación?",
      answer:
        "El plazo depende de la información recibida y de la evaluación de cada caso. Nuestro equipo te indicará los siguientes pasos al atender tu consulta.",
    },
    {
      id: "faq-5",
      question: "¿Cómo se formaliza y garantiza la operación?",
      answer:
        "Si una operación avanza, sus condiciones y garantías se documentan en los instrumentos contractuales y notariales que correspondan. La consulta inicial no garantiza su aprobación.",
    },
  ];

  const whatsappUrl = whatsappHref(siteConfig.contact.whatsappDefaultMessage);

  return (
    <section id="preguntas-frecuentes" className="editorial-section">
      <FAQStructuredData items={faqData} />
      <div className="site-shell editorial-split items-start">
        <div className="section-intro section-intro-inline">
          <h2>Preguntas frecuentes</h2>
          <p>Lo que necesitas saber antes de solicitar una evaluación.</p>
          <EditorialImage photo={photos.documents} className="mt-5" />
          <Button href={whatsappUrl} isExternal variant="outline" className="mt-4">Consultar con un asesor</Button>
        </div>
        <Accordion items={faqData} defaultOpenId="faq-1" />
      </div>
    </section>
  );
}
