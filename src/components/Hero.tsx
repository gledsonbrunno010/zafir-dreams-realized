import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <div className="container relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Soluções financeiras inteligentes</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Conquiste o que é{" "}
            <span className="text-gradient-gold">seu por direito</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Casa, carro, moto ou caminhão — sem banco, sem burocracia e sem aprovação de crédito. A Zafir Invest é o caminho mais rápido para realizar seus sonhos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.45s" }}>
            <a
              href="#contato"
              className="bg-gradient-gold text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity shadow-gold text-center"
            >
              Quero Conquistar Agora
            </a>
            <a
              href="#como-funciona"
              className="border border-primary/30 text-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/5 transition-colors text-center"
            >
              Como Funciona?
            </a>
          </div>

          <div className="flex items-center gap-8 mt-14 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            {[
              { value: "5.000+", label: "Clientes atendidos" },
              { value: "98%", label: "Satisfação" },
              { value: "R$200M+", label: "Em bens conquistados" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-bold text-gradient-gold font-display">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
