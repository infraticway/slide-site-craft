import Navigation from "@/components/Navigation";
import Mission from "@/components/Mission";
import Legacy from "@/components/Legacy";
import Values from "@/components/Values";
import Footer from "@/components/Footer";

const ValuesPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Mission />
      <Legacy />
      <Values />
      <Footer />
    </div>
  );
};

export default ValuesPage;
