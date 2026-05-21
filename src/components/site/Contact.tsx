import { useState } from "react";
import { Phone, Mail, MapPin, Navigation, Send } from "lucide-react";
import { WHATSAPP_URL } from "./Header";

// Componente SVG nativo do WhatsApp para manter o padrão visual premium
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    
    const subject = `Orçamento Técnico - Frota: ${fd.get("empresa") || fd.get("nome")}`;
    const body = `Dados do Solicitante:\nNome: ${fd.get("nome")}\nEmpresa: ${fd.get("empresa") || "Não informada"}\nTelefone: ${fd.get("telefone")}\nComposição Veicular: ${fd.get("veiculo")}\n\nDiagnóstico Necessário:\n${fd.get("mensagem")}`;
    
    // Regra de Negócio: Enviar para o financeiro corporativo
    window.location.href = `mailto:financeiro@artruckfreios.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="contato" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-brand Club font-semibold">
              Canais de Atendimento
            </div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
              Solicite seu{" "}
              <span className="brand-gradient-text">orçamento técnico</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Resposta rápida pela nossa equipe especializada. Envie sua demanda e entraremos em contato com as opções de manutenção.
            </p>
          </div>

          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand/10 text-brand ring-1 ring-brand/20">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Endereço</div>
                <div className="font-semibold">BR-101 KM 34 — Sentido Sul</div>
                <div className="text-sm text-muted-foreground">Zona Industrial Norte, Joinville / SC</div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand/10 text-brand ring-1 ring-brand/20">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Telefone (Eduardo)</div>
                <a href="tel:+554730286999" className="font-semibold hover:text-brand transition">(47) 3028-6999</a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand/10 text-brand ring-1 ring-brand/20">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Gestão e Financeiro</div>
                <a href="mailto:financeiro@artruckfreios.com.br" className="font-semibold hover:text-brand transition break-all">financeiro@artruckfreios.com.br</a>
              </div>
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground shadow-glow hover:brightness-110 transition hover-lift"
            >
              <WhatsAppIcon className="h-4 w-4" /> (47) 9198-2535
            </a>
            <a
              href="https://waze.com/ul?ll=-26.2625,-48.8569&navigate=yes"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-semibold hover:border-brand transition"
            >
              <Navigation className="h-4 w-4" /> Traçar Rota
            </a>
          </div>

          <div className="overflow-hidden rounded-xl border border-border aspect-[16/10]">
            <iframe
              title="Localização Ar Truck Freios"
              src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Rodovia%20BR-101,%20KM%2034,%20Joinville+(Ar%20Truck%20Freios)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
              className="h-full w-full grayscale contrast-125 hover:grayscale-0 transition duration-500"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="lg:col-span-3 relative rounded-2xl border border-border bg-surface/60 p-6 sm:p-10 grain"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field name="nome" label="Nome do Motorista/Gestor" required />
            <Field name="empresa" label="Transportadora" />
            <Field name="telefone" label="Telefone / WhatsApp" required type="tel" />
            <Field name="veiculo" label="Marca/Modelo da Composição" />
            <div className="sm:col-span-2">
              <label className="text-xs uppercase tracking-wider text-muted-foreground">
                Descrição do Diagnóstico Necessário
              </label>
              <textarea
                name="mensagem"
                required
                rows={5}
                placeholder="Ex: Falha no módulo ABS travando as rodas..."
                className="mt-2 w-full rounded-md bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-brand transition"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-md bg-brand px-6 py-4 text-sm font-semibold text-brand-foreground shadow-glow hover:brightness-110 transition"
          >
            <Send className="h-4 w-4" />
            {sent ? "Processando e-mail..." : "Enviar Solicitação Formal"}
          </button>
          <p className="mt-4 text-xs text-muted-foreground">
            Ao enviar, os dados serão encaminhados de forma segura conforme as diretrizes da LGPD.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({ name, label, required, type = "text" }: { name: string; label: string; required?: boolean; type?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-muted-foreground">
        {label}{required && <span className="text-brand"> *</span>}
      </label>
      <input
        name={name}
        required={required}
        type={type}
        className="mt-2 w-full rounded-md bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-brand transition"
      />
    </div>
  );
}