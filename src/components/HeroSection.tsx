import { ArrowRight, Shield, Clock, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "5581973399189";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá, Dr. Benévolo! Preciso de orientação jurídica sobre negativa do meu plano de saúde."
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 container-mobile py-20 md:py-0">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-white/90">
              Especialista em Direito da Saúde
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-3xl max-sm:text-[2rem] max-sm:leading-[1.2] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in [animation-delay:0.1s]">
            Seu plano de saúde{" "}
            <span className="text-accent block max-sm:inline">negou</span> seu tratamento?
          </h1>

          {/* Subheadline */}
          <p className="text-lg max-sm:text-base text-white/80 mb-8 max-w-2xl mx-auto animate-fade-in [animation-delay:0.2s] max-sm:px-2">
            Você tem direitos. Consigo <strong className="text-white">liminares em 24 a 48 horas</strong> para garantir o tratamento que você ou seu familiar precisam com urgência.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in [animation-delay:0.3s]">
            <Button
              asChild
              size="lg"
              className="group w-full sm:w-auto bg-accent hover:bg-accent/90 text-white font-semibold text-lg max-sm:text-base px-8 max-sm:px-4 py-6 max-sm:h-14 rounded-xl shadow-glow transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Falar agora com o advogado
                <ArrowRight className="ml-2 w-5 h-5 max-sm:w-4 max-sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
            <span className="text-white/60 text-sm max-sm:text-xs">
              Atendimento rápido e sigiloso
            </span>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 max-sm:space-y-3 sm:grid-cols-3 gap-4 sm:gap-6 animate-fade-in [animation-delay:0.4s]">
            <div className="group flex items-center justify-center max-sm:justify-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 max-sm:p-3 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 cursor-default">
              <Clock className="w-6 h-6 max-sm:w-5 max-sm:h-5 text-accent flex-shrink-0 icon-transition group-hover:scale-110 group-hover:rotate-6" />
              <span className="text-white/90 text-sm max-sm:text-xs font-medium">
                Liminar em até 48h
              </span>
            </div>
            <div className="group flex items-center justify-center max-sm:justify-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 max-sm:p-3 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 cursor-default">
              <Scale className="w-6 h-6 max-sm:w-5 max-sm:h-5 text-accent flex-shrink-0 icon-transition group-hover:scale-110 group-hover:-rotate-6" />
              <span className="text-white/90 text-sm max-sm:text-xs font-medium">
                Especialista em Direito de Saúde
              </span>
            </div>
            <div className="group flex items-center justify-center max-sm:justify-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 max-sm:p-3 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 cursor-default">
              <Shield className="w-6 h-6 max-sm:w-5 max-sm:h-5 text-accent flex-shrink-0 icon-transition group-hover:scale-110 group-hover:rotate-6" />
              <span className="text-white/90 text-sm max-sm:text-xs font-medium">
                Atuação em todo Brasil
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute -bottom-[1px] left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(210 20% 98%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
