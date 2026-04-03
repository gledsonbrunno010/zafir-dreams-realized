import { useState } from "react";
import { ChevronDown } from "lucide-react";
import RevealSection from "./RevealSection";

const faqs = [
  {
    q: "Preciso ter um bom score de crédito para participar?",
    a: "Não. Nosso modelo não segue os critérios tradicionais dos bancos. Avaliamos seu perfil de forma diferente, levando em conta sua realidade e seus objetivos, não apenas um número.",
  },
  {
    q: "Quanto tempo leva até eu ter o meu bem?",
    a: "O tempo varia de acordo com o bem e com o plano escolhido. Trabalhamos ativamente para acelerar cada etapa, e nosso histórico mostra aprovações em média entre 15 e 90 dias para os primeiros contemplados.",
  },
  {
    q: "Existe algum tipo de entrada ou valor inicial?",
    a: "Sim, há um investimento inicial que varia conforme o bem e o plano. Mas nada comparado à entrada exigida por financiamentos bancários. E o melhor: é estruturado dentro das suas possibilidades.",
  },
  {
    q: "É seguro? Tenho garantias?",
    a: "Totalmente. Operamos dentro da legislação brasileira, com contratos claros, registrados e auditáveis. Você tem segurança jurídica em cada etapa.",
  },
  {
    q: "Posso escolher qualquer carro, moto ou casa?",
    a: "Sim. Dentro dos parâmetros do seu plano, você tem liberdade para escolher o bem que quiser. Nossa equipe te orienta para garantir a melhor decisão.",
  },
  {
    q: "Vocês atendem em todo o Brasil?",
    a: "Sim. Atendemos clientes em todo o território nacional. Nosso atendimento é presencial para clientes locais e remoto para os demais.",
  },
  {
    q: "O que acontece se eu não conseguir pagar uma parcela?",
    a: "Temos uma política humanizada para casos de dificuldade temporária. Nossa equipe trabalha com você para encontrar soluções antes de qualquer processo.",
  },
  {
    q: "Como funciona o processo do início ao fim?",
    a: "Você nos contacta → fazemos um diagnóstico gratuito → apresentamos as opções → você escolhe o plano → assinamos o contrato → iniciamos a execução → você conquista o bem.",
  },
  {
    q: "Qual a diferença entre vocês e um financiamento bancário?",
    a: "No banco, você paga juros altíssimos, precisa de aprovação de crédito e muitas vezes tem seu sonho negado. Com a Zafir, o caminho é diferente: sem juros abusivos, sem humilhação de crédito negado, com acompanhamento humano real.",
  },
  {
    q: "Como entro em contato para começar?",
    a: "Você pode nos chamar agora pelo WhatsApp clicando no botão abaixo, nos seguir no Instagram para tirar dúvidas pelo direct, ou nos enviar um e-mail. Nossa equipe responde em até 2 horas em dias úteis.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container max-w-3xl">
        <RevealSection className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Ainda tem <span className="text-gradient-gold">dúvidas?</span>
          </h2>
          <p className="text-muted-foreground text-lg">A gente respeita isso.</p>
        </RevealSection>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <RevealSection key={i} delay={i * 0.05}>
              <div className="border border-border hover:border-primary/20 transition-colors">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-body font-normal text-foreground pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: openIndex === i ? "300px" : "0",
                    transition: "max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  {openIndex === i && (
                    <div className="px-6 pb-6 border-t border-primary/20">
                      <p className="text-muted-foreground text-sm leading-relaxed pt-4">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
