import { Instagram, Facebook, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.jpg";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Ar Truck Freios" width={48} height={48} className="h-12 w-12 rounded-md" />
            <div>
              <div className="font-display text-base font-bold">AR TRUCK <span className="text-brand">FREIOS</span></div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Peças & Serviços Ltda</div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm text-muted-foreground">
            Especialistas em freios pneumáticos, ABS/EBS, suspensão pneumática
            e manutenção pesada para caminhões, ônibus e implementos rodoviários.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground hover:text-brand hover:border-brand transition"
                aria-label="Rede social"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wider text-foreground font-semibold">Contato</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>BR-101 KM 34 — Sentido Sul</li>
            <li>Joinville / SC</li>
            <li><a href="tel:+554732222222" className="hover:text-brand">(47) 3222-2222</a></li>
            <li><a href="mailto:contato@artruckfreios.com.br" className="hover:text-brand">contato@artruckfreios.com.br</a></li>
            <li className="pt-2 text-xs">CNPJ: 00.000.000/0001-00</li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wider text-foreground font-semibold">Institucional</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="#sobre" className="hover:text-brand">Sobre nós</a></li>
            <li><a href="#servicos" className="hover:text-brand">Serviços</a></li>
            <li><a href="#diferenciais" className="hover:text-brand">Diferenciais</a></li>
            <li><a href="#faq" className="hover:text-brand">FAQ</a></li>
            <li><a href="#" className="hover:text-brand">Política de Privacidade (LGPD)</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Ar Truck Freios Peças e Serviços Ltda. Todos os direitos reservados.</p>
          <p>Joinville / SC · BR-101</p>
        </div>
      </div>
    </footer>
  );
}
