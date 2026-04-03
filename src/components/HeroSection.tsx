import { useParallax } from "@/hooks/useAnimations";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const parallaxOffset = useParallax(0.5);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax BG */}
      <div
        className="absolute inset-0"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920"
          alt=""
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,10,10,0.72)" }} />
      </div>

      <div className="container relative z-10 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Animated gold line */}
          <div className="mb-6 overflow-hidden">
            <div
              className="h-px bg-primary"
              style={{
                width: loaded ? "120px" : "0%",
                transition: "width 1s ease-out 0.3s",
              }}
            />
          </div>

          {/* Subtitle tag */}
          <p
            className="font-cinzel text-xs text-primary mb-8"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.7s ease-out 0.5s",
            }}
          >
            ZAFIR INVEST — SOLUÇÕES FINANCEIRAS PREMIUM
          </p>

          {/* Main title */}
          <h1
            className="font-display text-[42px] md:text-[56px] lg:text-[72px] font-bold leading-[1.1] mb-8"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.7s ease-out 0.7s",
            }}
          >
            Você não quer um financiamento.
            <br />
            <span className="text-gradient-gold">Você quer a conquista.</span>
          </h1>

          {/* Subtitle */}
          <div
            className="max-w-2xl mb-12"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.7s ease-out 0.9s",
            }}
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Enquanto o banco te ignorava, nós criamos um caminho.
              <br />
              Sem aprovação de crédito. Sem juros abusivos. Sem desculpas.
              <br />
              A Zafir Invest te entrega a chave do que você já merece.
            </p>
          </div>

          {/* Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 mb-16"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.7s ease-out 1.1s",
            }}
          >
            <a href="#contato" className="btn-primary text-center">
              QUERO CONQUISTAR MEU BEM
            </a>
            <a href="https://wa.me/5500000000000?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20as%20soluções%20da%20Zafir%20Invest" target="_blank" rel="noopener noreferrer" className="btn-secondary text-center">
              FALAR COM UM ESPECIALISTA
            </a>
          </div>

          {/* Scroll indicator */}
          <div
            className="flex flex-col items-center gap-2"
            style={{
              opacity: loaded ? 1 : 0,
              transition: "opacity 0.7s ease-out 1.5s",
            }}
          >
            <span className="font-cinzel text-[10px] text-muted-foreground">DESCUBRA COMO</span>
            <ChevronDown className="w-5 h-5 text-primary animate-pulse-down" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
