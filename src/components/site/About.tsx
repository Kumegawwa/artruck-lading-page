import workshopImg from "@/assets/about-workshop.jpg";

const timeline = [
  { year: "1998", title: "Nasce a Beto Freios", desc: "Início como oficina especializada em sistemas de freio para veículos pesados." },
  { year: "2008", title: "Expansão Técnica", desc: "Investimento em equipamentos pneumáticos e capacitação contínua da equipe." },
  { year: "2017", title: "Nasce a Ar Truck Freios", desc: "Reposicionamento de marca, nova estrutura e foco em diagnóstico eletrônico." },
  { year: "2024", title: "Referência no Sul", desc: "Atendimento estratégico na BR-101 com suporte a frotas de todo o estado." },
];

export function About() {
  return (
    <section id="sobre" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-border">
            <img
              src={workshopImg}
              alt="Interior da oficina Ar Truck Freios em Joinville"
              width={1600}
              height={1024}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/70 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden md:block glass rounded-xl p-5 w-52">
            <div className="font-display text-4xl font-bold brand-gradient-text">28+</div>
            <div className="text-xs text-muted-foreground mt-1">anos transformando segurança rodoviária em ciência aplicada</div>
          </div>
        </div>

        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-brand font-semibold">
            Sobre a Ar Truck Freios
          </div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            Tradição em mecânica pesada,{" "}
            <span className="brand-gradient-text">obsessão por precisão</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            De Beto Freios, em 1998, à atual Ar Truck Freios — quase três
            décadas dedicadas à segurança de quem move o Brasil. Nossa
            liderança técnica é qualificada pelo SENAI e cada veículo que
            entra na nossa oficina passa por protocolos rigorosos de
            diagnóstico, reparo e validação.
          </p>

          <ol className="mt-10 space-y-5 relative before:content-[''] before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-px before:bg-border">
            {timeline.map((t) => (
              <li key={t.year} className="relative pl-12">
                <span className="absolute left-0 top-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-brand-foreground ring-4 ring-background">
                  {t.year.slice(2)}
                </span>
                <div className="font-display font-semibold">
                  {t.year} — {t.title}
                </div>
                <p className="text-sm text-muted-foreground mt-1">{t.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
