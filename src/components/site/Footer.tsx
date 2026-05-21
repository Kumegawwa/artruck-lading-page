// src/components/site/Footer.tsx
import { Instagram, Facebook, Share2 } from "lucide-react";
import logo from "@/assets/logo.svg";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Ar Truck Freios" width={48} height={48} className="h-12 w-auto" />
            <div>
              <div className="font-display text-base font-bold text-foreground">AR TRUCK <span className="text-brand">FREIOS</span></div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Peças & Serviços Ltda</div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm text-muted-foreground leading-relaxed">
            Especialistas absolutos em freios pneumáticos, ABS/EBS, suspensão pneumática
            e manutenção pesada na BR-101 para caminhões, ônibus e implementos rodoviários.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="https://instagram.com/artruckfreios"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground hover:text-brand hover:border-brand transition"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://facebook.com/artruckfreios"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground hover:text-brand hover:border-brand transition"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://tiktok.com/@artruckfreios"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground hover:text-brand hover:border-brand transition"
              aria-label="TikTok"
            >
              <Share2 className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wider text-foreground font-semibold">Contato Direto</div>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>BR-101 KM 34 — Sentido Sul</li>
            <li>Joinville / SC</li>
            <li><a href="tel:+554730286999" className="hover:text-brand transition">(47) 3028-6999 (Eduardo)</a></li>
            <li><a href="mailto:financeiro@artruckfreios.com.br" className="hover:text-brand transition">financeiro@artruckfreios.com.br</a></li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wider text-foreground font-semibold">Institucional</div>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li><a href="#sobre" className="hover:text-brand transition">A nossa História</a></li>
            <li><a href="#servicos" className="hover:text-brand transition">Soluções Especializadas</a></li>
            <li><a href="#diferenciais" className="hover:text-brand transition">Diferenciais Operacionais</a></li>
            <li><a href="#faq" className="hover:text-brand transition">Dúvidas Frequentes (FAQ)</a></li>
            <li><button className="hover:text-brand transition text-left">Termos e Política (LGPD)</button></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-6 flex flex-col lg:flex-row items-center justify-between gap-6 text-xs text-muted-foreground">
          
          <div className="flex-1 flex justify-start text-center lg:text-left">
            <p>
              © {new Date().getFullYear()} Ar Truck Freios Peças e Serviços Ltda. <br className="lg:hidden" />
              CNPJ: 02.704.801/0001-63.
            </p>
          </div>

          <div className="flex-1 flex justify-center">
            {/* ASSINATURA DESENVOLVEDOR */}
            <div className="text-[11px] font-sans tracking-wider text-muted-foreground flex items-center justify-center gap-1 select-none">
              <span>Designed by</span>
              <a 
                href="https://www.linkedin.com/in/lucas-kumegawa/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group inline-flex items-center text-muted-foreground transition-all duration-300 hover:text-foreground"
              >
                <span className="font-oleo text-[16px] text-brand tracking-normal normal-case transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(253,5,23,0.8)] ml-1">
                  Lucas Kumegawa
                </span>
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-end">
            <p className="hidden lg:block">Zona Industrial Norte, Joinville / SC</p>
          </div>

        </div>
      </div>
    </footer>
  );
}