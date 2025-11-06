import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb, Star, Handshake } from "lucide-react";

const Values = () => {
  const purpose = {
    title: "Nosso Propósito",
    description: "Conectar estratégias, pessoas e tecnologia para transformar desafios em crescimento real."
  };

  const values = [
    {
      icon: Star,
      title: "Qualidade",
      description: "Traduzimos análise em precisão e decisões assertivas."
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Combinamos inteligência humana e IA para criar soluções que geram impacto."
    },
    {
      icon: Target,
      title: "Excelência",
      description: "Cada projeto é guiado por ética, consistência e visão de longo prazo."
    },
    {
      icon: Handshake,
      title: "Parcerias",
      description: "Transformamos relações em conexões duradouras e resultados sustentáveis. Abordagem ganha-ganha."
    }
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{purpose.title}</h2>
            <p className="text-2xl text-muted-foreground text-balance max-w-3xl mx-auto">
              {purpose.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-none bg-background hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mb-6 mx-auto">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4">{value.title}</h3>
                  <p className="text-center text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
