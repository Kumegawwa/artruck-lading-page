// src/components/site/Header.tsx
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.svg";

// Constante global do WhatsApp com o número correto (47) 9198-2535
export const WHATSAPP_URL = "https://wa.me/554791982535?text=Olá!%20Gostaria%20de%20solicitar%20um%20atendimento/orçamento%20para%20minha%20frota.";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Serviços", href: "#servicos" },
    { name: "Diferenciais", href: "#diferenciais" },
    { name: "Sobre Nós", href: "#sobre" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md border-b border-border py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3 group">
          <img src={logo} alt="Ar Truck Freios Logo" width={48} height={48} className="h-10 w-auto sm:h-12" />
          <div className="hidden sm:block">
            <div className="font-display text-lg font-bold leading-none tracking-wide text-foreground group-hover:text-brand transition">
              AR TRUCK <span className="text-brand">FREIOS</span>
            </div>
            <div className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
              Peças & Serviços
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-brand transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 border-l border-border pl-6">
            <div className="text-right hidden lg:block">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Emergências</div>
              <a href="tel:+554730286999" className="text-sm font-bold text-foreground hover:text-brand transition">
                (47) 3028-6999
              </a>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand text-brand-foreground px-4 py-2 rounded-md text-sm font-semibold shadow-glow hover:brightness-110 transition"
            >
              Orçamento Rápido
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-lg">
          <ul className="flex flex-col px-5 py-4 space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block text-base font-medium text-foreground hover:text-brand"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-4 border-t border-border flex flex-col gap-3">
              <a href="tel:+554730286999" className="inline-flex items-center gap-2 text-foreground font-bold">
                <Phone className="h-4 w-4 text-brand" /> (47) 3028-6999
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 bg-brand text-brand-foreground px-4 py-3 rounded-md text-sm font-semibold"
              >
                Orçamento Rápido via WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}