import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Sobre a Melow Connect
          </h2>
          
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-4xl mx-auto text-balance">
            A Melow Connect é uma consultoria estratégica que conecta dados, estratégia e inovação para impulsionar a entrada e o crescimento de empresas internacionais no Brasil e na América Latina.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
