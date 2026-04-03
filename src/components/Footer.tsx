import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Zafir Invest" className="h-10 w-10" loading="lazy" />
            <span className="font-display text-lg font-bold text-gradient-gold">Zafir Invest</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#inicio" className="hover:text-primary transition-colors">Início</a>
            <a href="#como-funciona" className="hover:text-primary transition-colors">Como Funciona</a>
            <a href="#solucoes" className="hover:text-primary transition-colors">Soluções</a>
            <a href="#contato" className="hover:text-primary transition-colors">Contato</a>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2026 Zafir Invest. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
