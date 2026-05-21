// src/components/site/About.tsx
import workshopImg from "@/assets/about-workshop.jpg";

const timeline = [
  { year: "1998", title: "A fundação Beto Freios", desc: "Início ininterrupto das atividades de manutenção em freios para extrapesados." },
  { year: "2017", title: "Modernização Técnica", desc: "Transição nominal e expansão para o suporte integral de revisões de cubos e mecatrônica." },
  { year: "2023", title: "Nova Liderança", desc: "Integração de Guilherme Trentini e João Guilherme Pereira ao quadro societário." },
  { year: "2026", title: "Domínio Logístico", desc: "Criação da Ar Truck Parts e Service, garantindo estoque tático de peças genuínas." },
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
            Governança e Autoridade
          </div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            Tradição em mecânica,{" "}
            <span className="brand-gradient-text">obsessão por precisão acadêmica</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Nossa trajetória não é amparada apenas no empirismo. Sob a liderança técnica e administrativa de 
            <strong className="text-foreground font-medium"> Guilherme Trentini</strong>, formado em mecânica automotiva pelo SENAI, e 
            <strong className="text-foreground font-medium"> João Guilherme Pereira</strong>, aplicamos o rigor científico e a engenharia 
            diretamente no chão de fábrica. Ao eliminar intermediários através da nossa subsidiária de peças autorizadas, 
            garantimos reparos velozes e definitivos para frotas que rodam a BR-101.
          </p>

          <ol className="mt-10 space-y-5 relative before:content-[''] before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-px before:bg-border">
            {timeline.map((t) => (
              <li key={t.year} className="relative pl-12">
                <span className="absolute left-0 top-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-brand-foreground ring-4 ring-background">
                  {t.year.slice(2)}
                </span>
                <div className="font-display font-semibold text-foreground">
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