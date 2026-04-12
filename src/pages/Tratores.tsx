import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import { CheckCircle2, ShieldCheck, Headset, Tractor, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const images = [
  "/trator-verde-novo.jpg",
  "/trator-john-deere-novo.png"
];

const Tratores = () => {
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
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out brightness-105 contrast-[1.05] saturate-100 ${
                idx === currentIdx ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
              alt={`Trator agrícola de alta performance ${idx + 1}`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/20 to-background z-20 pointer-events-none hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-20 pointer-events-none lg:hidden" />
          <div className="absolute inset-0 bg-black/5 z-10 pointer-events-none" />
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-start px-8 py-12 lg:px-16 lg:py-16 xl:px-24 xl:py-20 z-30 bg-background relative overflow-y-auto">
          <div className="max-w-2xl w-full mx-auto space-y-10">
            {/* Header Text */}
            <div className="space-y-4 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-xs tracking-wider uppercase mb-2">
                <Sparkles className="w-4 h-4" /> Agronegócio Zafir
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-cinzel text-foreground leading-[1.1]">
                A força motriz da <span className="text-primary italic">sua safra</span>.
              </h1>
              <p className="text-xl md:text-2xl text-foreground/80 font-body font-light">
                Agilize o campo com tecnologia de ponta.
              </p>
            </div>

            <div className="space-y-6 text-foreground/70 font-body text-base lg:text-lg animate-fade-in" style={{ animationDelay: '100ms' }}>
              <p>
                O homem do campo não tem tempo a perder. A <strong className="text-foreground">Zafir Invest</strong> se posiciona no agronegócio com linhas seguras para viabilizar as máquinas pesadas que multiplicam o colheita.
              </p>
              
              <blockquote className="border-l-4 border-primary pl-6 py-2 italic font-cinzel text-lg lg:text-xl text-primary-light my-8">
                "Modernizar sua operação agrícola não é custo, é investimento que floresce. Planeje seu ciclo de melhorias de campo conosco."
              </blockquote>

              <p>
                Do pequeno produtor que precisa de um trator dinâmico ao grande latifundiário estruturando renovações de grande escala, nós oferecemos a estrutura para que o foco seja 100% na produtividade, sem preocupação administrativa.
              </p>
            </div>

            {/* Pra quem é? Section */}
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="gold-animated-border rounded-xl relative bg-[#0D0D0D] border border-border/50 p-6 space-y-4 transition-all duration-300">
                <h3 className="text-xl font-cinzel text-primary tracking-wide relative z-10">Para sua propriedade</h3>
                <ul className="space-y-3 relative z-10">
                  {[
                    "Produtores modernizando infraestrutura para a próxima janela de plantio",
                    "Acesso robusto a Tratores e Implementos essenciais e tecnológicos",
                    "Redução de custos com manutenção de equipamentos antigos",
                    "Ampliação da capacidade de semeadura e preparação de terra"
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
              <h3 className="text-2xl font-cinzel text-primary tracking-wide">Diferenciais do Agro</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col items-start gap-3 p-6 rounded-xl bg-background border border-primary transition-colors group">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Tractor className="w-6 h-6" />
                  </div>
                  <h4 className="font-cinzel text-foreground">Linhas Especializadas</h4>
                  <p className="text-sm text-foreground/60 font-body">Crédito compreensivo aos meses de receita sazonal dos produtores.</p>
                </div>
                <div className="flex flex-col items-start gap-3 p-6 rounded-xl bg-background border border-primary transition-colors group">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-cinzel text-foreground">Suporte Técnico</h4>
                  <p className="text-sm text-foreground/60 font-body">Analistas preparados para tratar de implementos e detalhes cruciais.</p>
                </div>
                <div className="flex flex-col items-start gap-3 p-6 rounded-xl bg-background border border-primary transition-colors group">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Headset className="w-6 h-6" />
                  </div>
                  <h4 className="font-cinzel text-foreground">Comunicação Direta</h4>
                  <p className="text-sm text-foreground/60 font-body">Atendimento rápido por WhatsApp garantindo sua conveniência on e off-line.</p>
                </div>
                <div className="flex flex-col items-start gap-3 p-6 rounded-xl bg-background border border-primary transition-colors group">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h4 className="font-cinzel text-foreground">Transparência Total</h4>
                  <p className="text-sm text-foreground/60 font-body">Todo centavo das taxas planejado para honrar seu fluxo de trabalho duro.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8 border-t border-border animate-fade-in space-y-6" style={{ animationDelay: '400ms' }}>
              <div className="space-y-2">
                <p className="text-lg font-body font-medium text-foreground">
                  Transforme suas próximas safras. Invista no maquinário do futuro.
                </p>
                <p className="text-sm text-foreground/60 font-body">
                  Consulte condições com especialistas em negócios do campo.
                </p>
              </div>
              
              <a href="https://wa.me/5561982293664?text=Olá.%20Gostaria%20de%20simular%20ou%20saber%20mais%20sobre%20as%20soluções%20para%20Tratores%20e%20Agro%20com%20a%20Zafir%20Invest" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center justify-center w-full px-8 py-4 text-base tracking-wide">
                FALE COM O TIME DO AGRO
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

export default Tratores;
