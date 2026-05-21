import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.svg";

export const WHATSAPP_URL = "https://wa.me/554791982535?text=Olá!%20Gostaria%20de%20solicitar%20um%20atendimento/orçamento%20para%20minha%20frota.";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

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

  // Lógica de deslize programático (impede o teleporte bruto no mobile e desktop)
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    
    if (elem) {
      // 80px é o tamanho aproximado do header, para que o scroll não tampe o título da secção
      const headerOffset = 80; 
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    
    // Fecha o menu após comandar o scroll
    setMobileMenuOpen(false);
  };

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
        <a 
          href="#inicio" 
          onClick={(e) => handleNavClick(e, '#inicio')} 
          className="flex items-center gap-3 group"
        >
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

        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="hover:text-brand transition-colors cursor-pointer"
                >
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
              <WhatsAppIcon className="h-4 w-4" /> Orçamento Rápido
            </a>
          </div>
        </nav>

        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-lg">
          <ul className="flex flex-col px-5 py-4 space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block text-base font-medium text-foreground hover:text-brand cursor-pointer"
                  onClick={(e) => handleNavClick(e, link.href)}
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
                <WhatsAppIcon className="h-5 w-5" /> Orçamento via WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}