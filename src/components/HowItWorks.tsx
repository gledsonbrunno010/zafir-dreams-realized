const steps = [
  {
    number: "01",
    title: "Entre em Contato",
    description: "Fale conosco pelo WhatsApp ou formulário. Vamos entender o que você deseja conquistar.",
  },
  {
    number: "02",
    title: "Escolha Seu Plano",
    description: "Apresentamos as melhores opções para o seu perfil — parcelas que cabem no seu bolso.",
  },
  {
    number: "03",
    title: "Assine o Contrato",
    description: "Tudo transparente e seguro. Contrato claro, sem letras miúdas, sem surpresas.",
  },
  {
    number: "04",
    title: "Conquiste Seu Bem",
    description: "Receba a carta contemplada e realize o sonho da casa, carro, moto ou caminhão.",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Passo a Passo</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
            Como <span className="text-gradient-gold">funciona?</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Um processo simples e transparente em apenas 4 etapas
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-16 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative text-center animate-fade-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-gold text-primary-foreground font-display text-2xl font-bold mb-6 shadow-gold">
                {step.number}
              </div>
              <h3 className="font-display text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
