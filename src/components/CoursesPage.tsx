export function CoursesPage() {
  return (
    <section
      className="pt-36 pb-20 md:pt-40 md:pb-28 bg-page border-t border-brand-border"
      data-purpose="catalog-section"
      id="cursos"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">
              Catálogo Multidisciplinar
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-hero-foreground mt-1">
              9 Áreas de Actuação e Soluções
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <div className="bg-brand-card p-6 rounded-lg border border-brand-border hover:border-brand-blue/40 transition">
            <div className="w-10 h-10 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-goldLight mb-3.5">
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
            <h4 className="text-sm font-bold text-hero-foreground mb-2">1. Formação e Educação</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Formações profissionais modulares, programas contínuos, capacitação pedagógica e
              elevação de competências técnicas.
            </p>
          </div>

          <div className="bg-brand-card p-6 rounded-lg border border-brand-border hover:border-brand-blue/40 transition">
            <div className="w-10 h-10 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-goldLight mb-3.5">
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
            <h4 className="text-sm font-bold text-hero-foreground mb-2">
              2. Consultoria Empresarial
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Consultoria e apoio à gestão, diagnóstico organizacional, contabilidade, fiscalidade e
              auditoria de processos.
            </p>
          </div>

          <div className="bg-brand-card p-6 rounded-lg border border-brand-border hover:border-brand-blue/40 transition">
            <div className="w-10 h-10 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-goldLight mb-3.5">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.75"
                viewBox="0 0 24 24"
              >
                <rect height="14" rx="2" width="20" x="2" y="3"></rect>
                <line x1="8" x2="16" y1="21" y2="21"></line>
                <line x1="12" x2="12" y1="17" y2="21"></line>
              </svg>
            </div>
            <h4 className="text-sm font-bold text-hero-foreground mb-2">
              3. Soluções Digitais e Tecnologia
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Desenvolvimento de websites institucionais, e-commerce, portais, registo de domínios,
              alojamento e transformação digital.
            </p>
          </div>

          <div className="bg-brand-card p-6 rounded-lg border border-brand-border hover:border-brand-blue/40 transition">
            <div className="w-10 h-10 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-goldLight mb-3.5">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.75"
                viewBox="0 0 24 24"
              >
                <circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle>
                <circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle>
                <circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle>
                <circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle>
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2Z"></path>
              </svg>
            </div>
            <h4 className="text-sm font-bold text-hero-foreground mb-2">
              4. Design &amp; Identidade Visual
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Criação de marcas, logótipos, manuais de identidade corporativa, material gráfico
              institucional e campanhas digitais.
            </p>
          </div>

          <div className="bg-brand-card p-6 rounded-lg border border-brand-border hover:border-brand-blue/40 transition">
            <div className="w-10 h-10 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-goldLight mb-3.5">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.75"
                viewBox="0 0 24 24"
              >
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                <path d="M9 12H4s.55-3.03 2-4.5c1.62-1.63 5-2.5 5-2.5"></path>
                <path d="M12 15v5s3.03-.55 4.5-2c1.63-1.62 2.5-5 2.5-5"></path>
              </svg>
            </div>
            <h4 className="text-sm font-bold text-hero-foreground mb-2">
              5. Empreendedorismo &amp; Negócios
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Estruturação de planos de negócios, modelação financeira, mentoria executiva para
              startups e aceleração de novos empreendimentos.
            </p>
          </div>

          <div className="bg-brand-card p-6 rounded-lg border border-brand-border hover:border-brand-blue/40 transition">
            <div className="w-10 h-10 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-goldLight mb-3.5">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.75"
                viewBox="0 0 24 24"
              >
                <path d="m12 8-9.07 9.07a2.67 2.67 0 0 0 0 3.77c1.04 1.04 2.73 1.04 3.77 0L15.77 11.77"></path>
                <path d="m10.5 9.5 4 4"></path>
                <path d="m16 8 2 2"></path>
                <path d="M16.5 4.5a3.53 3.53 0 0 1 5 5L19 12l-7-7 2.5-2.5a3.53 3.53 0 0 1 2 0Z"></path>
              </svg>
            </div>
            <h4 className="text-sm font-bold text-hero-foreground mb-2">6. Eventos e Projectos</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Planeamento, produção executiva e logística integral de fóruns, seminários, palestras,
              galas corporativas e eventos temáticos.
            </p>
          </div>

          <div className="bg-brand-card p-6 rounded-lg border border-brand-border hover:border-brand-blue/40 transition">
            <div className="w-10 h-10 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-goldLight mb-3.5">
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
            <h4 className="text-sm font-bold text-hero-foreground mb-2">
              7. Turismo, Viagens e Hotelaria
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Consultoria e capacitação no sector hoteleiro, gestão de viagens corporativas e
              promoção de iniciativas turísticas.
            </p>
          </div>

          <div className="bg-brand-card p-6 rounded-lg border border-brand-border hover:border-brand-blue/40 transition">
            <div className="w-10 h-10 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-goldLight mb-3.5">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.75"
                viewBox="0 0 24 24"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                <path d="M3 6h18"></path>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </div>
            <h4 className="text-sm font-bold text-hero-foreground mb-2">
              8. Comércio e Fornecimento de Bens
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Fornecimento de material de escritório, material escolar, consumíveis hospitalares,
              equipamentos e vestuário profissional.
            </p>
          </div>

          <div className="bg-brand-card p-6 rounded-lg border border-brand-border hover:border-brand-blue/40 transition">
            <div className="w-10 h-10 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-goldLight mb-3.5">
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
            <h4 className="text-sm font-bold text-hero-foreground mb-2">
              9. Serviços Técnicos Especializados
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Apoio técnico na área da construção civil, instalações eléctricas, manutenção de
              edifícios e soluções ambientais.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-widest">
              Inscrições Abertas
            </span>
            <h3 className="text-xl md:text-2xl font-extrabold text-hero-foreground mt-1">
              Cursos em Destaque
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-brand-card rounded-lg border border-brand-border overflow-hidden flex flex-col justify-between hover:border-brand-blue/50 transition duration-300 shadow-md">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 bg-white/5 text-slate-300 rounded">
                    Duração: 1 dia (8h)
                  </span>
                  <span className="text-xs font-bold text-brand-gold uppercase">Comunicação</span>
                </div>
                <h4 className="text-base font-bold text-hero-foreground mb-2">
                  Oficina de Oratória e Alta Performance
                </h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                  Domine a postura, dicção, argumentação e técnicas de impacto para liderar reuniões
                  e falar com segurança diante de plateias.
                </p>
              </div>
              <div className="p-6 pt-0 border-t border-brand-border bg-panel">
                <div className="flex items-center justify-center mt-4 w-full">
                  <a
                    className="w-full text-center px-4 py-2.5 bg-brand-blue hover:bg-brand-blueHover text-hero-foreground text-xs font-bold rounded transition"
                    href="/#contactos"
                  >
                    Inscrever-me
                  </a>
                </div>
              </div>
            </article>

            <article className="bg-brand-card rounded-lg border border-brand-border overflow-hidden flex flex-col justify-between hover:border-brand-blue/50 transition duration-300 shadow-md">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 bg-white/5 text-slate-300 rounded">
                    Duração: 2 dias (16h)
                  </span>
                  <span className="text-xs font-bold text-brand-gold uppercase">Estratégia</span>
                </div>
                <h4 className="text-base font-bold text-hero-foreground mb-2">
                  Marketing Pessoal &amp; LinkedIn Estratégico
                </h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                  Construção de marca executiva, posicionamento de autoridade, networking de alto
                  valor e prospecção de negócios B2B.
                </p>
              </div>
              <div className="p-6 pt-0 border-t border-brand-border bg-panel">
                <div className="flex items-center justify-center mt-4 w-full">
                  <a
                    className="w-full text-center px-4 py-2.5 bg-brand-blue hover:bg-brand-blueHover text-hero-foreground text-xs font-bold rounded transition"
                    href="/#contactos"
                  >
                    Inscrever-me
                  </a>
                </div>
              </div>
            </article>

            <article className="bg-brand-card rounded-lg border border-brand-border overflow-hidden flex flex-col justify-between hover:border-brand-blue/50 transition duration-300 shadow-md">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 bg-white/5 text-slate-300 rounded">
                    Duração: 3 dias (24h)
                  </span>
                  <span className="text-xs font-bold text-brand-gold uppercase">Pedagógico</span>
                </div>
                <h4 className="text-base font-bold text-hero-foreground mb-2">
                  Formação Pedagógica de Formadores
                </h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                  Metodologias andragógicas, facilitação de grupos complexos, desenho instrucional
                  de módulos corporativos e avaliação prática.
                </p>
              </div>
              <div className="p-6 pt-0 border-t border-brand-border bg-panel">
                <div className="flex items-center justify-center mt-4 w-full">
                  <a
                    className="w-full text-center px-4 py-2.5 bg-brand-blue hover:bg-brand-blueHover text-hero-foreground text-xs font-bold rounded transition"
                    href="/#contactos"
                  >
                    Inscrever-me
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
