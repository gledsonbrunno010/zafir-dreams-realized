import { Shield, Clock, Ban, ThumbsUp } from "lucide-react";

const benefits = [
  {
    icon: Ban,
    title: "Sem Banco",
    description: "Esqueça filas, gerentes e burocracias bancárias. Aqui, o processo é direto e descomplicado.",
  },
  {
    icon: Shield,
    title: "Sem Análise de Crédito",
    description: "Nome sujo? Sem problema. Não fazemos consulta ao SPC/Serasa. Todos podem participar.",
  },
  {
    icon: Clock,
    title: "Rápido e Simples",
    description: "Processo ágil e transparente. Você entende cada etapa e sabe exatamente o que esperar.",
  },
  {
    icon: ThumbsUp,
    title: "100% Seguro",
    description: "Empresa regulamentada com contratos claros e suporte dedicado do início ao fim.",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-light/50 to-background" />
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Vantagens</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
            Por que escolher a <span className="text-gradient-gold">Zafir Invest?</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="glass-card rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 group animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <b.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
