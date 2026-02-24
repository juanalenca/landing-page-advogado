import { Scale, Clock, FileText, Home, Pill, CreditCard, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Scale,
    title: "Ações contra Planos de Saúde",
    description: "Processos judiciais para garantir seus direitos quando o plano recusa cobertura indevidamente",
    features: ["Análise completa do caso", "Orientação jurídica especializada", "Acompanhamento processual"],
  },
  {
    icon: Clock,
    title: "Liminares de Urgência",
    description: "Pedidos judiciais urgentes para tratamentos que não podem esperar, com resposta em 24-48 horas",
    features: ["Tramitação prioritária", "Decisão rápida", "Cumprimento imediato"],
  },
  {
    icon: Home,
    title: "Home Care e Internação",
    description: "Garantia judicial de atendimento domiciliar e internações hospitalares quando prescritos por médico",
    features: ["Cobertura integral", "Equipamentos inclusos", "Profissionais especializados"],
  },
  {
    icon: Pill,
    title: "Medicamentos de Alto Custo",
    description: "Ações para fornecimento de medicamentos oncológicos, imunobiológicos e especiais",
    features: ["Medicamentos importados", "Tratamentos inovadores", "Cobertura contínua"],
  },
  {
    icon: CreditCard,
    title: "Reembolso de Despesas",
    description: "Recuperação de valores pagos por procedimentos que deveriam ter sido cobertos pelo plano",
    features: ["Cálculo atualizado", "Correção monetária", "Juros devidos"],
  },
  {
    icon: FileText,
    title: "Revisão de Contratos",
    description: "Análise de cláusulas abusivas e reajustes indevidos em contratos de planos de saúde",
    features: ["Identificação de irregularidades", "Negociação prévia", "Ação judicial se necessário"],
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="section-spacing bg-background">
      <div className="container container-mobile">
        <div className="text-center mb-12">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Áreas de Atuação
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como posso{" "}
            <span className="text-primary">ajudar você?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Serviços jurídicos especializados para defender seu direito à saúde
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-5 sm:p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-primary/30 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <service.icon className="w-7 h-7 icon-transition icon-bounce group-hover:animate-float" />
              </div>

              <h3 className="font-bold text-foreground text-lg sm:text-xl mb-2 sm:mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
