import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ExternalLink, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAgarg from "@/assets/logo-agarc.png.asset.json";
import { WHATSAPP } from "@/lib/site";

const navItems = [
  { to: "/", label: "Início" },
  { to: "/quem-somos", label: "Quem somos" },
  { to: "/atuacao", label: "Áreas de atuação" },
  { to: "/programas", label: "Programas" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link to="/" className="shrink-0" aria-label="AGARC — página inicial">
          <img
            src={logoAgarg.url}
            width={443}
            height={106}
            alt="AGARC — Associação Goiana de Atualização e Realização do Cidadão"
            className="h-12 w-auto max-w-[250px] object-contain sm:h-14 sm:max-w-[300px]"
          />
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-muted-foreground md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={item.to === "/" ? { exact: true } : undefined}
              activeProps={{ className: "text-primary" }}
              className="transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <Button asChild className="h-10 px-5 font-bold">
            <Link to="/" hash="doar">Doe aqui</Link>
          </Button>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-lg border border-border text-foreground md:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
      {menuOpen ? (
        <nav className="border-t border-border bg-background md:hidden" aria-label="Menu principal">
          <ul className="mx-auto max-w-6xl space-y-1 px-6 py-4">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={item.to === "/" ? { exact: true } : undefined}
                  activeProps={{ className: "bg-surface text-primary" }}
                  className="block rounded-lg px-3 py-2 font-semibold text-muted-foreground transition-colors hover:bg-surface hover:text-primary"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/"
                hash="doar"
                className="block rounded-lg px-3 py-2 font-bold text-primary transition-colors hover:bg-surface"
                onClick={() => setMenuOpen(false)}
              >
                Doe aqui
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

export function PageHero({
  image,
  imageAlt,
  eyebrow,
  title,
  description,
}: {
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden bg-primary-deep text-primary-foreground">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 size-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative z-10 mx-auto flex min-h-[340px] max-w-6xl flex-col justify-end px-6 pt-24 pb-16 sm:min-h-[380px]">
        <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-accent">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.08] text-balance sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/88">
          {description}
        </p>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-primary-deep text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="inline-block rounded-md bg-card p-2">
              <img
                src={logoAgarg.url}
                width={443}
                height={106}
                alt="AGARC"
                className="h-12 w-auto max-w-[270px] object-contain"
                loading="lazy"
              />
            </div>
            <p className="mt-4 max-w-xs text-primary-foreground/70">
              Associação Goiana de Atualização e Realização do Cidadão. Assistência social e
              capacitação com compromisso e impacto positivo.
            </p>
          </div>
          <div>
            <h3 className="text-base font-bold">Navegação</h3>
            <ul className="mt-4 space-y-2 text-primary-foreground/75">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    activeOptions={item.to === "/" ? { exact: true } : undefined}
                    className="transition-colors hover:text-primary-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/" hash="doar" className="font-semibold text-accent hover:underline">
                  Faça uma doação
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-bold">Contato</h3>
            <ul className="mt-4 space-y-2 text-primary-foreground/75">
              <li>
                Avenida B, nº 144, Sala 18 — Setor Oeste
                <br />
                Goiânia-GO, CEP 74.110-030
              </li>
              <li>
                <a href="tel:+556232911032" className="hover:text-primary-foreground">
                  (62) 3291-1032
                </a>
              </li>
              <li>
                <a href="mailto:agarctrabalho@gmail.com" className="hover:text-primary-foreground">
                  agarctrabalho@gmail.com
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-accent hover:underline"
                >
                  Chamar no WhatsApp
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-bold">Institucional</h3>
            <ul className="mt-4 space-y-2 text-primary-foreground/75">
              <li>CNPJ: 04.424.386/0001-10</li>
              <li>Fundação: 10 de março de 2001</li>
              <li>Inscrições Estadual e Municipal: isentas</li>
              <li>Registro em Cartório: 191799, de 05/04/2001</li>
            </ul>
          </div>
        </div>
        <p className="mt-12 border-t border-primary-foreground/15 pt-6 text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} AGARC — Associação Goiana de Atualização e Realização do
          Cidadão.
        </p>
      </div>
    </footer>
  );
}

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar com a AGARC pelo WhatsApp Business"
      className="group fixed bottom-5 right-5 z-50 flex h-14 items-center gap-2 rounded-full bg-primary px-4 text-primary-foreground shadow-lift transition-transform hover:-translate-y-1 hover:bg-primary-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:bottom-7 sm:right-7"
    >
      <MessageCircle className="size-6" aria-hidden="true" />
      <span className="hidden text-sm font-bold sm:block">WhatsApp</span>
    </a>
  );
}

export function ContactStrip() {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-muted-foreground">
      <span className="inline-flex items-center gap-2">
        <MapPin className="size-4 text-primary" aria-hidden="true" />
        Setor Oeste, Goiânia–GO
      </span>
      <span className="inline-flex items-center gap-2">
        <Phone className="size-4 text-primary" aria-hidden="true" />
        (62) 3291-1032
      </span>
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-primary hover:text-primary-deep"
      >
        <MessageCircle className="size-4" aria-hidden="true" />
        WhatsApp Business
      </a>
      <a
        href="https://www.google.com/maps/search/?api=1&query=Av.%20B%2C%20144%2C%20Sala%2018%2C%20Setor%20Oeste%2C%20Goi%C3%A2nia%20GO%2C%2074110-030"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-primary hover:text-primary-deep"
      >
        <ExternalLink className="size-4" aria-hidden="true" />
        Google Maps
      </a>
    </div>
  );
}
