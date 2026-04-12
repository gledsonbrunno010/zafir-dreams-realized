import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import { CheckCircle2, ShieldCheck, Headset, Truck, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const mediaItems = [
  { type: "image", src: "/novo-caminhao-volvo.jpg" },
  { type: "video", src: "/caminhao-video.mp4" }
];

const Caminhoes = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % mediaItems.length);
    }, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      {/* Main Content Area */}
      <main className="flex-grow flex flex-col lg:flex-row pt-24">
        
        {/* Left Side: Animated Image Slider */}
        <div className="w-full lg:w-1/2 relative h-[50vh] lg:h-[calc(100vh-6rem)] lg:sticky lg:top-24 overflow-hidden">
          {mediaItems.map((media, idx) => (
            media.type === "video" ? (
              <video
                key={media.src}
                src={media.src}
                autoPlay
                muted
                loop
                playsInline
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out brightness-125 contrast-125 saturate-110 ${
                  idx === currentIdx ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              />
            ) : (
              <img
                key={media.src}
                src={media.src}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out brightness-125 contrast-125 saturate-110 ${
                  idx === currentIdx ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
                alt={`Caminhão luxo ${idx + 1}`}
              />
            )
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
                <Sparkles className="w-4 h-4" /> Soluções para Frota Pesada
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-cinzel text-foreground leading-[1.1]">
                A potência para o seu <span className="text-primary italic">negócio crescer</span>.
              </h1>
              <p className="text-xl md:text-2xl text-foreground/80 font-body font-light">
                Frota nova. Mais fretes, mais lucro.
              </p>
            </div>

            <div className="space-y-6 text-foreground/70 font-body text-base lg:text-lg animate-fade-in" style={{ animationDelay: '100ms' }}>
              <p>
                Na <strong className="text-foreground">Zafir Invest</strong>, atuamos lado a lado com transportadores e empresas logísticas. Seu caminhão não é apenas um veículo, é seu instrumento de rentabilidade.
              </p>
              
              <blockquote className="border-l-4 border-primary pl-6 py-2 italic font-cinzel text-lg lg:text-xl text-primary-light my-8">
                "Renovar a frota é garantir segurança nas estradas e excelência para os clientes."
              </blockquote>

              <p>
                Veículos parados, desgastados ou custos insustentáveis de financiamento travam operações formidáveis. Ampliamos o seu campo de visão para alavancar ativos de valor.
              </p>

              <p>
                Obtenha cavalos mecânicos, caminhões truck, baús ou implementos com soluções financeiras e taxas justas pensadas para quem respira estradas e prazos de entrega.
              </p>
            </div>

            {/* Pra quem é? Section */}
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="gold-animated-border rounded-xl relative bg-[#0D0D0D] border border-border/50 p-6 space-y-4 transition-all duration-300">
                <h3 className="text-xl font-cinzel text-primary tracking-wide relative z-10">Para quem serve?</h3>
                <ul className="space-y-3 relative z-10">
                  {[
                    "Caminhoneiros autônomos buscando trocar ou comprar seu principal ativo",
                    "Empresários logísticos focados em renovação periódica de carretas e trucks",
                    "Transportadoras expandindo rotas e demandando maquinário pesado",
                    "Todo cliente corporativo e logístico com ambição e disciplina."
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
              <h3 className="text-2xl font-cinzel text-primary tracking-wide">Vantagens Competitivas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col items-start gap-3 p-6 rounded-xl bg-background border border-primary transition-colors group">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Truck className="w-6 h-6" />
                  </div>
                  <h4 className="font-cinzel text-foreground">Flexibilidade Absoluta</h4>
                  <p className="text-sm text-foreground/60 font-body">Condições para veículos e implementos simultaneamente, novos ou seminovos.</p>
                </div>
                <div className="flex flex-col items-start gap-3 p-6 rounded-xl bg-background border border-primary transition-colors group">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-cinzel text-foreground">Saúde do Fluxo de Caixa</h4>
                  <p className="text-sm text-foreground/60 font-body">Parcelas e montantes alinhados com o rendimento real da estrada.</p>
                </div>
                <div className="flex flex-col items-start gap-3 p-6 rounded-xl bg-background border border-primary transition-colors group">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Headset className="w-6 h-6" />
                  </div>
                  <h4 className="font-cinzel text-foreground">Rede de Parcerias</h4>
                  <p className="text-sm text-foreground/60 font-body">Apoio contínuo e conexão com grandes concessionárias ao redor do país.</p>
                </div>
                <div className="flex flex-col items-start gap-3 p-6 rounded-xl bg-background border border-primary transition-colors group">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h4 className="font-cinzel text-foreground">Credibilidade Institucional</h4>
                  <p className="text-sm text-foreground/60 font-body">Expertise voltada ao público investidor e transportador que faz o país rodar.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8 border-t border-border animate-fade-in space-y-6" style={{ animationDelay: '400ms' }}>
              <div className="space-y-2">
                <p className="text-lg font-body font-medium text-foreground">
                  Transforme suas próximas rotas. Invista no caminhão certo para a carga certa.
                </p>
                <p className="text-sm text-foreground/60 font-body">
                  Nossos consultores falam a sua língua e conhecem sua realidade.
                </p>
              </div>
              
              <a href="https://wa.me/5561982293664?text=Olá.%20Gostaria%20de%20simular%20ou%20saber%20mais%20sobre%20as%20soluções%20para%20Caminhões%20com%20a%20Zafir%20Invest" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center justify-center w-full px-8 py-4 text-base tracking-wide">
                FALE COM O TIME DE LOGÍSTICA
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

export default Caminhoes;
