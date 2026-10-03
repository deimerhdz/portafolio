import {
  Boxes,
  Database,
  Server,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import brahmanFriendsImage from "../assets/brahman-friends.webp";
import skeiloImage from "../assets/skeilo.webp";
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
    name: "Angular | React | Nextjs",
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

export type CaseStudyStatus = "in-progress" | "completed";

export type CaseStudy = {
  id: string;
  index: string;
  title: string;
  category: string;
  summary: string;
  problem: string;
  solution: string;
  stack: string[];
  image?: string;
  demoUrl?: string;
  status: CaseStudyStatus;
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
    image: skeiloImage,
    demoUrl: "https://www.skeilopos.com/",
    status: "in-progress",
  },
  {
    id: "brahman-friends",
    index: "02",
    title: "Brahman friends",
    category: "Tienda de gorras online",
    summary:
      "E-commerce especializado en productos personalizados para la comunidad ganadera.",
    problem:
      "Las ventas dependían de procesos manuales para mostrar productos, gestionar personalizaciones y atender pedidos, dificultando una experiencia de compra fluida.",
    solution:
      "Diseñé y desarrollé una experiencia de e-commerce que combina catálogo de productos, personalización de gorras, pedidos por WhatsApp y solicitudes para compras al por mayor.",
    stack: [
      "Nextjs",
      "Make automation",
      "NeonDB",
      "Claudflare",
      "Spec driven development",
    ],
    image: brahmanFriendsImage,
    demoUrl: "https://brahman-friends.bfcaps26.workers.dev/en",
    status: "completed",
  },
];
