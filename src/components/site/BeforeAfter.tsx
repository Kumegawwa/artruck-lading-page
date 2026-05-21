import { useRef, useState } from "react";
import beforeImg from "@/assets/before-part.jpg";
import afterImg from "@/assets/after-part.jpg";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  const move = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  return (
    <section id="galeria" className="relative py-24 lg:py-32 bg-surface/30 border-y border-border">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-[10px] uppercase tracking-[0.3em] text-brand font-semibold">
            Antes & Depois
          </div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            A diferença está nos{" "}
            <span className="brand-gradient-text">detalhes técnicos</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Peças desgastadas restauradas a padrão de fábrica. Arraste o
            controle para comparar.
          </p>
        </div>

        <div
          ref={ref}
          onMouseMove={(e) => e.buttons === 1 && move(e.clientX)}
          onTouchMove={(e) => move(e.touches[0].clientX)}
          onClick={(e) => move(e.clientX)}
          className="mt-12 relative aspect-[16/10] w-full select-none overflow-hidden rounded-2xl border border-border cursor-ew-resize"
        >
          <img
            src={afterImg}
            alt="Peça restaurada"
            width={1200}
            height={750}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${pos}%` }}
          >
            <img
              src={beforeImg}
              alt="Peça desgastada antes da revisão"
              width={1200}
              height={750}
              loading="lazy"
              className="h-full w-full object-cover"
              style={{ width: `${(100 / pos) * 100}%`, maxWidth: "none" }}
            />
          </div>
          <div
            className="absolute top-0 bottom-0 w-px bg-brand shadow-glow"
            style={{ left: `${pos}%` }}
          >
            <span className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-brand text-brand-foreground flex items-center justify-center font-bold text-lg shadow-glow">
              ⇆
            </span>
          </div>
          <div className="absolute top-4 left-4 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-background/80 text-foreground">
            Antes
          </div>
          <div className="absolute top-4 right-4 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-brand text-brand-foreground">
            Depois
          </div>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          aria-label="Comparar antes e depois"
          onChange={(e) => setPos(Number(e.target.value))}
          className="mt-6 w-full accent-brand"
        />
      </div>
    </section>
  );
}
