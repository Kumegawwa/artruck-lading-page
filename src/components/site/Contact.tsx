// src/components/site/Contact.tsx
import { useState } from "react";
import { MessageCircle, Phone, Mail, MapPin, Navigation, Send } from "lucide-react";
import { WHATSAPP_URL } from "./Header";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    
    const subject = `Orçamento Técnico - Frota: ${fd.get("empresa") || fd.get("nome")}`;
    const body = `Dados do Solicitante:\nNome: ${fd.get("nome")}\nEmpresa: ${fd.get("empresa") || "Não informada"}\nTelefone: ${fd.get("telefone")}\nComposição Veicular: ${fd.get("veiculo")}\n\nDiagnóstico Necessário:\n${fd.get("mensagem")}`;
    
    // Regra de Negócio: Enviar obrigatoriamente para o financeiro
    window.location.href = `mailto:financeiro@artruckfreios.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);

    // Opcional: Descomentar abaixo se quiser abrir o WhatsApp em paralelo após o e-mail
    // window.open(`${WHATSAPP_URL}&text=${encodeURIComponent(body)}`, "_blank");
  };

  return (
    <section id="contato" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-brand font-semibold">
              Contato & Conversão
            </div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
              Solicite seu{" "}
              <span className="brand-gradient-text">orçamento técnico</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Resposta rápida pela nossa equipe técnica. Envie sua demanda e entraremos em contato com as opções de manutenção.
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
                <div className="text-sm text-muted-foreground">Zona Industrial Norte, Joinville - SC</div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand/10 text-brand ring-1 ring-brand/20">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Fixo Institucional (Eduardo)</div>
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
              className="inline-flex items-center justify-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground shadow-glow hover:brightness-110 transition"
            >
              <MessageCircle className="h-4 w-4" /> (47) 9198-2535
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
              src="https://maps.google.com/maps?q=BR-101%20KM%2034%20Joinville%20SC&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="h-full w-full grayscale contrast-125 hover:grayscale-0 transition duration-500"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="lg:col-span-3 relative rounded-2xl border border-border bg-surface/60 p-6 sm:p-10"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field name="nome" label="Nome do Gestor/Motorista" required />
            <Field name="empresa" label="Transportadora / Empresa" />
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
                placeholder="Ex: Falha no módulo ABS travando rodas traseiras..."
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
            Ao enviar, os dados serão encaminhados de forma segura ao nosso departamento financeiro e técnico, conforme a LGPD.
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