import { ArrowRight, Phone, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "5581973399189";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá, Dr. Benévolo! Preciso de ajuda urgente com meu plano de saúde."
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const CTASection = () => {
  return (
    <section className="section-spacing bg-hero-gradient relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-48 h-48 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container container-mobile relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl max-sm:text-[1.75rem] max-sm:leading-[1.2] sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Não deixe seu direito à saúde ser negado
          </h2>

          <p className="text-lg max-sm:text-base text-white/80 mb-8 max-w-2xl mx-auto">
            Cada minuto pode fazer diferença no seu tratamento.
            Entre em contato agora mesmo para uma <strong className="text-white">análise gratuita</strong> do seu caso.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <Button
              asChild
              size="lg"
              className="group w-full sm:w-auto bg-white text-primary hover:bg-white/90 font-bold text-lg max-sm:text-base px-8 max-sm:px-4 py-6 max-sm:h-14 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                Falar agora via WhatsApp
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80 text-sm">
            <div className="group flex items-center gap-2 cursor-default shrink-0">
              <Clock className="w-5 h-5 text-accent transition-transform duration-300 group-hover:rotate-180" />
              <span>Resposta rápida</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30" />
            <div className="group flex items-center gap-2 cursor-default shrink-0">
              <Shield className="w-5 h-5 text-accent transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12" />
              <span>Sigilo garantido</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
