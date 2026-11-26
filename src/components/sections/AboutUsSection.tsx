import { ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button";
import EditorialImage from "@/components/ui/EditorialImage";
import { photos } from "@/data/photos";

const values = [
  ["Integridad", "Actuamos con honestidad y respeto por los compromisos asumidos."],
  ["Transparencia", "Explicamos por escrito las condiciones, los plazos y los requisitos."],
  ["Confianza", "Tratamos la información según nuestra política de privacidad."],
  ["Responsabilidad", "Evaluamos cada operación según su capacidad económica y sus condiciones."],
  ["Formalización", "Documentamos las garantías mediante los instrumentos que correspondan."],
];

export default function AboutUsSection() {
  return (
    <section id="quienes-somos" className="editorial-section tone-sand">
      <div className="site-shell">
        <div className="editorial-split">
          <EditorialImage photo={photos.conversation} className="feature-photo" />
          <div className="section-intro section-intro-inline">
            <h2>Quiénes somos</h2>
            <p>BREICORP CAPITAL es una línea de BREICORP E.I.R.L. que intermedia y estructura operaciones de financiamiento con respaldo inmobiliario en Perú.</p>
            <p>Buscamos que personas y empresas puedan aprovechar el valor de sus inmuebles para concretar sus proyectos. Nuestra visión es ampliar el acceso a opciones de financiamiento e inversión con procesos claros y acompañamiento cercano.</p>
            <Button href="https://breicorp.com.pe" isExternal variant="outline" icon={<ArrowUpRight className="size-4" />}>
              Conoce BREICORP E.I.R.L.
            </Button>
          </div>
        </div>
        <div className="values-block">
          <h3>Nuestros valores</h3>
          <dl>
            {values.map(([name, description]) => (
              <div key={name}>
                <dt>{name}</dt>
                <dd>{description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
