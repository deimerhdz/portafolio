import { STACK_PILLARS } from "../data";
import { SectionHeading } from "./SectionHeading";

export const TechStack = () => {
  return (
    <section id="stack" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <SectionHeading
          index="01"
          kicker="Stack Técnico"
          title="Cuatro pilares por proyecto"
          description="Un stack estable y profundo: mismo equipo, mismo contrato tipado, desde la interfaz hasta la infraestructura."
        />

        <div className="hairline-grid mt-8 grid-cols-1 border border-border sm:grid-cols-2 lg:grid-cols-4">
          {STACK_PILLARS.map((pillar) => (
            <div key={pillar.id} className="flex flex-col p-6">
              <pillar.icon
                size={20}
                strokeWidth={1.75}
                className="text-muted-foreground"
                aria-hidden
              />
              <p className="mt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {pillar.layer}
              </p>
              <h3 className="mt-2 font-display text-lg font-bold tracking-tight text-foreground">
                {pillar.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
