const brands = [
  "SCANIA", "VOLVO", "MERCEDES-BENZ", "DAF", "IVECO", "VW CAMINHÕES",
  "MAN", "WABCO", "KNORR-BREMSE", "HALDEX", "BENDIX",
];

export function BrandsMarquee() {
  const loop = [...brands, ...brands];
  return (
    <section
      aria-label="Marcas atendidas"
      className="relative border-y border-border bg-surface/40 py-10"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-center text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
          Atuamos com as principais marcas e sistemas do mercado pesado
        </p>
      </div>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-16 px-8">
          {loop.map((b, i) => (
            <span
              key={`${b}-${i}`}
              className="font-display text-xl md:text-2xl font-bold tracking-wider text-muted-foreground/60 hover:text-foreground transition whitespace-nowrap"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
