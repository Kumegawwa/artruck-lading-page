import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "./Header";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-glow pulse-ring hover:brightness-110 transition"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
