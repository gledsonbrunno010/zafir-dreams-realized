import RevealSection from "./RevealSection";

const FinalCTA = () => {
  return (
    <section id="contato" className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,10,10,0.80)" }} />
      </div>

      <div className="container relative z-10 py-32">
        <div className="max-w-3xl mx-auto text-center">
          <RevealSection>
            <h2 className="font-display text-4xl md:text-5xl lg:text-[64px] font-bold leading-[1.1] mb-8">
              O próximo passo
              <br />
              <span className="text-gradient-gold">é o mais importante.</span>
            </h2>
          </RevealSection>

          <RevealSection delay={0.2}>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              Quantas vezes você ficou perto de conquistar o que queria e algo te impediu?
              A Zafir Invest existe para ser esse algo que finalmente te leva até lá.
            </p>
          </RevealSection>

          <RevealSection delay={0.3}>
            <p className="font-cinzel text-primary text-sm mb-12">
              NÃO DEIXE MAIS UM ANO PASSAR SEM AGIR.
            </p>
          </RevealSection>

          <RevealSection delay={0.4}>
            <a
              href="https://wa.me/5500000000000?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20as%20soluções%20da%20Zafir%20Invest"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block text-base py-5 px-12"
            >
              FALAR COM UM ESPECIALISTA AGORA
            </a>
            <p className="text-muted-foreground/60 text-sm mt-6">
              Diagnóstico gratuito. Sem compromisso. Sem pressão.
            </p>
          </RevealSection>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
