import { CASE_STUDIES } from "../data";
import { SectionHeading } from "./SectionHeading";

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
                  <h3 className="font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                    {project.title}
                  </h3>
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
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
