import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Columns3 } from "lucide-react";

const Mission = () => {
  const pillars = [
    {
      icon: Columns3,
      title: "Conexões Globais e Locais",
      description: "Unimos o conhecimento internacional à sensibilidade local."
    },
    {
      icon: Target,
      title: "Inteligência Estratégica Integrada",
      description: "Transformamos dados e insights em vantagem competitiva."
    },
    {
      icon: Eye,
      title: "Execução com Propósito e Excelência",
      description: "Da estratégia à ação, entregamos impacto real."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            <Card className="border-2 border-accent bg-gradient-accent text-white">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                    <Target className="h-7 w-7" />
                  </div>
                  <h2 className="text-3xl font-bold">Missão</h2>
                </div>
                <p className="text-lg leading-relaxed">
                  Guiar empresas globais na criação e execução de estratégias de entrada, expansão e consolidação de marca, integrando inteligência de mercado, IA e business development — gerando valor, pipeline qualificado e parcerias estratégicas de longo prazo.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary bg-gradient-primary text-white">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                    <Eye className="h-7 w-7" />
                  </div>
                  <h2 className="text-3xl font-bold">Visão</h2>
                </div>
                <p className="text-lg leading-relaxed">
                  Ser referência na América Latina em consultoria estratégica que conecta dados, pessoas e ecossistemas globais — impulsionando crescimento sustentável e inovação em saúde e bem-estar.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Os pilares que nos sustentam</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <Card key={index} className="border-2 hover:border-accent transition-all duration-300 hover:shadow-lg">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 mx-auto">
                    <pillar.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-4">{pillar.title}</h3>
                  <p className="text-center text-muted-foreground">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
