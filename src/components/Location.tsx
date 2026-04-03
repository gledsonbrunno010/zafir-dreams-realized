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
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-body font-medium text-foreground mb-1">Endereço</p>
                  <p className="text-muted-foreground text-sm">[Insira seu endereço aqui]</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-body font-medium text-foreground mb-1">WhatsApp</p>
                  <p className="text-muted-foreground text-sm">[Insira seu número aqui]</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-body font-medium text-foreground mb-1">E-mail</p>
                  <p className="text-muted-foreground text-sm">[Insira seu e-mail aqui]</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-body font-medium text-foreground mb-1">Horário</p>
                  <p className="text-muted-foreground text-sm">Segunda a Sexta, 8h às 18h | Sábado, 8h às 12h</p>
                </div>
              </div>

              <div className="gold-line w-full my-8" />

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/5500000000000?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20as%20soluções%20da%20Zafir%20Invest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-primary/30 text-foreground text-sm font-medium hover:bg-primary/10 transition-colors"
                  style={{ backgroundColor: "rgba(37,211,102,0.1)", borderColor: "rgba(37,211,102,0.3)" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="hsl(142, 70%, 49%)"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.685-1.408A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.37 0-4.567-.7-6.42-1.9l-.188-.124-3.1.932.87-3.174-.13-.196A9.947 9.947 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
                  WHATSAPP
                </a>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-primary/30 text-foreground text-sm font-medium hover:bg-primary/10 transition-colors"
                  style={{ backgroundColor: "rgba(225,48,108,0.1)", borderColor: "rgba(225,48,108,0.3)" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="hsl(330, 70%, 54%)"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  INSTAGRAM
                </a>
                <a
                  href="mailto:contato@zafirinvest.com"
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1976540804417!2d-46.6522202!3d-23.5505199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAxLjkiUyA0NsKwMzknMDguMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
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
