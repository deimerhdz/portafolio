import { Mail } from "lucide-react";

import { PROFILE } from "../data";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="contacto" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
          03 / Contacto
        </p>

        <h2 className="mt-6 max-w-3xl font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          ¿Construimos algo escalable?
        </h2>

        <a
          href={`mailto:${PROFILE.email}`}
          className="mt-8 inline-flex max-w-full items-center gap-3 break-all font-display text-xl font-bold tracking-tight text-foreground transition-colors hover:text-primary sm:text-3xl"
        >
          <Mail
            size={22}
            aria-hidden
            className="shrink-0 text-muted-foreground"
          />
          {PROFILE.email}
        </a>

        <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Abierto a roles de arquitectura y desarrollo Full Stack en productos
          B2B, y a proyectos de consultoría donde la escalabilidad importe desde
          el primer sprint.
        </p>

        <div className="mt-10 flex items-center gap-3">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub de Deimer Hernandez"
            className="inline-flex items-center gap-2 rounded-md border border-surface px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {/* <Github size={16} aria-hidden /> */}
            GitHub
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn de Deimer Hernandez"
            className="inline-flex items-center gap-2 rounded-md border border-surface px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {/* <Linkedin size={16} aria-hidden /> */}
            LinkedIn
          </a>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2.5">
            <span>
              © {year} {PROFILE.name}
            </span>
          </p>
          <p>Ingeniería Full Stack · Arquitectura multi-tenant · AWS</p>
        </div>
      </div>
    </footer>
  );
};
