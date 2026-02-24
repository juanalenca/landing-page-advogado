import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5581973399189";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá, Dr. Benévolo! Preciso de ajuda com meu plano de saúde."
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const FloatingWhatsApp = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com advogado via WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-whatsapp hover:bg-whatsapp-hover transition-colors shadow-lg group"
    >
      {/* Pulse ring effect */}
      <span className="absolute inset-0 rounded-full bg-whatsapp animate-pulse-ring" />
      <span className="absolute inset-0 rounded-full bg-whatsapp animate-pulse-ring [animation-delay:0.5s]" />
      
      {/* Icon */}
      <MessageCircle className="w-8 h-8 text-white relative z-10 group-hover:scale-110 transition-transform" />
      
      {/* Tooltip on hover (desktop) */}
      <span className="absolute right-20 bg-foreground text-background text-sm font-medium px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block shadow-lg">
        Fale agora com o advogado
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
