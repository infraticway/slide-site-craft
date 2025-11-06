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
    <section className="py-24 bg-gradient-to-br from-background via-primary/5 to-accent/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(var(--accent)/0.1)_0%,_transparent_70%)]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            <Card className="border-none shadow-2xl bg-gradient-accent text-white overflow-hidden group hover:scale-105 transition-all duration-300">
              <CardContent className="pt-10 pb-10 px-8 relative">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20" />
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-sm shadow-xl">
                    <Target className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-bold">Missão</h2>
                </div>
                <p className="text-lg leading-relaxed text-white/95 relative z-10">
                  Guiar empresas globais na criação e execução de estratégias de entrada, expansão e consolidação de marca, integrando inteligência de mercado, IA e business development — gerando valor, pipeline qualificado e parcerias estratégicas de longo prazo.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-2xl bg-gradient-primary text-white overflow-hidden group hover:scale-105 transition-all duration-300">
              <CardContent className="pt-10 pb-10 px-8 relative">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20" />
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-sm shadow-xl">
                    <Eye className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-bold">Visão</h2>
                </div>
                <p className="text-lg leading-relaxed text-white/95 relative z-10">
                  Ser referência na América Latina em consultoria estratégica que conecta dados, pessoas e ecossistemas globais — impulsionando crescimento sustentável e inovação em saúde e bem-estar.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-12">
            <div className="h-1 w-20 bg-gradient-accent rounded-full mb-8 mx-auto" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Os pilares que nos sustentam</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <Card key={index} className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-accent/5 dark:from-card dark:to-accent/10">
                <CardContent className="pt-10 pb-10">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-accent flex items-center justify-center mb-6 mx-auto shadow-glow">
                    <pillar.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-4">{pillar.title}</h3>
                  <p className="text-center text-muted-foreground leading-relaxed">{pillar.description}</p>
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
