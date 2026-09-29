import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Início", href: "/#inicio" },
  { label: "Sobre nós", href: "/#sobre-nos" },
  { label: "Parceiros", href: "/#parceiros" },
  { label: "Público-alvo", href: "/#publico" },
  { label: "Cursos", href: "/cursos" },
  { label: "Contactos", href: "/#contactos" },
];

export function AcademyHeader() {
  const [headerBlurred, setHeaderBlurred] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateHeader = () => setHeaderBlurred(window.scrollY > 0);

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 border-0 pt-10"
        data-purpose="header-container"
        id="inicio"
      >
        <nav aria-label="Navegação Principal" className="relative">
          <div className="mx-auto flex max-w-7xl items-center justify-end px-4 sm:px-6 lg:px-8">
            <button
              aria-controls="mobile-navigation"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-lg bg-page/40 text-white backdrop-blur-sm transition hover:bg-page/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-gold md:hidden"
              onClick={() => setMobileMenuOpen((open) => !open)}
              type="button"
            >
              {mobileMenuOpen ? (
                <X aria-hidden="true" size={22} />
              ) : (
                <Menu aria-hidden="true" size={22} />
              )}
            </button>

            <ul
              className={`hidden items-center justify-center gap-5 rounded-full px-5 py-2 text-[11px] font-bold uppercase tracking-wide transition-all duration-500 ease-in-out md:absolute md:left-1/2 md:top-1/2 md:flex md:-translate-x-1/2 md:-translate-y-1/2 md:gap-7 md:text-xs ${
                headerBlurred
                  ? "bg-page/70 shadow-lg backdrop-blur-md"
                  : "bg-transparent shadow-none"
              }`}
            >
              {NAV_LINKS.map((link, index) => (
                <li key={link.href}>
                  <a
                    className={`${
                      index === 0 ? "text-white" : "text-white/90"
                    } whitespace-nowrap transition duration-150 hover:text-brand-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-gold`}
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-brand-blue/40 bg-brand-blue px-4 py-2 text-xs font-bold text-hero-foreground shadow-md transition duration-200 hover:bg-brand-blueHover"
                  href="/cursos"
                >
                  INSCREVA-SE NUM CURSO
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <button
        aria-hidden={!mobileMenuOpen}
        aria-label="Fechar menu"
        className={`fixed inset-0 z-[60] bg-black/55 transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        tabIndex={mobileMenuOpen ? 0 : -1}
        type="button"
      />

      <aside
        aria-hidden={!mobileMenuOpen}
        aria-label="Menu mobile"
        className={`fixed inset-y-0 right-0 z-[70] flex h-dvh max-h-dvh w-[min(20rem,85vw)] flex-col overflow-hidden border-l border-white/10 p-6 pt-7 pb-8 text-white shadow-2xl backdrop-blur-xl transition-transform duration-300 ease-out md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        id="mobile-navigation"
        inert={!mobileMenuOpen}
        style={{ backgroundColor: "var(--page)" }}
      >

        <ul className="min-h-0 flex-1 space-y-2 overflow-y-auto">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                className="block rounded-lg px-4 py-3 text-sm font-semibold transition hover:bg-white/10 hover:text-brand-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-gold"
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          className="mt-auto mb-2 inline-flex w-full shrink-0 items-center justify-center rounded-full border border-brand-blue/40 bg-brand-blue px-5 py-3 text-sm font-bold text-white shadow-md transition hover:bg-brand-blueHover"
          href="/cursos"
          onClick={() => setMobileMenuOpen(false)}
        >
          INSCREVA-SE NUM CURSO
        </a>
      </aside>
    </>
  );
}
