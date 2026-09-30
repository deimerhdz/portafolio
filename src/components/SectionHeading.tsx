import { cn } from "../utils";

type SectionHeadingProps = {
  index: string;
  kicker: string;
  title: string;
  description?: string;
  className?: string;
};

export const SectionHeading = ({
  index,
  kicker,
  title,
  description,
  className,
}: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 border-b border-border pb-8 md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div>
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
          {index} / {kicker}
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
      </div>
      {description ? (
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  );
};
