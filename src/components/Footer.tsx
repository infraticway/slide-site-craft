const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient-deep-ocean text-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 gradient-radial-blue opacity-40" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <p className="text-white/90 text-lg">
            © {currentYear} Melow Connect. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
