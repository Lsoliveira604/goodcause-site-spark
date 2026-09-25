import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAgarg from "@/assets/logo-agarc.png.asset.json";
import heroImg from "@/assets/hero-comunidade.jpg";
import capacitacaoImg from "@/assets/carrossel-capacitacao.jpg";
import comunidadeImg from "@/assets/carrossel-comunidade.jpg";
import doacaoImg from "@/assets/doacao.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AGARC — Assistência social e capacitação em Goiânia" },
      {
        name: "description",
        content:
          "Há mais de 24 anos a AGARC promove assistência social, capacitação profissional e cidadania em Goiânia e no Estado de Goiás.",
      },
      { property: "og:title", content: "AGARC — Assistência social e capacitação em Goiânia" },
      {
        property: "og:description",
        content:
          "Desde 2001 promovendo assistência social, incentivando o voluntariado e desenvolvendo ações de valorização humana.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/556296864957";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Av.%20B%2C%20144%2C%20Sala%2018%2C%20Setor%20Oeste%2C%20Goi%C3%A2nia%20GO%2C%2074110-030";
const MAPS_EMBED =
  "https://www.google.com/maps?q=Av.%20B%2C%20144%2C%20Sala%2018%2C%20Setor%20Oeste%2C%20Goi%C3%A2nia%20GO%2C%2074110-030&z=16&output=embed";

const slides = [
  {
    image: heroImg,
    eyebrow: "Goiânia · desde 2001",
    title: "Há mais de 24 anos transformando vidas",
    text: "Promovemos assistência social, voluntariado e ações de valorização humana para construir uma sociedade mais justa.",
    alt: "Participantes de uma ação de capacitação profissional da AGARC",
  },
  {
    image: capacitacaoImg,
    eyebrow: "Capacitação profissional",
    title: "Conhecimento que abre novos caminhos",
    text: "Cursos e projetos que fortalecem a autonomia, ampliam oportunidades e ajudam a gerar trabalho e renda.",
    alt: "Jovens participando de uma oficina de capacitação profissional",
  },
  {
    image: comunidadeImg,
    eyebrow: "Assistência e cidadania",
    title: "Uma rede de cuidado perto de quem precisa",
    text: "Acolhemos famílias e mobilizamos a comunidade em ações que promovem dignidade, inclusão e esperança.",
    alt: "Voluntários e famílias reunidos em uma ação comunitária",
  },
];

const areas = [
  { titulo: "Assistência Social", texto: "Acolhimento e acompanhamento de famílias em situação de vulnerabilidade." },
  { titulo: "Saúde e Educação", texto: "Ações de saúde preventiva e acesso à educação para crianças e jovens." },
  { titulo: "Moradia Popular", texto: "Apoio ao direito à moradia digna e à melhoria das condições de vida." },
  { titulo: "Comércio e Gestão", texto: "Qualificação em gestão, vendas e empreendedorismo para gerar renda." },
  { titulo: "Direitos Humanos", texto: "Defesa da cidadania, dos direitos fundamentais e da convivência comunitária." },
  { titulo: "Moda e Beleza", texto: "Formação em costura, artesanato e estética com foco na autonomia." },
];

const programas = [
  {
    nome: "PLANTEQ",
    texto:
      "Plano Territorial de Qualificação, do Ministério do Trabalho em parceria com a Secretaria Municipal do Desenvolvimento, Trabalho e Empreendedorismo, voltado à capacitação profissional de quem concluiu ou cursa o Ensino Médio.",
  },
  {
    nome: "PETI",
    texto:
      "Programa intersetorial da Política Nacional de Assistência Social para prevenção e erradicação do trabalho infantil e proteção ao adolescente trabalhador.",
  },
  {
    nome: "ProJovem Trabalhador",
    texto:
      "Modalidade do Programa Nacional de Inclusão de Jovens, para pessoas de 18 a 29 anos desempregadas e fora da escola, de famílias com renda de até um salário-mínimo por pessoa.",
  },
  {
    nome: "Consórcio Social da Juventude",
    texto:
      "Vertente do Programa Nacional de Estímulo ao Primeiro Emprego, para jovens de 16 a 24 anos em vulnerabilidade, com cursos de vendas, costura industrial, artesanato, panificação e outros.",
  },
  {
    nome: "PNAPE",
    texto:
      "Política Nacional de Atenção à Pessoa Egressa: reintegração social e produtiva de egressos do sistema prisional e de suas famílias, com ações de cidadania, emprego, saúde e educação.",
  },
  {
    nome: "PLANSEQ Combustível",
    texto:
      "Qualificação para o comércio varejista de combustíveis, com foco em sustentabilidade e em novas exigências do setor.",
  },
  {
    nome: "Juventude Cidadã Goiânia",
    texto:
      "Qualificação socioeducativa e profissional para jovens de 15 a 29 anos do CadÚnico, com formação em cidadania, direitos humanos e empreendedorismo.",
  },
  {
    nome: "PLANSEQ Vestuário",
    texto:
      "Cursos de costura, modelagem e produção para a indústria têxtil e de confecção, em parceria com entidades públicas, privadas e sindicatos.",
  },
];

const depoimentos = [
  {
    texto:
      "A equipe da AGARC me ajudou a alcançar resultados além das expectativas e sempre com excelência.",
    nome: "Mariana Silva",
    papel: "Empreendedora social",
    iniciais: "MS",
  },
  {
    texto:
      "A dedicação e o apoio da equipe foram fundamentais para o meu crescimento pessoal e profissional.",
    nome: "Carlos Oliveira",
    papel: "Educador e mentor",
    iniciais: "CO",
  },
  {
    texto:
      "O comprometimento e a qualidade do trabalho da AGARC fizeram toda a diferença na minha trajetória.",
    nome: "Beatriz Santos",
    papel: "Consultora de inclusão",
    iniciais: "BS",
  },
  {
    texto: "Minha experiência com a AGARC foi excepcional, superando todas as minhas expectativas.",
    nome: "João Almeida",
    papel: "Especialista em desenvolvimento",
    iniciais: "JA",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <a href="#topo" className="flex items-center gap-2.5">
            <span className="gradient-hero grid size-9 place-items-center rounded-xl font-display text-lg font-bold text-primary-foreground">
              A
            </span>
            <span className="font-display text-xl font-bold tracking-tight">AGARC</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-semibold text-muted-foreground md:flex">
            <a href="#quem-somos" className="transition-colors hover:text-primary">
              Quem somos
            </a>
            <a href="#atuacao" className="transition-colors hover:text-primary">
              Áreas
            </a>
            <a href="#programas" className="transition-colors hover:text-primary">
              Programas
            </a>
            <a href="#contato" className="transition-colors hover:text-primary">
              Contato
            </a>
          </nav>
          <a
            href="#doar"
            className="rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-soft transition-colors hover:bg-primary-deep"
          >
            Doe aqui
          </a>
        </div>
      </header>

      <section id="topo" className="gradient-hero relative overflow-hidden text-primary-foreground">
        <div className="absolute -top-24 -right-24 size-96 rounded-full bg-accent/20" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-7">
            <span className="inline-block rounded-full bg-primary-foreground/15 px-4 py-1.5 text-sm font-bold">
              Goiânia · desde 2001
            </span>
            <h1 className="mt-6 text-4xl leading-[1.05] font-bold text-balance sm:text-6xl">
              Há mais de 24 anos contribuindo para uma sociedade melhor
            </h1>
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/85">
              Promovemos assistência social, incentivamos o voluntariado e desenvolvemos ações de
              valorização humana e capacitação profissional do cidadão.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#programas"
                className="rounded-xl bg-accent px-6 py-3 font-bold text-accent-foreground shadow-soft transition-transform hover:-translate-y-0.5"
              >
                Conheça os programas
              </a>
              <a
                href="#doar"
                className="rounded-xl border-2 border-primary-foreground/60 px-6 py-3 font-bold transition-colors hover:bg-primary-foreground/10"
              >
                Doe aqui
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <img
              src={heroImg}
              width={1280}
              height={1440}
              alt="Participantes de um curso de capacitação profissional da AGARC em Goiânia"
              className="aspect-4/5 w-full rounded-3xl object-cover shadow-lift"
            />
          </div>
        </div>
      </section>

      <section id="quem-somos" className="bg-surface">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 lg:grid-cols-2">
          <div>
            <p className="text-xs font-extrabold tracking-[0.12em] text-primary uppercase">Nossa missão</p>
            <h2 className="mt-3 text-3xl font-bold text-balance sm:text-4xl">
              Transformando vidas com impacto social
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              A AGARC é uma organização não governamental fundada em 2001, que atua em Goiânia, nos
              municípios de Goiás e em diversos estados. Trabalhamos pelo direito à vida, saúde,
              moradia, educação, trabalho, cultura e convivência familiar e comunitária.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Também atuamos no amparo à infância, à adolescência e à juventude, com programas de
              qualificação profissional e desenvolvimento humano.
            </p>
            <a
              href="#atuacao"
              className="mt-7 inline-block rounded-xl bg-primary px-6 py-3 font-bold text-primary-foreground transition-colors hover:bg-primary-deep"
            >
              Descubra mais
            </a>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
            <h3 className="text-2xl font-bold">Criando caminhos para um futuro melhor</h3>
            <p className="mt-3 text-muted-foreground">
              Nossos cursos e ações sociais abrem portas. Inscreva-se, contribua ou saiba como fazer
              parte dessa mudança.
            </p>
            <dl className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-semibold text-muted-foreground">Fundação</dt>
                <dd className="font-display text-xl font-bold">10 de março de 2001</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-muted-foreground">CNPJ</dt>
                <dd className="font-display text-xl font-bold">04.424.386/0001-10</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section id="atuacao" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-extrabold tracking-[0.12em] text-primary uppercase">
            Áreas de atuação
          </p>
          <h2 className="mt-3 text-3xl font-bold text-balance sm:text-4xl">
            Seis frentes, um só compromisso: dignidade
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Cada área reúne cursos, oficinas e ações desenhadas para transformar realidades.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, i) => (
            <article
              key={area.titulo}
              className="rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-soft"
            >
              <span className="grid size-12 place-items-center rounded-xl bg-primary/12 font-display text-lg font-bold text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-xl font-bold">{area.titulo}</h3>
              <p className="mt-2 text-muted-foreground">{area.texto}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="programas" className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-extrabold tracking-[0.12em] text-primary uppercase">
              Nossos programas
            </p>
            <h2 className="mt-3 text-3xl font-bold text-balance sm:text-4xl">
              Capacitação que abre portas para um futuro melhor
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {programas.map((p) => (
              <article key={p.nome} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
                <h3 className="text-xl font-bold text-primary-deep">{p.nome}</h3>
                <p className="mt-3 text-muted-foreground">{p.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="gradient-hero text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold text-balance sm:text-4xl">
            Fomentando oportunidades e transformação social
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Números que revelam impacto, progresso e resultados nas nossas iniciativas sociais e
            educacionais.
          </p>
          <dl className="mt-14 grid gap-10 sm:grid-cols-3">
            {[
              { num: "250", lbl: "Projetos e ações realizados" },
              { num: "8.000+", lbl: "Pessoas capacitadas" },
              { num: "600", lbl: "Famílias apoiadas" },
            ].map((s) => (
              <div key={s.lbl}>
                <dt className="font-display text-5xl font-bold text-accent">{s.num}</dt>
                <dd className="mt-2 font-semibold text-primary-foreground/85">{s.lbl}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-extrabold tracking-[0.12em] text-primary uppercase">Depoimentos</p>
          <h2 className="mt-3 text-3xl font-bold text-balance sm:text-4xl">
            Histórias de quem passou por aqui
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {depoimentos.map((d) => (
            <figure key={d.nome} className="rounded-2xl border border-border bg-card p-7">
              <blockquote className="text-lg italic">“{d.texto}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="gradient-hero grid size-11 place-items-center rounded-full font-bold text-primary-foreground">
                  {d.iniciais}
                </span>
                <span>
                  <span className="block font-bold">{d.nome}</span>
                  <span className="block text-sm text-muted-foreground">{d.papel}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="doar" className="bg-surface">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 lg:grid-cols-2">
          <img
            src={doacaoImg}
            width={1280}
            height={960}
            loading="lazy"
            alt="Voluntários da AGARC entregando cestas de alimentos a uma família"
            className="aspect-4/3 w-full rounded-3xl object-cover shadow-lift"
          />
          <div>
            <p className="text-xs font-extrabold tracking-[0.12em] text-primary uppercase">
              Faça sua doação
            </p>
            <h2 className="mt-3 text-3xl font-bold text-balance sm:text-4xl">
              Nos ajude a cuidar de quem precisa
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Com um pequeno gesto você faz uma grande diferença. Sua doação mantém projetos que
              acolhem, capacitam e resgatam a dignidade de quem mais precisa.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-accent px-6 py-3 font-bold text-accent-foreground shadow-soft transition-transform hover:-translate-y-0.5"
              >
                Quero doar pelo WhatsApp
              </a>
              <a
                href="#contato"
                className="rounded-xl border-2 border-primary px-6 py-3 font-bold text-primary transition-colors hover:bg-primary/10"
              >
                Falar com a equipe
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer id="contato" className="bg-primary-deep text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="grid size-9 place-items-center rounded-xl bg-accent font-display text-lg font-bold text-accent-foreground">
                  A
                </span>
                <span className="font-display text-xl font-bold">AGARC</span>
              </div>
              <p className="mt-4 max-w-xs text-primary-foreground/70">
                Associação Goiana de Atualização e Realização do Cidadão. Assistência social e
                capacitação com compromisso e impacto positivo.
              </p>
            </div>
            <div>
              <h3 className="text-base font-bold">Contato</h3>
              <ul className="mt-4 space-y-2 text-primary-foreground/75">
                <li>
                  Avenida B, n. 144, Sala 18 — Setor Oeste
                  <br />
                  Goiânia-GO, CEP 74.110-130
                </li>
                <li>
                  <a href="tel:+556232911032" className="hover:text-primary-foreground">
                    (62) 3291-1032
                  </a>{" "}
                  ·{" "}
                  <a href="tel:+5562999782925" className="hover:text-primary-foreground">
                    (62) 99978-2925
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
    </div>
  );
}
