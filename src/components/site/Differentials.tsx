import { ScanLine, Award, Package, Users, Zap, MapPin, Calendar, Boxes, Truck } from "lucide-react";
import brakesImg from "@/assets/service-brakes.jpg";

const items = [
  { icon: ScanLine, title: "Scanners Computadorizados", desc: "Equipamentos de diagnóstico multimarcas de última geração." },
  { icon: Award, title: "Especialização Exclusiva", desc: "Foco absoluto em freios pneumáticos e sistemas correlatos." },
  { icon: Package, title: "Peças Originais", desc: "Apenas componentes homologados e com garantia de fábrica." },
  { icon: Users, title: "Equipe Qualificada", desc: "Técnicos formados e atualizados pelo SENAI." },
  { icon: Zap, title: "Atendimento Rápido", desc: "Logística interna preparada para emergências de frota." },
  { icon: MapPin, title: "Localização Estratégica", desc: "Acesso direto à BR-101, Sentido Sul, Joinville/SC." },
  { icon: Calendar, title: "Experiência Desde 1998", desc: "Mais de 28 anos de tradição em mecânica pesada." },
  { icon: Boxes, title: "Estoque Próprio", desc: "Peças críticas em estoque para reduzir o tempo parado." },
  { icon: Truck, title: "Suporte a Frotistas", desc: "Programas exclusivos para transportadoras e fretadoras." },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="relative py-24 lg:py-32 bg-surface/30 border-y border-border">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 lg:sticky lg:top-28 self-start">
          <div className="text-[10px] uppercase tracking-[0.3em] text-brand font-semibold">
            Diferenciais
          </div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            Por que somos referência em{" "}
            <span className="brand-gradient-text">freios pneumáticos</span> no Sul do Brasil
          </h2>
          <p className="mt-5 text-muted-foreground">
            Combinamos tecnologia de diagnóstico, processo de oficina rigoroso
            e profundo conhecimento técnico — o resultado é segurança
            rodoviária real e menor custo por km para a sua frota.
          </p>

          <div className="mt-8 overflow-hidden rounded-xl border border-border">
            <img
              src={brakesImg}
              alt="Sistema pneumático de freio em manutenção"
              width={1280}
              height={896}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>

        <ul className="lg:col-span-8 grid sm:grid-cols-2 gap-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <li
              key={title}
              className="group relative rounded-xl border border-border bg-background/60 p-5 hover-lift"
            >
              <div className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand/10 text-brand ring-1 ring-brand/20 group-hover:bg-brand group-hover:text-brand-foreground transition">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
