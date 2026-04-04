import RevealSection from "./RevealSection";

const products = [
  {
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    tag: "IMÓVEIS",
    messageAsset: "imóvel",
    title: "Sua casa. Do jeito que você imaginou.",
    text: "Não um apartamento qualquer. A casa que você prometeu pra sua família. Com estrutura, com segurança, com orgulho.",
  },
  {
    image: "/byd-seal.png",
    tag: "VEÍCULOS",
    messageAsset: "veículo",
    title: "O carro que você merece dirigir.",
    text: "Não é sobre transporte. É sobre não depender de ninguém, chegar onde quiser e sentir o que é conquistar com as próprias mãos.",
  },
  {
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800",
    tag: "MOTOS",
    messageAsset: "moto",
    title: "Liberdade com as duas rodas certas.",
    text: "Para quem quer mobilidade, agilidade e a sensação de que o caminho pertence a você.",
  },
  {
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800",
    tag: "PESADOS",
    messageAsset: "pesados",
    title: "Seu próprio negócio sobre rodas.",
    text: "Caminhões das marcas Volvo, Scania, Iveco, Mercedes-Benz e Volkswagen. Sua independência no asfalto. Seu patrimônio em movimento.",
  },
];

const ProductCards = () => {
  return (
    <section id="bens" className="section-padding bg-background">
      <div className="container">
        <RevealSection className="text-center mb-20">
          <h2 className="font-display text-[40px] md:text-4xl lg:text-5xl font-bold">
            O que você quer <span className="text-gradient-gold">conquistar?</span>
          </h2>
        </RevealSection>

        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product, i) => (
            <RevealSection key={product.tag} delay={i * 0.15}>
              <div className="group relative h-[400px] overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 cursor-pointer">
                {/* BG Image */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-background/70 group-hover:bg-background/60 transition-all duration-500" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-8">
                  <span className="font-cinzel text-[10px] text-primary mb-3">
                    {product.tag}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-md">
                    {product.text}
                  </p>
                  <a 
                    href={`https://wa.me/5561982293664?text=${encodeURIComponent(`Olá. Estive no site da Zafir Invest e gostaria de uma simulação sobre ${product.messageAsset}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-block w-fit text-xs py-3 px-6"
                  >
                    PEDIR UMA SIMULAÇÃO
                  </a>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCards;
