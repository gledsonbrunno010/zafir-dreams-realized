import { useScrollReveal, useCountUp } from "@/hooks/useAnimations";

const metrics = [
  { value: 1200, prefix: "+", suffix: "", label: "Famílias que conquistaram seu bem com a Zafir" },
  { value: 98, prefix: "", suffix: "%", label: "Taxa de satisfação dos nossos clientes" },
  { value: 85, prefix: "+R$ ", suffix: "M", label: "Em bens entregues nos últimos 3 anos" },
  { value: 15, prefix: "", suffix: " dias", label: "Tempo médio para aprovação do seu plano" },
];

const Stats = () => {
  const { ref, isVisible } = useScrollReveal(0.3);

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Diagonal gold line bg */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-background" />
        <div
          className="absolute top-0 right-0 w-1/2 h-full"
          style={{ backgroundColor: "#0D0D0D" }}
        />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent rotate-12"
        />
      </div>

      <div className="container relative z-10" ref={ref}>
        <p className="font-cinzel text-xs text-primary text-center mb-16">
          A CONFIANÇA DE QUEM JÁ CONQUISTOU
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {metrics.map((m, i) => (
            <CountCard key={i} metric={m} isVisible={isVisible} />
          ))}
        </div>

        <p className="text-center text-muted-foreground/60 text-xs mt-16">
          * Dados referentes ao período 2022–2025. Resultados individuais podem variar.
        </p>
      </div>
    </section>
  );
};

const CountCard = ({
  metric,
  isVisible,
}: {
  metric: { value: number; prefix: string; suffix: string; label: string };
  isVisible: boolean;
}) => {
  const count = useCountUp(metric.value, 2000, isVisible);

  return (
    <div className="text-center">
      <div className="font-numbers text-5xl md:text-6xl text-gradient-gold mb-3">
        {metric.prefix}{count}{metric.suffix}
      </div>
      <p className="text-muted-foreground text-sm">{metric.label}</p>
    </div>
  );
};

export default Stats;
