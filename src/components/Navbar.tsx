import { PROFILE } from "../data";

type NavLink = {
  label: string;
  href: string;
};
const NAV_LINKS: NavLink[] = [
  { label: "Casos de Estudio", href: "#casos" },
  { label: "Stack Técnico", href: "#stack" },
];

export const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a className="group inline-flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background">
          <img
            src="/logotipo.svg"
            alt="logotipo"
            className="size-8 transition-colors group-hover:border-primary"
          />
          <span className="font-display text-base font-extrabold tracking-tight text-foreground">
            {PROFILE.name}
          </span>
          <span className="text-primary">.</span>
        </a>

        <div className="flex items-center gap-6 sm:gap-9">
          <nav className="hidden items-center gap-9 sm:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-md border border-surface px-4 py-2 text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Contacto
          </a>
        </div>
      </div>
    </div>
  );
};
