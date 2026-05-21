import { Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.svg";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { WHATSAPP_URL } from "./Header";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Ar Truck Freios" width={48} height={48} className="h-12 w-auto" />
            <div>
              <div className="font-display text-base font-bold text-foreground">AR TRUCK <span className="text-brand">FREIOS</span></div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Peças & Serviços Ltda</div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm text-muted-foreground leading-relaxed">
            Especialistas absolutos em freios pneumáticos, ABS/EBS, suspensão pneumática
            e manutenção pesada na BR-101 para caminhões, ônibus e implementos rodoviários.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="https://www.instagram.com/artruckfreios_/"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground hover:text-brand hover:border-brand transition"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61574220090676&locale=gl_ES#"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground hover:text-brand hover:border-brand transition"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground hover:text-brand hover:border-brand transition"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wider text-foreground font-semibold">Contato Direto</div>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>BR-101 KM 34 — Sentido Sul</li>
            <li>Joinville / SC</li>
            <li>
              <a href="tel:+554730286999" className="hover:text-brand transition cursor-pointer">
                (47) 3028-6999 (Eduardo)
              </a>
            </li>
            <li>
              <a href="mailto:financeiro@artruckfreios.com.br" className="hover:text-brand transition break-all cursor-pointer">
                financeiro@artruckfreios.com.br
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wider text-foreground font-semibold">Institucional</div>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li><a href="#sobre" className="hover:text-brand transition">A nossa História</a></li>
            <li><a href="#servicos" className="hover:text-brand transition">Soluções Especializadas</a></li>
            <li><a href="#diferenciais" className="hover:text-brand transition">Diferenciais Operacionais</a></li>
            <li><a href="#faq" className="hover:text-brand transition">Dúvidas Frequentes (FAQ)</a></li>
            <li>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="hover:text-brand cursor-pointer transition-colors text-left">
                    Termos e Política (LGPD)
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto bg-surface border-border text-foreground">
                  <DialogHeader>
                    <DialogTitle className="font-display text-2xl uppercase tracking-wider text-brand">
                      Política de Privacidade e Termos de Uso (LGPD)
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-5 text-sm text-muted-foreground leading-relaxed mt-4 text-left">
                    <p>
                      A <strong>Ar Truck Freios Peças e Serviços Ltda. (CNPJ 02.704.801/0001-63)</strong>,
                      tem o compromisso de respeitar a sua privacidade e garantir o sigilo de todas as informações que você nos fornece. Todos os dados cadastrados em nosso site são utilizados apenas para melhorar sua experiência e otimizar nosso atendimento.
                    </p>
                    
                    <div>
                      <h3 className="font-bold text-foreground uppercase tracking-wider text-xs mb-2">1. Coleta de Informações</h3>
                      <p>Coletamos apenas informações fornecidas voluntariamente no formulário de contato (Nome, Empresa, Veículo, Telefone e Problema). Esses dados são recebidos exclusivamente para retornarmos o seu orçamento com máxima agilidade.</p>
                    </div>

                    <div>
                      <h3 className="font-bold text-foreground uppercase tracking-wider text-xs mb-2">2. Uso dos Dados</h3>
                      <p>As informações cedidas não são transferidas, repassadas ou vendidas a terceiros em nenhuma hipótese. Utilizamos o WhatsApp e E-mail como canais principais para envio do orçamento solicitado e acompanhamento de ordens de serviço técnico em nossa oficina.</p>
                    </div>

                    <div>
                      <h3 className="font-bold text-foreground uppercase tracking-wider text-xs mb-2">3. Seus Direitos (LGPD)</h3>
                      <p>Conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem o direito de solicitar a exclusão de qualquer dado pessoal da nossa base de contatos. Para isso, basta solicitar diretamente através dos nossos canais de atendimento oficiais.</p>
                    </div>

                    <p className="pt-4 border-t border-border text-xs">
                      Última atualização: {new Date().toLocaleString('pt-BR', { month: 'long', year: 'numeric' })}. <br/>
                      Zona Industrial Norte, Joinville - SC.
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-6 flex flex-col lg:flex-row items-center justify-between gap-6 text-xs text-muted-foreground">
          
          <div className="flex-1 flex justify-start text-center lg:text-left">
            <p>
              © {new Date().getFullYear()} Ar Truck Freios. <br className="lg:hidden" />
              CNPJ: 02.704.801/0001-63
            </p>
          </div>

          <div className="flex-1 flex justify-center">
            {/* ASSINATURA DESENVOLVEDOR */}
            <div className="text-[11px] font-sans tracking-wider text-muted-foreground flex items-center justify-center gap-1 select-none">
              <span>Designed by</span>
              <a 
                href="https://www.linkedin.com/in/lucas-kumegawa/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group inline-flex items-center text-muted-foreground transition-all duration-300 hover:text-foreground"
              >
                <span className="font-oleo text-[16px] text-brand tracking-normal normal-case transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(253,5,23,0.8)] ml-1">
                  Kumegawa
                </span>
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-end">
            <p className="hidden lg:block">Zona Industrial Norte, Joinville / SC</p>
          </div>

        </div>
      </div>
    </footer>
  );
}