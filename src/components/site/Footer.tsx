import { Instagram, Facebook, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.svg";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { WHATSAPP_URL } from "./Header";

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
              <MessageCircle className="h-4 w-4" />
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