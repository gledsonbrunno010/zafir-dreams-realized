import { Landmark, Clock, Lock, HelpCircle } from "lucide-react";
import RevealSection from "./RevealSection";
import TextType from "./TextType";

const painCards = [
  {
    icon: Landmark,
    quote: "Fui ao banco e o gerente nem me atendeu direito.",
    text: "Você tem renda, tem histórico, mas o banco só enxerga um número. O crédito negado chega sem aviso e sem explicação.",
  },
  {
    icon: Clock,
    quote: "Já faz anos que estou tentando comprar minha casa.",
    text: "Cada mês que passa é mais um ano longe do que você construiu na imaginação: a garagem, a sala, o quarto do seu filho.",
  },
  {
    icon: Lock,
    quote: "Não tenho entrada suficiente para financiar.",
    text: "O financiamento exige entrada alta, score alto, renda comprovada alta. É um ciclo fechado — feito para quem já tem, não para quem quer conquistar.",
  },
  {
    icon: HelpCircle,
    quote: "Já tentei de tudo e nada funcionou pra mim.",
    text: "Corretores que somem. Propostas que não fecham. Promessas que viram frustração.",
  },
];

const PainPoints = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: cards */}
          <div>
            <RevealSection>
              <h2 className="font-display text-[40px] md:text-4xl lg:text-5xl font-bold leading-[1.05] md:leading-tight mb-12 text-center lg:text-left">
                Você já passou <span className="text-gradient-gold">por isso?</span>
              </h2>
            </RevealSection>

            <div className="space-y-6">
              {painCards.map((card, i) => (
                <div key={i}>
                  {/* ========== DESKTOP & TABLET (Staggered Animation) ========== */}
                  <RevealSection delay={i * 4.5} className="hidden md:block">
                    <div className="border-l-2 border-primary/60 pl-6 py-4 text-center lg:text-left">
                      <div className="flex items-center gap-3 mb-3">
                        <card.icon className="w-5 h-5 text-primary flex-shrink-0" />
                        <div className="font-body font-medium text-foreground italic">
                          "<TextType 
                            text={card.quote}
                            typingSpeed={60}
                            initialDelay={i * 4500}
                            loop={false}
                            showCursor={true}
                            hideCursorWhileTyping={false}
                            hideCursorOnComplete={true}
                            cursorBlinkDuration={0.8}
                            startOnVisible={true}
                          />"
                        </div>
                      </div>
                      <div className="text-muted-foreground text-sm leading-relaxed min-h-[80px]">
                        <TextType 
                          text={card.text}
                          typingSpeed={30}
                          initialDelay={(i * 4500) + 1200}
                          loop={false}
                          showCursor={true}
                          hideCursorOnComplete={true}
                          cursorBlinkDuration={0.8}
                          startOnVisible={true}
                        />
                      </div>
                    </div>
                  </RevealSection>

                  {/* ========== MOBILE ONLY (Triggered On Scroll) ========== */}
                  <RevealSection delay={0.15} className="block md:hidden">
                    <div className="border-l-2 border-primary/60 pl-6 py-4 text-left">
                      <div className="flex items-center gap-3 mb-3">
                        <card.icon className="w-5 h-5 text-primary flex-shrink-0" />
                        <div className="font-body font-medium text-foreground italic">
                          "<TextType 
                            text={card.quote}
                            typingSpeed={60}
                            initialDelay={0}
                            loop={false}
                            showCursor={true}
                            hideCursorWhileTyping={false}
                            hideCursorOnComplete={true}
                            cursorBlinkDuration={0.8}
                            startOnVisible={true}
                          />"
                        </div>
                      </div>
                      <div className="text-muted-foreground text-sm leading-relaxed min-h-[100px]">
                        <TextType 
                          text={card.text}
                          typingSpeed={30}
                          initialDelay={1200}
                          loop={false}
                          showCursor={true}
                          hideCursorOnComplete={true}
                          cursorBlinkDuration={0.8}
                          startOnVisible={true}
                        />
                      </div>
                    </div>
                  </RevealSection>
                </div>
              ))}
            </div>
          </div>

          {/* Right: visual element */}
          <div className="relative hidden lg:flex items-center justify-center">
            <span className="font-numbers text-[180px] text-foreground/[0.03] leading-none select-none">
              A SOLUÇÃO
            </span>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-px h-32 bg-gradient-to-b from-transparent via-primary to-transparent rotate-12 mb-8" />
              <p className="font-cinzel text-primary text-lg">Isso acaba aqui.</p>
            </div>
          </div>
        </div>

        <RevealSection delay={0.3} className="mt-16 text-center lg:text-left">
          <div className="gold-line w-full max-w-xs mx-auto lg:mx-0 mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl">
            A Zafir Invest não é mais um produto financeiro.
            <br />
            <span className="text-foreground font-normal">
              É o atalho que faltava entre você e o que você quer.
            </span>
          </p>
        </RevealSection>
      </div>
    </section>
  );
};

export default PainPoints;
