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
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: cards */}
          <div>
            <RevealSection>
              <h2 className="font-display text-[40px] md:text-4xl lg:text-5xl font-bold leading-[1.05] md:leading-tight mb-12 text-center lg:text-left">
                Você já passou <span className="text-gradient-gold">por isso?</span>
              </h2>
            </RevealSection>

            <div className="space-y-6">
              {painCards.map((card, i) => (
                <RevealSection key={i} delay={i * 4.5}>
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
                    <div className="text-muted-foreground text-sm leading-relaxed min-h-[80px] md:min-h-0">
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
              ))}
            </div>
          </div>

          {/* Right: visual element */}
          <div className="relative hidden lg:flex flex-col items-center justify-start w-full h-full pt-4">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-xl overflow-hidden mb-12 shadow-gold-sm border border-border/40">
              <img
                src="/negotiation.png"
                alt="Consultoria de sucesso na mesa de negociação"
                className="w-full h-full object-cover"
              />
              {/* Gradient left to right */}
              <div 
                className="absolute inset-0 pointer-events-none bg-gradient-to-r from-background via-background/40 to-transparent" 
              />
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background to-transparent" />
            </div>
            
            <div className="flex flex-col items-center justify-center relative w-full max-w-md">
              <span className="font-numbers text-[120px] md:text-[160px] text-foreground/[0.03] leading-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
                A SOLUÇÃO
              </span>
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-px h-20 bg-gradient-to-b from-transparent via-primary to-transparent mb-6" />
                <p className="font-cinzel text-primary text-xl md:text-2xl font-semibold tracking-widest uppercase">Isso acaba aqui.</p>
              </div>
            </div>
          </div>
        </div>

        <RevealSection delay={0.3} className="mt-8 lg:-mt-24 relative z-10 text-center lg:text-left">
          <div className="gold-line w-full max-w-xs mx-auto lg:mx-0 mb-3" />
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
