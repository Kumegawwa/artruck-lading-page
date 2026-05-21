import {
  Cpu, Wind, CircleDot, Gauge, Activity, Disc3, Wrench,
  ShieldAlert, Droplets, MoveVertical,
} from "lucide-react";

const services = [
  { icon: Cpu, title: "Diagnóstico Eletrônico Avançado", desc: "Leitura de falhas em tempo real com scanners profissionais multimarcas para ABS, EBS, motor e suspensão." },
  { icon: Wind, title: "Reparação de Compressores de Ar", desc: "Revisão completa, troca de selos, anéis e válvulas com testes de pressão e vazão." },
  { icon: CircleDot, title: "Revisão de Cubos de Roda", desc: "Desmontagem, inspeção, troca de rolamentos e retentores com torque calibrado." },
  { icon: Gauge, title: "Troca e Ajuste de Válvulas", desc: "Válvulas de freio, niveladoras, relé, modulares e proporcionais — Wabco, Knorr e Haldex." },
  { icon: Activity, title: "Sistemas ABS e EBS", desc: "Diagnóstico, reparo e configuração de módulos eletrônicos de frenagem com codificação." },
  { icon: Disc3, title: "Lonas e Tambores", desc: "Substituição de lonas, retífica de tambores e ajuste milimétrico do conjunto de freio." },
  { icon: Wrench, title: "Reparação de Pinças", desc: "Recondicionamento de pinças de freio a disco com peças originais e calibragem de pistões." },
  { icon: ShieldAlert, title: "Cuícas de Freio", desc: "Reparo e substituição de cuícas de serviço e estacionamento com teste de estanqueidade." },
  { icon: Droplets, title: "Secadores / APU", desc: "Manutenção de secadores de ar e unidades de tratamento — eliminando umidade do sistema." },
  { icon: MoveVertical, title: "Suspensão Pneumática", desc: "Bolsões, válvulas niveladoras e diagnóstico de vazamentos em sistemas pneumáticos." },
];

export function Services() {
  return (
    <section id="servicos" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-[10px] uppercase tracking-[0.3em] text-brand font-semibold">
            Serviços Especializados
          </div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            Engenharia mecânica de precisão para{" "}
            <span className="brand-gradient-text">frotas pesadas</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Cada serviço executado com diagnóstico computadorizado, peças
            originais e protocolos técnicos certificados pelo SENAI.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-xl border border-border bg-surface/60 p-6 hover-lift"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand/0 to-transparent group-hover:via-brand transition-all duration-500" />
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10 text-brand ring-1 ring-brand/20 group-hover:bg-brand group-hover:text-brand-foreground transition">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              <div className="mt-5 flex items-center text-xs font-semibold uppercase tracking-wider text-muted-foreground group-hover:text-brand transition">
                Saiba mais →
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
