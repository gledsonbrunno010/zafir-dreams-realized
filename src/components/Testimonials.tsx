import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Comprou sua casa própria",
    text: "Nunca imaginei que conseguiria minha casa sem depender de banco. A Zafir Invest tornou isso possível em menos de 1 ano!",
    rating: 5,
  },
  {
    name: "Ana Rodrigues",
    role: "Conquistou seu carro zero",
    text: "Estava com o nome negativado e achei que nunca teria um carro novo. A equipe da Zafir me ajudou do início ao fim. Super recomendo!",
    rating: 5,
  },
  {
    name: "Marcos Oliveira",
    role: "Ampliou sua frota de caminhões",
    text: "Como caminhoneiro autônomo, precisava de um segundo caminhão. O processo foi rápido, sem burocracia e as parcelas cabem no meu orçamento.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Depoimentos</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
            Quem já <span className="text-gradient-gold">conquistou</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="glass-card rounded-2xl p-8 animate-fade-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed mb-6 italic">"{t.text}"</p>
              <div>
                <div className="font-bold">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
