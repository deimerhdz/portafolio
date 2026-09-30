import {
  Boxes,
  Database,
  Server,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export const PROFILE = {
  name: "Deimer Hernandez",
  image: "/profile.png",
  role: "Ingeniero Full Stack · Arquitecto de Software",
  email: "deimerhdz21@gmail.com",
  github: "https://github.com/deimerhdz",
  linkedin: "https://www.linkedin.com/in/deimer-hernandez/",
  cvPath: "/Deimer-Hernandez-CV-ATS.pdf",
} as const;

export const HERO_FOCUS = [
  { label: "Arquitectura", value: "Multi-tenant | Serverless | hexagonal" },
  { label: "Método", value: "Spec-Driven Development" },
  { label: "Operación", value: "Cloud & Automatización" },
] as const;

export type StackPillar = {
  id: string;
  name: string;
  layer: string;
  description: string;
  icon: LucideIcon;
};

export const STACK_PILLARS: StackPillar[] = [
  {
    id: "react",
    name: "Angular | React",
    layer: "Frontend",
    description:
      "Interfaces modulares y tipadas, con librerías de diseño internas y rendimiento medible.",
    icon: Boxes,
  },
  {
    id: "nestjs",
    name: "NestJS | FastApi ",
    layer: "Backend",
    description:
      "APIs con arquitectura modular, contratos compartidos end-to-end y observabilidad desde el día uno.",
    icon: Server,
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    layer: "Datos",
    description:
      "Modelos relacionales robustos, aislamiento de datos por cliente y migraciones versionadas.",
    icon: Database,
  },
  {
    id: "aws",
    name: "AWS | VPS",
    layer: "Infraestructura",
    description:
      "Despliegue, almacenamiento y control de acceso sobre servicios gestionados definidos como código.",
    icon: Workflow,
  },
];

export type CaseStudy = {
  id: string;
  index: string;
  title: string;
  category: string;
  summary: string;
  problem: string;
  solution: string;
  stack: string[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "skeilo-pos",
    index: "01",
    title: "Skeilo POS",
    category: "SaaS multi-tenant · Punto de venta",
    summary:
      "Sistema SaaS multi-tenant para puntos de venta, con pasarelas de pago y almacenamiento en la nube.",
    problem:
      "Cadenas retail operando con cajas aisladas: sin visibilidad central, sin control de inventario y cobros atados a un único dispositivo.",
    solution:
      "Plataforma multi-tenant con aislamiento de datos por cliente, integración de pasarelas de pago y almacenamiento en la nube para tickets, catálogos y reportes.",
    stack: ["Angular", "NestJS", "PostgreSQL", "AWS S3", "Multi-tenant"],
  },
  {
    id: "concert-plaza",
    index: "02",
    title: "Concert Plaza",
    category: "Marketplace · Ticketing",
    summary:
      "Plataforma de gestión y transferencia de tickets con control transaccional estricto y AWS Cognito.",
    problem:
      "Reventa informal y duplicación de entradas sin un mecanismo que garantizara la propiedad real ni el historial de transferencias.",
    solution:
      "Motor de transferencias con control transaccional estricto, estados de ticket auditables y autenticación gestionada con AWS Cognito.",
    stack: ["Angular", "NestJS", "PostgreSQL", "AWS Cognito", "Transaccional"],
  },
  {
    id: "tauru-pro",
    index: "03",
    title: "Tauru Pro",
    category: "Marketplace B2B · Logística",
    summary: "Marketplace de logística de cadena de frío y e-commerce B2B.",
    problem:
      "Operadores de cadena de frío y compradores B2B sin un canal común para cotizar, contratar y seguir envíos con requisitos de temperatura.",
    solution:
      "Marketplace B2B con catálogo de capacidades logísticas, flujo de cotización y contratación, y trazabilidad de envíos en frío.",
    stack: ["Angular", "NestJS", "PostgreSQL", "AWS", "E-commerce B2B"],
  },
];
