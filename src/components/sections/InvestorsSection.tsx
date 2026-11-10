import React from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Building2, Layers } from "lucide-react";
import Button from "@/components/ui/Button";

export default function InvestorsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#111111] text-white relative overflow-hidden">
      {/* Luces y texturas sutiles de fondo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C6A15B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FF6801]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Columna Textual (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#C6A15B] text-xs font-semibold tracking-wider uppercase border border-[#C6A15B]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
              Red Privada de Inversionistas
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight font-sans">
              OPORTUNIDADES DE INVERSIÓN{" "}
              <span className="text-[#C6A15B]">CON RESPALDO</span> INMOBILIARIO.
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Conoce nuestro modelo de participación en operaciones de financiamiento con garantía hipotecaria y las condiciones para formar parte de nuestra red de inversionistas.
            </p>

            {/* Puntos clave del modelo institucional */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <ShieldCheck className="w-5 h-5 text-[#C6A15B]" />
                <div className="text-xs font-bold text-white uppercase tracking-wider">
                  Garantía directa
                </div>
                <div className="text-xs text-neutral-400">
                  Hipoteca inscrita en SUNARP a tu favor
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <Building2 className="w-5 h-5 text-[#C6A15B]" />
                <div className="text-xs font-bold text-white uppercase tracking-wider">
                  Filtrado previo
                </div>
                <div className="text-xs text-neutral-400">
                  Operaciones pre-evaluadas y tasadas
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <Layers className="w-5 h-5 text-[#C6A15B]" />
                <div className="text-xs font-bold text-white uppercase tracking-wider">
                  Administración
                </div>
                <div className="text-xs text-neutral-400">
                  Gestión integral de cobranza y seguimiento
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                href="/inversionistas"
                variant="gold"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                QUIERO CONOCER LAS OPORTUNIDADES
              </Button>
            </div>

            <p className="text-xs text-neutral-500 italic">
              * Nota: BREICORP CAPITAL no promete tasas de retorno garantizadas ni ausencia de riesgo. Cada operación se analiza de forma individual y se formaliza legalmente conforme al marco legal aplicable.
            </p>
          </div>

          {/* Columna Visual / Imagen (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-700 aspect-[4/4.5] shadow-card">
              <Image
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80"
                alt="Directivos e inversionistas evaluando operaciones de financiamiento estructurado"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-center filter brightness-[0.85] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/30 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-[#111111]/80 backdrop-blur-md border border-white/15">
                <div className="text-xs font-bold text-[#C6A15B] uppercase tracking-wider mb-1">
                  Modelo de Participación Privada
                </div>
                <div className="text-xs text-neutral-300 leading-snug">
                  Gestión transparente para personas y empresas con excedentes de liquidez en el centro-oriente peruano.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

