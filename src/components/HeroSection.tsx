import { useParallax } from "@/hooks/useAnimations";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import BlurText from "./BlurText";

const SLIDES = [
  {
    bg: "/bg-hero-1.png",
    position: "center center",
    headline1: "Você não quer um financiamento.",
    headlineGold: "Você quer a conquista."
  },
  {
    bg: "/bg-hero-2.png",
    position: "center 70%",
    headline1: "Você merece essa grande",
    headlineGold: "Conquista"
  },
  {
    bg: "/bg-hero-3.png",
    position: "center 80%",
    headline1: "Trabalhar em um caminhão que não é seu",
    headlineGold: '"Nunca Mais"'
  },
  {
    bg: "/bg-hero-4.png",
    position: "center center",
    headline1: "No Agro, um maquinário de qualidade faz",
    headlineGold: "Toda a Diferença"
  },
  {
    bg: "/bg-hero-5.png",
    position: "center 30%",
    headline1: "Invista no Brasil, mesmo morando em outros países,",
    headlineGold: "Conquiste sua Liberdade"
  }
];

const HeroSection = () => {
  const parallaxOffset = useParallax(0.5);
  const [loaded, setLoaded] = useState(false);
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    setLoaded(true);
    
    // Transição "combinar" a cada 6 segundos
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % SLIDES.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Parallax BG - Posicionado à direita no desktop */}
      <div
        className="absolute inset-0 lg:left-auto lg:right-0 lg:w-[65%]"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        {SLIDES.map((slide, index) => (
          <img
            key={slide.bg}
            src={slide.bg}
            alt=""
            className="absolute inset-0 w-full h-[100%] lg:h-[120%] object-cover transition-opacity duration-[1500ms] ease-in-out brightness-110"
            style={{ 
              opacity: currentBg === index ? 1 : 0,
              objectPosition: slide.position
            }}
          />
        ))}
        {/* Gradiente Escuro de Transição - Esquerda para a Direita / Baixo para Cima */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t lg:bg-gradient-to-r from-background via-background/80 lg:via-background/50 to-transparent lg:to-transparent" />
        <div className="absolute inset-0 z-10 bg-black/20" /> {/* Escurecimento leve geral para contraste em partes claras das imagens */}
      </div>

      <div className="container relative z-20 pt-24 lg:pt-32 pb-20">
        <div className="max-w-4xl mx-auto lg:mx-0 text-center lg:text-left">
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
            className="font-display text-[50px] md:text-[56px] lg:text-[88px] xl:text-[100px] font-bold md:font-extrabold leading-[0.95] tracking-tight mb-8"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.7s ease-out 0.7s",
              minHeight: "130px" // Previne pulinhos enquanto a fonte carrega
            }}
          >
            <BlurText 
              key={`b1-${currentBg}`}
              text={SLIDES[currentBg].headline1}
              delay={35}
              animateBy="words"
              direction="bottom" 
              className="text-foreground"
            />
            <br />
            <BlurText 
              key={`b2-${currentBg}`}
              text={SLIDES[currentBg].headlineGold}
              delay={35}
              animateBy="words"
              direction="bottom" 
              className="block"
              segmentClassName="text-gradient-gold"
            />
          </h1>

          {/* Subtitle */}
          <div
            className="max-w-3xl mb-12"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.7s ease-out 0.9s",
            }}
          >
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed lg:leading-normal">
              Enquanto o banco te ignorava, nós criamos um caminho.
              <br />
              Sem Complicações Excessivas. Sem juros abusivos. Sem desculpas.
              <br />
              A Zafir Invest te entrega a chave do que você já merece.
            </p>
          </div>

          {/* Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 mb-16 items-center lg:items-start"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.7s ease-out 1.1s",
            }}
          >
            <a href="#contato" className="btn-primary text-center">
              QUERO CONQUISTAR MEU BEM
            </a>
            <a href="https://wa.me/5561982293664?text=Olá.%20Gostaria%20de%20mais%20informações%20sobre%20o%20trabalho%20da%20Zafir%20Invest" target="_blank" rel="noopener noreferrer" className="btn-secondary text-center">
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
