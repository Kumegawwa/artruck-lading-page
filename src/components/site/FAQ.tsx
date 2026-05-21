import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  { q: "Vocês fazem atendimento emergencial na BR-101?", a: "Sim. Estamos localizados estrategicamente na BR-101 KM 34, sentido sul, com equipe preparada para emergências de frota durante o horário comercial estendido." },
  { q: "Atendem sistemas ABS e EBS de todas as marcas?", a: "Sim. Trabalhamos com scanners multimarcas para diagnóstico e codificação de módulos Wabco, Knorr-Bremse, Haldex e Bendix em caminhões e ônibus." },
  { q: "Os serviços têm garantia?", a: "Todos os serviços e peças possuem garantia documentada. O prazo varia conforme o tipo de reparo e é informado no orçamento." },
  { q: "Atendem ônibus e carretas?", a: "Sim. Atendemos caminhões, ônibus rodoviários e urbanos, carretas e implementos rodoviários — qualquer veículo com sistema pneumático pesado." },
  { q: "Utilizam peças originais?", a: "Trabalhamos exclusivamente com peças originais e homologadas pelos principais fabricantes do setor pneumático pesado." },
  { q: "Têm condições especiais para frotistas?", a: "Sim. Possuímos planos de manutenção preventiva, condições comerciais diferenciadas e relatórios técnicos para frotas." },
  { q: "Como funciona o diagnóstico eletrônico?", a: "Conectamos scanners profissionais à central eletrônica do veículo para ler falhas em tempo real, analisar parâmetros de funcionamento e calibrar componentes." },
];

export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-surface/30 border-y border-border">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-[10px] uppercase tracking-[0.3em] text-brand font-semibold">
            Perguntas Frequentes
          </div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            Tudo o que você precisa saber{" "}
            <span className="brand-gradient-text">antes de chegar</span>
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`rounded-xl border bg-background/60 transition ${
                  isOpen ? "border-brand/40" : "border-border"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-semibold">{f.q}</span>
                  <Plus
                    className={`h-5 w-5 text-brand shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
