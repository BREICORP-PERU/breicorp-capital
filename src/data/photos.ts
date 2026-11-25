export type Photo = { src: string; alt: string };

export const photos = {
  house: { src: "/images/hero-propiedad.jpg", alt: "Casa contemporánea rodeada de árboles" },
  property: { src: "/images/arquitectura.jpg", alt: "Fachada de concreto blanco con jardín y ventanas amplias" },
  tingoMaria: { src: "/images/tingo-maria.webp", alt: "Vista aérea de Tingo María, con la ciudad, el río y las montañas" },
  city: { src: "/images/garantia-hipotecaria.jpg", alt: "Edificios comerciales vistos desde la calle" },
  business: { src: "/images/credito-mype.jpg", alt: "Un comerciante en su taller de cerámica" },
  investment: { src: "/images/oportunidades-inversion.jpg", alt: "Una persona de traje frente a una escalera" },
  conversation: { src: "/images/conversacion.jpg", alt: "Personas que revisan gráficos y documentos en una mesa" },
  documents: { src: "/images/formalizacion.jpg", alt: "Una persona firma un documento en un escritorio" },
} as const;
