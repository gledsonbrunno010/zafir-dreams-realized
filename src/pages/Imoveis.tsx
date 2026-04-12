import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import { CheckCircle2, ShieldCheck, Headset, Building, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const images = [
  "/familia-piscina.png",
  "/casa-vicente-pires.png",
  "/casa-arniqueiras.png",
  "/sala-medio-padrao.png",
];

const Imoveis = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 2000); // 2 seconds between slides
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      {/* Main Content Area */}
      <main className="flex-grow flex flex-col lg:flex-row pt-24">
        
        {/* Left Side: Animated Image Slider */}
        <div className="w-full lg:w-1/2 relative h-[50vh] lg:h-[calc(100vh-6rem)] lg:sticky lg:top-24 overflow-hidden">
          {images.map((src, idx) => (
            <img
              key={src}
              src={src}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out brightness-125 contrast-125 saturate-110 ${
                idx === currentIdx ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
              alt={`Imóvel de alto padrão ${idx + 1}`}
            />
          ))}
          {/* Gradient Overlays to blend smoothly into the right side background */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/20 to-background z-20 pointer-events-none hidden lg:block" />
          
          {/* Mobile gradient - fade to bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-20 pointer-events-none lg:hidden" />
          
          {/* Extra dark overlay for text readability if needed on mobile */}
          <div className="absolute inset-0 bg-black/5 z-10 pointer-events-none" />
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-start px-8 py-12 lg:px-16 lg:py-16 xl:px-24 xl:py-20 z-30 bg-background relative overflow-y-auto">
          <div className="max-w-2xl w-full mx-auto space-y-10">
            {/* Header Text */}
            <div className="space-y-4 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-xs tracking-wider uppercase mb-2">
                <Sparkles className="w-4 h-4" /> Soluções Imobiliárias
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-cinzel text-foreground leading-[1.1]">
                A sua <span className="text-primary italic">casa própria</span> não é um sonho.
              </h1>
              <p className="text-xl md:text-2xl text-foreground/80 font-body font-light">
                É uma decisão que você ainda não tomou.
              </p>
            </div>

            <div className="space-y-6 text-foreground/70 font-body text-base lg:text-lg animate-fade-in" style={{ animationDelay: '100ms' }}>
              <p>
                Na <strong className="text-foreground">Zafir Invest</strong>, transformamos o desejo de ter um imóvel em um plano real, com crédito inteligente, condições sob medida e suporte do primeiro passo até a chave na sua mão.
              </p>
              
              <blockquote className="border-l-4 border-primary pl-6 py-2 italic font-cinzel text-lg lg:text-xl text-primary-light my-8">
                "Do apartamento compacto à mansão dos seus sonhos — encontramos a solução financeira certa para cada realidade."
              </blockquote>

              <p>
                Você trabalha anos, paga aluguel todo mês, assiste o dinheiro ir embora — e a sensação de que a casa própria está cada vez mais longe. Isso tem nome: <span className="text-red-400">falta de acesso ao crédito certo</span>. 
              </p>

              <p>
                Na Zafir Invest, analisamos o seu perfil e conectamos você aos melhores produtos do mercado, seja para o seu primeiro imóvel simples ou para aquela residência de alto padrão que você construiu na sua imaginação.
              </p>
            </div>

            {/* Pra quem é? Section */}
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="gold-animated-border rounded-xl relative bg-[#0D0D0D] border border-border/50 p-6 space-y-4 transition-all duration-300">
                <h3 className="text-xl font-cinzel text-primary tracking-wide relative z-10">Pra quem é?</h3>
                <ul className="space-y-3 relative z-10">
                  {[
                    "Quem nunca teve imóvel e quer sair do aluguel de uma vez por todas",
                    "Quem já tem uma casa e quer dar um upgrade para algo melhor",
                    "Quem busca um imóvel de alto padrão e precisa de crédito compatível com seu nível",
                    "Quem quer comprar em qualquer região do Brasil, sem burocracia desnecessária"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Proposta de Valor Section */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <h3 className="text-2xl font-cinzel text-primary tracking-wide">Proposta de valor</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col items-start gap-3 p-6 rounded-xl bg-background border border-primary transition-colors group">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-cinzel text-foreground">Análise Customizada</h4>
                  <p className="text-sm text-foreground/60 font-body">Análise de crédito personalizada — sem julgamento, sem letra miúda escondida.</p>
                </div>
                <div className="flex flex-col items-start gap-3 p-6 rounded-xl bg-background border border-primary transition-colors group">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Building className="w-6 h-6" />
                  </div>
                  <h4 className="font-cinzel text-foreground">Múltiplas Instituições</h4>
                  <p className="text-sm text-foreground/60 font-body">Acesso a múltiplas instituições financeiras em um único lugar.</p>
                </div>
                <div className="flex flex-col items-start gap-3 p-6 rounded-xl bg-background border border-primary transition-colors group">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Headset className="w-6 h-6" />
                  </div>
                  <h4 className="font-cinzel text-foreground">Abrangência Nacional</h4>
                  <p className="text-sm text-foreground/60 font-body">Atendimento em todo o território nacional independente da região.</p>
                </div>
                <div className="flex flex-col items-start gap-3 p-6 rounded-xl bg-background border border-primary transition-colors group">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h4 className="font-cinzel text-foreground">Para Todos</h4>
                  <p className="text-sm text-foreground/60 font-body">Do pequeno ao alto padrão: uma única empresa, soluções para todos.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8 border-t border-border animate-fade-in space-y-6" style={{ animationDelay: '400ms' }}>
              <div className="space-y-2">
                <p className="text-lg font-body font-medium text-foreground">
                  Descubra em minutos qual o melhor crédito para o seu imóvel.
                </p>
                <p className="text-sm text-foreground/60 font-body">
                  Fale com um especialista da Zafir Invest agora. Sem compromisso, com total transparência.
                </p>
              </div>
              
              <a href="https://wa.me/5561982293664?text=Olá.%20Gostaria%20de%20simular%20ou%20saber%20mais%20sobre%20as%20soluções%20para%20Imóveis%20com%20a%20Zafir%20Invest" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-base tracking-wide">
                FALAR COM UM ESPECIALISTA
              </a>
            </div>
            
          </div>
        </div>
      </main>
      
      <FooterSection />

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
    </div>
  );
};

export default Imoveis;
