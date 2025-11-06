import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-gradient-to-br from-accent/5 via-background to-secondary relative overflow-hidden">
      <div className="absolute inset-0 gradient-radial opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block mx-auto mb-6">
            <div className="h-1 w-20 bg-gradient-accent rounded-full mb-8 mx-auto" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-accent bg-clip-text text-transparent">
            Sobre a Melow Connect
          </h2>
          
          <Card className="border-none shadow-2xl bg-white/80 dark:bg-card/80 backdrop-blur-sm">
            <CardContent className="pt-12 pb-12 px-8">
              <p className="text-xl text-center text-foreground leading-relaxed max-w-4xl mx-auto text-balance">
                A Melow Connect é uma consultoria estratégica que conecta dados, estratégia e inovação para impulsionar a entrada e o crescimento de empresas internacionais no Brasil e na América Latina.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
