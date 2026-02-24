import { Instagram, MessageCircle, Scale, Mail, MapPin } from "lucide-react";

const WHATSAPP_NUMBER = "5581973399189";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const INSTAGRAM_LINK = "https://instagram.com/advogado.benevologalindo";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container container-mobile py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-10 text-center md:text-left">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-lg">Dr. Benévolo Galindo</p>
                <p className="text-background/60 text-sm">Advogado - OAB Regular</p>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Especialista em Direito de Saúde atuando
              na defesa dos direitos de pacientes contra negativas de planos de saúde.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <div className="space-y-3 flex flex-col items-center md:items-start">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-background/70 hover:text-accent transition-colors duration-300"
              >
                <div className="p-2 rounded-full bg-background/5 group-hover:bg-accent/20 transition-colors duration-300">
                  <MessageCircle className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12" />
                </div>
                <span className="transition-transform duration-300 group-hover:translate-x-1">(81) 97339-9189</span>
              </a>
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-background/70 hover:text-accent transition-colors duration-300"
              >
                <div className="p-2 rounded-full bg-background/5 group-hover:bg-accent/20 transition-colors duration-300">
                  <Instagram className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                </div>
                <span className="transition-transform duration-300 group-hover:translate-x-1">@advogado.benevologalindo</span>
              </a>
              <div className="flex items-center gap-3 text-background/70">
                <MapPin className="w-5 h-5" />
                <span>Atuação em todo o Brasil</span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold text-lg mb-4">Avisos Legais</h3>
            <div className="space-y-3 text-background/70 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
              <p>
                Este site tem caráter meramente informativo e não constitui oferta ou promessa de resultado.
              </p>
              <p>
                O contato via WhatsApp não estabelece relação advogado-cliente automaticamente.
              </p>
              <p>
                Cada caso é analisado individualmente conforme suas particularidades.
              </p>
            </div>
          </div>
        </div>

        {/* LGPD Notice */}
        <div className="border-t border-background/10 pt-6 mb-6">
          <div className="bg-background/5 rounded-lg p-4">
            <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Aviso de Privacidade (LGPD)
            </h4>
            <p className="text-background/70 text-sm leading-relaxed">
              Os dados pessoais fornecidos por meio de contato serão utilizados exclusivamente
              para fins de atendimento jurídico e não serão compartilhados com terceiros.
              Você pode solicitar a exclusão de seus dados a qualquer momento.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-background/60 text-sm">
          <p>
            © {new Date().getFullYear()} Dr. Benévolo Galindo - Todos os direitos reservados
          </p>
          <p>
            Este site respeita o Código de Ética e Disciplina da OAB
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
