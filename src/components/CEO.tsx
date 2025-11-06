import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin } from "lucide-react";
import ericaPhoto from "@/assets/erica-melo.jpg";

const CEO = () => {
  return (
    <section id="ceo" className="py-24 bg-gradient-to-br from-primary/5 via-secondary to-accent/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_hsl(var(--accent)/0.15)_0%,_transparent_60%)]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="h-1 w-20 bg-gradient-primary rounded-full mb-8 mx-auto" />
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">CEO & Fundadora</h2>
          
          <Card className="border-none shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
              <div className="lg:col-span-1 bg-gradient-accent p-10 flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mt-16" />
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mb-20" />
                <img 
                  src={ericaPhoto}
                  alt="Érica Mélo" 
                  className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-2xl mb-6 relative z-10"
                />
                <h3 className="text-3xl font-bold text-white mb-2 relative z-10">Érica Mélo</h3>
                <p className="text-white/95 text-lg mb-8 relative z-10">CEO & Fundadora</p>
                
                <div className="space-y-4 w-full">
                  <a 
                    href="mailto:silveira_erica@hotmail.com"
                    className="flex items-center gap-3 text-white hover:text-white/80 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="text-sm">silveira_erica@hotmail.com</span>
                  </a>
                  <a 
                    href="tel:+5511982012043"
                    className="flex items-center gap-3 text-white hover:text-white/80 transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    <span className="text-sm">+55 11 98201-2043</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/erica-mélo-b034334"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white hover:text-white/80 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="text-sm">erica-mélo-b034334</span>
                  </a>
                </div>
              </div>
              
              <CardContent className="lg:col-span-2 p-8 lg:p-12">
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Érica Mélo é uma executiva com mais de 25 anos de experiência em desenvolvimento de negócios, excelência comercial e estratégia internacional, atuando em empresas como Unither Pharmaceuticals, Allergan (AbbVie), GlaxoSmithKline, Dr. Reddys e Hypera Pharma.
                  </p>
                  
                  <p>
                    Possui trajetória consolidada na América Latina e Europa, liderando projetos de Business Development, M&A, licenciamento e entrada de produtos em novos mercados.
                  </p>
                  
                  <p>
                    MBA em Inteligência Artificial, Ciência de Dados e Big Data para Negócios. Reconhecida por formar equipes de alta performance e implementar estruturas de governança robustas.
                  </p>
                  
                  <p>
                    Atualmente, lidera a Melow Connect, apoiando empresas internacionais na definição de estratégias de entrada e crescimento no mercado latino-americano.
                  </p>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CEO;
