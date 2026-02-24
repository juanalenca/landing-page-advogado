import { GraduationCap, Scale, BookOpen, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "5581973399189";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá, Dr. Benévolo! Gostaria de agendar uma consulta sobre meu caso."
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const qualifications = [
  { icon: Scale, text: "OAB Regular e Atuante" },
  { icon: GraduationCap, text: "Professor Universitário desde 2013" },
  { icon: BookOpen, text: "Especialista em Direito da Saúde" },
  { icon: Award, text: "Ex-Servidor do Tribunal de Justiça" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="section-spacing bg-muted/50">
      <div className="container container-mobile">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image placeholder - professional lawyer portrait */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl group">
              <img
                src="/advogado.jpg"
                alt="Dr. Benévolo Galindo - Especialista em Direito de Saúde"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-xl p-4 shadow-lg border border-border max-w-[200px] hidden sm:block animate-float">
              <p className="text-2xl font-bold text-primary mb-1">Especialista</p>
              <p className="text-sm text-muted-foreground">em Direito de Saúde</p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              Sobre o Advogado
            </span>
            <h2 className="text-2xl max-sm:text-3xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Quem é o{" "}
              <span className="text-primary">Dr. Benévolo Galindo?</span>
            </h2>

            <div className="space-y-4 text-muted-foreground mb-8">
              <p className="leading-relaxed">
                Como <strong className="text-foreground">Especialista em Direito de Saúde</strong>,
                dedico minha carreira a defender pacientes que têm seus direitos negados por planos de saúde.
              </p>
              <p className="leading-relaxed">
                Minha trajetória como <strong className="text-foreground">Professor Universitário desde 2013</strong> e
                <strong className="text-foreground"> Ex-Servidor do Tribunal de Justiça</strong> me proporcionou
                conhecimento técnico profundo sobre o funcionamento do sistema judiciário.
              </p>
              <p className="leading-relaxed">
                Atuo em <strong className="text-foreground">todo o território nacional</strong>,
                garantindo que pacientes de qualquer estado possam ter acesso à justiça
                quando mais precisam.
              </p>
            </div>

            {/* Qualifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-8">
              {qualifications.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-3 bg-card rounded-lg p-3 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <item.icon className="w-5 h-5 icon-transition icon-bounce group-hover:scale-110" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.text}</span>
                </div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="group w-full sm:w-auto bg-accent hover:bg-accent/90 text-white font-semibold text-lg max-sm:text-base px-8 max-sm:px-4 py-6 max-sm:h-14 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Falar com o Dr. Benévolo
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
