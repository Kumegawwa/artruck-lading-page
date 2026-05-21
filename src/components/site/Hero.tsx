import { ArrowRight, ShieldCheck, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-truck.jpg";
import { WHATSAPP_URL } from "./Header";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background com Dark Overlay e Textura */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Caminhão em manutenção na oficina"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 diagonal-stripes opacity-30" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8 w-full flex flex-col pt-10 pb-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold text-brand mb-6 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
            </span>
            Atendimento Prioritário BR-101 Sentido Sul
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-tight">
            Especialistas em Freios Pneumáticos para <span className="brand-gradient-text">Caminhões e Ônibus</span>
          </h1>
          
          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl text-balance leading-relaxed">
            Manutenção pesada com segurança e precisão. Realizamos o diagnóstico e reparo completo de sistemas pneumáticos, ABS e compressores para que sua frota retorne à rodovia rapidamente.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-md bg-brand px-8 text-sm font-semibold text-brand-foreground shadow-glow hover:brightness-110 transition hover-lift pulse-ring"
            >
              Falar no WhatsApp <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#servicos"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-md border border-border bg-surface/50 backdrop-blur-md px-8 text-sm font-semibold text-foreground hover:bg-surface hover:border-white/20 transition"
            >
              Ver Nossos Serviços
            </a>
          </div>
        </div>
      </div>

      {/* Stats Block Fixado - Sem sobreposição de texto desnecessário */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-border/50 bg-background/80 backdrop-blur-lg">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border/50 border-x border-border/50">
            
            <div className="p-4 sm:p-6 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="font-display text-2xl sm:text-3xl font-bold text-foreground">28+</div>
              <div className="mt-1 text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wider">Anos de experiência</div>
            </div>
            
            <div className="p-4 sm:p-6 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="font-display text-2xl sm:text-3xl font-bold text-foreground">+10k</div>
              <div className="mt-1 text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wider">Veículos atendidos</div>
            </div>
            
            <div className="p-4 sm:p-6 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="font-display text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-2">
                100% <ShieldCheck className="h-5 w-5 text-brand hidden sm:block" />
              </div>
              <div className="mt-1 text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wider">Especializado em pneumáticos</div>
            </div>
            
            <div className="p-4 sm:p-6 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="font-display text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-2">
                BR-101 <MapPin className="h-5 w-5 text-brand hidden sm:block" />
              </div>
              <div className="mt-1 text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wider">Localização estratégica</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}