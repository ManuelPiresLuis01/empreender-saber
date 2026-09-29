export function AcademyFooter() {
  return (
    <footer
      className="bg-footer text-slate-400 border-t border-brand-border"
      data-purpose="main-footer"
      id="regulamentos"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded bg-brand-blue/20 border border-brand-blue/40 flex items-center justify-center font-bold text-hero-foreground text-sm">
                ES
              </div>
              <span className="text-sm font-bold text-hero-foreground tracking-tight uppercase">
                ACADEMIA EMPREENDE-SABER
              </span>
            </div>
            <p className="text-xs text-brand-gold font-medium">Projectando Líderes Emergentes</p>
            <p className="text-xs text-slate-400 leading-relaxed">
              “Conhecimento que transforma. Competências que geram oportunidades.”
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-xs text-slate-300 font-semibold leading-relaxed">
              EMPREENDESABER – PRESTAÇÃO DE SERVIÇOS &amp; COMÉRCIO, LDA.
            </p>
            <div className="space-y-1 text-xs font-mono text-slate-400">
              <p>
                <span className="text-slate-500">NIF:</span> 5001663003
              </p>
              <p>
                <span className="text-slate-500">Matrícula:</span> 33302-23/230922
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-hero-foreground tracking-wider uppercase">
              Explorar
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a className="hover:text-hero-foreground transition duration-150" href="/#inicio">
                  Início
                </a>
              </li>
              <li>
                <a
                  className="hover:text-hero-foreground transition duration-150"
                  href="/#sobre-nos"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a className="hover:text-hero-foreground transition duration-150" href="/#servicos">
                  Serviços
                </a>
              </li>
              <li>
                <a className="hover:text-hero-foreground transition duration-150" href="/cursos">
                  Cursos
                </a>
              </li>
              <li>
                <a
                  className="hover:text-hero-foreground transition duration-150"
                  href="/#parceiros"
                >
                  Parceiros
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-hero-foreground tracking-wider uppercase">
              Contacto
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a className="text-slate-300 hover:text-hero-foreground" href="tel:+244931611511">
                  +244 931 611 511
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-border flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © 2026 Academia Empreende-Saber (EMPREENDESABER, Lda). Todos os direitos reservados.
          </div>
          <div>
            Desenvolvido por{"\u00a0\u00a0"}
            <a
              className="text-slate-400 font-semibold transition hover:text-hero-foreground"
              href="https://kwanzasites.site/"
              rel="noopener noreferrer"
              target="_blank"
            >
              KwanzaSites
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
