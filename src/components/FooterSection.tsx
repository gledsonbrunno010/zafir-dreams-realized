import logo from "@/assets/logo.png";

const footerLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Nossos Bens", href: "#bens" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "FAQ", href: "#faq" },
  { label: "Localização", href: "#localizacao" },
];

const bens = [
  { label: "Casa Própria", href: "#bens" },
  { label: "Automóveis", href: "#bens" },
  { label: "Motocicletas", href: "#bens" },
  { label: "Caminhões", href: "#bens" },
];

const FooterSection = () => {
  return (
    <footer style={{ backgroundColor: "#050505" }} className="pt-20 pb-8">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-center sm:text-left">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1.5 mb-4 justify-center sm:justify-start">
              <img src={logo} alt="Zafir Invest" className="h-20 w-20 md:h-24 md:w-24 object-contain" loading="lazy" />
              <span className="font-cinzel text-primary text-sm md:text-base tracking-[0.10em]">ZAFIR INVEST</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6">Conquiste o que você merece.</p>
            <div className="flex items-center gap-4 justify-center sm:justify-start">
              <a
                href="https://wa.me/5561982293664?text=Olá.%20Gostaria%20de%20mais%20informações%20sobre%20o%20trabalho%20da%20Zafir%20Invest"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="WhatsApp"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.685-1.408A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.37 0-4.567-.7-6.42-1.9l-.188-.124-3.1.932.87-3.174-.13-.196A9.947 9.947 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
              </a>

              <a
                href="mailto:contato@zafirinvest.com.br"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="E-mail"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-cinzel text-xs text-foreground mb-6">LINKS RÁPIDOS</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Bens */}
          <div>
            <h4 className="font-cinzel text-xs text-foreground mb-6">BENS</h4>
            <ul className="space-y-3">
              {bens.map((b) => (
                <li key={b.label}>
                  <a href={b.href} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    {b.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-cinzel text-xs text-foreground mb-6">CONTATO</h4>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li>WhatsApp: +55 (61) 98229-3664</li>

              <li>E-mail: contato@zafirinvest.com.br</li>
              <li>Seg–Sex 8h às 18h | Sáb 8h às 12h</li>
            </ul>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="gold-line w-full mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground/60 text-xs">
          <p>© 2025 Zafir Invest. Todos os direitos reservados.</p>
          <p>
            Política de Privacidade | Termos de Uso
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
