import { XCircle, Stethoscope, Pill, Home, HeartPulse, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "5581973399189";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const painPoints = [
  {
    icon: Stethoscope,
    title: "Cirurgia negada",
    description: "Seu plano recusou autorização para uma cirurgia urgente ou eletiva",
  },
  {
    icon: Pill,
    title: "Medicamento de alto custo",
    description: "Negaram cobertura para medicamentos essenciais ao seu tratamento",
  },
  {
    icon: HeartPulse,
    title: "Tratamento urgente",
    description: "Precisando de quimioterapia, radioterapia ou outro tratamento sem autorização",
  },
  {
    icon: Home,
    title: "Home Care negado",
    description: "Recusa de atendimento domiciliar mesmo com prescrição médica",
  },
  {
    icon: AlertTriangle,
    title: "Exames recusados",
    description: "Negativa para exames diagnósticos importantes para seu tratamento",
  },
  {
    icon: XCircle,
    title: "Reembolso negado",
    description: "Seu plano não está reembolsando despesas médicas cobertas",
  },
];

const PainPointsSection = () => {
  return (
    <section className="section-spacing bg-muted/50">
      <div className="container container-mobile">
        <div className="text-center mb-12">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Situações que resolvemos
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Está passando por alguma{" "}
            <span className="text-primary">dessas situações?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Se o plano de saúde está negando seu direito, podemos ajudar com ação judicial urgente
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10">
          {painPoints.map((item, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-4 sm:p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-destructive/30 cursor-pointer hover:-translate-y-1"
            >
              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-destructive/10 text-destructive flex items-center justify-center group-hover:bg-destructive group-hover:text-white transition-colors duration-300">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 icon-transition icon-scale group-hover:rotate-12" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="group w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg max-sm:text-base px-8 max-sm:px-4 py-6 max-sm:h-14 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Analisar meu caso agora
            </a>
          </Button>
          <p className="text-muted-foreground text-sm mt-4">
            Análise gratuita e sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
