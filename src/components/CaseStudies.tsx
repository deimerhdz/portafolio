import { ExternalLink, ImageIcon } from "lucide-react";
import { CASE_STUDIES, type CaseStudyStatus } from "../data";
import { SectionHeading } from "./SectionHeading";

const STATUS_BADGE: Record<CaseStudyStatus, { label: string; className: string }> = {
  "in-progress": {
    label: "En progreso",
    className: "border-amber-400/40 bg-amber-400/10 text-amber-400",
  },
  completed: {
    label: "Finalizado",
    className: "border-emerald-400/40 bg-emerald-400/10 text-emerald-400",
  },
};

export function CaseStudies() {
  return (
    <section id="casos" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <SectionHeading
          index="02"
          kicker="Casos de Estudio"
          title="Plataformas en producción"
          description="Tres sistemas B2B resueltos con arquitectura multi-tenant, control transaccional y despliegue cloud."
        />

        <div className="mt-8 flex flex-col gap-5">
          {CASE_STUDIES.map((project) => (
            <article
              key={project.id}
              className="rounded-lg border border-surface transition-colors hover:border-primary/60"
            >
              <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[13rem_1fr]">
                <div className="flex flex-row items-center gap-4 lg:flex-col lg:items-start lg:gap-3">
                  <span className="font-display text-3xl font-extrabold leading-none text-muted-foreground/50">
                    {project.index}
                  </span>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {project.category}
                  </p>
                </div>

                <div>
                  {project.image ? (
                    <div className="mb-6 aspect-[16/9] overflow-hidden rounded-md border border-surface">
                      <img
                        src={project.image}
                        alt={`Captura de ${project.title}`}
                        loading="lazy"
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                  ) : (
                    <div className="mb-6 flex aspect-[16/9] flex-col items-center justify-center gap-3 rounded-md border border-dashed border-surface bg-surface/30">
                      <ImageIcon className="h-8 w-8 text-muted-foreground/60" />
                      <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        Imagen del proyecto próximamente
                      </span>
                    </div>
                  )}

                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                      {project.title}
                    </h3>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${STATUS_BADGE[project.status].className}`}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden />
                      {STATUS_BADGE[project.status].label}
                    </span>
                  </div>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {project.summary}
                  </p>

                  <dl className="mt-6 grid gap-6 border-t border-surface pt-6 sm:grid-cols-2">
                    <div>
                      <dt className="text-xs uppercase tracking-[0.18em] text-primary">
                        Problema de negocio
                      </dt>
                      <dd className="mt-2 text-sm leading-relaxed text-foreground/90">
                        {project.problem}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-[0.18em] text-primary">
                        Solución técnica
                      </dt>
                      <dd className="mt-2 text-sm leading-relaxed text-foreground/90">
                        {project.solution}
                      </dd>
                    </div>
                  </dl>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-md border border-surface px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      Ver demo
                      <ExternalLink size={16} aria-hidden />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
