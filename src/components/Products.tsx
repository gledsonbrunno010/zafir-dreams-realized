import { Home, Car, Bike, Truck } from "lucide-react";

const products = [
  {
    icon: Home,
    title: "Casa Própria",
    description: "Realize o sonho da casa própria com parcelas acessíveis e sem burocracia bancária.",
    highlight: "A partir de R$ 499/mês",
  },
  {
    icon: Car,
    title: "Carro Novo",
    description: "Seu carro zero ou seminovo sem entrada e sem análise de crédito.",
    highlight: "A partir de R$ 299/mês",
  },
  {
    icon: Bike,
    title: "Moto",
    description: "Conquiste sua moto para trabalho ou lazer com as melhores condições do mercado.",
    highlight: "A partir de R$ 149/mês",
  },
  {
    icon: Truck,
    title: "Caminhão",
    description: "Amplie sua frota ou comece seu negócio com caminhão próprio. Ideal para autônomos.",
    highlight: "A partir de R$ 799/mês",
  },
];

const Products = () => {
  return (
    <section id="solucoes" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-light/50 to-background" />
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Soluções</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
            O que você quer <span className="text-gradient-gold">conquistar?</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <div
              key={product.title}
              className="glass-card rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
              
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <product.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">{product.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{product.description}</p>
                <div className="text-primary font-bold text-sm">{product.highlight}</div>
                <a
                  href="#contato"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold-light transition-colors"
                >
                  Saiba mais →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
