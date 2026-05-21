import { MessageCircle, ArrowRight, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-truck.jpg";
import { WHATSAPP_URL } from "./Header";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate min-h-[100svh] flex items-center overflow-hidden"
    >
      <img
        src={heroImg}
        alt="Caminhão pesado em manutenção na oficina Ar Truck Freios"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/90 to-background/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-transparent to-background/70" />
      <div className="absolute inset-0 -z-10 diagonal-stripes opacity-40" />

      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8 pt-32 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-brand pulse-ring" />
            Desde 1998 — Joinville / SC
          </div>

          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.02] text-balance">
            Especialistas em{" "}
            <span className="brand-gradient-text">Freios Pneumáticos</span> para
            Caminhões e Ônibus
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Diagnóstico computadorizado, manutenção pesada e reparos de alta
            precisão em sistemas pneumáticos, ABS, EBS, compressores e
            suspensão pneumática.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-brand px-6 py-4 text-sm font-semibold text-brand-foreground shadow-glow hover:brightness-110 transition"
            >
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-surface/60 px-6 py-4 text-sm font-semibold text-foreground hover:border-brand/60 hover:bg-surface transition"
            >
              Solicitar Orçamento
            </a>
          </div>

          <div className="mt-10 inline-flex items-start gap-3 text-sm text-muted-foreground">
            <MapPin className="h-5 w-5 text-brand mt-0.5 shrink-0" />
            <span>
              <span className="text-foreground font-semibold">
                BR-101 KM 34 — Sentido Sul
              </span>
              <br className="sm:hidden" />
              <span className="sm:ml-2">Joinville / SC · Acesso direto à rodovia</span>
            </span>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px rounded-xl overflow-hidden border border-border bg-border max-w-5xl">
          {[
            { k: "+28", l: "Anos de experiência" },
            { k: "+10k", l: "Veículos atendidos" },
            { k: "100%", l: "Especializado em pneumáticos" },
            { k: "BR-101", l: "Localização estratégica" },
          ].map((s) => (
            <div
              key={s.l}
              className="bg-surface/80 backdrop-blur px-6 py-5 lg:py-7"
            >
              <div className="font-display text-3xl lg:text-4xl font-bold text-foreground">
                {s.k}
              </div>
              <div className="mt-1 text-xs lg:text-sm text-muted-foreground">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        Role para descobrir
        <span className="h-10 w-px bg-gradient-to-b from-brand to-transparent" />
      </div>
    </section>
  );
}
