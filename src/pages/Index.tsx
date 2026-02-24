import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import AuthoritySection from "@/components/AuthoritySection";
import PainPointsSection from "@/components/PainPointsSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  useEffect(() => {
    // Update page title for SEO
    document.title = "Advogado Plano de Saúde | Negativa de Tratamento | Dr. Benévolo Galindo";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Seu plano de saúde negou seu tratamento? Advogado especialista em Direito da Saúde. Liminares em 24-48h. Cirurgias, medicamentos e home care. Atendimento em todo Brasil."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Seu plano de saúde negou seu tratamento? Advogado especialista em Direito da Saúde. Liminares em 24-48h. Cirurgias, medicamentos e home care. Atendimento em todo Brasil.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <main className="min-h-screen">
      <HeroSection />
      <AuthoritySection />
      <PainPointsSection />
      <ServicesSection />
      <AboutSection />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
