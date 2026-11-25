import { ArrowUpRight, Building2, FileCheck2, MapPin } from "lucide-react";
import Button from "@/components/ui/Button";
import EditorialImage from "@/components/ui/EditorialImage";
import { photos } from "@/data/photos";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { siteConfig, whatsappHref } from "@/config/siteConfig";

export default function HeroSection() {
  return (
    <section id="inicio" className="home-hero">
      <div className="site-shell">
        <div className="hero-grid">
          <div className="hero-copy">
            <h1>Financiamiento con respaldo inmobiliario.</h1>
            <p>Obtén liquidez para capital de trabajo, consolidación o expansión. Evaluamos tu caso con el respaldo de un inmueble inscrito en SUNARP.</p>
            <div className="action-row">
              <Button
                href={whatsappHref(siteConfig.contact.whatsappDefaultMessage)}
                isExternal
                size="lg"
                icon={<WhatsAppIcon className="size-5" />}
                iconPosition="left"
              >
                Solicitar evaluación
              </Button>
              <Button href="/inversionistas" variant="outline" size="lg" icon={<ArrowUpRight className="size-4" />}>
                Quiero invertir
              </Button>
            </div>
          </div>
          <figure className="hero-figure">
            <EditorialImage
              photo={photos.house}
              className="hero-photo"
              sizes="(min-width: 1280px) 610px, (min-width: 1024px) 51vw, 100vw"
              preload
            />
            <figcaption><MapPin className="size-4" aria-hidden="true" /> Atención en Tingo María y Huánuco</figcaption>
          </figure>
        </div>
        <ul className="trust-strip" aria-label="Condiciones generales">
          <li><Building2 className="size-5" aria-hidden="true" /> Inmueble inscrito en SUNARP</li>
          <li><FileCheck2 className="size-5" aria-hidden="true" /> Formalización por escritura pública</li>
          <li><span aria-hidden="true" className="font-bold">S/</span> Monto según evaluación</li>
        </ul>
      </div>
    </section>
  );
}
