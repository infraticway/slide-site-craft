import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin } from "lucide-react";
import melowLogo from "@/assets/melow-logo.png";

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-gradient-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <img 
            src={melowLogo} 
            alt="Melow Connect" 
            className="h-24 mx-auto mb-8 drop-shadow-xl"
          />
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Vamos conversar?
          </h2>
          
          <p className="text-xl text-white/90 mb-12 text-balance">
            Entre em contato e descubra como podemos impulsionar seu crescimento na América Latina
          </p>

          <Card className="border-none shadow-2xl">
            <CardContent className="pt-8 pb-8">
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                  <Button 
                    size="lg"
                    asChild
                    className="bg-primary hover:bg-primary-light w-full md:w-auto"
                  >
                    <a href="mailto:silveira_erica@hotmail.com" className="flex items-center gap-2">
                      <Mail className="h-5 w-5" />
                      silveira_erica@hotmail.com
                    </a>
                  </Button>
                  
                  <Button 
                    size="lg"
                    variant="outline"
                    asChild
                    className="w-full md:w-auto border-2"
                  >
                    <a href="tel:+5511982012043" className="flex items-center gap-2">
                      <Phone className="h-5 w-5" />
                      +55 11 98201-2043
                    </a>
                  </Button>
                </div>

                <div className="pt-6">
                  <Button 
                    size="lg"
                    variant="outline"
                    asChild
                    className="w-full md:w-auto border-2 border-accent text-accent hover:bg-accent hover:text-white"
                  >
                    <a 
                      href="https://www.linkedin.com/in/erica-mélo-b034334"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Linkedin className="h-5 w-5" />
                      Conecte-se no LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
