import { ShieldCheck, Wallet, Eye, HeartHandshake, Lock, Trophy } from "lucide-react";
import RevealSection from "./RevealSection";

const items = [
  {
    icon: ShieldCheck,
    title: "SEM ANÁLISE DE CRÉDITO BANCÁRIA",
    text: "Trabalhamos com um modelo que não depende do seu score. Seu histórico passado não define seu futuro aqui.",
  },
  {
    icon: Wallet,
    title: "PARCELAS QUE CABEM NO SEU BOLSO",
    text: "Estruturamos o plano baseado na sua realidade. Não no que o banco acha que você pode pagar.",
  },
  {
    icon: Eye,
    title: "TRANSPARÊNCIA TOTAL",
    text: "Nada de letras miúdas. Nada de taxas escondidas. Você sabe exatamente o que está contratando antes de assinar qualquer coisa.",
  },
  {
    icon: HeartHandshake,
    title: "ATENDIMENTO PRÓXIMO E HUMANO",
    text: "Você fala com pessoas reais, comprometidas com o seu resultado. Seu especialista está disponível do início ao fim.",
  },
  {
    icon: Lock,
    title: "PROTEÇÃO DO SEU INVESTIMENTO",
    text: "Seu bem é protegido desde o primeiro dia. Segurança jurídica e financeira em cada etapa do processo.",
  },
  {
    icon: Trophy,
    title: "RESULTADO GARANTIDO",
    text: "Nossa missão só termina quando você tiver o bem em mãos. Não somos corretores. Somos parceiros na sua conquista.",
  },
];

const Differentials = () => {
  return (
    <section id="diferenciais" className="section-padding noise-overlay" style={{ backgroundColor: "#070707" }}>
      <div className="container relative z-10">
        <RevealSection className="text-center mb-20">
          <h2 className="font-display text-[40px] md:text-4xl lg:text-5xl font-bold">
            Por que a Zafir Invest é <span className="text-gradient-gold">diferente</span>
            <br />
            de tudo que você já viu?
          </h2>
        </RevealSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <RevealSection key={i} delay={i * 0.1}>
              <div className="glass-card p-8 h-full">
                <item.icon className="w-8 h-8 text-primary mb-6" />
                <h3 className="font-cinzel text-xs text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
