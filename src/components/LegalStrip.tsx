import bacenLogo from "@/assets/bacen-logo.webp";
import RevealSection from "./RevealSection";

const LegalStrip = () => {
  return (
    <section className="py-12 md:py-16 bg-[#070707] border-y border-border">
      <div className="container">
        <RevealSection>
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src={bacenLogo}
                alt="Banco Central do Brasil"
                className="h-20 md:h-24 w-auto"
              />
            </div>

            {/* Content */}
            <div className="text-center lg:text-left">
              <h3 className="font-cinzel text-primary text-xs md:text-sm tracking-[0.15em] mb-4">
                INFORMAÇÕES LEGAIS UTILIZADAS
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Todas verificadas nas fontes oficiais:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong className="text-foreground">Lei nº 11.795/2008</strong> — Marco regulatório do sistema de soluções financeiras no Brasil
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong className="text-foreground">Art. 7º</strong> — Competências do Banco Central: autorizar, supervisionar, fiscalizar e controlar
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong className="text-foreground">Lei nº 8.078/1990</strong> — Código de Defesa do Consumidor, aplicado subsidiariamente
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong className="text-foreground">Princípio da autorização prévia</strong> — Apenas instituições credenciadas pelo BACEN podem operar
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};

export default LegalStrip;
