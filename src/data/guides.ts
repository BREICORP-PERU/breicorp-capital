import { photos, type Photo } from "./photos";

export interface GuideSection {
  title: string;
  paragraphs: string[];
  list?: string[];
  highlight?: string;
}

export interface GuideFaq {
  question: string;
  answer: string;
}

export interface Guide {
  slug: string;
  photo: Photo;
  title: string;
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  summary: string;
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  category: string;
  author: string;
  keyTakeaways: string[];
  sections: GuideSection[];
  faqs: GuideFaq[];
}

export const guides: Guide[] = [
  {
    slug: "requisitos-prestamo-garantia-hipotecaria-peru-sunarp",
    photo: photos.documents,
    title: "Requisitos para un Préstamo con Garantía Hipotecaria en Perú (Guía SUNARP)",
    metaTitle: "Requisitos Préstamo Garantía Hipotecaria en Perú | SUNARP",
    metaDescription:
      "Conoce los requisitos legales, registrales y municipales para solicitar un préstamo con garantía hipotecaria en Perú. Documentación de SUNARP, notaría y evaluación.",
    kicker: "Guía Registral y Legal",
    summary:
      "Aprende exactamente qué documentos necesitas en SUNARP y municipalidades para respaldar una solicitud de financiamiento con un inmueble propio o de un garante.",
    publishedAt: "2026-11-20",
    updatedAt: "2026-11-21",
    readTime: "6 min de lectura",
    category: "Requisitos y Trámites",
    author: "Equipo Legal y Financiero de BREICORP CAPITAL",
    keyTakeaways: [
      "El inmueble debe contar con Partida Registral activa e independizada en la SUNARP.",
      "Se requiere el Certificado Registral Inmobiliario (CRI) o Copia Literal actualizada para verificar cargas y gravámenes.",
      "Los tributos municipales (HR y PU) deben estar al día o regularizados en la municipalidad distrital.",
      "Pueden calificar casas, departamentos, locales comerciales y terrenos urbanos formalizados.",
      "Toda operación se formaliza mediante Escritura Pública suscrita ante Notario Público colegiado.",
    ],
    sections: [
      {
        title: "1. ¿Qué es un préstamo con garantía hipotecaria en el Perú?",
        paragraphs: [
          "Un préstamo con garantía hipotecaria es una operación financiera en la que el solicitante (o un tercero aval/garante) ofrece un bien inmueble formalmente inscrito en la Superintendencia Nacional de los Registros Públicos (SUNARP) como respaldo del cumplimiento del financiamiento.",
          "A diferencia de los créditos de consumo tradicionales, este modelo permite acceder a importes de capital significativamente mayores, adaptados a empresarios MYPE, comerciantes y personas con proyectos de inversión o consolidación de pasivos.",
        ],
        highlight:
          "Importante: La propiedad no cambia de dueño ni se transfiere; únicamente se inscribe un gravamen hipotecario como respaldo legal en la partida registral.",
      },
      {
        title: "2. Requisitos Registrales en SUNARP indispensables",
        paragraphs: [
          "El pilar central de la evaluación técnica es la seguridad jurídica del inmueble. Para que una propiedad sea admisible para evaluación, debe cumplir con los siguientes documentos registrales:",
        ],
        list: [
          "Copia Literal o Certificado Registral Inmobiliario (CRI) expedido por la SUNARP con una antigüedad no mayor a 30 días.",
          "Partida electrónica independizada: no se admiten posesiones informales, minutas de compraventa sin inscribir ni terrenos comunales sin título registral.",
          "Titularidad acreditada: los propietarios que figuran en la partida deben estar de acuerdo y prestar su consentimiento formal en la operación.",
          "Revisión de gravámenes: si el inmueble ya cuenta con alguna hipoteca previa o embargo, se evalúa su cancelación con parte del financiamiento o la viabilidad del caso.",
        ],
      },
      {
        title: "3. Requisitos Municipales y Personales",
        paragraphs: [
          "Junto a los documentos registrales, la entidad o estructurador financiero solicitará la acreditación municipal y personal de los intervinientes:",
        ],
        list: [
          "Hoja Resumen (HR) y Predio Urbano (PU) correspondientes al año en curso emitidos por la municipalidad respectiva.",
          "Constancia o recibo de no adeudo tributario municipal (arbitrios e impuesto predial) o estado de cuenta al día.",
          "DNI vigente de todos los propietarios inscritos y sus cónyuges (en caso de sociedad conyugal).",
          "Recibo de servicio público reciente (agua, luz o telefonía) que coincida con el domicilio real del solicitante.",
        ],
      },
      {
        title: "4. Sustento de actividad económica e ingresos",
        paragraphs: [
          "Aunque la garantía hipotecaria es el activo que respalda la operación, el análisis financiero responsable evalúa que el solicitante cuente con una actividad económica real para afrontar las cuotas pactadas:",
          "Se admiten declaraciones juradas mensuales de SUNAT (Formularios 621 para empresas y personas con negocio), boletas de compra/venta, cuadernos de caja, contratos comerciales o movimientos bancarios recientes.",
        ],
        highlight:
          "En BREICORP CAPITAL no se descarta a solicitantes únicamente por figurar en centrales de riesgo (Infocorp), siempre que la actividad comercial actual y el valor de la garantía sustenten la viabilidad.",
      },
      {
        title: "5. El proceso de formalización notarial paso a paso",
        paragraphs: [
          "Una vez que el perfil crediticio y el título registral resultan viables:",
        ],
        list: [
          "Paso 1: Pre-evaluación documental mediante envío de copia de DNI y partida registral vía WhatsApp.",
          "Paso 2: Tasación o inspección comercial referencial del inmueble para determinar el límite de financiamiento.",
          "Paso 3: Presentación de propuesta formal de financiamiento con cronograma y condiciones.",
          "Paso 4: Redacción de minuta y suscripción de Escritura Pública ante Notario Público.",
          "Paso 5: Ingreso del título de hipoteca a SUNARP y desembolso del capital conforme a lo acordado.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Puedo poner como garantía la casa de un familiar?",
        answer:
          "Sí. Es legalmente admisible siempre y cuando el propietario del inmueble (el garante hipotecario) participe activamente, firme la solicitud y suscriba la Escritura Pública en notaría.",
      },
      {
        question: "¿Qué tipos de propiedades se pueden presentar?",
        answer:
          "Se evalúan casas, departamentos residenciales, edificios comerciales, locales industriales y terrenos urbanos que cuenten con partida registral independizada en SUNARP.",
      },
      {
        question: "¿Qué ocurre si mi propiedad tiene una hipoteca previa?",
        answer:
          "Se evalúa si el saldo pendiente de la hipoteca anterior puede ser cancelado directamente con los fondos del nuevo financiamiento (levantamiento de hipoteca).",
      },
    ],
  },
  {
    slug: "prestamo-con-garantia-hipotecaria-estando-en-infocorp",
    photo: photos.conversation,
    title: "¿Se puede solicitar un préstamo con garantía hipotecaria estando en Infocorp?",
    metaTitle: "Préstamo con Garantía Hipotecaria en Infocorp Perú | Guía",
    metaDescription:
      "Descubre cómo acceder a financiamiento con garantía hipotecaria en Perú incluso con historial negativo o deudas en Infocorp, Equifax o la SBS.",
    kicker: "Historial Crediticio y Alternativas",
    summary:
      "Aprende cómo funciona la evaluación de financiamiento privado cuando la banca tradicional te rechaza por reportes crediticios o deudas castigadas.",
    publishedAt: "2026-11-20",
    updatedAt: "2026-11-21",
    readTime: "5 min de lectura",
    category: "Historial Crediticio",
    author: "Equipo Legal y Financiero de BREICORP CAPITAL",
    keyTakeaways: [
      "La banca tradicional suele rechazar de forma automática a solicitantes con semáforo rojo en Infocorp.",
      "El financiamiento privado con garantía hipotecaria prioriza el valor tangible del inmueble y el flujo comercial actual.",
      "Parte del capital obtenido puede destinarse a comprar o cancelar deudas coactivas para limpiar el historial crediticio.",
      "Es indispensable que el solicitante demuestre capacidad de pago mediante ventas, ingresos comerciales o contratos vigentes.",
    ],
    sections: [
      {
        title: "1. ¿Por qué la banca tradicional cierra las puertas ante Infocorp?",
        paragraphs: [
          "Las entidades bancarias supervisadas por la SBS operan con algoritmos automatizados de scoring crediticio. Si un solicitante presenta deudas vencidas, castigos o cobranza judicial, el sistema rechaza la solicitud de manera inmediata, sin importar que la persona sea propietaria de un inmueble de gran valor.",
          "Esto deja desatendidos a miles de microempresarios, comerciantes y trabajadores independientes en Perú que atravesaron un bache financiero pero continúan generando ingresos diarios en sus negocios.",
        ],
      },
      {
        title: "2. La ventaja del financiamiento privado con garantía hipotecaria",
        paragraphs: [
          "El financiamiento privado opera con un análisis cualitativo y personalizado. Al contar con un inmueble inscrito en SUNARP que sirve como garantía real inscrita, el riesgo de la operación se reduce de forma sustancial.",
          "Por esta razón, la evaluación no se enfoca únicamente en el pasado crediticio, sino en dos factores presentes:",
        ],
        list: [
          "La tasación comercial y situación registral limpia del inmueble.",
          "El flujo de ingresos actual del negocio o actividad económica que permita honrar las cuotas del crédito.",
        ],
        highlight:
          "El objetivo no es sobreendeudar al cliente, sino otorgar una herramienta de liquidez estructurada con un plan de salida o refinanciamiento realista.",
      },
      {
        title: "3. Requisitos para evaluar un caso con reporte en Infocorp",
        paragraphs: [
          "Si tienes deudas reportadas en centrales de riesgo, para avanzar en una evaluación en BREICORP CAPITAL se requiere:",
        ],
        list: [
          "Partida electrónica del inmueble emitida por SUNARP.",
          "DNI del propietario o propietarios.",
          "Sustento de ingresos actuales (ventas de negocio, recibos por honorarios, alquileres, etc.).",
          "Monto aproximado de la deuda en centrales de riesgo para calcular el plan financiero.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿El préstamo sirve para limpiar mi historial en Infocorp?",
        answer:
          "Sí. Es común que parte del financiamiento se emplee en cancelar deudas bancarias o coactivas pendientes y obtener la carta de no adeudo.",
      },
      {
        question: "¿Se pierde la casa si tengo deudas viejas?",
        answer:
          "No. Las deudas no hipotecarias anteriores no afectan la titularidad de tu inmueble si no tenían medidas cautelares sobre el predio.",
      },
    ],
  },
  {
    slug: "prestamo-bancario-vs-financiamiento-privado-garantia-peru",
    photo: photos.city,
    title: "Préstamo Bancario vs. Financiamiento Privado con Garantía en Perú: Comparativa",
    metaTitle: "Bancos vs Financiamiento Privado con Garantía en Perú",
    metaDescription:
      "Compara requisitos, tiempos de desembolso, flexibilidad y documentación entre préstamos de la banca tradicional y financiamiento privado en Perú.",
    kicker: "Análisis Comparativo",
    summary:
      "Una comparativa objetiva entre la banca tradicional y el financiamiento con garantía hipotecaria para saber cuál te conviene según tu situación.",
    publishedAt: "2026-11-20",
    updatedAt: "2026-11-21",
    readTime: "5 min de lectura",
    category: "Educación Financiera",
    author: "Equipo Legal y Financiero de BREICORP CAPITAL",
    keyTakeaways: [
      "Los bancos ofrecen tasas nominales menores pero exigen sustentación formal estricta de ingresos y score crediticio impecable.",
      "El financiamiento privado ofrece tiempos de evaluación y desembolso notablemente más ágiles.",
      "La banca suele demorar entre 45 y 90 días en aprobar una hipoteca comercial; el financiamiento privado se estructura en semanas.",
      "Ambos modelos requieren obligatoriamente Escritura Pública Notarial e inscripción en SUNARP.",
    ],
    sections: [
      {
        title: "1. Tiempos de respuesta y agilidad en el desembolso",
        paragraphs: [
          "En el sector bancario, el proceso de aprobación de un crédito con hipoteca implica múltiples comités de riesgo y auditorías que frecuentemente toman entre 6 y 12 semanas. Para una oportunidad de negocio urgente, este tiempo suele ser excesivo.",
          "El financiamiento privado con intermediación ágil permite completar la pre-evaluación registral en 24 a 48 horas hábiles, reduciendo sustancialmente los plazos de formalización.",
        ],
      },
      {
        title: "2. Flexibilidad en la sustentación de ingresos",
        paragraphs: [
          "En el Perú, gran parte de la economía MYPE opera con ingresos mixtos, transferencias electrónicas y efectivo comercial que no siempre se refleja al 100% en declaraciones tributarias formales.",
          "Mientras la banca rechaza solicitudes que no cumplan ratios contables rígidos, el análisis de financiamiento privado realiza una inspección in situ del negocio para ponderar su capacidad real de generación de caja.",
        ],
      },
      {
        title: "3. Tabla Resumen: Bancos vs Financiamiento Privado",
        paragraphs: [
          "A continuación se detallan las principales diferencias operativas:",
        ],
        list: [
          "Historial crediticio: La banca exige récord limpio en Infocorp; el financiamiento privado evalúa casos reportados.",
          "Velocidad: Banca 45 - 90 días; Financiamiento privado estructurado en plazos ágiles.",
          "Seguridad jurídica: Ambos exigen Notaría e inscripción registral en SUNARP.",
          "Flexibilidad de cuotas: El financiamiento privado permite pactar cronogramas con cuotas adaptadas al ciclo del negocio.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿El financiamiento privado es legal y seguro en Perú?",
        answer:
          "Totalmente legal. Se rige por el Código Civil peruano, la Ley General del Sistema Financiero y se suscribe obligatoriamente ante Notario Público colegiado con inscripción registral en SUNARP.",
      },
      {
        question: "¿Puedo pagar antes del plazo pactado?",
        answer:
          "Sí. Los contratos formales establecen las condiciones claras para amortizaciones de capital o cancelaciones anticipadas.",
      },
    ],
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getAllGuideSlugs(): string[] {
  return guides.map((g) => g.slug);
}
