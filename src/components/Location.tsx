import { MapPin, Phone, Mail, Clock } from "lucide-react";
import RevealSection from "./RevealSection";

const Location = () => {
  return (
    <section id="localizacao" className="section-padding bg-background">
      <div className="container">
        <RevealSection className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Venha nos <span className="text-gradient-gold">visitar</span>
          </h2>
          <p className="text-muted-foreground text-lg">ou fale de onde estiver.</p>
        </RevealSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <RevealSection>
            <div className="space-y-8 text-center lg:text-left">
              <div className="flex items-start gap-4 justify-center lg:justify-start">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-body font-medium text-foreground mb-1">Endereço</p>
                  <p className="text-muted-foreground text-sm">St. M Norte QNM 34 Área especial 01 - Taguatinga, Brasília - DF, 72145-450<br/>Torre Comercial - Andar 24 • Sala 2405</p>
                </div>
              </div>
              <div className="flex items-start gap-4 justify-center lg:justify-start">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-body font-medium text-foreground mb-1">WhatsApp</p>
                  <a href="https://wa.me/5561982293664?text=Olá.%20Gostaria%20de%20mais%20informações%20sobre%20o%20trabalho%20da%20Zafir%20Invest" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground text-sm hover:text-primary transition-colors mb-1">+55 61 98229-3664</a>
                  <a href="https://wa.me/5561991922993?text=Olá.%20Gostaria%20de%20mais%20informações%20sobre%20o%20trabalho%20da%20Zafir%20Invest" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground text-sm hover:text-primary transition-colors mb-1">+55 61 99192-2993</a>
                  <a href="https://wa.me/5561994583188?text=Olá.%20Gostaria%20de%20mais%20informações%20sobre%20o%20trabalho%20da%20Zafir%20Invest" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground text-sm hover:text-primary transition-colors">+55 61 99458-3188</a>
                </div>
              </div>
              <div className="flex items-start gap-4 justify-center lg:justify-start">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-body font-medium text-foreground mb-1">E-mail</p>
                  <p className="text-muted-foreground text-sm">contato@zafirinvest.com.br</p>
                </div>
              </div>
              <div className="flex items-start gap-4 justify-center lg:justify-start">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-body font-medium text-foreground mb-1">Horário</p>
                  <p className="text-muted-foreground text-sm">Segunda a Sexta, 8h às 18h | Sábado, 8h às 12h</p>
                </div>
              </div>

              <div className="gold-line w-full my-8" />

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a
                  href="https://wa.me/5561982293664?text=Olá.%20Gostaria%20de%20mais%20informações%20sobre%20o%20trabalho%20da%20Zafir%20Invest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-primary/30 text-foreground text-sm font-medium hover:bg-primary/10 transition-colors"
                  style={{ backgroundColor: "rgba(37,211,102,0.1)", borderColor: "rgba(37,211,102,0.3)" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="hsl(142, 70%, 49%)"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.685-1.408A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.37 0-4.567-.7-6.42-1.9l-.188-.124-3.1.932.87-3.174-.13-.196A9.947 9.947 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
                  WHATSAPP
                </a>

                <a
                  href="mailto:contato@zafirinvest.com.br"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-primary/30 text-primary text-sm font-medium hover:bg-primary/10 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  E-MAIL
                </a>
              </div>
            </div>
          </RevealSection>

          {/* Map */}
          <RevealSection delay={0.2}>
            <div className="border border-primary/20 h-[400px] lg:h-full min-h-[400px]">
              <iframe
                src="https://maps.google.com/maps?q=St.%20M%20Norte%20QNM%2034%20%C3%81rea%20especial%2001%20-%20Taguatinga,%20Bras%C3%ADlia%20-%20DF,%2072145-450&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Zafir Invest"
              />
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
};

export default Location;
