import { Card, CardContent } from "@/components/ui/card";
import { Handshake, Lightbulb, GraduationCap } from "lucide-react";

const Legacy = () => {
  const legacyItems = [
    {
      icon: Handshake,
      title: "Parcerias Ganha-Ganha",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Lightbulb,
      title: "Inovação com Propósito",
      gradient: "from-accent to-accent-blue"
    },
    {
      icon: GraduationCap,
      title: "Desenvolvimento de Pessoas e Conhecimento",
      gradient: "from-primary to-primary-light"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Nosso Legado para o Mundo
          </h2>
          
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-4xl mx-auto text-balance">
            Na Melow Connect, acreditamos que o verdadeiro sucesso é construído por meio de conexões significativas. Nosso legado é transformar conhecimento em impacto, tecnologia em propósito e parcerias em prosperidade compartilhada.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {legacyItems.map((item, index) => (
              <Card key={index} className="border-2 overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className={`h-2 bg-gradient-to-r ${item.gradient}`} />
                <CardContent className="pt-8 pb-8">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.gradient} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-center">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-2xl font-semibold text-primary text-balance">
              Nosso legado é construir pontes que transformam negócios e pessoas em histórias de sucesso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legacy;
