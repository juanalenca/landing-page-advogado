import { GraduationCap, Briefcase, Award, MapPin } from "lucide-react";

const credentials = [
  {
    icon: Briefcase,
    title: "Especialista",
    description: "em Direito de Saúde",
  },
  {
    icon: GraduationCap,
    title: "Professor Universitário",
    description: "desde 2013",
  },
  {
    icon: Award,
    title: "Ex-Servidor",
    description: "do Tribunal de Justiça",
  },
  {
    icon: MapPin,
    title: "Atuação Nacional",
    description: "em todo o Brasil",
  },
];

const AuthoritySection = () => {
  return (
    <section className="section-spacing bg-background">
      <div className="container container-mobile">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que confiar no{" "}
            <span className="text-primary">Dr. Benévolo Galindo?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experiência, conhecimento técnico e dedicação para defender seus direitos
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {credentials.map((item, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-accent/30 text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                <item.icon className="w-7 h-7 icon-transition icon-bounce group-hover:animate-pulse" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-1">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
