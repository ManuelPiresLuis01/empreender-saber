import { useState } from "react";
import { Award, HeartHandshake, Lightbulb, ShieldCheck } from "lucide-react";
import { AcademyFooter } from "./AcademyFooter";
import { AcademyHeader } from "./AcademyHeader";
import heroImage from "../assets/hero.png";
import audienceBackground from "../assets/images.jfif";

const WHATSAPP_URL =
  "https://wa.me/244931611511?text=" +
  encodeURIComponent("Olá Academia Empreende-Saber, gostaria de mais informações.");

export function AcademyPage() {
  const [messageSent, setMessageSent] = useState(false);

  return (
    <>
      <AcademyHeader />
      <section
        className="relative h-[100dvh] min-h-[100dvh] flex items-center justify-center overflow-hidden bg-page"
        data-purpose="hero-section"
      >
        <div className="absolute inset-0 z-0">
          <img
            alt="Liderança e Formação Profissional"
            className="w-full h-full object-cover object-center"
            src={heroImage}
          />
          <div className="absolute inset-0 bg-brand-blue mix-blend-multiply opacity-25"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-page/85 via-page/20 to-page/5"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-page/70 via-page/20 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-4xl">
            <div className="inline-block mb-6"></div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-hero-foreground tracking-tight leading-[1.12] mb-6">
              Conhecimento que transforma.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-hero-foreground via-slate-200 to-brand-goldLight">
                Competências que geram oportunidades.
              </span>
            </h1>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                className="px-7 py-3.5 bg-brand-blue hover:bg-brand-blueHover text-hero-foreground text-sm font-bold rounded-full shadow-lg transition duration-200 flex items-center gap-2"
                href="#servicos"
              >
                Conheça os nossos serviços <span>→</span>
              </a>
              <a
                className="px-7 py-3.5 bg-elevated hover:bg-elevated-hover text-brand-goldLight text-sm font-bold rounded-full shadow-lg transition duration-200 flex items-center gap-2"
                href="/cursos"
              >
                Conheça os nossos cursos
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="sobre-nos"
        className="py-20 md:py-28 bg-page border-t border-brand-border"
        data-purpose="pillars-section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="max-w-xl">
              <span className="text-xs font-bold text-brand-goldLight uppercase tracking-widest">
                Sobre nós
              </span>
              <h2 className="text-xl md:text-2xl font-extrabold text-hero-foreground mt-1">
                Uma base sólida para crescimento real.
              </h2>
              <p className="mt-6 text-base md:text-lg leading-8 text-slate-300">
                A Academia Empreende-Saber desenvolve formação, orientação e soluções que conectam
                conhecimento, prática e oportunidade, com foco em impacto concreto para pessoas,
                organizações e comunidades.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-goldLight">
                Os nossos valores
              </h3>
              <div className="flex flex-col">
                {[
                  {
                    title: "Excelência",
                    description: "Qualidade e rigor em cada solução.",
                    Icon: Award,
                  },
                  {
                    title: "Integridade",
                    description: "Ética, transparência e responsabilidade.",
                    Icon: ShieldCheck,
                  },
                  {
                    title: "Inclusão",
                    description: "Conhecimento e oportunidades acessíveis a todos.",
                    Icon: HeartHandshake,
                  },
                  {
                    title: "Empreendedorismo",
                    description: "Ideias transformadas em iniciativas com impacto.",
                    Icon: Lightbulb,
                  },
                ].map(({ title, description, Icon }) => (
                  <div
                    key={title}
                    className="flex items-center gap-4 border-b border-brand-border py-5 last:border-b-0"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-brand-gold/30 bg-brand-gold/10 text-brand-goldLight">
                      <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <div>
                      <h4 className="text-base font-bold text-hero-foreground">{title}</h4>
                      <p className="mt-1 text-sm leading-6 text-slate-300">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-20 md:py-28 bg-page border-t border-brand-border"
        data-purpose="partners-section"
        id="parceiros"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-widest">
              Confiança Institucional
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-hero-foreground mt-1 mb-2">
              Juntos criamos mais oportunidades.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center">
            <div className="p-6 rounded-xl flex items-center justify-center h-32 transition duration-200">
              <img
                alt="Banco Yetu"
                className="max-h-16 w-auto object-contain filter invert opacity-85 hover:opacity-100 transition"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs15t3gWzyA2Gf23OnvvEe62LnFnRl-Qyisgg-FngVycnNZ7rksX2zi5vOr1muXWmHORjXtS1lyUNTHjPAEmDLJY00nd5AOU9jSIAcMV5Hd4jI-jWaXNTClFfZuSoSDw7t-g7ZlgxvnH8DgxXP57jLIHlJbsApJ1fxbSWa8oqrQUuNFwKBeVIUyJ2_Cj38AkhWNk22XFigPA3lQLQ1I_uTVyxIiWz__nQO_0g4pS6_iHgct24RTRt5Xf1abad4I3NozlM"
              />
            </div>

            <div className="p-6 rounded-xl flex items-center justify-center h-32 transition duration-200">
              <img
                alt="Banco de Comércio e Indústria - BCI"
                className="max-h-14 w-auto object-contain filter invert opacity-85 hover:opacity-100 transition"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9U0oBeYWemwjBii9aaaJcg32dW0dBIoriTke3z5ka2Z-vaSLIBarZjd1gIysjRzAigSYwyIbrqIWN9d5ehSbxrY7CmrFv42rKRapfxDu2fVMF4mUbZZtUc14qjzZ8IUxurvUxCtWe3MSt9WyeEoSqW1085rx7ipU9nMDmyZ6yuRyMgSgiUjmsExwPiB6big8k8AkHNVjqO7TvNpidZEEjyudLm69M5HLPoDWvzN8M35MU4nqHjhAtu3ahbSvL6seo14Y"
              />
            </div>

            <div className="p-6 rounded-xl flex items-center justify-center h-32 transition duration-200">
              <img
                alt="Ministério da Administração Pública, Trabalho e Segurança Social"
                className="max-h-12 w-auto object-contain filter invert opacity-85 hover:opacity-100 transition"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX2WJ6n4LRrHVHziIiaJkcS-12jVd7I_-krzBlZe8DqkblsE5XH7AvY0I41aH03zMlS5yGXScRone_hKdmV5l_1lAGpbeGrMEJfdXkMBIMVQSAzzgZjqFddcjm2TMg9WcBwdfSUBBFKxdgk6veUzkrV9DcZa41Hz3tUbsqd7DrJhVif9QeVA2uws-i7QUmwnLkKuNnLApOoqyb034dcdcSQdJoeYjBYVehjLOlsPZ2hBi4WihX2rb7kZP_XB3VHk1kMNk"
              />
            </div>

            <div className="p-6 rounded-xl flex flex-col items-center justify-center h-32 transition duration-200 text-center">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">
                Governo Provincial
              </span>
              <span className="text-base font-extrabold text-hero-foreground tracking-wider mt-0.5">
                DA HUÍLA
              </span>
              <span className="text-[10px] text-brand-gold font-medium uppercase mt-1">
                República de Angola
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative flex h-[100dvh] min-h-[100dvh] items-center overflow-hidden bg-page"
        data-purpose="audience-section"
        id="publico"
      >
        <div className="absolute inset-0 z-0">
          <img
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-center"
            src={audienceBackground}
          />
          <div className="absolute inset-0 bg-brand-blue mix-blend-multiply opacity-35"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-page/90 via-page/45 to-page/25"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-page/75 via-page/35 to-page/10"></div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-2xl">
            <span className="text-xs font-bold text-brand-goldLight uppercase tracking-widest">
              A Quem Nos Dirigimos
            </span>
            <h2 className="text-xl md:text-2xl font-extrabold text-hero-foreground mt-1">
              Para quem trabalhamos?
            </h2>
          </div>
          <div className="max-w-xl">
            <div className="flex flex-col">
              <div className="flex items-center gap-4 border-b border-white/20 py-4">
                <div className="w-9 h-9 rounded-md bg-brand-blue/20 text-brand-blue flex items-center justify-center shrink-0 border border-brand-blue/30">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                  </svg>
                </div>
                <span className="text-sm font-semibold text-white">
                  Jovens, estudantes e educadores
                </span>
              </div>

              <div className="flex items-center gap-4 border-b border-white/20 py-4">
                <div className="w-9 h-9 rounded-md bg-brand-gold/20 text-brand-goldLight flex items-center justify-center shrink-0 border border-brand-gold/30">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                    viewBox="0 0 24 24"
                  >
                    <rect height="14" rx="2" ry="2" width="20" x="2" y="7"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <span className="text-sm font-semibold text-white">Profissionais e gestores</span>
              </div>

              <div className="flex items-center gap-4 border-b border-white/20 py-4">
                <div className="w-9 h-9 rounded-md bg-brand-gold/20 text-brand-goldLight flex items-center justify-center shrink-0 border border-brand-gold/30">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                    <path d="M9 18h6"></path>
                    <path d="M10 22h4"></path>
                  </svg>
                </div>
                <span className="text-sm font-semibold text-white">
                  Empreendedores, fundadores e empresas
                </span>
              </div>

              <div className="flex items-center gap-4 py-4">
                <div className="w-9 h-9 rounded-md bg-brand-blue/20 text-brand-blue flex items-center justify-center shrink-0 border border-brand-blue/30">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                    viewBox="0 0 24 24"
                  >
                    <rect height="20" rx="2" ry="2" width="16" x="4" y="2"></rect>
                    <path d="M9 22v-4h6v4"></path>
                    <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01"></path>
                  </svg>
                </div>
                <span className="text-sm font-semibold text-white">
                  Instituições públicas e privadas
                </span>
              </div>

              <div className="hidden">
                <div className="w-9 h-9 rounded-md bg-brand-blue/20 text-brand-blue flex items-center justify-center shrink-0 border border-brand-blue/30">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                    viewBox="0 0 24 24"
                  >
                    <line x1="2" x2="22" y1="20" y2="20"></line>
                    <line x1="3" x2="21" y1="10" y2="10"></line>
                    <path d="m12 2 9 8H3l9-8z"></path>
                    <line x1="6" x2="6" y1="10" y2="20"></line>
                    <line x1="10" x2="10" y1="10" y2="20"></line>
                    <line x1="14" x2="14" y1="10" y2="20"></line>
                    <line x1="18" x2="18" y1="10" y2="20"></line>
                  </svg>
                </div>
                <span className="text-sm font-semibold text-slate-200">Instituições públicas</span>
              </div>

              <div className="hidden">
                <div className="w-9 h-9 rounded-md bg-brand-gold/20 text-brand-goldLight flex items-center justify-center shrink-0 border border-brand-gold/30">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                    <path d="M2 12h20"></path>
                  </svg>
                </div>
                <span className="text-sm font-semibold text-slate-200">
                  Organizações sociais &amp; ONGs
                </span>
              </div>

              <div className="hidden">
                <div className="w-9 h-9 rounded-md bg-brand-blue/20 text-brand-blue flex items-center justify-center shrink-0 border border-brand-blue/30">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path>
                    <path d="M6 6h10"></path>
                    <path d="M6 10h10"></path>
                  </svg>
                </div>
                <span className="text-sm font-semibold text-slate-200">
                  Professores e educadores
                </span>
              </div>

              <div className="hidden">
                <div className="w-9 h-9 rounded-md bg-brand-gold/20 text-brand-goldLight flex items-center justify-center shrink-0 border border-brand-gold/30">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <span className="text-sm font-semibold text-slate-200">
                  Gestores executivos e líderes
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-20 md:py-28 bg-band border-t border-brand-border"
        data-purpose="why-choose-section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">
              Diferenciais Competitivos
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-hero-foreground mt-1 mb-4">
              Mais do que formar, desenvolvemos competências.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-brand-card p-6 rounded-lg border border-brand-border">
              <div className="w-10 h-10 rounded bg-brand-blue/20 text-brand-blue flex items-center justify-center font-bold text-sm mb-4">
                01
              </div>
              <h3 className="text-base font-bold text-hero-foreground mb-2">
                Formação orientada para resultados
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Conteúdos aplicáveis no dia-a-dia de trabalho que geram impacto imediato e
                mensurável.
              </p>
            </div>
            <div className="bg-brand-card p-6 rounded-lg border border-brand-border">
              <div className="w-10 h-10 rounded bg-brand-blue/20 text-brand-blue flex items-center justify-center font-bold text-sm mb-4">
                02
              </div>
              <h3 className="text-base font-bold text-hero-foreground mb-2">
                Soluções personalizadas
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Programas construídos de raiz para responder às metas e desafios de cada organização
                cliente.
              </p>
            </div>
            <div className="bg-brand-card p-6 rounded-lg border border-brand-border">
              <div className="w-10 h-10 rounded bg-brand-blue/20 text-brand-blue flex items-center justify-center font-bold text-sm mb-4">
                03
              </div>
              <h3 className="text-base font-bold text-hero-foreground mb-2">
                Profissionais especializados
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Formadores, facilitadores e consultores com vasta experiência teórica, pedagógica e
                prática de mercado.
              </p>
            </div>
            <div className="bg-brand-card p-6 rounded-lg border border-brand-border">
              <div className="w-10 h-10 rounded bg-brand-blue/20 text-brand-blue flex items-center justify-center font-bold text-sm mb-4">
                04
              </div>
              <h3 className="text-base font-bold text-hero-foreground mb-2">Visão empreendedora</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Foco no desenvolvimento de iniciativa, autonomia, pensamento crítico e resolução
                assertiva de problemas.
              </p>
            </div>
            <div className="bg-brand-card p-6 rounded-lg border border-brand-border">
              <div className="w-10 h-10 rounded bg-brand-blue/20 text-brand-blue flex items-center justify-center font-bold text-sm mb-4">
                05
              </div>
              <h3 className="text-base font-bold text-hero-foreground mb-2">
                Diversidade de soluções
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Respostas integradas que cobrem desde formação e consultoria até soluções digitais e
                serviços técnicos.
              </p>
            </div>
            <div className="bg-brand-card p-6 rounded-lg border border-brand-border">
              <div className="w-10 h-10 rounded bg-brand-blue/20 text-brand-blue flex items-center justify-center font-bold text-sm mb-4">
                06
              </div>
              <h3 className="text-base font-bold text-hero-foreground mb-2">
                Compromisso com a qualidade
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Rigor técnico, ética institucional e dedicação contínua à satisfação de cada
                formando e parceiro.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-band border-t border-brand-border" data-purpose="quote-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <svg
            className="w-10 h-10 text-brand-gold/40 mx-auto mb-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-8.983z"></path>
          </svg>
          <blockquote className="text-lg md:text-xl font-normal text-slate-200 italic leading-relaxed">
            “O sucesso não é definitivo, o fracasso não é fatal, o que conta é a coragem de
            continuar.”
          </blockquote>
          <cite className="block mt-4 text-xs md:text-sm font-semibold tracking-widest text-brand-gold uppercase not-italic">
            — Winston Churchill
          </cite>
        </div>
      </section>

      <section
        className="py-20 md:py-28 bg-page border-t border-brand-border"
        data-purpose="contact-section"
        id="contactos"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">
                Canais Directos
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-hero-foreground mt-1 mb-4">
                Fale connosco
              </h2>
              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-brand-blue/20 text-brand-blue flex items-center justify-center shrink-0 mt-0.5 border border-brand-blue/30">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Endereço Oficial
                    </span>
                    <span className="text-hero-foreground font-medium">
                      Província da Huíla, Município da Palanca, Bairro da Taka.
                    </span>
                    <span className="block text-xs text-slate-500 mt-0.5">
                      Sede: Centralidade da Quilemba, Lubango
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-brand-blue/20 text-brand-blue flex items-center justify-center shrink-0 mt-0.5 border border-brand-blue/30">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                      WhatsApp &amp; Linha Geral
                    </span>
                    <a
                      className="text-brand-goldLight font-bold hover:underline"
                      href="tel:+244931611511"
                    >
                      (+244) 931 611 511
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-brand-blue/20 text-brand-blue flex items-center justify-center shrink-0 mt-0.5 border border-brand-blue/30">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <rect height="16" rx="2" width="20" x="2" y="4"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Correio Electrónico
                    </span>
                    <a
                      className="text-hero-foreground hover:text-brand-blue font-medium"
                      href="mailto:contacto@empreendesaber.ao"
                    >
                      contacto@empreendesaber.ao
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-brand-border">
                <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                  Siga a nossa Academia:
                </span>
                <div className="flex items-center gap-3">
                  <a
                    aria-label="Facebook"
                    className="w-10 h-10 rounded-lg bg-brand-card hover:bg-brand-blue text-slate-300 hover:text-hero-foreground flex items-center justify-center transition border border-brand-border"
                    href="https://facebook.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12z"></path>
                    </svg>
                  </a>
                  <a
                    aria-label="Instagram"
                    className="w-10 h-10 rounded-lg bg-brand-card hover:bg-brand-blue text-slate-300 hover:text-hero-foreground flex items-center justify-center transition border border-brand-border"
                    href="https://instagram.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                    </svg>
                  </a>
                  <a
                    aria-label="LinkedIn"
                    className="w-10 h-10 rounded-lg bg-brand-card hover:bg-brand-blue text-slate-300 hover:text-hero-foreground flex items-center justify-center transition border border-brand-border"
                    href="https://linkedin.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 0 0 0-2.9 1.45 1.45 0 0 0 0 2.9m1.37 9.74v-8.37H5.1v8.37z"></path>
                    </svg>
                  </a>
                  <a
                    aria-label="TikTok"
                    className="w-10 h-10 rounded-lg bg-brand-card hover:bg-brand-blue text-slate-300 hover:text-hero-foreground flex items-center justify-center transition border border-brand-border"
                    href="https://tiktok.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01v8.42c-.01 2.2-.84 4.39-2.33 6.02-1.5 1.63-3.66 2.58-5.89 2.57-2.6-.04-5.07-1.39-6.47-3.57-1.4-2.18-1.53-5.01-.33-7.31 1.19-2.3 3.59-3.83 6.18-3.95.34-.01.69 0 1.03.04v4.18c-.37-.06-.75-.08-1.13-.05-1.16.08-2.24.77-2.79 1.8-.55 1.03-.49 2.3.16 3.28.65.98 1.78 1.56 2.96 1.51 1.18-.04 2.27-.72 2.78-1.78.3-.64.45-1.35.44-2.07V.02h-.88z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-brand-card p-8 sm:p-10 rounded-xl border border-brand-border shadow-2xl">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-hero-foreground mb-2">
                  Envie-nos uma mensagem
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed">Conte-nos o que precisa.</p>
              </div>

              <form
                className="space-y-6"
                id="contact-form"
                onSubmit={(event) => {
                  event.preventDefault();
                  setMessageSent(true);
                }}
              >
                {/* Nome */}
                <div>
                  <label
                    className="block text-xs font-semibold text-slate-300 mb-2"
                    htmlFor="contact-name"
                  >
                    Nome
                  </label>

                  <input
                    className="w-full h-12 bg-panel-deep text-hero-foreground border border-brand-border px-4 rounded-lg text-sm placeholder:text-slate-500 transition duration-200 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30"
                    id="contact-name"
                    name="name"
                    placeholder="Seu nome ou instituição"
                    required
                    type="text"
                  />
                </div>

                <div>
                  <label
                    className="block text-xs font-semibold text-slate-300 mb-2"
                    htmlFor="contact-msg"
                  >
                    Mensagem
                  </label>

                  <textarea
                    className="w-full min-h-[160px] bg-panel-deep text-hero-foreground border border-brand-border px-4 py-3 rounded-lg text-sm placeholder:text-slate-500 resize-none transition duration-200 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30"
                    id="contact-msg"
                    name="message"
                    placeholder="Descreva brevemente o que pretende..."
                    required
                    rows={6}
                  />
                </div>

                {/* Acção */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-1">
                  <button
                    className="w-full sm:w-auto px-8 py-3.5 bg-brand-blue hover:bg-brand-blueHover text-hero-foreground text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                    type="submit"
                    disabled={messageSent}
                  >
                    {messageSent ? "Mensagem Enviada" : "Enviar Mensagem"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <AcademyFooter />
      <a
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand-whatsapp text-hero-foreground shadow-lg ring-1 ring-brand-dark/50 transition duration-200 hover:scale-105 hover:bg-brand-whatsappDeep"
        href={WHATSAPP_URL}
        rel="noopener noreferrer"
        target="_blank"
      >
        <svg aria-hidden="true" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
      </a>
    </>
  );
}
