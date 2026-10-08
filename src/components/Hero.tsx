import { ArrowRight } from "lucide-react";
import { HERO_FOCUS, PROFILE } from "../data";

export const Hero = () => {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-24 sm:pb-28 sm:pt-32 lg:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16">
          <div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
              <span className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {PROFILE.role}
                <span
                  aria-hidden
                  className="size-1.5 shrink-0 rounded-full bg-primary"
                />
              </span>
            </div>

            <h1 className="mt-8 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Arquitectura cloud y desarrollo Full Stack para plataformas
              escalables.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Construyo sistemas complejos con interfaces simples. Especialista
              en arquitecturas multi-tenant, orquestación cloud y automatización
              de procesos.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#casos"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Ver Proyectos
                <ArrowRight size={16} aria-hidden />
              </a>
              {/* <a
                href={PROFILE.cvPath}
                download
                className="inline-flex items-center gap-2 rounded-md border border-surface px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Descargar CV ATS
                <Download size={16} aria-hidden />
              </a> */}
            </div>
          </div>

          <figure className="mx-auto w-full max-w-sm lg:max-w-none">
            <div className="overflow-hidden rounded-lg border border-border bg-surface">
              <img
                src={PROFILE.image}
                alt="Retrato de Deimer Hernandez"
                width={500}
                height={500}
                className="aspect-square w-full object-cover object-center"
              />
              <figcaption className="border-t border-border bg-background px-4 py-3.5">
                <p className="font-display text-sm font-bold tracking-tight text-foreground">
                  {PROFILE.name}
                </p>
                <p className="mt-1 text-[0.7rem] uppercase leading-relaxed tracking-[0.16em] text-muted-foreground">
                  {PROFILE.role}
                </p>
              </figcaption>
            </div>
          </figure>
        </div>
      </div>

      <div className="hairline-grid grid-cols-1 border-t border-border sm:grid-cols-3">
        {HERO_FOCUS.map((item) => (
          <div key={item.label} className="px-6 py-6">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {item.label}
            </p>
            <p className="mt-2 font-display text-sm font-bold tracking-tight text-foreground">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
