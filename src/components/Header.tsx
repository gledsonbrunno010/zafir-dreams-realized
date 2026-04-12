import logo from "@/assets/logo.png";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Início", href: "/#inicio" },
  { label: "Como Funciona", href: "/#como-funciona" },
  { label: "Nossos Bens", href: "/#bens" },
  { label: "Diferenciais", href: "/#diferenciais" },
  { label: "FAQ", href: "/#faq" },
];

const productLinks = [
  { label: "Imóveis", href: "/imoveis" },
  { label: "Carros", href: "/carros" },
  { label: "Caminhões", href: "/caminhoes" },
  { label: "Tratores", href: "/tratores" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-primary/20"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-24 md:h-28">
        <a href="/" className="flex items-center gap-1.5">
          <img src={logo} alt="Zafir Invest" className="h-20 w-20 md:h-24 md:w-24 object-contain" />
          <span className="font-cinzel text-primary text-sm md:text-base tracking-[0.10em] whitespace-nowrap">
            ZAFIR INVEST
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-body font-normal text-foreground hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          
          {/* Dropdown de Produtos */}
          <div 
            className="relative group"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-body font-normal text-foreground hover:text-primary transition-colors duration-300">
              Soluções <ChevronDown className="w-4 h-4" />
            </button>
            
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-0 pt-2 w-48 animate-fade-in">
                <div className="bg-background/95 backdrop-blur-xl border border-border rounded-lg shadow-xl overflow-hidden">
                  {productLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-3 text-sm font-body text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          <a href="#contato" className="btn-secondary text-xs py-2.5 px-5">
            FALAR CONOSCO
          </a>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-foreground p-2"
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-xl border-t border-border animate-fade-in">
          <nav className="container py-8 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-foreground font-body py-3 border-b border-border/50 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            
            {/* Mobile Dropdown items */}
            <div className="flex flex-col gap-2 mt-2">
              <span className="text-foreground/60 font-body text-sm font-medium uppercase tracking-wider px-2">Soluções</span>
              {productLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-foreground font-body py-2 pl-4 border-l-2 border-border/50 hover:border-primary hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href="#contato"
              onClick={() => setMobileOpen(false)}
              className="btn-primary text-center mt-4"
            >
              FALAR CONOSCO
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
