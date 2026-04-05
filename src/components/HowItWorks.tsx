import RevealSection from "./RevealSection";

const steps = [
  {
    number: "01",
    title: "VOCÊ ESCOLHE O BEM",
    text: "Nos diz o que você quer conquistar. Casa, carro, moto ou caminhão — nós mapeamos a melhor estratégia pra você chegar lá.",
  },
  {
    number: "02",
    title: "NÓS ESTRUTURAMOS O PLANO",
    text: "Sem burocracia de banco. Sem análise de crédito humilhante. Criamos um plano personalizado, transparente e viável para o seu momento financeiro atual.",
  },
  {
    number: "03",
    title: "VOCÊ CONQUISTA",
    text: "Acompanhamento próximo do início ao fim. Quando a chave estiver na sua mão, nosso trabalho estará completo.",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="section-padding" style={{ backgroundColor: "#0D0D0D" }}>
      <div className="container">
        <RevealSection className="text-center mb-20">
          <h2 className="font-display text-[40px] md:text-4xl lg:text-5xl font-bold leading-[1.05] md:leading-tight mb-4">
            Simples assim.
          </h2>
          <p className="text-muted-foreground text-lg">
            Em 3 passos, você está mais perto do seu bem.
          </p>
        </RevealSection>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <RevealSection key={step.number} delay={i * 0.2}>
              {/* ====== MOBILE CARD ====== */}
              <div className="glass-card glass-card-yellow-border p-10 h-full md:hidden">
                <span className="font-numbers text-6xl text-gradient-gold block mb-6">
                  {step.number}
                </span>
                <h3 className="font-cinzel text-sm text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.text}
                </p>
              </div>

              {/* ====== DESKTOP ANIMATED CARD ====== */}
              <div className="hidden md:flex relative h-full flex-col items-center justify-center">
                <div className="gold-animated-border rounded-xl relative h-full w-full bg-[#0D0D0D] border border-border/50 p-10 transition-all duration-300">
                  <span className="font-numbers text-6xl text-gradient-gold block mb-6 relative z-10">
                    {step.number}
                  </span>
                  <h3 className="font-cinzel text-sm text-foreground mb-4 relative z-10">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                    {step.text}
                  </p>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>

        <RevealSection delay={0.4} className="text-center mt-16">
          <a href="#contato" className="btn-primary inline-block">
            QUERO COMEÇAR AGORA
          </a>
        </RevealSection>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .gold-animated-border::before,
          .gold-animated-border::after {
            content: '';
            position: absolute;
            left: -2px;
            top: -2px;
            border-radius: inherit;
            background: linear-gradient(45deg, #c9a84c, #ffd700, #ffb300, #ffd700, #c9a84c);
            background-size: 400%;
            width: calc(100% + 4px);
            height: calc(100% + 4px);
            z-index: -1;
            animation: gold-anim 8s linear infinite;
          }
          .gold-animated-border::after {
            filter: blur(16px);
            opacity: 0.6;
          }
          @keyframes gold-anim {
            0% { background-position: 0 0; }
            50% { background-position: 400% 0; }
            100% { background-position: 0 0; }
          }
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
