import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Carlos M.", role: "Frotista — Joinville", text: "Resolveram um problema crônico de ABS que outras três oficinas não conseguiram. Atendimento técnico de outro nível." },
  { name: "Roberto S.", role: "Transportadora SC", text: "Diagnóstico computadorizado preciso, peças originais e prazo cumprido. Hoje é a oficina oficial da nossa frota." },
  { name: "Ana P.", role: "Empresa de Fretamento", text: "Em emergência na BR-101, fomos socorridos com extrema agilidade. Profissionalismo raro no setor." },
  { name: "João T.", role: "Motorista Autônomo", text: "Preço justo, transparência total e o caminhão saiu freando como novo. Recomendo de olhos fechados." },
];

export function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="text-[10px] uppercase tracking-[0.3em] text-brand font-semibold">
              Provas Sociais
            </div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
              Confiança construída por{" "}
              <span className="brand-gradient-text">milhares de quilômetros</span>
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-brand text-brand" />
              ))}
            </div>
            <div>
              <div className="font-display font-bold text-xl">4.9 / 5.0</div>
              <div className="text-xs text-muted-foreground">avaliações Google</div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="group relative rounded-xl border border-border bg-surface/60 p-6 hover-lift"
            >
              <Quote className="h-7 w-7 text-brand/40" />
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-6 pt-4 border-t border-border">
                <div className="font-semibold">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px rounded-xl overflow-hidden border border-border bg-border">
          {[
            { k: "10.000+", l: "Veículos atendidos" },
            { k: "98%", l: "Clientes recorrentes" },
            { k: "24h", l: "Turnaround médio" },
            { k: "4.9★", l: "Avaliação no Google" },
          ].map((s) => (
            <div key={s.l} className="bg-surface/80 px-6 py-7 text-center">
              <div className="font-display text-2xl lg:text-3xl font-bold brand-gradient-text">{s.k}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
