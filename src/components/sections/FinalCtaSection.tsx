import { ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button";
import EditorialImage from "@/components/ui/EditorialImage";
import { photos } from "@/data/photos";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { siteConfig, whatsappHref } from "@/config/siteConfig";

export default function FinalCtaSection() {
  return (
    <section id="contacto" className="contact-band">
      <div className="site-shell editorial-split">
        <div className="section-intro section-intro-inline">
          <h2>Hablemos de tu proyecto.</h2>
          <p>Cuéntanos qué financiamiento necesitas y qué inmueble puedes ofrecer como respaldo. Te orientaremos sobre los siguientes pasos.</p>
          <div className="action-row">
            <Button
              href={whatsappHref(siteConfig.contact.whatsappDefaultMessage)}
              isExternal
              icon={<WhatsAppIcon className="size-5" />}
              iconPosition="left"
              size="lg"
            >
              Solicitar evaluación
            </Button>
            <Button href="/inversionistas" variant="outline" icon={<ArrowUpRight className="size-4" />} size="lg">
              Quiero invertir
            </Button>
          </div>
          <p className="contact-note">Toda operación está sujeta a evaluación, disponibilidad de capital y formalización contractual.</p>
        </div>
        <EditorialImage photo={photos.business} className="feature-photo" />
      </div>
    </section>
  );
}
